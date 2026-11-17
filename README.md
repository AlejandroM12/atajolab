# AtajoLab

[![Site](https://img.shields.io/badge/site-atajolab.dev-0B6E4F?style=flat-square)](https://atajolab.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-1.4-FBF0DF?style=flat-square&logo=bun&logoColor=black)](https://bun.sh)

Sitio oficial de **[AtajoLab](https://atajolab.dev)**: un estudio argentino que crea **herramientas web simples** (microapps) y **software a medida** para comercios, profesionales y pymes.

> *Tu negocio puede funcionar mejor. Nosotros te ayudamos.*

Disponible en **español (es-AR)** e **inglés**, con tema **claro / oscuro / sistema**. Es un sitio 100% estático: sin backend, base de datos, autenticación ni pagos en este repositorio.

---

## Qué es AtajoLab

AtajoLab ofrece dos líneas de trabajo:

| Línea | Qué es | Ejemplo |
| --- | --- | --- |
| **Biblioteca de microapps** | Herramientas enfocadas (gratuitas, pago único o suscripción). Cada una vive en su propio subdominio; este sitio las lista y enlaza. | [AtajoLab QR](https://qr.atajolab.dev), [Agendia](https://agendia.atajolab.dev) |
| **Desarrollo a medida** | Apps web, sistemas de gestión, automatizaciones, integraciones, paneles e herramientas internas, con casos reales. | [Adhera](https://adhera.atajolab.dev) |
| **Tienda física** | Productos QR y NFC personalizados (sitio aparte). | [tienda.atajolab.dev](https://tienda.atajolab.dev) |

---

## Stack tecnológico

| Capa | Tecnología |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, `output: "export"`) |
| UI | [React 19](https://react.dev) + [Tailwind CSS 4](https://tailwindcss.com) |
| Lenguaje | [TypeScript](https://www.typescriptlang.org) (strict) |
| Iconos | [Lucide](https://lucide.dev) |
| Empaquetado | [Bun](https://bun.sh) |
| Tests unitarios | Node.js built-in test runner |
| Tests E2E | [Playwright](https://playwright.dev) |
| Deploy | Estático → [Cloudflare Pages](https://pages.cloudflare.com) (ver [`docs/DEPLOY.md`](docs/DEPLOY.md)) |

---

## Características del sitio

- **Bilingüe de verdad**: cada página tiene URL y slug propios (`/es/soluciones/` ↔ `/en/solutions/`), con `hreflang`, canonical y Open Graph localizados.
- **Catálogo de microapps** con filtros, estados (disponible / próximamente) y páginas de detalle generadas desde un único archivo de datos.
- **Casos de proyectos** y páginas de servicios / contacto / FAQ.
- **Tema claro, oscuro y sistema** sin flash al cargar (script inline + `localStorage`).
- **SEO estático**: `sitemap.xml`, `robots.txt`, 404 bilingüe, exportación completa a `out/`.

---

## Requisitos

- **Node.js** 20.9+ (22 recomendado)
- **Bun** 1.4+

## Empezar

```bash
bun install
bun dev
```

Abrí [http://localhost:3000](http://localhost:3000). La raíz redirige a `/es/`; el sitio en inglés está en `/en/`.

Para ver exactamente lo que se publica (archivos estáticos en `out/`):

```bash
bun run build
bun run preview   # sirve out/ en http://127.0.0.1:4173
```

---

## Scripts

| Script | Qué hace |
| --- | --- |
| `bun dev` | Servidor de desarrollo |
| `bun run build` | Export estático a `out/` |
| `bun run preview` | Sirve `out/` como un host estático |
| `bun run lint` | ESLint |
| `bun run typecheck` | Tipos de rutas + `tsc --noEmit` |
| `bun run test` | Tests unitarios (catálogo, routing, diccionarios, metadata) |
| `bun run test:export` | Valida el sitio exportado en `out/` |
| `bun run test:e2e` | Tests de navegador contra `out/` |
| `bun run check` | Lint + types + tests + build + export + e2e |

Para E2E, una sola vez: `bunx playwright install chromium`.

---

## Estructura del proyecto

```
src/
  app/
    [lang]/                 Rutas localizadas + layout con <html lang>
      page.tsx              Home (/es/, /en/)
      microapps/            Biblioteca y detalle de herramientas
      soluciones/ · solutions/
      proyectos/ · projects/   (+ [slug] casos)
      contacto/ · contact/
      preguntas-frecuentes/ · faq/
    (root)/                 "/" → /es/ sin servidor
    global-not-found.tsx    404 bilingüe
    sitemap.ts, robots.ts, icon.svg
  views/                    Cuerpos de página compartidos por idioma
  components/               layout, home, microapps, projects, solutions, theme, ui
  data/                     Catálogo, proyectos, servicios, FAQ (textos en ES + EN)
  i18n/                     Locales, diccionarios tipados, rutas y params del catálogo
  lib/                      Lógica pura, metadata, tipografías
  types/                    Modelos de datos
tests/                      Unitarios + chequeos del export
e2e/                        Playwright
scripts/                    Fix post-build + preview estático
docs/DEPLOY.md              Guía de deploy (Cloudflare Pages)
```

---

## Internacionalización

- Cada página existe una vez por idioma, con su propia URL y slug.
- Las rutas se generan en build con `generateStaticParams` (sin middleware).
- Textos de interfaz: `src/i18n/dictionaries/` (`es.ts` define la forma; `en.ts` debe coincidir).
- Contenido (microapps, proyectos, etc.): junto a los datos en `src/data/`.
- El selector de idioma conserva la página actual y traduce filtros del catálogo (`?categoria=finanzas` ↔ `?category=finance`).
- Canonical, `hreflang` (`es-AR`, `en`, `x-default` → español) y Open Graph localizado en cada página. El sitemap lista ambos idiomas.

## Temas

Claro, oscuro y sistema. La preferencia se guarda en `localStorage` (`atajolab-theme`) y se aplica con un script inline antes del primer paint. Los colores son variables CSS bajo `.dark` en `src/app/globals.css`.

## Marca

La “A” es un SVG inline (`src/lib/brand-mark.ts`). Versiones estáticas en `public/brand/`. Favicon: `src/app/icon.svg`. Open Graph: `public/og.png`.

## Agregar una microapp

Sumá una entrada en `src/data/microapps.ts` con textos en ambos idiomas. El catálogo, filtros, páginas, sitemap y metadata la toman solos. Reglas que validan los tests:

- Herramientas aún no publicadas: `status: "COMING_SOON"`, sin `appUrl`, `noindex`.
- No setear `price` hasta que esté confirmado y público.
- `checkout.enabled` en `false` hasta que exista un checkout real.

## Deploy

El sitio se construye para hosting estático. Detalle en [`docs/DEPLOY.md`](docs/DEPLOY.md) (Cloudflare Pages + dominio `atajolab.dev`).

---

## Enlaces

- Sitio: [atajolab.dev](https://atajolab.dev)
- Contacto: [atajolab.tools@gmail.com](mailto:atajolab.tools@gmail.com)

Hecho en Argentina.
