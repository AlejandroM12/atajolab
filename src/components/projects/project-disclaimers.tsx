import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectDisclaimers({ items, title, className }: { items: string[]; title: string; className?: string }) {
  if (items.length === 0) return null;
  return (
    <div className={cn("rounded-xl border border-line bg-surface p-4 text-sm leading-relaxed text-ink-soft", className)}>
      <p className="flex items-center gap-2 font-semibold text-ink">
        <Info aria-hidden="true" className="size-4 text-brand-600" />
        {title}
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-line-strong">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
