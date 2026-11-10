import {
  Calculator,
  CalendarDays,
  ChartColumn,
  Clock,
  FileText,
  QrCode,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { MicroappIcon as MicroappIconKey } from "@/types/microapp";

const ICONS: Record<MicroappIconKey, LucideIcon> = {
  qr: QrCode,
  calculator: Calculator,
  clock: Clock,
  document: FileText,
  calendar: CalendarDays,
  chart: ChartColumn,
  automation: Workflow,
};

export function MicroappIcon({ icon, className }: { icon: MicroappIconKey; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon aria-hidden="true" className={className} />;
}
