"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/content";
import { cn, stripTrailingSlash } from "@/lib/utils";

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

/** Desktop navigation with the current section highlighted. */
export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname() ?? "/";
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-[0.92rem] font-medium whitespace-nowrap transition-colors",
                active ? "bg-brand-50 text-brand-800" : "text-ink-soft hover:bg-surface hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
