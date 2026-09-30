import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");
const index = resolve(dist, "index.html");

if (!existsSync(index)) {
  console.error("postbuild: dist/index.html not found");
  process.exit(1);
}

copyFileSync(index, resolve(dist, "404.html"));
console.log("postbuild: wrote dist/404.html (SPA fallback for GitHub Pages)");