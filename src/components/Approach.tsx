import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Assess",
    body: "We map your organization's current exposure and obligations under European AML frameworks.",
  },
  {
    n: "02",
    title: "Design",
    body: "Together, we build a compliance infrastructure that fits your structure, workflows, and calendar.",
  },
  {
    n: "03",
    title: "Operate",
    body: "We run alongside you. Monitoring, updating, and reporting as regulations evolve.",
  },
];

export const Approach = () => (
  <section className="py-24 lg:py-32 bg-surface-muted relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-3xl mx-auto text-center">
        <div className="gold-rule mx-auto mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight max-w-5xl mx-auto">
          Built With the Industry. <span className="text-primary italic whitespace-nowrap">For&nbsp;the&nbsp;Industry.</span>
        </h2>
      </Reveal>

      <Reveal delay={100} className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Trustify Sports was not built in isolation. Our approach is grounded in direct collaboration
          with clubs, federations, and football insiders. We understand the rhythms of transfer windows,
          the complexity of multi-party transactions, and the pressure organizations are under. That's
          why every part of our solution is designed to fit naturally into how football actually
          works, not the other way around.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-6 md:grid-cols-3 relative">
        {/* connector line desktop */}
        <div
          className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)" }}
          aria-hidden
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="relative p-8 rounded-lg border border-border bg-card/40 backdrop-blur-sm h-full">
              <div className="absolute -top-4 left-8 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-sm">
                {i + 1}
              </div>
              <div className="text-xs uppercase tracking-widest text-primary mt-2">Step {s.n}</div>
              <h3 className="font-serif text-2xl mt-2 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
