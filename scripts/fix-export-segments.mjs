// Post-build fix for `output: "export"` on Windows (Next.js 16.4).
//
// Next writes prefetch segment files as `__next.<segment path with dots>.txt`, but it
// only replaces "/" separators. On Windows the paths use "\", so files end up nested,
// e.g. `out/microapps/__next.microapps/__PAGE__.txt` instead of
// `out/microapps/__next.microapps.__PAGE__.txt`, and client prefetches get 404s.
//
// This script flattens those folders into the expected file names.
// On Linux/macOS (e.g. a Cloudflare Pages build) there is nothing to fix and it does nothing.

import { readdir, rename, rm, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = new URL("../out/", import.meta.url);

async function listFiles(dir, prefix = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const parts = [...prefix, entry.name];
    if (entry.isDirectory()) files.push(...(await listFiles(join(dir, entry.name), parts)));
    else files.push(parts);
  }
  return files;
}

async function walk(dir) {
  let fixed = 0;
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const full = join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      for (const parts of await listFiles(full)) {
        // __next.microapps + [$d$slug, __PAGE__.txt] → __next.microapps.$d$slug.__PAGE__.txt
        await rename(join(full, ...parts), join(dir, `${entry.name}.${parts.join(".")}`));
        fixed += 1;
      }
      await rm(full, { recursive: true, force: true });
    } else {
      fixed += await walk(full);
    }
  }
  return fixed;
}

const outPath = OUT_DIR.pathname.replace(/^\/([A-Za-z]:)/, "$1");
try {
  await stat(outPath);
} catch {
  console.error("fix-export-segments: no out/ folder, run `next build` first.");
  process.exit(1);
}
const fixed = await walk(outPath);
console.log(fixed > 0 ? `fix-export-segments: ${fixed} segment files renamed.` : "fix-export-segments: nothing to fix.");
