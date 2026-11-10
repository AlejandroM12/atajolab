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
  for (const missing of ["/en/soluciones/", "/es/solutions/", "/en/proyectos/", "/es/projects/", "/en/contacto/", "/es/faq/", "/en/microapps/agenda-turnos/"]) {
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

test("sitemap lists both languages with alternates and skips upcoming tools", () => {
  const sitemap = readFileSync(join(outDir, "sitemap.xml"), "utf8");
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/es/</loc>"));
  assert.ok(sitemap.includes("<loc>https://atajolab.dev/en/solutions/</loc>"));
  assert.ok(sitemap.includes('hreflang="x-default"'));
  assert.ok(!sitemap.includes("agenda-turnos"), "upcoming tool in sitemap");
  assert.ok(!sitemap.includes("appointment-scheduler"), "upcoming tool in sitemap");
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
