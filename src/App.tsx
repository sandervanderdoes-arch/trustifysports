import type { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import NotFound from "./pages/NotFound.tsx";
import { siteRoutes } from "./routes.tsx";

// Shared by the browser entry (main.tsx) and the build-time prerender
// (entry-server.tsx), so the prerendered HTML matches what the browser hydrates.
export const AppShell = ({ children }: { children: ReactNode }) => (
  <>
    <Sonner />
    {children}
  </>
);

export const AppRoutes = () => (
  <Routes>
    {siteRoutes.map((r) => (
      <Route key={r.path} path={r.path} element={r.element} />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <AppShell>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppShell>
);

export default App;
