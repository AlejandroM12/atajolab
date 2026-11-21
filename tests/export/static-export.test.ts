// Checks the static export in out/ (run `bun run build` first).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { allRoutes, microappPaths } from "@/i18n/routes";
import { microappSources } from "@/data/microapps";
import { htmlLang, locales } from "@/i18n/config";

const outDir = join(import.meta.dirname, "..", "..", "out");
const htmlFor = (route: string) => join(outDir, route, "index.html");
const read = (route: string) => readFileSync(htmlFor(route), "utf8");

test("out/ exists (build first)", () => {
  assert.ok(existsSync(outDir), "Run `bun run build` before `bun run test:export`.");
});

test("every localized route is exported as index.html", () => {
  for (const route of allRoutes()) for (const locale of locales) assert.ok(existsSync(htmlFor(route[locale])), route[locale]);
});

test("routes of one language do not exist in the other", () => {
  for (const missing of ["/en/soluciones/", "/es/solutions/", "/en/proyectos/", "/es/projects/", "/en/contacto/", "/es/faq/", "/en/microapps/agenda-turnos/", "/en/microapps/appointment-scheduler/"]) {
    assert.ok(!existsSync(htmlFor(missing)), `${missing} should not exist`);
  }
});

test("each page declares its language, canonical and hreflang alternates", () => {
  for (const route of allRoutes()) {
    for (const locale of locales) {
      const html = read(route[locale]);
      assert.match(html, new RegExp(`<html lang="${htmlLang[locale]}"`), route[locale]);
      assert.ok(html.includes(`<link rel="canonical" href="https://atajolab.dev${route[locale]}"/>`), `canonical ${route[locale]}`);
      for (const other of locales) {
        assert.ok(
          html.includes(`hrefLang="${htmlLang[other]}" href="https://atajolab.dev${route[other]}"`),
          `hreflang ${other} on ${route[locale]}`,
        );
      }
      assert.ok(html.includes(`hrefLang="x-default" href="https://atajolab.dev${route.es}"`), `x-default ${route[locale]}`);
    }
  }
});

test("Open Graph locale matches the page language", () => {
  assert.match(read("/es/"), /property="og:locale" content="es_AR"/);
  assert.match(read("/en/"), /property="og:locale" content="en_US"/);
});

test("upcoming microapps are noindex in both languages; available ones are indexable", () => {
  for (const app of microappSources) {
    const paths = microappPaths(app.id);
    for (const locale of locales) {
      const noindex = /<meta name="robots" content="noindex/.test(read(paths[locale]));
      assert.equal(noindex, app.status !== "AVAILABLE", `${paths[locale]}`);
    }
  }
});

test("sitemap lists both languages with alternates, includes Agendia and skips upcoming tools", () => {
  const sitemap = readFileSync(join(outDir, "sitemap.xml"), "utf8");
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/es/</loc>"));
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/en/solutions/</loc>"));
  assert.ok(sitemap.includes('hreflang="x-default"'));
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/es/microapps/agendia/</loc>"), "Agendia missing from sitemap");
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/en/microapps/agendia/</loc>"), "Agendia missing from sitemap");
  assert.ok(!sitemap.includes("calculadora-costos-precios"), "upcoming tool in sitemap");
});

test("the store is linked from the home and the catalog in both languages", () => {
  const cta = { es: "Explorar la tienda", en: "Explore the store" };
  for (const locale of locales) {
    for (const route of [`/${locale}/`, `/${locale}/microapps/`]) {
      const html = read(route);
      assert.match(html, /<a href="https:\/\/tienda\.atajolab\.dev\/" target="_blank" rel="noopener noreferrer"/, route);
      assert.ok(html.includes(cta[locale]), `store CTA on ${route}`);
      assert.ok(html.includes("/images/shop/productos-qr-nfc.webp"), `store image on ${route}`);
    }
  }
  assert.ok(!read("/en/").includes("Explorar la tienda"), "Spanish CTA on the English home");
  assert.ok(existsSync(join(outDir, "images", "shop", "productos-qr-nfc.webp")));
});

test("Agendia is launched: official links, structured data and no coming-soon wording", () => {
  const official = 'href="https://agendia.atajolab.dev';
  for (const locale of locales) {
    // Everything above the list of other tools, which still shows tools that are coming soon.
    const full = read(microappPaths("agendia")[locale]);
    const page = full.slice(0, full.indexOf('id="otras"'));
    assert.ok(page.includes(`${official}"`) || page.includes(`${official}/"`), `official link ${locale}`);
    assert.ok(page.includes(`${official}/registro"`), `trial link ${locale}`);
    assert.ok(page.includes(`${official}"`), `official site link ${locale}`);
    assert.ok(page.includes(`${official}/precios"`), `pricing link ${locale}`);
    assert.match(page, /"@type":"SoftwareApplication"/, `structured data ${locale}`);
    assert.match(page, /"priceCurrency":"ARS"/, `offers ${locale}`);
    assert.doesNotMatch(page, /Próximamente|Coming soon|En desarrollo/i, `coming soon wording ${locale}`);
    assert.doesNotMatch(page, /Sin tarjeta|No card/i, `card wording ${locale}`);
  }
  assert.match(read("/es/"), /Conocer Agendia/);
  assert.match(read("/en/"), /Get to know Agendia/);
  assert.match(read("/es/"), /Probar Agendia gratis/);
  assert.match(read("/en/"), /Try Agendia for free/);
});

test("robots.txt points to the sitemap", () => {
  assert.match(readFileSync(join(outDir, "robots.txt"), "utf8"), /Sitemap: https:\/\/atajolab\.dev\/sitemap\.xml/);
});

test("the root forwards to /es/ without a server and is not indexed", () => {
  const html = readFileSync(join(outDir, "index.html"), "utf8");
  assert.match(html, /http-equiv="refresh" content="0; url=\/es\/"/);
  assert.match(html, /location\.replace\("\/es\/"/);
  assert.match(html, /<meta name="robots" content="noindex/);
  assert.match(readFileSync(join(outDir, "_redirects"), "utf8"), /^\/\s+\/es\/\s+301$/m);
});

test("a single bilingual 404 page exists", () => {
  const html = readFileSync(join(outDir, "404.html"), "utf8");
  assert.ok(html.includes("No encontramos esta página"));
  assert.ok(html.includes("We couldn&#x27;t find this page") || html.includes("We couldn't find this page"));
  assert.match(html, /<meta name="robots" content="noindex/);
});

test("the theme script runs before paint on every page", () => {
  for (const route of ["/es/", "/en/microapps/"]) assert.ok(read(route).includes('localStorage.getItem("atajolab-theme")'), route);
});

test("Cloudflare Pages config files are exported", () => {
  assert.ok(existsSync(join(outDir, "_headers")));
  assert.ok(existsSync(join(outDir, "_redirects")));
});

test("AtajoLab Presupuestos is launched: real links, own social metadata, structured data and sitemap", () => {
  const product = "https://presupuestos.atajolab.dev";
  const sitemap = readFileSync(join(outDir, "sitemap.xml"), "utf8");
  for (const locale of locales) {
    const path = microappPaths("atajolab-presupuestos")[locale];
    const full = read(path);
    const page = full.slice(0, full.indexOf('id="otras"'));
    assert.ok(page.includes(`href="${product}/crear"`), `create link ${locale}`);
    assert.ok(page.includes(`href="${product}"`), `official link ${locale}`);
    assert.match(page, /"@type":"SoftwareApplication"/, `structured data ${locale}`);
    assert.match(page, /"price":0/, `free offer ${locale}`);
    assert.doesNotMatch(page, /Próximamente|Coming soon|En desarrollo/i, `coming soon wording ${locale}`);
    const image = `https://atajolab.dev/og/presupuestos-${locale}.png`;
    assert.ok(full.includes(`<meta property="og:image" content="${image}"`), `og:image ${locale}`);
    assert.ok(full.includes(`<meta name="twitter:image" content="${image}"`), `twitter:image ${locale}`);
    assert.match(full, /<meta property="og:image:width" content="1200"/);
    assert.match(full, /<meta property="og:image:height" content="630"/);
    assert.match(full, /<meta name="twitter:card" content="summary_large_image"/);
    assert.ok(full.includes(`<link rel="canonical" href="https://atajolab.dev${path}"`), `canonical ${locale}`);
    assert.ok(sitemap.includes(`<loc>https://atajolab.dev${path}</loc>`), `sitemap ${locale}`);
    assert.ok(existsSync(join(outDir, "og", `presupuestos-${locale}.png`)), `image file ${locale}`);
    const home = read(`/${locale}/`);
    assert.ok(home.includes(`href="${product}/crear"`), `home create link ${locale}`);
  }
  assert.match(read("/es/"), /Crear un presupuesto gratis/);
  assert.match(read("/en/"), /Create a quote for free/);
  assert.match(readFileSync(join(outDir, "_redirects"), "utf8"), /generador-presupuestos\/\s+\/es\/microapps\/atajolab-presupuestos\/\s+301/);
});

test("AtajoLab QR page: sections, real links, own social metadata and FAQ structured data in both languages", () => {
  const sections = {
    es: ["Qué podés hacer", "Cómo funciona", "Un editor para hacerlo a tu manera", "Formatos para cada necesidad", "Ejemplos de lo que podés crear", "Preguntas frecuentes"],
    en: ["What you can do", "How it works", "An editor to do it your way", "Formats for every need", "Examples of what you can create", "Frequently asked questions"],
  } as const;
  for (const locale of locales) {
    const path = microappPaths("atajolab-qr")[locale];
    const full = read(path);
    const page = full.slice(0, full.indexOf('id="otras"'));
    for (const title of sections[locale]) assert.ok(page.includes(title), `${title} (${locale})`);
    assert.ok(page.includes('href="https://qr.atajolab.dev"'), `product link ${locale}`);
    assert.ok(page.includes('href="#como-funciona"'), `anchor ${locale}`);
    assert.match(page, /"@type":"FAQPage"/, `faq data ${locale}`);
    assert.doesNotMatch(page, /Próximamente|Coming soon|En desarrollo/i);
    const image = `https://atajolab.dev/og/qr-${locale}.png`;
    assert.ok(full.includes(`<meta property="og:image" content="${image}"`), `og:image ${locale}`);
    assert.ok(full.includes(`<meta name="twitter:image" content="${image}"`), `twitter:image ${locale}`);
    assert.ok(full.includes(`<link rel="canonical" href="https://atajolab.dev${path}"`), `canonical ${locale}`);
    assert.ok(existsSync(join(outDir, "og", `qr-${locale}.png`)), `image file ${locale}`);
  }
});
