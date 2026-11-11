import type { ReactNode } from "react";
import Index from "./pages/Index.tsx";
import Privacy from "./pages/Privacy.tsx";
import AmlrFootballGuide from "./pages/AmlrFootballGuide.tsx";
import AmlFootballClubs from "./pages/AmlFootballClubs.tsx";
import AmlFootballAgents from "./pages/AmlFootballAgents.tsx";

// Every public page. The browser router, the build-time prerender
// (scripts/prerender.mjs) and the generated sitemap.xml all read this list,
// so a new page only needs adding here.
export type SiteRoute = {
  path: string;
  element: ReactNode;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const siteRoutes: SiteRoute[] = [
  { path: "/", element: <Index />, changefreq: "weekly", priority: 1.0 },
  { path: "/amlr-football-guide", element: <AmlrFootballGuide />, changefreq: "weekly", priority: 0.9 },
  { path: "/aml-compliance-football-clubs", element: <AmlFootballClubs />, changefreq: "monthly", priority: 0.9 },
  { path: "/aml-compliance-football-agents", element: <AmlFootballAgents />, changefreq: "monthly", priority: 0.9 },
  { path: "/privacy", element: <Privacy />, changefreq: "yearly", priority: 0.2 },
];
