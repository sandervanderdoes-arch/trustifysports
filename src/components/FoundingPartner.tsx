import { ArrowRight, Rocket, MessagesSquare, ClipboardCheck, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: Rocket, label: "Live first" },
  { icon: MessagesSquare, label: "Direct input into the product" },
  { icon: ClipboardCheck, label: "Structured readiness assessment" },
  { icon: BadgeCheck, label: "Preferred terms" },
];

export const FoundingPartner = () => (
  <section id="founding-partner" className="on-navy py-24 lg:py-28 bg-surface-teal relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mb-6 mx-auto" />
        <h2 className="text-3xl lg:text-5xl leading-tight">Become a Founding Partner</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We are working with a small group of clubs and agents to shape the platform ahead of
          10 July 2029. In 2027 we build it together through discovery workshops; founding partners
          go live first, on preferred terms in return for co-development.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <li key={b.label} className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground/90">
              <b.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{b.label}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={200} className="mt-10 text-center">
        <Button asChild variant="onDark" size="lg" className="group h-auto min-h-11 whitespace-normal py-3 text-center">
          <a href="#contact">
            Talk to us about founding partnership
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </Reveal>
    </div>
  </section>
);
