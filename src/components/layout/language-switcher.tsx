"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { htmlLang, localeNames, locales, type Locale, type Localized } from "@/i18n/config";
import { findAlternate } from "@/i18n/alternate";
import { catalogParams } from "@/i18n/catalog-params";
import { translateSearch } from "@/lib/catalog";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  /** Every page of the site in each language (computed on the server). */
  routes: Localized<string>[];
  /** Catalog listing URL per language, to carry the filters over. */
  catalogPaths: Localized<string>;
  homePaths: Localized<string>;
  label: string;
}

/**
 * ES / EN links that keep the current section (and the catalog filters).
 * Plain links with real hrefs: they work without JavaScript and in new tabs.
 */
export function LanguageSwitcher({ locale, routes, catalogPaths, homePaths, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? homePaths[locale];

  function onSelect(event: MouseEvent<HTMLAnchorElement>, target: Locale, href: string) {
    if (target === locale) {
      event.preventDefault();
      return;
    }
    // Carry catalog filters over, translated to the other language's parameters.
    if (pathname === catalogPaths[locale] && window.location.search) {
      event.preventDefault();
      const search = translateSearch(window.location.search, catalogParams[locale], catalogParams[target]);
      window.location.assign(href + search);
    }
  }

  return (
    <nav aria-label={label}>
      <ul className="flex items-center rounded-full border border-line bg-card p-0.5">
        {locales.map((target) => {
          const current = target === locale;
          const href = current ? pathname : findAlternate(routes, pathname, target, homePaths[target]);
          return (
            <li key={target}>
              <Link
                href={href}
                hrefLang={htmlLang[target]}
                lang={htmlLang[target]}
                aria-current={current ? "true" : undefined}
                onClick={(event) => onSelect(event, target, href)}
                prefetch={false}
                className={cn(
                  "flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold tracking-wide uppercase transition-colors",
                  current ? "bg-brand-600 text-on-brand" : "text-ink-soft hover:bg-surface hover:text-ink",
                )}
              >
                <span aria-hidden="true">{target}</span>
                <span className="sr-only">{localeNames[target]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
