/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** True for absolute http(s) links. */
export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/** Host without protocol, e.g. "qr.atajolab.dev". */
export function displayHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** Removes the trailing slash so "/microapps/" and "/microapps" compare equal. */
export function stripTrailingSlash(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}
