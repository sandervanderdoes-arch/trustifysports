import { TrendingUp, Target, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: TrendingUp,
    title: "Regulatory Tailwinds",
    body: "European AML directives are accelerating. Football is increasingly in scope. The window to build proper infrastructure is now.",
  },
  {
    icon: Target,
    title: "Sector-Specific Expertise",
    body: "We don't come from generic compliance consulting. We understand football's commercial structures, timelines, and stakeholders.",
  },
  {
    icon: Handshake,
    title: "Partnership-First Model",
    body: "We grow with our clients. Our business model is built on long-term relationships, not one-off engagements.",
  },
];

export const WhyUs = () => (
  <section className="py-24 lg:py-32 bg-surface-deep relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-2xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight">
          Why Now. <span className="text-primary italic">Why Us.</span>
        </h2>
      </Reveal>

      <div className="mt-16 space-y-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 100}>
            <article className="group p-8 lg:p-10 rounded-lg border border-border bg-card/50 hover:bg-card/80 hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4 md:w-1/3">
                <div className="h-12 w-12 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl">{r.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed md:w-2/3">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
