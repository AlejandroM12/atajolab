import type { Localized } from "../i18n/config";
import type { MicroappImage, MicroappImageSource } from "./microapp";

export type ProjectKind = "CUSTOM_DEVELOPMENT" | "OWN_PRODUCT";

export interface ProjectLink {
  label: string;
  href: string;
  /** Short notice shown next to the link, e.g. about a slow first load. */
  note?: string;
}

export interface ProjectSection {
  title: string;
  paragraphs: string[];
}

interface ProjectBase {
  id: string;
  kind: ProjectKind;
  name: string;
  /** Technologies confirmed in the project repository. */
  stack: string[];
  /** Microapp that sells this product, to avoid duplicating its content. */
  microappId?: string;
  featured: boolean;
}

/** A project resolved for one language. */
export interface Project extends ProjectBase {
  slug: string;
  /** One line for cards. */
  summary: string;
  /** Lead paragraph for the case study page. */
  description: string;
  sections: ProjectSection[];
  features: string[];
  images: MicroappImage[];
  /** External links (demos, live apps). */
  links: ProjectLink[];
  /** Important clarifications (fictional data, simulated channels). */
  disclaimers: string[];
  seoDescription?: string;
}

/** A project as written in `src/data/projects.ts`, in both languages. */
export interface ProjectSource extends ProjectBase {
  slug: Localized<string>;
  summary: Localized<string>;
  description: Localized<string>;
  sections: Localized<ProjectSection[]>;
  features: Localized<string[]>;
  images: MicroappImageSource[];
  links: { label: Localized<string>; href: string; note?: Localized<string> }[];
  disclaimers: Localized<string[]>;
  seoDescription?: Localized<string>;
}
