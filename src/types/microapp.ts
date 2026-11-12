import type { Localized } from "../i18n/config";

/** Commercial model of a microapp. */
export type PricingModel = "FREE" | "ONE_TIME" | "SUBSCRIPTION";

/** Availability of a microapp. */
export type MicroappStatus = "AVAILABLE" | "COMING_SOON" | "UNAVAILABLE";

/** Catalog categories. Labels and URL values live in `src/data/categories.ts`. */
export type MicroappCategory = "marketing" | "finanzas" | "ventas" | "gestion";

/** Icon shown when a tool has no screenshots yet. */
export type MicroappIcon = "qr" | "calculator" | "clock" | "document" | "calendar" | "chart" | "automation";

export type Currency = "ARS" | "USD";

export type BillingPeriod = "MONTHLY" | "YEARLY";

export interface MicroappImage {
  /** Path inside /public, e.g. `/images/microapps/foo/editor.webp`. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional caption shown under the screenshot on the detail page. */
  caption?: string;
}

/**
 * Checkout settings for a later phase (Mercado Pago).
 * A buy button is shown only when `enabled` is true AND a price exists.
 */
export interface CheckoutConfig {
  provider: "mercadopago";
  enabled: boolean;
  /** Checkout Pro link or the app route that starts the payment. */
  url?: string;
}

/** Hosting facts that change how the link is presented. */
export interface HostingInfo {
  /** The app sleeps when idle (e.g. Render Free) and the first visit can be slow. */
  coldStart?: boolean;
}

/** Fields shared by every language. */
interface MicroappBase {
  id: string;
  category: MicroappCategory;
  pricingModel: PricingModel;
  /** Only set when the price is confirmed and public. Never guess it. */
  price?: number;
  currency?: Currency;
  billingPeriod?: BillingPeriod;
  status: MicroappStatus;
  featured: boolean;
  icon: MicroappIcon;
  demoUrl?: string;
  appUrl?: string;
  checkout?: CheckoutConfig;
  hosting?: HostingInfo;
  /** Related case study id in `src/data/projects.ts`. */
  projectId?: string;
}

/** A microapp resolved for one language: what components render. */
export interface Microapp extends MicroappBase {
  slug: string;
  name: string;
  /** The problem it solves, in plain words. Used as the title in cards and on the detail page. */
  headline: string;
  shortDescription: string;
  /** Paragraphs for the detail page. */
  fullDescription: string[];
  images: MicroappImage[];
  /** What the tool does. Only verified features for available tools. */
  features: string[];
  /** What the user gains. */
  benefits: string[];
  /** Who it is for. */
  audience: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface MicroappImageSource {
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
  caption?: Localized<string>;
}

/** A microapp as written in `src/data/microapps.ts`, with every text in both languages. */
export interface MicroappSource extends MicroappBase {
  slug: Localized<string>;
  name: Localized<string>;
  headline: Localized<string>;
  shortDescription: Localized<string>;
  fullDescription: Localized<string[]>;
  images: MicroappImageSource[];
  features: Localized<string[]>;
  benefits: Localized<string[]>;
  audience: Localized<string[]>;
  seoTitle?: Localized<string>;
  seoDescription?: Localized<string>;
}
