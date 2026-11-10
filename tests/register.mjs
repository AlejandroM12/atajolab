// Lets `node --test` import TypeScript modules from src/ the way Next does:
// resolves the `@/` alias and extensionless relative imports to .ts/.tsx files.
// Node strips the types itself; no test framework or loader dependency needed.
import { registerHooks } from "node:module";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const srcDir = path.resolve(import.meta.dirname, "../src");
const extensions = [".ts", ".tsx", "/index.ts"];

registerHooks({
  resolve(specifier, context, nextResolve) {
    let base = null;
    if (specifier.startsWith("@/")) {
      base = path.join(srcDir, specifier.slice(2));
    } else if (
      (specifier.startsWith("./") || specifier.startsWith("../")) &&
      context.parentURL?.startsWith("file:") &&
      !path.extname(specifier)
    ) {
      base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
    }
    if (base) {
      for (const extension of extensions) {
        if (existsSync(base + extension)) return nextResolve(pathToFileURL(base + extension).href, context);
      }
    }
    return nextResolve(specifier, context);
  },
});
