import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { microappPath } from "@/i18n/routes";
import { getMicroapps } from "@/data/microapps";
import { displayHost } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { BrowserFrame } from "@/components/shared/browser-frame";

/**
 * AtajoLab Presupuestos, available: a section of its own inside the tools area of the home.
 * It reads the tool's data, so it disappears if the tool is not available.
 */
export function PresupuestosShowcase({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home.presupuestos;
  const app = getMicroapps(locale).find((item) => item.id === "atajolab-presupuestos");
  const [screen, sample] = app?.images ?? [];
  if (!app || app.status !== "AVAILABLE" || !app.appUrl || !app.trial || !screen || !sample) return null;

  return (
    <section aria-labelledby="presupuestos-title" className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">{t.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h2 id="presupuestos-title" className="text-[1.75rem] leading-tight font-semibold text-ink sm:text-4xl">
              {app.name}
            </h2>
            <Badge tone="success" dot>
              {dict.labels.status.AVAILABLE}
            </Badge>
          </div>
          <p className="mt-4 font-display text-xl leading-snug font-semibold text-ink-soft">{t.headline}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.intro}</p>
          <ul className="mt-6 space-y-2.5">
            {t.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={app.appUrl}
              locale={locale}
              size="lg"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {t.primary}
            </ButtonLink>
            <ButtonLink href={app.trial.href} locale={locale} size="lg" variant="secondary">
              {t.secondary}
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.note}</p>
          <p className="mt-3 text-sm">
            <Link href={microappPath(app.slug, locale)} className="font-semibold text-brand-700 hover:underline">
              {t.detail}
            </Link>
          </p>
        </div>

        <div className="relative pb-8 sm:pb-12">
          <BrowserFrame url={displayHost(app.appUrl)}>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
          <Image
            src={sample.src}
            alt={sample.alt}
            width={sample.width}
            height={sample.height}
            sizes="(min-width: 640px) 260px, 55vw"
            className="absolute right-3 bottom-0 h-auto w-[55%] rotate-2 rounded-xl border border-line shadow-float sm:right-6 sm:w-[46%]"
          />
        </div>
      </Container>
    </section>
  );
}
