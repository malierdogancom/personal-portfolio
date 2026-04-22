# Personal Portfolio — malierdogan.com

My personal portfolio website, serving as an interactive CV and project showcase.

## What It Does

A single-page portfolio presenting my professional background, education, research, projects, and contact information. Supports Turkish/English language toggle. Includes a contact form backed by Firebase.

## Why It Was Built

A centralized place to share my background with recruiters, collaborators, and anyone interested in my work — cleaner and more personal than a generic LinkedIn profile.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS 4
- **Backend:** Firebase Firestore + email extension (contact form)
- **Hosting:** Firebase Hosting (`portfolio-mali-erdogan` project)

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically. PRs get a preview URL.

```bash
npm run dev    # local development
npm run build  # static export → out/
```

## Environment Variables

Firebase web config values are injected at build time via GitHub Secrets. See `CLAUDE.md` for the full list.
