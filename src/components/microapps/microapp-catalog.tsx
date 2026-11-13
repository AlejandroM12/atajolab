"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useId, useMemo, useState } from "react";
import { Search, SearchX, X } from "lucide-react";
import type { Microapp } from "@/types/microapp";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { catalogParams } from "@/i18n/catalog-params";
import { getCategories } from "@/data/categories";
import {
  EMPTY_FILTERS,
  MAX_QUERY_LENGTH,
  filterMicroapps,
  filtersToSearch,
  hasActiveFilters,
  parseFilters,
  sortMicroapps,
  type CatalogFilters,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { MicroappCard } from "./microapp-card";

type OnChange = ((next: CatalogFilters) => void) | null;

interface CatalogProps {
  apps: Microapp[];
  locale: Locale;
  contactHref: string;
}

/**
 * Microapp library with a search box and topic chips, both synced to the URL.
 * Before JavaScript loads (and in the static HTML) the full list is shown.
 */
export function MicroappCatalog(props: CatalogProps) {
  return (
    <Suspense fallback={<CatalogView {...props} filters={EMPTY_FILTERS} onChange={null} />}>
      <CatalogWithUrl {...props} />
    </Suspense>
  );
}

function CatalogWithUrl(props: CatalogProps) {
  const config = catalogParams[props.locale];
  const searchParams = useSearchParams();
  const urlKey = searchParams.toString();
  const [filters, setFilters] = useState<CatalogFilters>(() => parseFilters(searchParams, config));
  const [lastUrlKey, setLastUrlKey] = useState(urlKey);

  // The URL can change from outside (a link with filters, back/forward):
  // adopt it unless it already matches the current filters.
  if (urlKey !== lastUrlKey) {
    setLastUrlKey(urlKey);
    const fromUrl = parseFilters(searchParams, config);
    if (filtersToSearch(fromUrl, config) !== filtersToSearch(filters, config)) setFilters(fromUrl);
  }

  function update(next: CatalogFilters) {
    setFilters(next);
    window.history.replaceState(null, "", `${window.location.pathname}${filtersToSearch(next, config)}`);
  }

  return <CatalogView {...props} filters={filters} onChange={update} />;
}

function CatalogView({
  apps,
  locale,
  contactHref,
  filters,
  onChange,
}: CatalogProps & { filters: CatalogFilters; onChange: OnChange }) {
  const t = getDictionary(locale);
  const searchId = useId();
  const disabled = onChange === null;
  const results = useMemo(() => sortMicroapps(filterMicroapps(apps, filters)), [apps, filters]);
  const active = hasActiveFilters(filters);

  // Only offer topics that exist in the catalog, so no chip is a dead end by design.
  const categoryOptions = getCategories(locale).filter((c) => apps.some((a) => a.category === c.id));

  const set = (patch: Partial<CatalogFilters>) => onChange?.({ ...filters, ...patch });

  return (
    <div>
      <form role="search" onSubmit={(event) => event.preventDefault()} className="max-w-2xl">
        <label htmlFor={searchId} className="sr-only">
          {t.catalog.searchLabel}
        </label>
        <div className="relative">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
          />
          <input
            id={searchId}
            type="search"
            inputMode="search"
            autoComplete="off"
            maxLength={MAX_QUERY_LENGTH}
            placeholder={t.catalog.searchPlaceholder}
            value={filters.query}
            disabled={disabled}
            onChange={(event) => set({ query: event.target.value })}
            className="h-12 w-full rounded-full border border-line-strong bg-card pr-12 pl-12 text-base text-ink placeholder:text-muted/80 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none disabled:bg-surface [&::-webkit-search-cancel-button]:appearance-none"
          />
          {filters.query && (
            <button
              type="button"
              onClick={() => set({ query: "" })}
              className="absolute top-1/2 right-2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink"
            >
              <X aria-hidden="true" className="size-4" />
              <span className="sr-only">{t.catalog.clearSearch}</span>
            </button>
          )}
        </div>
      </form>

      {/* On small screens the chips scroll sideways, edge to edge, instead of wrapping or overflowing the page. */}
      <fieldset className="mt-4 min-w-0">
        <legend className="sr-only">{t.catalog.category}</legend>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 py-1.5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
          <Chip
            label={t.catalog.all}
            checked={filters.category === null}
            disabled={disabled}
            onSelect={() => set({ category: null })}
          />
          {categoryOptions.map((c) => (
            <Chip
              key={c.id}
              label={c.label}
              checked={filters.category === c.id}
              disabled={disabled}
              onSelect={() => set({ category: c.id })}
            />
          ))}
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 text-sm text-muted">
        <span className="font-semibold text-ink">{results.length}</span> {t.catalog.results(results.length, active)}
      </p>

      <h2 className="sr-only">{t.catalog.toolsHeading}</h2>
      {results.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((app, index) => (
            <li key={app.id}>
              <MicroappCard app={app} locale={locale} priority={index === 0} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 flex flex-col items-center rounded-2xl border border-dashed border-line-strong bg-paper px-6 py-14 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-card text-brand-600 ring-1 ring-line">
            <SearchX aria-hidden="true" className="size-6" />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-ink">{t.catalog.emptyTitle}</h3>
          <p className="mt-2 max-w-md text-muted">
            {t.catalog.emptyBefore}{" "}
            <Link href={contactHref} className="font-semibold text-brand-700 underline-offset-2 hover:underline">
              {t.catalog.emptyLink}
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={() => onChange?.(EMPTY_FILTERS)}
            className="mt-6 inline-flex h-10 items-center rounded-full border border-line-strong bg-card px-4 text-sm font-semibold text-ink hover:border-brand-300 hover:bg-brand-50"
          >
            {t.catalog.showAll}
          </button>
        </div>
      )}
    </div>
  );
}

/** Radio input styled as a chip: native keyboard navigation and grouping. */
function Chip({
  label,
  checked,
  disabled,
  onSelect,
}: {
  label: string;
  checked: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <label className={cn("relative shrink-0", disabled ? "cursor-default" : "cursor-pointer")}>
      <input
        type="radio"
        name="category"
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
        className="peer sr-only"
      />
      <span
        className={cn(
          "inline-flex h-9 items-center rounded-full border px-3.5 text-sm font-medium whitespace-nowrap transition-colors",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-page",
          checked
            ? "border-brand-600 bg-brand-600 text-on-brand"
            : "border-line-strong bg-card text-ink-soft hover:border-brand-300 hover:bg-brand-50",
        )}
      >
        {label}
      </span>
    </label>
  );
}
