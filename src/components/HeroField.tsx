"use client";

import { useEffect, useRef } from "react";

/**
 * The site's living field. A viewport-sized canvas (cheap) whose particles
 * actually live in full-document space, so the constellation scrolls with the
 * page instead of sitting pinned. Colour runs teal -> amber across the width.
 * Respects prefers-reduced-motion (single still frame, redrawn on scroll).
 */

const TEAL = [72, 224, 200];
const AMBER = [255, 158, 87];

function mix(t: number) {
  return [
    Math.round(TEAL[0] + (AMBER[0] - TEAL[0]) * t),
    Math.round(TEAL[1] + (AMBER[1] - TEAL[1]) * t),
    Math.round(TEAL[2] + (AMBER[2] - TEAL[2]) * t),
  ];
}

interface P {
  x: number;
  y: number; // document space (0..docHeight)
  vx: number;
  vy: number;
  r: number;
}

const LINK = 132;

export default function HeroField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0; // viewport height
    let docHeight = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    const mouse = { x: -9999, y: -9999, active: false };
    let raf = 0;

    const measureDoc = () =>
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );

    const build = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      docHeight = measureDoc();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round((width * docHeight) / 16000);
      const count = Math.min(320, Math.max(70, target));
      if (particles.length !== count) {
        particles = Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * docHeight,
          vx: (Math.random() - 0.5) * 0.26,
          vy: (Math.random() - 0.5) * 0.26,
          r: Math.random() * 1.4 + 0.6,
        }));
      } else {
        for (const p of particles) {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > docHeight) p.y = Math.random() * docHeight;
        }
      }
    };

    const draw = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      ctx.clearRect(0, 0, width, height);

      if (!reduce) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = docHeight + 20;
          if (p.y > docHeight + 20) p.y = -20;

          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - (p.y - scrollY);
            if (dx * dx + dy * dy < 26000) {
              p.x += dx * 0.0009;
              p.y += dy * 0.0009;
            }
          }
        }
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const ay = a.y - scrollY;
        if (ay < -LINK || ay > height + LINK) continue;
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const by = b.y - scrollY;
          if (by < -LINK || by > height + LINK) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const [r, g, bl] = mix(((a.x + b.x) / 2) / width);
            ctx.strokeStyle = `rgba(${r},${g},${bl},${(1 - dist / LINK) * 0.5})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, ay);
            ctx.lineTo(b.x, by);
            ctx.stroke();
          }
        }
      }

      // cursor links
      if (mouse.active) {
        for (const p of particles) {
          const py = p.y - scrollY;
          if (py < -170 || py > height + 170) continue;
          const dx = mouse.x - p.x;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < 170) {
            const [r, g, bl] = mix(p.x / width);
            ctx.strokeStyle = `rgba(${r},${g},${bl},${(1 - dist / 170) * 0.7})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, py);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        const py = p.y - scrollY;
        if (py < -20 || py > height + 20) continue;
        const [r, g, bl] = mix(p.x / width);
        ctx.fillStyle = `rgba(${r},${g},${bl},0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      if (reduce) draw();
    };
    const onResize = () => {
      build();
      draw();
    };

    build();
    draw();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // content height can change (fonts, language, images) -> keep coverage
    const ro = new ResizeObserver(() => {
      const next = measureDoc();
      if (Math.abs(next - docHeight) > 40) {
        docHeight = next;
        build();
      }
    });
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
