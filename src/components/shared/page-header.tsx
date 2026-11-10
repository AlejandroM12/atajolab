import type { ReactNode } from "react";
import { Container } from "./container";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs?: { items: Crumb[]; label: string };
  children?: ReactNode;
}

/** Top block of inner pages: holds the page's only <h1>. */
export function PageHeader({ eyebrow, title, description, breadcrumbs, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-paper">
      <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0 opacity-70" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs.items} label={breadcrumbs.label} className="mb-6" />}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-[2.1rem] leading-[1.1] font-semibold text-ink sm:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </header>
  );
}
