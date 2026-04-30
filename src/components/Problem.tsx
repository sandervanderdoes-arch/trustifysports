import { Landmark, ClipboardList, AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Landmark,
    title: "Growing AML Scrutiny",
    body: "European regulators are applying financial sector standards to professional football transfers, agent fees, and club ownership structures.",
  },
  {
    icon: ClipboardList,
    title: "Complex Compliance Burdens",
    body: "Clubs and governing bodies face increasing reporting obligations with limited in-house infrastructure to meet them.",
  },
  {
    icon: AlertTriangle,
    title: "Reputational & Financial Risk",
    body: "Non-compliance carries significant legal exposure, sanctions, and reputational damage.",
  },
];

export const Problem = () => (
  <section id="about" className="py-24 lg:py-32 bg-surface-teal relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-2xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight">
          The Regulatory Challenge Facing Football
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <article className="h-full p-8 rounded-lg border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-colors">
              <div className="h-12 w-12 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20 mb-6">
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-10 p-8 lg:p-10 rounded-lg border border-primary/30 bg-primary/5 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="h-12 w-12 rounded-md flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0 text-xl">
              🗓️
            </div>
            <h3 className="font-serif text-xl">The Clock is Ticking</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed md:w-2/3">
            The new EU <span className="text-foreground font-medium">Anti-Money Laundering Authority (AMLA)</span> regulation comes into full effect in <span className="text-primary font-medium">2029</span>. Football organizations that wait will face a compressed timeline to build compliant infrastructure. The time to act is now.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
