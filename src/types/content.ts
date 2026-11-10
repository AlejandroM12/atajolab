import type { Localized } from "../i18n/config";

export type ServiceIcon =
  | "web"
  | "management"
  | "automation"
  | "integration"
  | "dashboard"
  | "internal";

/** A service resolved for one language. */
export interface Service {
  /** Anchor id, the same in both languages so links keep working. */
  id: string;
  title: string;
  icon: ServiceIcon;
  summary: string;
  /** The problem it addresses. */
  problem: string;
  /** What kind of solution can be built. */
  solution: string;
  /** Examples of solutions, kept generic. */
  examples: string[];
  /** Who it can be useful for. */
  fitsFor: string;
}

export interface ServiceSource {
  id: string;
  icon: ServiceIcon;
  title: Localized<string>;
  summary: Localized<string>;
  problem: Localized<string>;
  solution: Localized<string>;
  examples: Localized<string[]>;
  fitsFor: Localized<string>;
}

export type FaqGroup = "microapps" | "desarrollo";

export interface FaqItem {
  id: string;
  group: FaqGroup;
  question: string;
  answer: string;
  /** Show it in the home page preview. */
  home?: boolean;
}

export interface FaqSource {
  id: string;
  group: FaqGroup;
  question: Localized<string>;
  answer: Localized<string>;
  home?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
