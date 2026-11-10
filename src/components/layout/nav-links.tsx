"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/content";
import { cn, stripTrailingSlash } from "@/lib/utils";

export function isActive(pathname: string, href: string) {
  const current = stripTrailingSlash(pathname);
  const target = stripTrailingSlash(href);
  return current === target || current.startsWith(`${target}/`);
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
