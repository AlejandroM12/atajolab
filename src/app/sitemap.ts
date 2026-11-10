import type { MetadataRoute } from "next";
import { microappSources } from "@/data/microapps";
import { projectSources } from "@/data/projects";
import { locales, type Localized } from "@/i18n/config";
import { microappPaths, pagePaths, projectPaths, type PageKey } from "@/i18n/routes";
import { isIndexable } from "@/lib/microapp-labels";
import { absoluteUrl, languageAlternates } from "@/lib/metadata";

export const dynamic = "force-static";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** One entry per language, each listing its translations (hreflang) and x-default. */
function entries(paths: Localized<string>, priority: number, changeFrequency: ChangeFrequency): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: absoluteUrl(paths[locale]),
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(paths) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageKey[] = ["home", "microapps", "solutions", "projects", "faq", "contact"];
  return [
    ...pages.flatMap((page) => entries(pagePaths(page), page === "home" ? 1 : 0.8, "monthly")),
    // Upcoming tools are noindex, so they are left out of the sitemap.
    ...microappSources.filter(isIndexable).flatMap((app) => entries(microappPaths(app.id), 0.7, "monthly")),
    ...projectSources.flatMap((project) => entries(projectPaths(project.id), 0.6, "yearly")),
  ];
}
