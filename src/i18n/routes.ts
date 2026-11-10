import { locales, type Locale, type Localized } from "./config";
import { findAlternate } from "./alternate";
import { microappSources } from "../data/microapps";
import { projectSources } from "../data/projects";

/**
 * Localized URLs. Every route exists once per language, with its own slug:
 * /es/soluciones/ ↔ /en/solutions/, /es/microapps/agenda-turnos/ ↔ /en/microapps/appointment-scheduler/.
 */

export type PageKey = "home" | "microapps" | "solutions" | "projects" | "contact" | "faq";

export const pageSegments: Record<PageKey, Localized<string>> = {
  home: { es: "", en: "" },
  microapps: { es: "microapps", en: "microapps" },
  solutions: { es: "soluciones", en: "solutions" },
  projects: { es: "proyectos", en: "projects" },
  contact: { es: "contacto", en: "contact" },
  faq: { es: "preguntas-frecuentes", en: "faq" },
};

export function pagePath(page: PageKey, locale: Locale): string {
  const segment = pageSegments[page][locale];
  return segment ? `/${locale}/${segment}/` : `/${locale}/`;
}

export function microappPath(slug: string, locale: Locale): string {
  return `${pagePath("microapps", locale)}${slug}/`;
}

export function projectPath(slug: string, locale: Locale): string {
  return `${pagePath("projects", locale)}${slug}/`;
}

/** Same page in every language. */
export function pagePaths(page: PageKey): Localized<string> {
  return { es: pagePath(page, "es"), en: pagePath(page, "en") };
}

export function microappPaths(id: string): Localized<string> {
  const source = microappSources.find((app) => app.id === id);
  if (!source) throw new Error(`Unknown microapp: ${id}`);
  return { es: microappPath(source.slug.es, "es"), en: microappPath(source.slug.en, "en") };
}

export function projectPaths(id: string): Localized<string> {
  const source = projectSources.find((project) => project.id === id);
  if (!source) throw new Error(`Unknown project: ${id}`);
  return { es: projectPath(source.slug.es, "es"), en: projectPath(source.slug.en, "en") };
}

/** Every page of the site, with its URL in each language. */
export function allRoutes(): Localized<string>[] {
  const pages: PageKey[] = ["home", "microapps", "solutions", "projects", "contact", "faq"];
  return [
    ...pages.map(pagePaths),
    ...microappSources.map((app) => microappPaths(app.id)),
    ...projectSources.map((project) => projectPaths(project.id)),
  ];
}

/**
 * The equivalent of `pathname` in another language. Unknown paths fall back to
 * that language's home, so the switcher never leads to a missing page.
 */
export function alternatePath(pathname: string, target: Locale): string {
  return findAlternate(allRoutes(), pathname, target, pagePath("home", target));
}

/** Language of a path, from its first segment. */
export function localeFromPath(pathname: string): Locale | null {
  const first = pathname.split("/")[1];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : null;
}
