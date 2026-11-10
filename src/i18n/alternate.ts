import { locales, type Locale, type Localized } from "./config";

function withSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * The equivalent of `pathname` in another language, from a list of routes
 * (each route = its URL in every language). Unknown paths fall back to `fallback`.
 * Pure and dependency-free, so client components can use it with routes passed as props.
 */
export function findAlternate(
  routes: readonly Localized<string>[],
  pathname: string,
  target: Locale,
  fallback: string,
): string {
  const current = withSlash(pathname);
  const match = routes.find((route) => locales.some((locale) => route[locale] === current));
  return match ? match[target] : fallback;
}
