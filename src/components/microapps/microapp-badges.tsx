import { CircleDollarSign, Clock, Repeat } from "lucide-react";
import type { Microapp } from "@/types/microapp";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Badge } from "@/components/ui/badge";
import { formatPrice, pricingLabel } from "@/lib/microapp-labels";

export function StatusBadge({ app, locale, className }: { app: Microapp; locale: Locale; className?: string }) {
  const tone = app.status === "AVAILABLE" ? "success" : app.status === "COMING_SOON" ? "amber" : "muted";
  return (
    <Badge tone={tone} dot className={className}>
      {getDictionary(locale).labels.status[app.status]}
    </Badge>
  );
}

const pricingIcons = {
  FREE: CircleDollarSign,
  ONE_TIME: CircleDollarSign,
  SUBSCRIPTION: Repeat,
} as const;

/** Commercial model, plus the price only when it is confirmed in the data. */
export function PricingBadge({ app, locale, className }: { app: Microapp; locale: Locale; className?: string }) {
  const t = getDictionary(locale);
  const Icon = app.status === "AVAILABLE" ? pricingIcons[app.pricingModel] : Clock;
  const price = app.status === "AVAILABLE" ? formatPrice(app, locale, t) : null;
  return (
    <Badge
      tone={app.pricingModel === "FREE" ? "brand" : "neutral"}
      icon={<Icon aria-hidden="true" className="size-3.5" />}
      className={className}
    >
      {pricingLabel(app, t)}
      {price && <span className="font-normal">· {price}</span>}
    </Badge>
  );
}
