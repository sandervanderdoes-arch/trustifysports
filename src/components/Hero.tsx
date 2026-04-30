import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export const Hero = () => (
  <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-hero">
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
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          AML Compliance · European Football
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] max-w-4xl">
          Compliance Infrastructure
          <br />
          Built for <span className="text-primary italic">Professional Football</span>
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Trustify Sports helps clubs and football organizations navigate European AML
          regulations — so they can focus on what matters most: the game.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-6 inline-flex items-start gap-3 px-4 py-3 rounded-md border border-primary/30 bg-primary/5 max-w-2xl">
          <span className="text-primary mt-0.5">🗓️</span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            With <span className="text-foreground font-medium">EU AMLA enforcement beginning in 2029</span>, the window to build compliant infrastructure is open — but not indefinitely.
          </p>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="gold" size="lg">
            <a href="#about">Learn More</a>
          </Button>
          <Button asChild variant="goldOutline" size="lg">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-16 pt-8 border-t border-border/60 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">—</span> Developed in partnership with the football industry, for the football industry. <span className="text-foreground/90">Official partner of Pro Agent.</span>
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
