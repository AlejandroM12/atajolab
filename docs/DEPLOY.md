# Deploying atajolab.dev

How to publish the site on Cloudflare Pages with the `atajolab.dev` domain. **None of this has been done yet**: there is no Pages project, no credentials and no DNS change.

## What the build produces

`bun run build` runs `next build` with `output: "export"` and writes a fully static site to `out/`:

- Every page is an `index.html` (`/en/solutions/` → `out/en/solutions/index.html`), thanks to `trailingSlash: true`.
- Both languages are exported: `/es/…` and `/en/…`, each with its own slugs. A route that only exists in one language (e.g. `/es/soluciones/`) is not exported in the other.
- `/` is a small page that forwards to `/es/` in the browser (meta refresh + script). On Cloudflare Pages, `out/_redirects` also answers `/` with a `301` to `/es/`.
- Unknown URLs get `out/404.html`, a single page in both languages.
- `sitemap.xml`, `robots.txt`, icons and `og.png` are static files.
- There is no Node.js server, API, database or runtime environment variable.

`scripts/fix-export-segments.mjs` runs after the build. It works around a Next.js 16.4 issue on Windows, where prefetch files (`__next.*.txt`) are written into subfolders instead of the file names the browser requests. On Linux (Cloudflare's build image) it has nothing to fix.

## Option A: Cloudflare Pages connected to GitHub (recommended)

1. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, and pick `AlejandroM12/atajolab`.
2. Build settings:
   - **Framework preset:** None
   - **Build command:** `bun install --frozen-lockfile && bun run build`
   - **Build output directory:** `out`
   - **Environment variables (build only, not secret):** `BUN_VERSION=1.4.4` and `NODE_VERSION=22`
3. Deploy. Cloudflare gives the project a `*.pages.dev` URL to review before using the domain.

Pushes to the production branch redeploy the site; other branches get preview URLs.

## Option B: upload `out/` manually

```bash
bun run build
bunx wrangler@4 pages deploy out --project-name atajolab
```

Requires `wrangler login`. Useful for a first test without connecting the repository.

## Domain

1. In the Pages project: **Custom domains → Set up a domain → `atajolab.dev`** (and `www.atajolab.dev` if wanted).
2. If the `atajolab.dev` zone is on Cloudflare, the record is created automatically. Otherwise, create a `CNAME` to `<project>.pages.dev`; the apex domain needs the zone on Cloudflare or a provider with CNAME flattening/ALIAS.
3. **Do not touch** the existing records for the microapps (`qr.atajolab.dev`, `adhera.atajolab.dev`) or for email (`mail.atajolab.dev`, MX, SPF/DKIM). This site only links to those subdomains.
4. Redirect `www` to the apex (or the other way around) so there is a single canonical host. The site declares `https://atajolab.dev` in canonical URLs and the sitemap.

## Headers and redirects

`public/_headers` and `public/_redirects` are copied to `out/`. Cloudflare Pages uses them to:

- Cache `/_next/static/*` for a year (hashed file names).
- Add basic security headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`).
- Redirect `/` to `/es/` with a `301`.

A strict Content-Security-Policy is still pending: Next injects inline scripts (and the theme script is inline), so it needs its own design and testing.

## Before going live

- [ ] `bun run check` passes (lint, typecheck, unit tests, build, export checks, e2e).
- [ ] Review the `*.pages.dev` URL on a phone and a computer, in both languages and both themes.
- [ ] Confirm `atajolab.tools@gmail.com` is the final contact address.
- [ ] If AtajoLab QR sales are open and the price should be shown, set `price` and `currency` in `src/data/microapps.ts`.
- [ ] Add the site to Google Search Console and submit `https://atajolab.dev/sitemap.xml`.
