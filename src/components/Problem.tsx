import { Landmark, ClipboardList, AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Landmark,
    title: "Football Is Now in Scope",
    body: "Regulation (EU) 2024/1624 names professional football clubs and football agents as obliged entities. Customer due diligence, beneficial-ownership checks, monitoring and suspicious-transaction reporting now apply directly to football.",
  },
  {
    icon: ClipboardList,
    title: "Bank-Grade Standards, No Bank-Grade Infrastructure",
    body: "Clubs and agents must produce the same evidence a bank would: documented risk assessments, verified owners, auditable decisions. Yet they have little in-house infrastructure to do it.",
  },
  {
    icon: AlertTriangle,
    title: "Legal and Sporting Risk",
    body: "Supervisors assess the file, not the intention. Gaps mean supervisory sanctions and reputational damage, and incomplete ownership disclosure already carries sporting consequences under UEFA licensing.",
  },
];

export const Problem = () => (
  <section id="about" className="on-navy py-24 lg:py-32 bg-surface-teal relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
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
            AMLR obligations for clubs and agents apply from <span className="text-primary font-medium">10 July 2029</span>. But your banks, lenders and payment providers are obliged from <span className="text-foreground font-medium">10 July 2027</span>, and they will ask for ownership chains and source of funds well before 2029. The time to build is now.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
