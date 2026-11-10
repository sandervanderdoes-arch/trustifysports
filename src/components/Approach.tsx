import { ScanSearch, Activity, FileCheck2, UserCheck, LayoutDashboard } from "lucide-react";
import { Reveal } from "./Reveal";

// What our compliance experts do with each client, start to finish.
const steps = [
  {
    n: "01",
    title: "Assess",
    body: "We assess your current compliance position and map your obligations under the AMLR.",
  },
  {
    n: "02",
    title: "Design",
    body: "We write your policies and procedures, and translate complex rules into clear, workable processes.",
  },
  {
    n: "03",
    title: "Operate",
    body: "After go-live we stay alongside you, with ongoing compliance support as the rules evolve.",
  },
];

// What the platform does every day.
const platform = [
  {
    icon: ScanSearch,
    title: "Verify",
    lead: "Know who you are dealing with before money moves.",
    body: "Beneficial owners of clubs, players, agents, sponsors and investors. Sanctions, PEP, adverse-media and licence checks.",
  },
  {
    icon: Activity,
    title: "Monitor",
    lead: "Every regulated transaction, as it happens.",
    body: "A live risk score per relationship, with flags for off-market fees, third-party payers and bridge transfers.",
  },
  {
    icon: FileCheck2,
    title: "Evidence",
    lead: "What your supervisor asks for, ready to hand over.",
    body: "An audit trail per transaction, a pre-filled suspicious-transaction report for you to review and file, and your business-wide risk assessment.",
  },
];

const GroupLabel = ({ icon: Icon, children }: { icon: typeof UserCheck; children: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">{children}</span>
    <span className="flex-1 h-px bg-[hsl(var(--on-light-border))]" aria-hidden />
  </div>
);

export const Approach = () => (
  <section className="py-24 lg:py-32 bg-surface-muted relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mx-auto mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight max-w-5xl mx-auto">
          Built with the industry. <span className="text-primary italic whitespace-nowrap">For&nbsp;the&nbsp;industry.</span>
        </h2>
      </Reveal>

      <Reveal delay={100} className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-lg text-muted-foreground leading-relaxed font-light">
          Developed with clubs, agents and football stakeholders, around how football actually works.
          Our experts take you by the hand, and our platform runs the work every day.
        </p>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <GroupLabel icon={UserCheck}>Our experts guide you</GroupLabel>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3 relative">
          {/* connector line desktop */}
          <div
            className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)" }}
            aria-hidden
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative p-8 rounded-lg border border-[hsl(var(--on-light-border))] bg-surface-light shadow-[var(--shadow-card)] h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
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

      <div className="mt-20">
        <Reveal>
          <GroupLabel icon={LayoutDashboard}>Our platform runs it</GroupLabel>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {platform.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group h-full rounded-lg p-8 text-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-primary)" }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-11 w-11 rounded-md flex items-center justify-center bg-white/10 border border-white/20 transition-colors duration-300 group-hover:bg-white/20">
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-serif text-sm text-white/40">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">{p.title}</h3>
                <p className="text-sm font-medium text-white/90 mb-3">{p.lead}</p>
                <p className="text-sm text-white/70 leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
