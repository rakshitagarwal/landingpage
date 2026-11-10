import { workingPrinciples } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Principles() {
  return (
    <SectionWrapper id="principles" tone="raised" aria-label="Working principles">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Working principles"
            title="The standard, until a client review is approved for publication."
            description="Testimonials appear here only when they are genuine and the client has agreed to be named. These are the rules every engagement follows in the meantime."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {workingPrinciples.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex h-full gap-4 border-t border-border-subtle pt-5">
                <span className="font-heading text-sm font-semibold text-accent-primary">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
