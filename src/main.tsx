import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Pages prerendered at build time are hydrated. Anything else (for example an
// unknown URL served the 404 page) is rendered fresh in the browser.
if (root.dataset.prerendered === path) {
  hydrateRoot(root, app);
} else {
  root.innerHTML = "";
  createRoot(root).render(app);
}
