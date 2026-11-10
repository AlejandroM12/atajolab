import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Discreet notice for apps hosted on servers that sleep when idle (e.g. Render Free).
 * Shown only next to the links that lead to those apps.
 */
export function ColdStartNote({ text, className }: { text: string; className?: string }) {
  return (
    <p className={cn("flex items-start gap-2 text-sm leading-snug text-muted", className)}>
      <Timer aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
      <span>{text}</span>
    </p>
  );
}
