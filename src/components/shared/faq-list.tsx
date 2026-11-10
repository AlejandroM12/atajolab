import { Plus } from "lucide-react";
import type { FaqItem } from "@/types/content";

/** Accessible accordion built on native <details>: works without JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-24">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 text-left font-display text-base font-semibold text-ink transition-colors hover:bg-surface sm:px-6 sm:text-lg">
            <h3 className="font-[inherit] text-[inherit] tracking-tight">{item.question}</h3>
            <Plus
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="px-5 pb-6 leading-relaxed text-muted sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
