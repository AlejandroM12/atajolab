import type { NextConfig } from "next";

/**
 * Static export: `next build` writes a fully static site to `out/`,
 * ready for Cloudflare Pages (or any static host). No Node.js server needed.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Every route becomes `/<route>/index.html`, which static hosts serve without rewrites.
  trailingSlash: true,
  images: {
    // The default loader needs a server. Images in /public are already optimized WebP.
    unoptimized: true,
  },
  experimental: {
    // One bilingual 404 page for the whole site: the root layout lives under [lang],
    // so there is no single layout to build a regular not-found page from.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
