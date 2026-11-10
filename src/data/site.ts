import type { NavItem } from "../types/content";

export const site = {
  name: "AtajoLab",
  url: "https://atajolab.dev",
  email: "atajolab.tools@gmail.com",
} as const;

/**
 * Social profiles. Leave empty until each URL is confirmed:
 * the footer only renders the ones listed here.
 */
export const socialLinks: NavItem[] = [];
