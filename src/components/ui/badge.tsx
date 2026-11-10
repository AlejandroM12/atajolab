import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeTone = "neutral" | "brand" | "success" | "amber" | "muted" | "inverted";

const tones: Record<BadgeTone, string> = {
  neutral: "border-line bg-card text-ink-soft",
  brand: "border-brand-200 bg-brand-50 text-brand-800",
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/70 dark:bg-emerald-950 dark:text-emerald-200",
  amber: "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800/70 dark:bg-amber-950 dark:text-amber-200",
  muted: "border-line bg-surface text-muted",
  inverted: "border-white/20 bg-white/10 text-white",
};

const dots: Record<BadgeTone, string> = {
  neutral: "bg-muted",
  brand: "bg-brand-500",
  success: "bg-emerald-500 dark:bg-emerald-400",
  amber: "bg-amber-500 dark:bg-amber-400",
  muted: "bg-line-strong",
  inverted: "bg-white",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  icon?: ReactNode;
  className?: string;
}

export function Badge({ children, tone = "neutral", dot = false, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-5",
        tones[tone],
        className,
      )}
    >
      {dot && <span aria-hidden="true" className={cn("size-1.5 rounded-full", dots[tone])} />}
      {icon}
      {children}
    </span>
  );
}
