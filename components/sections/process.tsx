import { processSteps } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <SectionWrapper id="process" aria-label="Delivery process">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A delivery path you can follow."
            description="Four stages, from the business problem to a launched product with the source code in your hands."
          />
        </Reveal>

        <div className="relative grid gap-4 md:grid-cols-4 md:gap-5">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-border-subtle md:block"
            aria-hidden
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <article className="card-surface relative h-full p-5 sm:p-6">
                <span className="relative z-[1] inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-primary/40 bg-bg-primary font-heading text-sm font-semibold text-accent-primary">
                  {step.step}
                </span>
                <h3 className="font-heading mt-5 text-xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                  {step.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
                <p className="mt-4 border-t border-border-subtle pt-4 text-sm text-text-primary">
                  {step.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
