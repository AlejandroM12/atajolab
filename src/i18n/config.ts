export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

/** Spanish is the default: `/` leads to `/es/` and x-default points to Spanish. */
export const defaultLocale: Locale = "es";

/** A value written once per language. */
export type Localized<T> = Record<Locale, T>;

/** Value for `<html lang>` and hreflang. */
export const htmlLang: Localized<string> = { es: "es-AR", en: "en" };

/** Open Graph locale. */
export const ogLocale: Localized<string> = { es: "es_AR", en: "en_US" };

/** Locale used for number and currency formatting. */
export const intlLocale: Localized<string> = { es: "es-AR", en: "en-US" };

export const localeNames: Localized<string> = { es: "Español", en: "English" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
