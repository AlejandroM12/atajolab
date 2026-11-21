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

/** A way to pay for a tool, with a price that is published on the tool's own site. */
export interface MicroappPlan {
  id: string;
  name: string;
  price: number;
  currency: Currency;
  /** Set for subscriptions; one-time payments leave it out. */
  billingPeriod?: BillingPeriod;
  details: string[];
}

export interface MicroappStep {
  title: string;
  text: string;
  /** Real screen of the step, with its text in the page's language. */
  image?: MicroappImage;
}

/** A short benefit with a title, shown as a card. */
export interface MicroappCard {
  title: string;
  text: string;
}

/** A feature worth its own section: what it lets you do, with the real screens. */
export interface MicroappSpotlight {
  title: string;
  text: string;
  points: string[];
  image: MicroappImage;
  /** Phone screen shown over the main one. */
  phone?: MicroappImage;
}

export interface MicroappFormatGroup {
  title: string;
  items: { name: string; size: string; use: string }[];
}

export interface MicroappFormats {
  title: string;
  intro: string;
  image?: MicroappImage;
  groups: MicroappFormatGroup[];
}

export interface MicroappExample {
  title: string;
  text: string;
  image: MicroappImage;
}

export interface MicroappFaqItem {
  question: string;
  answer: string;
}

export interface MicroappClosing {
  title: string;
  text: string;
  /** Label of the button that opens the tool. */
  cta: string;
}

export interface MicroappLink {
  label: string;
  href: string;
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
  /** "browser" frames screenshots as app windows; "stage" shows product cards on the product's own backdrop. */
  imageStyle?: "browser" | "stage";
  /** The product's own mark, shown on the stage. */
  logo?: string;
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
  /** Replaces the generic label of the pricing model when a tool offers more than one way to pay. */
  pricingLabel?: string;
  /** Extra commercial detail for the detail page. Never a price. */
  pricingNote?: string;
  /** Replaces "shown inside the tool" in the price cell when the tool shows no price to rely on. */
  priceInfo?: string;
  /** Replaces the label of the main button when it opens the tool. */
  ctaLabel?: string;
  /** Problems the tool solves, in the customer's words. */
  problems?: string[];
  /** How it works, in a few steps. */
  steps?: MicroappStep[];
  /** Plans and prices, only when they are public on the tool's site. */
  plans?: MicroappPlan[];
  /** Secondary button next to the main one, e.g. a free trial. */
  trial?: MicroappLink;
  /** Links to the tool's own site. */
  officialLinks?: MicroappLink[];
  /** Benefits shown as cards under the description. */
  capabilities?: MicroappCard[];
  /** The tool's main differentiator, with its own section. */
  spotlight?: MicroappSpotlight;
  /** Sizes or formats the tool produces. */
  formats?: MicroappFormats;
  /** Real examples of what can be made with the tool. */
  examples?: MicroappExample[];
  faq?: MicroappFaqItem[];
  /** Closing invitation at the end of the page. */
  closing?: MicroappClosing;
  /** Image shown when the page is shared on social networks (1200 × 630). */
  social?: { image: string; alt: string };
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
  pricingLabel?: Localized<string>;
  pricingNote?: Localized<string>;
  priceInfo?: Localized<string>;
  ctaLabel?: Localized<string>;
  problems?: Localized<string[]>;
  steps?: Localized<MicroappStep[]>;
  plans?: MicroappPlanSource[];
  trial?: { label: Localized<string>; href: string };
  officialLinks?: { label: Localized<string>; href: string }[];
  capabilities?: Localized<MicroappCard[]>;
  spotlight?: Localized<MicroappSpotlight>;
  formats?: Localized<MicroappFormats>;
  examples?: Localized<MicroappExample[]>;
  faq?: Localized<MicroappFaqItem[]>;
  closing?: Localized<MicroappClosing>;
  social?: { image: Localized<string>; alt: Localized<string> };
  seoTitle?: Localized<string>;
  seoDescription?: Localized<string>;
}

export interface MicroappPlanSource extends Omit<MicroappPlan, "name" | "details"> {
  name: Localized<string>;
  details: Localized<string[]>;
}
