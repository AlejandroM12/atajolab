import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Heading id, so the section can use aria-labelledby. */
  id?: string;
  /** For the always-dark brand bands. */
  inverted?: boolean;
  className?: string;
  /** Right-side actions on wide screens. */
  action?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  id,
  inverted = false,
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p
            className={cn(
              "mb-3 text-xs font-semibold tracking-[0.14em] uppercase",
              inverted ? "text-mint-200" : "text-brand-700",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className={cn("text-[1.75rem] leading-tight font-semibold sm:text-4xl", inverted ? "text-white" : "text-ink")}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              inverted ? "text-mint-100/85" : "text-muted",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
