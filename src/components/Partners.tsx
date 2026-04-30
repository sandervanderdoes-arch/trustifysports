import { Reveal } from "./Reveal";

export const Partners = () => (
  <section className="py-12 lg:py-16 border-y border-border bg-surface-deep/50">
    <div className="container-tight">
      <Reveal>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="flex items-center gap-3 px-6 py-4 rounded-md border border-border bg-card/40">
              <div className="h-8 w-8 rounded-sm bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-serif text-sm">
                PA
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-foreground">Pro Agent</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Official Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
