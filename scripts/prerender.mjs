// Runs after `vite build`. Renders every route in src/routes.tsx to complete static HTML
// (dist/<route>.html), so search engines and AI assistants get the full page without
// running JavaScript, writes dist/404.html, and generates dist/sitemap.xml from the same list.
// Fails the build on any error: a broken prerender must never be deployed silently.
import { build } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://trustifysports.com";
const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const ssrOut = path.join(root, "node_modules", ".prerender");

await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/entry-server.tsx", outDir: ssrOut, emptyOutDir: true },
  ssr: { noExternal: true },
});

const { render, routes } = await import(pathToFileURL(path.join(ssrOut, "entry-server.js")).href);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("prerender: #root placeholder missing in index.html");

const page = (url, marker) => {
  const { html, head } = render(url);
  if (!/<h1[\s>]/.test(html)) throw new Error(`prerender: ${url} rendered without an <h1>`);
  return template
    .replace("</head>", () => `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered="${marker}">${html}</div>`);
};

// "/privacy" is written as dist/privacy.html: GitHub Pages serves it at /privacy with a 200,
// whereas a privacy/index.html folder would first redirect to /privacy/ (and the canonical
// URLs have no trailing slash).
for (const r of routes) {
  const file = r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`;
  await fs.mkdir(path.dirname(path.join(dist, file)), { recursive: true });
  await fs.writeFile(path.join(dist, file), page(r.path, r.path));
  console.log(`prerendered ${r.path}`);
}

// GitHub Pages serves 404.html (with a 404 status) for unknown paths.
await fs.writeFile(path.join(dist, "404.html"), page("/404", "/404"));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority.toFixed(1)}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${routes.length} URLs`);

await fs.rm(ssrOut, { recursive: true, force: true });
