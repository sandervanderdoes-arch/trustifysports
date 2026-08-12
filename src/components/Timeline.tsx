import { Reveal } from "./Reveal";
import { Flag, Compass, Wrench, ShieldCheck } from "lucide-react";

const milestones = [
  {
    year: "2026",
    label: "Foundation",
    icon: Compass,
    title: "Assess & Align",
    body:
      "Map exposure across transfers, ownership, and agent relationships. Establish governance ownership and a board-level compliance mandate.",
    actions: [
      "Conduct AML risk assessment",
      "Appoint compliance lead",
      "Define internal policies",
    ],
  },
  {
    year: "2027",
    label: "Build",
    icon: Wrench,
    title: "Implement Infrastructure",
    body:
      "Deploy KYC, transaction monitoring, and reporting workflows tailored to football's commercial structures and counterparty types.",
    actions: [
      "Onboard KYC tooling",
      "Operationalize monitoring",
      "Train staff & stakeholders",
    ],
  },
  {
    year: "2028",
    label: "Validate",
    icon: ShieldCheck,
    title: "Test & Audit",
    body:
      "Independent assurance on controls, evidence trails, and reporting pipelines. Remediate gaps before AMLA enforcement begins.",
    actions: [
      "Independent control review",
      "Mock regulatory reporting",
      "Close remediation items",
    ],
  },
  {
    year: "2029",
    label: "Enforcement",
    icon: Flag,
    title: "AMLA Goes Live",
    body:
      "EU Anti-Money Laundering Authority enforcement begins. Compliant organizations operate with confidence; latecomers face compressed timelines and scrutiny.",
    actions: [
      "Continuous monitoring",
      "Regulator engagement",
      "Ongoing assurance",
    ],
  },
];

export const Timeline = () => (
  <section id="timeline" className="on-navy py-24 lg:py-32 bg-surface-deep relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-2xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight">
          The Road to <span className="text-primary italic">2029</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          A pragmatic four-year readiness path for clubs, federations, and
          football organizations preparing for EU AMLA enforcement.
        </p>
      </Reveal>

      <div className="mt-16 relative">
        <div
          className="hidden lg:block absolute top-8 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.4), transparent)",
          }}
          aria-hidden
        />

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-4">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 100}>
              <article className="relative h-full p-6 lg:p-7 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-10 w-10 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20">
                    <m.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.label}
                  </span>
                </div>

                <div className="font-serif text-3xl text-primary mb-1">
                  {m.year}
                </div>
                <h3 className="font-serif text-lg mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {m.body}
                </p>

                <ul className="space-y-2 pt-4 border-t border-border/60">
                  {m.actions.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <div className="mt-12 p-6 lg:p-8 rounded-lg border border-primary/30 bg-primary/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            <span className="text-foreground font-medium">Where to start:</span>{" "}
            Most partners begin with a structured readiness assessment. We help
            you scope the work, sequence priorities, and build a defensible plan
            for your board.
          </p>
          <a
            href="#contact"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
          >
            Start your readiness assessment →
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
