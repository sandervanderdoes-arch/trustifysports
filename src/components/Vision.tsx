import { Share2, Zap, Layers, Sparkles, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

// Our long-term ambition. Worded as an ambition: these are goals, not features that exist today.
const goals = [
  {
    icon: Share2,
    title: "Collaboration",
    body: "Clubs and agents share knowledge and best practices.",
  },
  {
    icon: Zap,
    title: "Faster deals",
    body: "Compliance on transactions becomes faster, more efficient and easier to audit.",
  },
  {
    icon: Layers,
    title: "Less duplicate work",
    body: "Fewer repeated checks and less administrative burden.",
  },
  {
    icon: Sparkles,
    title: "Simple by design",
    body: "Compliance made as simple, accessible and practical as possible.",
  },
];

// Six parties around one hub, alternating clubs and agents.
const nodes = [-90, -30, 30, 90, 150, 210].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 200 + 140 * Math.cos(rad), y: 200 + 140 * Math.sin(rad), label: i % 2 === 0 ? "Club" : "Agent" };
});

const EcosystemDiagram = () => (
  <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto" role="img" aria-label="Clubs and agents connected through Trustify Sports">
    {/* ring between neighbouring parties */}
    {nodes.map((n, i) => {
      const m = nodes[(i + 1) % nodes.length];
      return <line key={`r${i}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="hsl(228 39% 78% / 0.18)" strokeWidth="1" />;
    })}
    {/* flows to the hub */}
    {nodes.map((n, i) => (
      <line key={`f${i}`} x1={n.x} y1={n.y} x2={200} y2={200} className="flow-line" stroke="hsl(228 39% 78% / 0.55)" strokeWidth="1.5" style={{ animationDelay: `${i * 0.25}s` }} />
    ))}
    <circle cx="200" cy="200" r="58" className="hub-pulse" fill="hsl(228 39% 78% / 0.25)" />
    <circle cx="200" cy="200" r="46" fill="hsl(228 39% 22%)" stroke="hsl(228 39% 78% / 0.7)" strokeWidth="1.5" />
    <text x="200" y="196" textAnchor="middle" className="font-serif" fill="white" fontSize="15">Trustify</text>
    <text x="200" y="214" textAnchor="middle" fill="hsl(228 39% 78%)" fontSize="10" letterSpacing="2">SPORTS</text>
    {nodes.map((n) => (
      <g key={`${n.x}-${n.y}`}>
        <circle cx={n.x} cy={n.y} r="28" fill="hsl(228 39% 17%)" stroke="hsl(228 39% 78% / 0.5)" strokeWidth="1" />
        <text x={n.x} y={n.y + 4} textAnchor="middle" fill="white" fontSize="11">{n.label}</text>
      </g>
    ))}
  </svg>
);

export const Vision = () => (
  <section id="vision" className="on-navy py-24 lg:py-32 bg-surface-deep relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div
      className="absolute -bottom-40 right-0 h-[420px] w-[620px] rounded-full opacity-20 blur-3xl"
      style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      aria-hidden
    />
    <div className="container-tight relative grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
      <div>
        <Reveal>
          <div className="gold-rule mb-6" />
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Our ambition</p>
          <h2 className="text-3xl lg:text-5xl leading-tight">
            Building the compliance standard for <span className="text-primary italic">European football.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
            In the long run we are building more than a platform: a connected ecosystem in which clubs
            and agents work together on compliance.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <article className="h-full p-5 rounded-lg border border-border bg-card/50 transition-all duration-300 hover:border-primary/40 hover:bg-card/80">
                <div className="flex items-center gap-3 mb-2">
                  <g.icon className="h-4 w-4 text-primary" aria-hidden />
                  <h3 className="font-serif text-lg">{g.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-primary shrink-0" aria-hidden />
            Every client's data stays independent and confidential.
          </p>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <EcosystemDiagram />
      </Reveal>
    </div>
  </section>
);
