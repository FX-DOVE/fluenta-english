# Fluenta English

Spanish-first Next.js (App Router) + TypeScript + Tailwind portfolio LM# for Spanish and Japanese speakers learning English.

**Live (GitHub Pages):** https://fx-dove.github.io/fluenta-english/

**Repo:** https://github.com/FX-DOVE/fluenta-english

## Features

- Course catalog (6 courses) with lesson player, quizzes, progress, streaks, certificates
- ES default + EN / JA toggles on marketing pages
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
npm install && npm run dev
```

Open http://localhost:3000

## Production build (static)

```bash
npm run build
```

Output is written to `out/` (published from the `gh-pages` branch).

## Deploy (GitHub Pages)

Currently deployed from the **`gh-pages`** branch (legacy Pages source). Rebuild and republish the static `out/` folder to `the gh-pages branch.

An Actions workflow template lives at `deploy.workflow.yml.example`. Renaming it to `.github/workflows/deploy.yml` requires a GitHub token with the `workflow` scope.

## Routes

- `/` Landing
- `/features`
- `/courses`, `/courses/[slug]`
- `/learn/[courseSlug]/[lessonSlug]`
- `/dashboard`
- `/pricing`
- `/checkout`, `/checkout/success`
- `/certificates`
- `/about`, `/contact`
- `/login`, `/signup`
