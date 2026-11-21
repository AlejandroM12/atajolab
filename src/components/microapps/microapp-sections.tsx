import Image from "next/image";
import { Check } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Microapp, MicroappClosing, MicroappExample, MicroappFormats, MicroappSpotlight } from "@/types/microapp";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { BrowserFrame } from "@/components/shared/browser-frame";

/** Benefits as short cards, for tools that explain more than one thing they do. */
export function CapabilityCards({ cards }: { cards: NonNullable<Microapp["capabilities"]> }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => (
        <li key={card.title} className="rounded-2xl border border-line bg-card p-5 shadow-card">
          <span className="font-display text-sm font-semibold text-brand-600 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-ink">{card.title}</h3>
          <p className="mt-1.5 leading-relaxed text-muted">{card.text}</p>
        </li>
      ))}
    </ul>
  );
}

/** The tool's main differentiator: what it lets you do, next to its real screens. */
export function SpotlightSection({ spotlight, host }: { spotlight: MicroappSpotlight; host?: string }) {
  const { image, phone } = spotlight;
  return (
    <section aria-labelledby="editor" className="scroll-mt-24">
      <h2 id="editor" className="text-2xl font-semibold text-ink sm:text-3xl">
        {spotlight.title}
      </h2>
      <p className="mt-2 text-muted">{spotlight.text}</p>
      <div className="relative mt-6 pb-10 sm:pb-14">
        <BrowserFrame url={host}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 720px, 100vw"
            className="h-auto w-full"
          />
        </BrowserFrame>
        {phone && (
          <Image
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            sizes="(min-width: 640px) 180px, 32vw"
            className="absolute right-3 bottom-0 h-auto w-[30%] max-w-[180px] rounded-2xl border border-line shadow-float sm:right-6"
          />
        )}
      </div>
      <ul className="mt-2 grid gap-3 sm:grid-cols-2">
        {spotlight.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 rounded-xl border border-line bg-card p-4 text-[0.95rem] leading-relaxed text-ink-soft"
          >
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Sizes the tool produces, grouped by use, with the real format picker. */
export function FormatsSection({ formats, host }: { formats: MicroappFormats; host?: string }) {
  const { image } = formats;
  return (
    <section aria-labelledby="formatos" className="scroll-mt-24">
      <h2 id="formatos" className="text-2xl font-semibold text-ink sm:text-3xl">
        {formats.title}
      </h2>
      <p className="mt-2 text-muted">{formats.intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        {formats.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold tracking-wide text-brand-700 uppercase">{group.title}</h3>
            <ul className="mt-3 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-3 px-4 py-3">
                  <span>
                    <span className="block font-semibold text-ink">{item.name}</span>
                    <span className="block text-sm text-muted">{item.use}</span>
                  </span>
                  <span className="shrink-0 font-mono text-sm text-ink-soft tabular-nums">{item.size}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {image && (
        <div className="mt-6">
          <BrowserFrame url={host}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="h-auto w-full"
            />
          </BrowserFrame>
        </div>
      )}
    </section>
  );
}

/** Designs made with the tool, each on a neutral tile so every shape sits well. */
export function ExamplesGrid({ examples }: { examples: MicroappExample[] }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
      {examples.map((example) => (
        <li key={example.title}>
          <figure className="h-full">
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-line bg-surface p-4">
              <Image
                src={example.image.src}
                alt={example.image.alt}
                width={example.image.width}
                height={example.image.height}
                sizes="(min-width: 1024px) 220px, 45vw"
                className="h-auto max-h-full w-auto max-w-full rounded-md shadow-card"
              />
            </div>
            <figcaption className="mt-3">
              <span className="block font-semibold text-ink">{example.title}</span>
              <span className="mt-0.5 block text-sm leading-snug text-muted">{example.text}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** Closing invitation at the end of a tool page. Same dark brand band as the site's call to action. */
export function ClosingSection({ closing, href, locale }: { closing: MicroappClosing; href: string; locale: Locale }) {
  return (
    <section aria-labelledby="cierre" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-5 py-12 ring-1 ring-white/5 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgb(255_255_255/0.18)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
          />
          <div className="relative max-w-2xl">
            <h2 id="cierre" className="text-3xl leading-tight font-semibold text-white sm:text-4xl">
              {closing.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mint-100/85">{closing.text}</p>
            <div className="mt-8">
              <ButtonLink href={href} locale={locale} variant="inverted" size="lg">
                {closing.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
