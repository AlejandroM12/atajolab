import type { Locale } from "../config";
import { en } from "./en";
import { es, type Dictionary } from "./es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

/** Interface texts for a language. Both dictionaries are small and bundled at build time. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
