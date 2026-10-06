import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export const FoundingPartner = () => (
  <section id="founding-partner" className="on-navy py-24 lg:py-28 bg-surface-teal relative">
    <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
    <div className="container-tight relative">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight">Become a Founding Partner</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We are working with a small group of clubs and agents to shape the platform ahead of
          10 July 2029. Founding partners get early access, direct input into the product and a
          structured readiness assessment.
        </p>
        <div className="mt-8">
          <Button asChild variant="onDark" size="lg">
            <a href="#contact">Talk to us</a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
