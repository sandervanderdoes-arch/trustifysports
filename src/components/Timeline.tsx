import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Landmark, Wrench, PlayCircle, Flag } from "lucide-react";

// "Set in law" dates come from Regulation (EU) 2024/1624; "Recommended" steps are our advice.
const milestones = [
  {
    year: "2027",
    tag: "Set in law",
    icon: Landmark,
    title: "Banks first",
    body: "From 10 July 2027 the AMLR applies to banks and other financial firms, and new beneficial-ownership rules take effect. Expect questions from the banks that finance you.",
  },
  {
    year: "2028",
    tag: "Recommended",
    icon: Wrench,
    title: "Design and test",
    body: "Map your processes, configure the system and test it on past deals.",
  },
  {
    year: "Jan 2029",
    tag: "Recommended",
    icon: PlayCircle,
    title: "Live test run",
    body: "The system runs alongside your current processes, so your first assessed year is fully on record.",
  },
  {
    year: "10 Jul 2029",
    tag: "Set in law",
    icon: Flag,
    title: "Obligations apply",
    body: "Clubs and agents must screen, document and monitor, supervised by their national AML supervisor.",
  },
];

export const Timeline = () => (
  <section id="timeline" className="on-navy py-16 lg:py-20 bg-surface-deep relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mb-6 mx-auto" />
        <h2 className="text-3xl lg:text-5xl leading-tight">
          The road to <span className="text-primary italic">10 July 2029</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          What the law sets, and how we recommend clubs and agents prepare.
        </p>
      </Reveal>

      <div className="mt-12 relative">
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
              <article className="relative h-full p-6 lg:p-7 rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-10 w-10 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20">
                    <m.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full border ${
                      m.tag === "Set in law"
                        ? "border-primary/60 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {m.tag}
                  </span>
                </div>

                <div className="font-serif text-2xl lg:text-3xl text-primary mb-1 whitespace-nowrap">
                  {m.year}
                </div>
                <h3 className="font-serif text-lg mb-3">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.body}
                </p>
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
            for your board. Read our{" "}
            <a href="/amlr-football-guide" className="text-primary hover:underline">guide to the AMLR for football</a>.
          </p>
          <Button asChild variant="onDark" className="shrink-0">
            <a href="#contact">Start your readiness assessment</a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
