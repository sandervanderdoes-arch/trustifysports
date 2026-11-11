// Build-time only: scripts/prerender.mjs renders every route to static HTML with this.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppShell, AppRoutes } from "./App.tsx";
import { siteRoutes } from "./routes.tsx";

export const routes = siteRoutes.map(({ path, changefreq, priority }) => ({ path, changefreq, priority }));

export const render = (url: string) => {
  const context: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <AppShell>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </AppShell>
    </HelmetProvider>,
  );
  const h = context.helmet;
  const head = h ? [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join("\n    ") : "";
  return { html, head };
};
