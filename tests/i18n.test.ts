import { test } from "node:test";
import assert from "node:assert/strict";
import { es } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { allRoutes, alternatePath, localeFromPath, microappPaths, pagePath, projectPaths } from "@/i18n/routes";
import { languageAlternates, pageMetadata } from "@/lib/metadata";
import { isIndexable } from "@/lib/microapp-labels";
import { microappSources } from "@/data/microapps";

/** "a.b.c" paths of every leaf, to compare the shape of two dictionaries. */
function leaves(value: unknown, prefix = ""): Map<string, unknown> {
  const out = new Map<string, unknown>();
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      for (const [path, leaf] of leaves(child, prefix ? `${prefix}.${key}` : key)) out.set(path, leaf);
    }
  } else {
    out.set(prefix, value);
  }
  return out;
}

test("Spanish and English dictionaries have exactly the same keys", () => {
  assert.deepEqual([...leaves(en).keys()].sort(), [...leaves(es).keys()].sort());
});

test("no dictionary text is empty, and arrays have the same length", () => {
  const esLeaves = leaves(es);
  for (const [path, value] of leaves(en)) {
    if (typeof value === "string") assert.ok(value.trim().length > 0, `en.${path}`);
    if (Array.isArray(value)) assert.equal(value.length, (esLeaves.get(path) as unknown[]).length, path);
  }
  for (const [path, value] of esLeaves) if (typeof value === "string") assert.ok(value.trim().length > 0, `es.${path}`);
});

test("dictionary functions work in both languages", () => {
  assert.equal(es.catalog.results(1, false), "herramienta para elegir");
  assert.equal(en.catalog.results(2, true), "tools match these filters");
  assert.match(es.catalog.counts(1, 4), /1 disponible.*4 en preparación/);
  assert.match(en.catalog.counts(1, 4), /1 tool is available and 4 are on the way/);
});

test("Spanish is the default locale", () => {
  assert.equal(defaultLocale, "es");
  assert.ok(isLocale("en"));
  assert.ok(!isLocale("fr"));
});

test("localized page paths", () => {
  assert.equal(pagePath("home", "es"), "/es/");
  assert.equal(pagePath("home", "en"), "/en/");
  assert.equal(pagePath("microapps", "es"), "/es/microapps/");
  assert.equal(pagePath("microapps", "en"), "/en/microapps/");
  assert.equal(pagePath("solutions", "es"), "/es/soluciones/");
  assert.equal(pagePath("solutions", "en"), "/en/solutions/");
  assert.equal(pagePath("projects", "es"), "/es/proyectos/");
  assert.equal(pagePath("projects", "en"), "/en/projects/");
  assert.equal(pagePath("contact", "es"), "/es/contacto/");
  assert.equal(pagePath("contact", "en"), "/en/contact/");
  assert.equal(pagePath("faq", "es"), "/es/preguntas-frecuentes/");
  assert.equal(pagePath("faq", "en"), "/en/faq/");
});

test("localized detail slugs", () => {
  assert.deepEqual(microappPaths("agenda-turnos"), {
    es: "/es/microapps/agenda-turnos/",
    en: "/en/microapps/appointment-scheduler/",
  });
  assert.deepEqual(projectPaths("adhera"), { es: "/es/proyectos/adhera/", en: "/en/projects/adhera/" });
});

test("the language switch maps every page to its translation and back", () => {
  for (const route of allRoutes()) {
    assert.equal(alternatePath(route.es, "en"), route.en);
    assert.equal(alternatePath(route.en, "es"), route.es);
    // Without trailing slash too (usePathname may omit it).
    assert.equal(alternatePath(route.es.replace(/\/$/, "") || "/", "en"), route.en);
  }
});

test("unknown paths switch to the other language's home", () => {
  assert.equal(alternatePath("/es/no-existe/", "en"), "/en/");
  assert.equal(alternatePath("/en/nope", "es"), "/es/");
});

test("every route is unique and starts with its language", () => {
  const all = allRoutes().flatMap((route) => locales.map((locale) => route[locale]));
  assert.equal(new Set(all).size, all.length);
  for (const route of allRoutes()) for (const locale of locales) assert.equal(localeFromPath(route[locale]), locale);
});

test("hreflang alternates list both languages and x-default (Spanish)", () => {
  assert.deepEqual(languageAlternates({ es: "/es/soluciones/", en: "/en/solutions/" }), {
    "es-AR": "https://atajolab.dev/es/soluciones/",
    en: "https://atajolab.dev/en/solutions/",
    "x-default": "https://atajolab.dev/es/soluciones/",
  });
});

test("page metadata is localized with canonical, hreflang and Open Graph locale", () => {
  const paths = { es: "/es/contacto/", en: "/en/contact/" };
  const meta = pageMetadata({ locale: "en", title: "Contact", description: "d", paths });
  assert.equal(meta.alternates?.canonical, "/en/contact/");
  assert.equal((meta.alternates?.languages as Record<string, string>)["x-default"], "https://atajolab.dev/es/contacto/");
  assert.equal((meta.openGraph as { locale: string }).locale, "en_US");
  assert.equal(meta.robots, undefined);
  const hidden = pageMetadata({ locale: "es", title: "x", description: "d", paths, noIndex: true });
  assert.deepEqual(hidden.robots, { index: false, follow: true });
});

test("only available microapps are indexable", () => {
  for (const app of microappSources) assert.equal(isIndexable(app), app.status === "AVAILABLE", app.id);
});
