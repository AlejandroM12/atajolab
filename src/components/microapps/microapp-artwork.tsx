import type { Microapp } from "@/types/microapp";
import { cn } from "@/lib/utils";
import { MicroappIcon } from "./microapp-icon";

/**
 * Placeholder artwork for tools without screenshots (usually upcoming ones).
 * Abstract on purpose: it must not look like a real screen of a product that does not exist yet.
 */
export function MicroappArtwork({ app, className }: { app: Microapp; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-surface", className)}
    >
      <div className="bg-dots absolute inset-0 opacity-70" />
      <div className="absolute -right-10 -bottom-12 size-48 rounded-full border border-brand-200/70" />
      <div className="absolute -right-2 -bottom-4 size-28 rounded-full border border-brand-200/70" />
      <div className="relative flex flex-col items-center gap-4">
        <span className="flex size-16 items-center justify-center rounded-2xl border border-brand-200 bg-card text-brand-600 shadow-card">
          <MicroappIcon icon={app.icon} className="size-8" />
        </span>
        <span className="flex flex-col items-center gap-1.5">
          <span className="h-1.5 w-24 rounded-full bg-brand-200/80" />
          <span className="h-1.5 w-16 rounded-full bg-line-strong/70" />
        </span>
      </div>
    </div>
  );
}
