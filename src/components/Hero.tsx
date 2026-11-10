import { ArrowRight, LayoutDashboard, UserCheck, LifeBuoy, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

// The four things a club or agent gets from us, shown as one row so it is clear at a glance
// that Trustify Sports is more than software.
const pillars = [
  { icon: LayoutDashboard, label: "Platform built for football" },
  { icon: UserCheck, label: "Compliance experts" },
  { icon: LifeBuoy, label: "Ongoing support" },
  { icon: Network, label: "A connected ecosystem" },
];

const OBLIGATIONS_APPLY = Date.UTC(2029, 6, 10);
const daysToGo = () => Math.max(0, Math.ceil((OBLIGATIONS_APPLY - Date.now()) / 86_400_000));

export const Hero = () => (
  <section id="top" className="on-navy relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-hero">
    <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
    <div
      className="absolute inset-x-0 top-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)" }}
      aria-hidden
    />
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-20 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      aria-hidden
    />

    <div className="container-tight relative">
      <Reveal>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs uppercase tracking-widest text-muted-foreground mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          The AML rules are published. Preparation starts now.
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="font-serif leading-[1.05] hero-headline">
          <span className="block whitespace-nowrap">Compliance Infrastructure</span>
          <span className="block whitespace-nowrap"><span className="text-foreground">Built for</span>{" "}<span className="text-primary italic">Professional Football</span></span>
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-3xl font-light leading-relaxed">
          From 10 July 2029, professional football clubs and football agents are obliged entities under
          the EU Anti-Money Laundering Regulation: they must know who they deal with, monitor the money
          that moves, and prove both to a supervisor. Trustify Sports is building the system to run these
          duties, designed for football.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="onDark" size="lg" className="group">
            <a href="#contact">
              Book a readiness assessment
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild variant="onDarkOutline" size="lg">
            <a href="#how">How we help</a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <ul className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
          {pillars.map((p) => (
            <li
              key={p.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card/40 backdrop-blur-sm px-4 py-3 text-sm text-foreground/90 transition-colors hover:border-primary/50"
            >
              <p.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{p.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-10 pt-8 border-t border-border/60 max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Developed with clubs and agents, for the football industry. <span className="text-foreground/90">Official partner of Pro Agent, the industry association for player agents.</span>
          </p>
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            <span className="font-serif text-xl text-foreground tabular-nums">{daysToGo().toLocaleString("en-GB")}</span> days until 10 July 2029
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
