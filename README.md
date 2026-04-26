# Finox 2.0 — Site Web

Site officiel de Services Financiers Finox Inc., cabinet multiservices licencié AMF Québec.

## Stack technique

- **Framework** : Next.js 16 (Turbopack) avec static export
- **Styling** : Tailwind CSS 3 + CSS Modules
- **Animations** : Framer Motion 11 + Lenis smooth scroll
- **Typography** : Playfair Display (serif) + Inter (sans) + Bebas Neue (display)
- **TypeScript** : Strict mode
- **Hosting** : Cloudflare Pages (static)

## Installation locale

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build

```bash
npm run build   # génère /out avec 15 pages statiques
```

## Déploiement Cloudflare Pages

Configuration automatique :
- **Build command** : `npm run build`
- **Build output directory** : `out`
- **Framework preset** : Next.js (Static HTML Export)
- **Node version** : 20+

Chaque push sur `main` déclenche un nouveau déploiement.

## Architecture

```
src/
├── app/                      # Routes Next.js (App Router)
│   ├── page.tsx              # Homepage (toutes sections)
│   ├── cabinet/              # /cabinet
│   ├── services/             # /services
│   ├── reseau/               # /reseau
│   ├── equipe/               # /equipe
│   ├── histoire/             # /histoire
│   ├── chronique/            # /chronique + /chronique/[slug]
│   ├── contact/              # /contact
│   ├── sitemap.ts            # Sitemap auto
│   └── robots.ts             # robots.txt
├── components/
│   ├── Nav.tsx               # Navigation sticky + mobile menu
│   ├── Footer.tsx            # Footer
│   ├── CustomCursor.tsx      # Curseur personnalisé
│   ├── SmoothScrollProvider.tsx  # Lenis wrapper
│   ├── FloatingWidget.tsx    # Widget projet (Mon Finox)
│   ├── ui/
│   │   ├── Reveal.tsx        # Animation Framer whileInView
│   │   ├── MagneticButton.tsx
│   │   ├── SplitText.tsx
│   │   └── Particles.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── StatsBar.tsx
│       ├── About.tsx
│       ├── Parcours.tsx      # Parcours de vie interactif
│       ├── Services.tsx
│       ├── Reseau.tsx        # Constellation SVG
│       ├── VsBank.tsx
│       ├── Histoire.tsx
│       ├── Equipe.tsx
│       ├── Chronique.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
└── lib/
    └── articles.ts           # Contenu des chroniques
```

## Features clés

- **Smooth scroll** (Lenis) avec easing custom
- **Curseur personnalisé** qui s'adapte au hover
- **Parcours de vie interactif** — 4 projets (maison/entreprise/famille/retraite) avec timelines dynamiques
- **Constellation réseau** — SVG animé avec tooltips
- **Widget flottant Mon Finox** — sessionStorage pour personnaliser l'UX
- **Chronique** — 3 articles statiques générés au build
- **SEO complet** — metadata, OG, sitemap, robots
- **Responsive** — mobile-first avec breakpoint 980px

## Contenu à personnaliser

- `src/lib/articles.ts` — Ajouter/modifier les articles de chronique
- `src/components/sections/Equipe.tsx` — Équipe
- `src/components/sections/Histoire.tsx` — Timeline Finox
- `src/components/sections/Parcours.tsx` — Étapes des parcours de vie
- `public/images/` — Logos et images

## License

© 2026 Services Financiers Finox Inc. Tous droits réservés.
