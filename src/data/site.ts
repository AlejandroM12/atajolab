import type { NavItem } from "../types/content";

export const site = {
  name: "AtajoLab",
  url: "https://atajolab.dev",
  email: "atajolab.tools@gmail.com",
} as const;

/**
 * AtajoLab Shop: the online store of physical QR and NFC products. It runs on its own site.
 * The image is the store's official render (`public/hero.webp` in the store repository).
 */
export const shop = {
  name: "AtajoLab Shop",
  url: "https://tienda.atajolab.dev/",
  image: { src: "/images/shop/productos-qr-nfc.webp", width: 1600, height: 1000 },
} as const;

/**
 * Social profiles. Leave empty until each URL is confirmed:
 * the footer only renders the ones listed here.
 */
export const socialLinks: NavItem[] = [];
