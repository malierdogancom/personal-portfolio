"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function HeroSection() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    const kicker = language === 'en'
        ? 'Bioinformatics · Researcher'
        : 'Biyoinformatik · Araştırmacı';

    return (
        <section id="about" className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden border-b border-secondary">
            <div className="absolute inset-0 hero-veil pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-28">
                <div className="flex items-center gap-3 reveal" style={{ animationDelay: '0.05s' }}>
                    <span className="pulse-dot h-2.5 w-2.5 rounded-full" style={{ background: 'var(--research)' }} />
                    <span className="eyebrow">{kicker}</span>
                </div>

                <h1 className="mt-6 font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(3rem,11vw,8.5rem)]">
                    <span className="block reveal pb-[0.06em]" style={{ animationDelay: '0.12s' }}>Mehmet Ali</span>
                    <span className="block text-duo reveal pb-[0.14em]" style={{ animationDelay: '0.24s' }}>Erdoğan</span>
                </h1>

                <p className="mt-8 max-w-2xl text-xl md:text-2xl lg:text-3xl leading-snug text-foreground/80 reveal" style={{ animationDelay: '0.4s', fontFamily: 'var(--font-display)' }}>
                    {t.title} <span className="text-foreground font-medium">{t.university}</span>
                </p>
                <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed reveal" style={{ animationDelay: '0.5s' }}>
                    {t.bio}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3 reveal" style={{ animationDelay: '0.55s' }}>
                    <Link
                        href="#publications"
                        className="px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_0_0_0_rgba(72,224,200,0)] hover:shadow-[0_8px_40px_-6px_var(--research)] hover:-translate-y-0.5 transition-all"
                    >
                        {language === 'en' ? 'Read publications' : 'Yayınları oku'}
                    </Link>
                    <Link
                        href="#projects"
                        className="px-7 py-3.5 border border-foreground/20 rounded-full font-semibold hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
                    >
                        {language === 'en' ? 'See what I build' : 'Neler kurduğuma bak'}
                    </Link>
                    <a
                        href={language === 'en' ? "/CV_Mehmet_Ali_Erdogan_EN.pdf" : "/CV_Mehmet_Ali_Erdogan_TR.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3.5 text-muted-foreground font-medium hover:text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/50 transition-colors"
                    >
                        {t.cta_cv}
                    </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-sm font-mono text-muted-foreground reveal" style={{ animationDelay: '0.7s' }}>
                    <a href="https://github.com/MaliErdgn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">↗ github.com/MaliErdgn</a>
                    <a href="https://linkedin.com/in/malierdgnn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">↗ linkedin.com/in/malierdgnn</a>
                </div>
            </div>

            {/* scroll cue */}
            <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground pointer-events-none">
                <span className="h-9 w-[22px] rounded-full border border-foreground/20 flex justify-center pt-1.5">
                    <span className="h-1.5 w-1 rounded-full bg-foreground/50" />
                </span>
            </div>
        </section>
    );
}
