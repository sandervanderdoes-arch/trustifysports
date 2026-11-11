import type { ReactNode } from "react";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GUIDES } from "@/guides";


type GuideLayoutProps = {
  path: string;
  breadcrumbName: string;
  kicker: string;
  title: string;
  lead: string;
  updated: string; // e.g. "11 November 2026"
  toc?: { id: string; label: string }[];
  children: ReactNode;
};

// Shared layout for the guide pages: compact navy header, readable article body,
// a call to action and links to the other guides (internal linking).
export const GuideLayout = ({ path, breadcrumbName, kicker, title, lead, updated, toc, children }: GuideLayoutProps) => (
  <main className="min-h-screen bg-background text-foreground">
    <Navbar />

    <header className="on-navy relative bg-hero pt-28 pb-14 lg:pt-36 lg:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="container-narrow relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1">
            <li><a href="/" className="hover:text-foreground">Home</a></li>
            <li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li>
            <li aria-current="page" className="text-foreground/90">{breadcrumbName}</li>
          </ol>
        </nav>
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">{kicker}</p>
        <h1 className="text-3xl lg:text-5xl leading-tight">{title}</h1>
        <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">{lead}</p>
        <p className="mt-6 text-xs text-muted-foreground">Last updated {updated} · By the Trustify Sports compliance team</p>
      </div>
    </header>

    <div className="bg-surface-light text-on-light py-12 lg:py-16">
      <div className="container-narrow">
        {toc && (
          <nav aria-label="On this page" className="mb-12 rounded-lg border border-[hsl(var(--on-light-border))] bg-[hsl(var(--surface-muted))] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">On this page</p>
            <ol className="grid gap-2 sm:grid-cols-2 text-sm">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-on-light hover:text-primary hover:underline">
                    {i + 1}. {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="guide">{children}</article>

        <aside className="mt-16 rounded-lg p-8 lg:p-10 text-white" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="font-serif text-2xl lg:text-3xl">Get ready for 10 July 2029</h2>
          <p className="mt-3 text-white/80 leading-relaxed">
            Trustify Sports combines a compliance platform built for football with compliance experts who
            guide your implementation. Most clubs and agents start with a structured readiness assessment.
          </p>
          <Button asChild variant="onDark" size="lg" className="group mt-6 h-auto min-h-11 whitespace-normal py-3">
            <a href="/#contact">
              Book a readiness assessment
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </aside>

        <nav aria-label="Related guides" className="mt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Related guides</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {GUIDES.filter((g) => g.path !== path).map((g) => (
              <li key={g.path}>
                <a href={g.path} className="group flex items-center justify-between gap-3 rounded-lg border border-[hsl(var(--on-light-border))] px-5 py-4 text-sm text-on-light transition-colors hover:border-primary">
                  {g.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-12 text-xs text-on-light-muted leading-relaxed">
          This guide summarises Regulation (EU) 2024/1624 and related publications for general information. It
          is not legal advice. Obligations under the regulation remain with each obliged entity.
        </p>
      </div>
    </div>

    <Footer />
  </main>
);

/** Frequently asked questions. Native <details>, so it works without JavaScript. */
export const Faq = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className="not-prose mt-6 divide-y divide-[hsl(var(--on-light-border))] rounded-lg border border-[hsl(var(--on-light-border))]">
    {items.map((f) => (
      <details key={f.q} className="group px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-on-light">
          <h3 className="text-base font-sans font-medium tracking-normal">{f.q}</h3>
          <Plus className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden />
        </summary>
        <p className="mt-3 text-sm text-on-light-muted leading-relaxed">{f.a}</p>
      </details>
    ))}
  </div>
);
