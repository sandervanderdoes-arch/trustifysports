import { Activity, Workflow, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Activity,
    title: "Regulatory intelligence",
    body: "Structured, versioned guidance on the AMLR, AMLA's technical standards and national implementation, mapped to football transactions.",
  },
  {
    icon: Workflow,
    title: "Compliance workflows",
    body: "Purpose-built processes and tooling designed around the specific structures and timelines of professional football.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    body: "We don't just deliver a product. We work alongside your organization as a long-term compliance partner.",
  },
];

export const Solution = () => (
  <section id="how" className="py-16 lg:py-20 bg-surface-muted text-on-light">
    <div className="container-tight">
      <Reveal className="max-w-5xl mx-auto text-center">
        <div className="gold-rule mb-6 mx-auto" />
        <h2 className="text-3xl lg:text-5xl leading-tight text-on-light">
          What Trustify Sports does
        </h2>
        <p className="mt-6 text-lg text-on-light-muted leading-relaxed">
          One partner for AML compliance: a platform built for football, compliance experts who guide
          your implementation, and support that continues after go-live. So you meet the 2029 rules
          without building a compliance department.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px md:grid-cols-3 bg-[hsl(var(--on-light-border))] border border-[hsl(var(--on-light-border))] rounded-lg overflow-hidden">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <article className="group h-full p-8 lg:p-10 bg-surface-light transition-colors duration-300 hover:bg-white">
              <div className="h-11 w-11 rounded-md flex items-center justify-center bg-primary/10 border border-primary/30 mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:[&>svg]:text-primary-foreground">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-on-light">{f.title}</h3>
              <p className="text-sm text-on-light-muted leading-relaxed">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-12 text-center font-serif text-xl lg:text-2xl text-on-light leading-snug">
          Not just a software vendor.{" "}
          <span className="text-primary italic">A long-term compliance partner for Football.</span>
        </p>
      </Reveal>
    </div>
  </section>
);
