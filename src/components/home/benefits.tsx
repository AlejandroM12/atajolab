import { Globe, MousePointerClick, Smartphone, Target } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

const icons = [MousePointerClick, Globe, Target, Smartphone];

export function Benefits({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.benefits;
  return (
    <section aria-labelledby="benefits-title" className="border-y border-line bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeader id="benefits-title" eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map(({ title, text }, index) => {
            const Icon = icons[index] ?? Target;
            return (
              <li key={title} className="rounded-2xl border border-line bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
