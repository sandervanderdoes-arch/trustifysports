import { Linkedin } from "lucide-react";
import { Reveal } from "./Reveal";

const founders = [
  {
    initials: "AvW",
    name: "Alexander van der Does",
    title: "Co-Founder & CEO",
    bio: "Alexander brings over 10 years of commercial experience from global brands including Red Bull and Heineken. He specializes in business development, partnerships, and building ventures from the ground up. He bridges European football expertise with a global commercial network.",
    linkedin: "https://www.linkedin.com/in/alexander-van-der-does-de-willebois-5316447b/",
  },
  {
    initials: "PT",
    name: "Philip",
    title: "Co-Founder · Compliance",
    bio: "Philip is a compliance and forensic expert with a background at a Big 4 consulting firm, where he specialized in financial crime, AML frameworks, and regulatory investigations. He brings deep technical expertise in the exact regulatory landscape that Trustify Sports was built to navigate.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    initials: "D",
    name: "Derk",
    title: "Co-Founder & CTO",
    bio: "Derk leads the technology behind Trustify Sports, building the platform that turns regulatory obligations into clear, auditable workflows for clubs and agents.",
    linkedin: "",
  },
];

export const Founders = () => (
  <section id="founders" className="py-24 lg:py-32 bg-surface-muted text-on-light">
    <div className="container-tight">
      <Reveal className="max-w-2xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight text-on-light">The Team</h2>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {founders.map((f, i) => (
          <Reveal key={f.name} delay={i * 120}>
            <article className="bg-surface-light rounded-lg p-8 lg:p-10 border border-[hsl(var(--on-light-border))] h-full flex flex-col">
              <div className="flex items-center gap-5">
                <div
                  className="h-20 w-20 rounded-full flex items-center justify-center font-serif text-xl text-primary-foreground border-2 border-primary/30"
                  style={{ background: "hsl(var(--primary))" }}
                  aria-hidden
                >
                  {f.initials}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-on-light leading-tight">{f.name.split(" ")[0]}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary">{f.title}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-on-light-muted leading-relaxed flex-1">{f.bio}</p>
              {f.linkedin && <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-on-light hover:text-primary transition-colors"
                aria-label={`${f.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
