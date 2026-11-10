import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Minimal browser window used to frame product screenshots. */
export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-card shadow-float", className)}>
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3 py-2" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        {url && (
          <span className="truncate rounded-md bg-card px-2.5 py-0.5 text-[0.7rem] font-medium text-muted ring-1 ring-line">
            {url}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
