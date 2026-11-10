// GitHub Pages serves plain files and has no rewrites, so give every route its
// own copy of index.html (the app then renders the route in the browser), and
// use one as 404.html so unknown paths still load the site's not-found page.
import fs from "node:fs/promises";
import path from "node:path";

const dist = path.resolve(import.meta.dirname, "..", "dist");
const index = await fs.readFile(path.join(dist, "index.html"), "utf8");

const routes = [
  {
    path: "privacy",
    title: "Privacy notice | Trustify Sports",
    description:
      "How Trustify Sports collects, uses and protects personal data submitted through our website, in line with the EU GDPR.",
  },
];

for (const r of routes) {
  const html = index
    .replace(/<title>[^<]*<\/title>/, `<title>${r.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${r.description}$2`);
  await fs.mkdir(path.join(dist, r.path), { recursive: true });
  await fs.writeFile(path.join(dist, r.path, "index.html"), html);
}
await fs.writeFile(path.join(dist, "404.html"), index);
console.log(`spa-pages: wrote ${routes.map((r) => `/${r.path}`).join(", ")} and 404.html`);
