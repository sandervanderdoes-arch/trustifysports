import { Scale, Goal, Sparkles, Handshake, Award, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: Scale,
    title: "The rules are written",
    body: "The AMLR has been law since June 2024. In October 2026, AMLA sent its final draft standards on customer due diligence to the European Commission, and it has consulted on how supervisors will rate clubs and agents. Building a compliance programme takes most organisations 18 to 24 months.",
  },
  {
    icon: Goal,
    title: "Built for football deals",
    body: "Transfers, loans, sell-ons, add-ons and agent fees are modelled the way football deals really work, and every fee is tested against comparable deals.",
  },
  {
    icon: Sparkles,
    title: "Simple enough for every club and agent",
    body: "Designed to be run by your own people, without building a compliance department.",
  },
  {
    icon: Handshake,
    title: "Partnership-first model",
    body: "We grow with our clients: our business model is built on long-term relationships, not one-off engagements.",
  },
  {
    icon: Award,
    title: "Official partner of Pro Agent",
    body: "Trustify Sports is an official partner of Pro Agent, the industry association for football player agents.",
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
          Why now. <span className="text-primary italic">Why us.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 100}>
            <article className="group h-full p-7 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:bg-card/80 hover:border-primary/40 hover:-translate-y-1">
              <div className="h-11 w-11 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20 mb-5 transition-colors duration-300 group-hover:bg-primary/20">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
