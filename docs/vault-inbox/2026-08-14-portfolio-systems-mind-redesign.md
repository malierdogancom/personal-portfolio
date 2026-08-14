---
type: source
title: "Portfolio redesign — 'Systems Mind' yönü ve iki teknik ders"
created: 2026-08-14
tags: [portfolio, ui-design, nextjs]
source: "repo: apps/personal-portfolio (branch redesign/systems-mind)"
status: seed
---

# Portfolio redesign — "Systems Mind" yönü

malierdogan.com arayüzü, `frontend-design` skill'i rehberliğinde yeniden tasarlandı. Eğitim/deneyim (`TimelineSection`) koda dokunulmadan korundu.

## Tasarım kararı (neden)
Ayırt edici kimlik "biyoinformatik" değil, **ikilik**: aynı anda araştırmacı (metabolomik, µRNA, ML, HPC, yayınlar) ve kuran mühendis (self-hosted çok-servisli altyapı, DevOps, full-stack, mobil). Bio'yu merkeze koymak reddedildi — bio, bu ikiliğin bir yüzü.

- **İmza öğe:** Hero'da SVG "sistem haritası" — düğümler gerçek kavramlar/stack; iki renk semantik: **research=teal, build=amber**. İki dünyanın buluştuğu köprü düğümler (Python, kendi sunucusu) gradient kenarlarla → "araştırmam ve mühendisliğim bağlı" mesajı.
- **Renk anlam taşır, dekor değil:** Projeler kategoriye göre teal/amber; eğitim(teal)/deneyim(amber) ortak token'larla uyumlu.
- 4-renkli aksan seçici + dark/light toggle kaldırıldı → tek imza palete bağlanınca daha cesur/tutarlı tasarım.
- Dekoratif `01/02/03` numaralandırma kaldırıldı (bölümler bir "sıra" değil); yerine anlamlı mono etiketler.
- Tipografi: serif (Fraunces) → **Bricolage Grotesque** (display) + Geist Sans (gövde) + Geist Mono (veri).

## İki teknik ders
1. **next/font/google + variable font:** `Bricolage_Grotesque` variable bir fonttur. Ona sabit `weight: [...]` dizisi vermek, dev'de `fonts.gstatic.com` alt-küme **404 → sayfa 500** hatasına yol açtı (prod build cache yüzünden kaçmıştı). Çözüm: variable fontlarda `weight` verme (Geist'lerde de vermiyoruz). Bkz. [[nextfont-variable-weight-pitfall]]
2. **SVG viewBox metni ölçeklenir:** viewBox tabanlı graf küçük ekranda etiketleri okunamaz hale getirir. Çözüm: `.sg-label { display:none }` + `@media (min-width:768px)` ile aç; mobilde soyut takımyıldızı olarak bırak.
