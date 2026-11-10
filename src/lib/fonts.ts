import { Sora, Source_Sans_3 } from "next/font/google";

// Same typefaces as the AtajoLab QR product, for a consistent brand.
export const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;
