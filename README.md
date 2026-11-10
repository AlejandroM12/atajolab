# AtajoLab

Official website of **AtajoLab**, an Argentine studio that builds microapps (small, focused web tools), process automation and custom software for businesses and professionals.

The site presents two lines of work:

- **Microapp library**: free, one-time purchase and subscription tools. Each tool runs as its own app on its own subdomain (e.g. `qr.atajolab.dev`); this site lists them and links to them.
- **Custom development**: web applications, management systems, automation, API integrations, dashboards and internal tools, with case studies.

It is a fully static site (no backend, database, authentication or payments), available in **Spanish (es-AR)** and **English**, with **light and dark** themes.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, `output: "export"`) and React 19
- TypeScript (strict)
- Tailwind CSS 4
- Lucide icons
- Node's built-in test runner for unit tests, Playwright for end-to-end tests
- [Bun](https://bun.sh) as package manager

## Requirements

- Node.js 20.9 or newer (22+ recommended)
- Bun 1.4 or newer

## Getting started

```bash
bun install
bun dev
```

Open http://localhost:3000. The root forwards to `/es/`; the English site lives under `/en/`.

To see the site exactly as it is published (static files in `out/`):

```bash
bun run build
bun run preview      # serves out/ at http://127.0.0.1:4173
```

## Scripts

| Script | What it does |
| --- | --- |
| `bun dev` | Development server |
| `bun run build` | Static export to `out/` |
| `bun run preview` | Serves `out/` like a static host (no dependencies) |
| `bun run lint` | ESLint |
| `bun run typecheck` | Generates route types and runs `tsc --noEmit` |
| `bun run test` | Unit tests: catalog logic, routing, dictionaries, metadata, data integrity |
| `bun run test:export` | Checks the exported site in `out/` (routes, hreflang, noindex, sitemap, 404) |
| `bun run test:e2e` | Browser tests against `out/` (language switch, theme, filters, navigation, 404) |
| `bun run check` | All of the above, in order |

End-to-end tests need a Chromium build for Playwright: `bunx playwright install chromium` (once).

## Project structure

```
src/
  app/
    [lang]/            Localized routes; root layout with <html lang>
      page.tsx         Home (/es/, /en/)
      microapps/       Library and tool pages (/es/microapps/…, /en/microapps/…)
      soluciones/ · solutions/
      proyectos/ · projects/       (+ [slug] case studies)
      contacto/ · contact/
      preguntas-frecuentes/ · faq/
    (root)/            "/" forwards to /es/ without a server
    global-not-found.tsx   Bilingual 404 page
    sitemap.ts, robots.ts, icon.svg, apple-icon.png
  views/               Page bodies shared by both languages
  components/          layout, home, microapps, projects, solutions, shared, theme, ui
  data/                Catalog, projects, services and FAQ — every text in both languages
  i18n/                Locales, typed dictionaries, localized routes, catalog URL params
  lib/                 Pure logic (filters, CTA rules, labels), metadata, fonts
  types/               Data models
tests/                 Unit tests (node:test) and static export checks
e2e/                   Playwright tests
scripts/               Post-build fix and static preview server
docs/DEPLOY.md         Deployment guide (Cloudflare Pages)
```

## Internationalization

- Each page exists once per language with its own URL and slug, e.g. `/es/soluciones/` ↔ `/en/solutions/`, `/es/microapps/agenda-turnos/` ↔ `/en/microapps/appointment-scheduler/`.
- Routes are generated at build time with `generateStaticParams`; there is no middleware.
- Interface texts live in `src/i18n/dictionaries/` (`es.ts` defines the shape, `en.ts` must match it). Content texts live next to the data in `src/data/`.
- The language switcher keeps the current page and translates catalog filters (`?categoria=finanzas` ↔ `?category=finance`).
- Every page declares its canonical URL, `hreflang` alternates (`es-AR`, `en`, `x-default` → Spanish) and a localized Open Graph locale. The sitemap lists both languages.

## Themes

Light, dark and system. The choice is stored in `localStorage` (`atajolab-theme`) and applied by a tiny inline script before the first paint, so there is no flash of the wrong theme. Colors are CSS variables redefined under `.dark` in `src/app/globals.css`.

## Brand assets

The "A" mark is an inline SVG (`src/lib/brand-mark.ts`, rendered by `LogoMark`). Its gradients read `--logo-*` variables from `globals.css`: deeper greens on light backgrounds, the original artwork colors on dark ones. Static versions live in `public/brand/` (horizontal logo and mark for light and dark backgrounds, square icon in SVG and 512 px PNG); the favicon is `src/app/icon.svg` and the Open Graph image is `public/og.png`.

## Adding a microapp

Add an entry to `src/data/microapps.ts` with its texts in both languages. The library, filters, tool pages, sitemap and metadata pick it up. Rules enforced by the tests:

- Tools that don't exist yet use `status: "COMING_SOON"`, have no `appUrl` and are `noindex`.
- `price` stays unset until it is confirmed and public.
- `checkout.enabled` stays `false` until a real checkout exists.

## Deployment

The site is built for static hosting. See [docs/DEPLOY.md](docs/DEPLOY.md) for Cloudflare Pages and the `atajolab.dev` domain.
