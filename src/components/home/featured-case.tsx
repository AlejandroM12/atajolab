import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pagePath, projectPath } from "@/i18n/routes";
import { getProjects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { BrowserFrame } from "@/components/shared/browser-frame";
import { ColdStartNote } from "@/components/shared/cold-start-note";
import { ProjectDisclaimers } from "@/components/projects/project-disclaimers";
import { displayHost } from "@/lib/utils";

/**
 * Adhera: an own project, working and public, shown as a demo of what AtajoLab can build.
 * It is not a client delivery and not a product on sale, and the copy says so.
 */
export function FeaturedCase({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home.caseStudy;
  const project = getProjects(locale).find((p) => p.featured && p.kind === "CUSTOM_DEVELOPMENT");
  if (!project) return null;
  const cover = project.images[0];
  const demo = project.links[0];

  return (
    <section aria-labelledby="case-title" className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="order-2 lg:order-1">
          <BrowserFrame url={demo ? displayHost(demo.href) : undefined}>
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">{t.eyebrow}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h2 id="case-title" className="text-[1.75rem] leading-tight font-semibold text-ink sm:text-4xl">
              {project.name}
            </h2>
            <Badge tone="brand">{t.badge}</Badge>
          </div>
          <p className="mt-4 font-display text-xl leading-snug font-semibold text-ink-soft">{t.headline}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t.intro}</p>
          <ul className="mt-6 space-y-2.5">
            {t.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{t.note}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {demo && (
              <ButtonLink href={demo.href} locale={locale}>
                {demo.label}
              </ButtonLink>
            )}
            <ButtonLink
              href={projectPath(project.slug, locale)}
              locale={locale}
              variant="secondary"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              {t.cta}
            </ButtonLink>
          </div>
          {demo?.note && <ColdStartNote className="mt-3" text={demo.note} />}
          <ProjectDisclaimers items={project.disclaimers} title={dict.disclaimersTitle} className="mt-6" />
          <Link
            href={pagePath("projects", locale)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
          >
            {t.allProjects}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
