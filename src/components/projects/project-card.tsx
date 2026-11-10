import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { projectPath } from "@/i18n/routes";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/** Wide project card: screenshot on one side, summary on the other. */
export function ProjectCard({ project, locale, reverse = false }: { project: Project; locale: Locale; reverse?: boolean }) {
  const t = getDictionary(locale).projects;
  const cover = project.images[0];
  return (
    <article className="group relative grid overflow-hidden rounded-3xl border border-line bg-card shadow-card transition-[border-color,box-shadow] hover:border-brand-200 hover:shadow-float lg:grid-cols-2">
      <div
        className={cn(
          "relative overflow-hidden border-b border-line bg-surface p-5 sm:p-8 lg:border-b-0",
          reverse ? "lg:order-2 lg:border-l" : "lg:border-r",
        )}
      >
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
        {cover && (
          <Image
            src={cover.src}
            alt=""
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="relative h-auto w-full rounded-lg border border-line shadow-float"
          />
        )}
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <Badge tone={project.kind === "CUSTOM_DEVELOPMENT" ? "brand" : "neutral"} className="self-start">
          {t.kinds[project.kind]}
        </Badge>
        <h2 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">
          <Link
            href={projectPath(project.slug, locale)}
            className="rounded after:absolute after:inset-0 after:content-['']"
          >
            {project.name}
          </Link>
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-ink-soft ring-1 ring-line">
              {tech}
            </li>
          ))}
        </ul>
        <span className="mt-8 inline-flex items-center gap-1.5 font-semibold text-brand-700">
          {t.viewCase}
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
