import { Shield, Handshake, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const audiences = [
  {
    icon: Shield,
    eyebrow: "Football Clubs",
    title: "For Football Clubs",
    body:
      "Clubs sit at the center of the most complex financial flows in football: transfers, agent fees, sponsorship structures, and ownership arrangements. Trustify Sports maps your full AML exposure and builds the internal workflows your organization needs to stay compliant as European regulatory scrutiny intensifies ahead of AMLA 2029.",
    bullets: [
      "Transfer and payment due diligence",
      "Ownership and UBO screening",
      "Ongoing transaction monitoring and reporting",
    ],
    accent: "left",
  },
  {
    icon: Handshake,
    eyebrow: "Player Agents",
    title: "For Player Agents",
    body:
      "Player agents operate in an environment of growing regulatory expectation. Under the new EU AML framework, agents handling significant transaction flows are increasingly treated as obliged entities. Trustify Sports gives agents the compliance infrastructure they need to operate with confidence — and credibility.",
    bullets: [
      "AML policy and procedure setup",
      "Client and counterparty due diligence",
      "Regulatory readiness for AMLA 2029",
    ],
    accent: "right",
  },
];

export const Audiences = () => (
  <section
    id="who-we-serve"
    className="py-24 lg:py-32"
    style={{ background: "hsl(var(--surface-light))" }}
  >
    <div className="container-tight">
      <Reveal className="max-w-3xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-on-light text-3xl lg:text-5xl leading-tight">
          Built for Every Corner of the Game
        </h2>
        <p className="text-on-light-muted mt-6 text-lg font-light leading-relaxed">
          Compliance obligations differ across the football ecosystem.
          Trustify Sports delivers tailored infrastructure for each.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:gap-10 md:grid-cols-2 relative">
        {/* Vertical divider on desktop */}
        <div
          className="hidden md:block absolute top-8 bottom-8 left-1/2 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, hsl(var(--on-light-border)) 20%, hsl(var(--on-light-border)) 80%, transparent)",
          }}
          aria-hidden
        />

        {audiences.map((a, i) => (
          <Reveal key={a.title} delay={i * 120}>
            <article
              className={`relative h-full p-8 lg:p-10 rounded-lg bg-white border border-[hsl(var(--on-light-border))] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 ${
                a.accent === "left"
                  ? "border-l-2 border-l-primary"
                  : "border-t-2 border-t-primary"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`h-12 w-12 flex items-center justify-center bg-primary/10 border border-primary/30 ${
                    a.accent === "left" ? "rounded-md" : "rounded-full"
                  }`}
                >
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-on-light-muted">
                  {a.eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-on-light mb-4">
                {a.title}
              </h3>
              <p className="text-sm text-on-light-muted leading-relaxed mb-6">
                {a.body}
              </p>

              <ul className="space-y-3 pt-6 border-t border-[hsl(var(--on-light-border))]">
                {a.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-on-light"
                  >
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <p className="mt-14 text-center font-serif text-xl lg:text-2xl text-on-light max-w-3xl mx-auto leading-snug">
          Whether you're a club or an agent, compliance is no longer optional.{" "}
          <span className="text-primary italic">We make it manageable.</span>
        </p>
      </Reveal>
    </div>
  </section>
);
