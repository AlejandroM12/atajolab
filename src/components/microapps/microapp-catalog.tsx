"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useId, useMemo, useState, type ReactNode } from "react";
import { Search, SearchX, X } from "lucide-react";
import type { Microapp, MicroappStatus, PricingModel } from "@/types/microapp";
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
 * Microapp library with search and filters synced to the URL.
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

  // Only offer options that exist in the catalog, so no filter is a dead end by design.
  const pricingOptions = (["FREE", "ONE_TIME", "SUBSCRIPTION"] as PricingModel[]).filter((p) =>
    apps.some((a) => a.pricingModel === p),
  );
  const statusOptions = (["AVAILABLE", "COMING_SOON", "UNAVAILABLE"] as MicroappStatus[]).filter((s) =>
    apps.some((a) => a.status === s),
  );
  const categoryOptions = getCategories(locale).filter((c) => apps.some((a) => a.category === c.id));

  const set = (patch: Partial<CatalogFilters>) => onChange?.({ ...filters, ...patch });
  const countWith = (patch: Partial<CatalogFilters>) => filterMicroapps(apps, { ...filters, ...patch }).length;

  return (
    <div>
      <div className="rounded-2xl border border-line bg-card p-4 shadow-card sm:p-6">
        <form role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor={searchId} className="text-sm font-semibold text-ink">
            {t.catalog.searchLabel}
          </label>
          <div className="relative mt-2">
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
              className="h-12 w-full rounded-xl border border-line-strong bg-card pr-12 pl-12 text-base text-ink placeholder:text-muted/80 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none disabled:bg-surface [&::-webkit-search-cancel-button]:appearance-none"
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

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">
          <FilterGroup legend={t.catalog.category}>
            <Chip
              name="category"
              label={t.catalog.allFeminine}
              checked={filters.category === null}
              disabled={disabled}
              onSelect={() => set({ category: null })}
            />
            {categoryOptions.map((c) => (
              <Chip
                key={c.id}
                name="category"
                label={c.label}
                count={countWith({ category: c.id })}
                checked={filters.category === c.id}
                disabled={disabled}
                onSelect={() => set({ category: c.id })}
              />
            ))}
          </FilterGroup>

          <FilterGroup legend={t.catalog.pricing}>
            <Chip
              name="pricing"
              label={t.catalog.allFeminine}
              checked={filters.pricing === null}
              disabled={disabled}
              onSelect={() => set({ pricing: null })}
            />
            {pricingOptions.map((p) => (
              <Chip
                key={p}
                name="pricing"
                label={t.labels.pricing[p]}
                count={countWith({ pricing: p })}
                checked={filters.pricing === p}
                disabled={disabled}
                onSelect={() => set({ pricing: p })}
              />
            ))}
          </FilterGroup>

          <FilterGroup legend={t.catalog.status}>
            <Chip
              name="status"
              label={t.catalog.allMasculine}
              checked={filters.status === null}
              disabled={disabled}
              onSelect={() => set({ status: null })}
            />
            {statusOptions.map((s) => (
              <Chip
                key={s}
                name="status"
                label={t.labels.status[s]}
                count={countWith({ status: s })}
                checked={filters.status === s}
                disabled={disabled}
                onSelect={() => set({ status: s })}
              />
            ))}
          </FilterGroup>
        </div>
      </div>

      <div className="mt-8 flex min-h-9 flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-sm text-muted">
          <span className="font-semibold text-ink">{results.length}</span> {t.catalog.results(results.length, active)}
        </p>
        {active && (
          <button
            type="button"
            onClick={() => onChange?.(EMPTY_FILTERS)}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            <X aria-hidden="true" className="size-4" />
            {t.catalog.clearFilters}
          </button>
        )}
      </div>

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
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-card px-4 text-sm font-semibold text-ink hover:border-brand-300 hover:bg-brand-50"
          >
            <X aria-hidden="true" className="size-4" />
            {t.catalog.clearFilters}
          </button>
        </div>
      )}
    </div>
  );
}

function FilterGroup({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink">{legend}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

/** Radio input styled as a chip: native keyboard navigation and grouping. */
function Chip({
  name,
  label,
  count,
  checked,
  disabled,
  onSelect,
}: {
  name: string;
  label: string;
  count?: number;
  checked: boolean;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <label className={cn("relative", disabled ? "cursor-default" : "cursor-pointer")}>
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
        className="peer sr-only"
      />
      <span
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium transition-colors",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-card",
          checked
            ? "border-brand-600 bg-brand-600 text-on-brand"
            : "border-line-strong bg-card text-ink-soft hover:border-brand-300 hover:bg-brand-50",
        )}
      >
        {label}
        {count !== undefined && (
          <span className={cn("text-xs tabular-nums", checked ? "text-on-brand/75" : "text-muted")}>{count}</span>
        )}
      </span>
    </label>
  );
}
