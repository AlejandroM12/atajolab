import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { HOW_WE_WORK_ID, pagePath } from "@/i18n/routes";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";

/** The two ways to work with AtajoLab: pick a ready-made tool, or ask for something built around you. */
export function HowWeWork({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.how;
  const paths = [
    { id: "ready", path: t.ready, href: pagePath("microapps", locale), variant: "secondary" as const },
    { id: "custom", path: t.custom, href: pagePath("contact", locale), variant: "primary" as const },
  ];

  return (
    <section
      id={HOW_WE_WORK_ID}
      aria-labelledby="how-title"
      className="scroll-mt-16 border-y border-line bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeader id="how-title" eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {paths.map(({ id, path, href, variant }) => (
            <article key={id} className="flex flex-col rounded-2xl border border-line bg-card p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold text-ink">{path.title}</h3>
              <ol className="mt-6 space-y-5">
                {path.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-semibold text-brand-700 ring-1 ring-brand-100"
                    >
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{step.title}</span>
                      <span className="mt-1 block leading-relaxed text-muted">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-auto pt-8">
                <ButtonLink href={href} locale={locale} variant={variant} size="lg">
                  {path.action}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
