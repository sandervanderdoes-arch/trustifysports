import { Activity, Workflow, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Activity,
    title: "Regulatory Intelligence",
    body: "Real-time monitoring and structured guidance on European AML obligations relevant to football transactions, ownership, and operations.",
  },
  {
    icon: Workflow,
    title: "Compliance Workflows",
    body: "Purpose-built processes and tooling designed around the specific structures and timelines of professional football.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    body: "We don't just deliver a product. We work alongside your organization as a long-term compliance partner.",
  },
];

export const Solution = () => (
  <section id="how" className="py-24 lg:py-32 bg-surface-muted text-on-light">
    <div className="container-tight">
      <Reveal className="max-w-3xl">
        <div className="gold-rule mb-6" />
        <h2 className="text-3xl lg:text-5xl leading-tight text-on-light">
          What Trustify Sports Does
        </h2>
        <p className="mt-6 text-lg text-on-light-muted leading-relaxed">
          Trustify Sports provides the compliance infrastructure that football organizations need
          to meet European AML requirements without building it themselves. We handle the complexity
          so clubs, federations, and governing bodies can stay focused on performance.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px md:grid-cols-3 bg-[hsl(var(--on-light-border))] border border-[hsl(var(--on-light-border))] rounded-lg overflow-hidden">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <article className="h-full p-8 lg:p-10 bg-surface-light">
              <div className="h-11 w-11 rounded-md flex items-center justify-center bg-primary/10 border border-primary/30 mb-6">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-on-light">{f.title}</h3>
              <p className="text-sm text-on-light-muted leading-relaxed">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
