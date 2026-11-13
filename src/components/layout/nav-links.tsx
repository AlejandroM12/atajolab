"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/types/content";
import { cn, isExternalUrl, stripTrailingSlash } from "@/lib/utils";

/**
 * Whether `href` is the current section. Anchors (`/es/#como-trabajamos`) are never "current",
 * and the home page only matches itself, not every page below it.
 */
export function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  const current = stripTrailingSlash(pathname);
  const target = stripTrailingSlash(href);
  const isHome = target.split("/").filter(Boolean).length <= 1;
  return current === target || (!isHome && current.startsWith(`${target}/`));
}

/** Desktop navigation with the current section highlighted. External items (the store) open in a new tab. */
export function NavLinks({ items, newTabHint }: { items: NavItem[]; newTabHint: string }) {
  const pathname = usePathname() ?? "/";
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        const className = cn(
          "rounded-full px-3 py-2 text-[0.92rem] font-medium whitespace-nowrap transition-colors",
          active ? "bg-brand-50 text-brand-800" : "text-ink-soft hover:bg-surface hover:text-ink",
        );
        return (
          <li key={item.href}>
            {isExternalUrl(item.href) ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(className, "inline-flex items-center gap-1")}
              >
                {item.label}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
                <span className="sr-only">{newTabHint}</span>
              </a>
            ) : (
              <Link href={item.href} aria-current={active ? "page" : undefined} className={className}>
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
