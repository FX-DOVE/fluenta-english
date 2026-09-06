# Fluenta English

Polished Next.js (App Router) + TypeScript + Tailwind portfolio LM# for Spanish and Japanese speakers learning English.

**Live (GitHub Pages):** https://fx-dove.github.io/fluenta-english/

**Repo:** https://github.com/FX-DOVE/fluenta-english

## Features

- Course catalog (6 courses) with lesson player, quizzes, progress, streaks, certificates
- EN / ES / JA language toggle on marketing pages
- Demo auth + progress + orders in `localStorage`
- Checkout: USDT, BTC, gift card (demo flows)
- Static export for GitHub Pages (`output: 'export'`, `basePath: /fluenta-english`)

## Pricing (demo)

| Plan | Price |
|------|------|
| 2 months | $100 |
| 3 months (Most Popular) | $150 |
| 1 year | $500 |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static)

```bash
npm run build
```

Output is written to `out/` (used by GitHub Pages).

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and deploys via GitHub Pages (Actions).

## Routes

- `/` Landing
- `/features`
- `/courses`, `/courses/[slugT`
- `/learn/[courseSlug]/[lessonSlug]`
- `/dashboard`
- `/pricing`
- `/checkout`, `/checkout/success`
- `/certificates`
- `/about`, `/contact`
- `/login`, `/signup`
