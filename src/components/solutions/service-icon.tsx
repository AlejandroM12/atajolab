import {
  AppWindow,
  ChartColumn,
  Database,
  Plug,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIcon as ServiceIconKey } from "@/types/content";

const ICONS: Record<ServiceIconKey, LucideIcon> = {
  web: AppWindow,
  management: Database,
  automation: Workflow,
  integration: Plug,
  dashboard: ChartColumn,
  internal: Wrench,
};

export function ServiceIcon({ icon, className }: { icon: ServiceIconKey; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon aria-hidden="true" className={className} />;
}
