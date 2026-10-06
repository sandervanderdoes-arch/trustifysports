import { TrendingUp, Target, Handshake, Award, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: TrendingUp,
    title: "The Rules Are Written",
    body: "The AMLR was published in 2024, AMLA is finalising the technical standards, and clubs and agents have until 10 July 2029. Building and evidencing a compliance programme takes most organisations 18 to 24 months.",
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
  {
    icon: Award,
    title: "Official Partner of Pro Agent",
    body: "Trustify Sports is proud to be an official partner of Pro Agent, strengthening our position at the heart of the professional football ecosystem.",
  },
  {
    icon: Globe2,
    title: "Beyond the EU",
    body: "In England, the Independent Football Regulator's owners' test is already in force, and in September 2026 the UK government announced a consultation on extending AML rules to clubs and agents.",
  },
];

export const WhyUs = () => (
  <section className="on-navy py-24 lg:py-32 bg-surface-deep relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mb-6 mx-auto" />
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
