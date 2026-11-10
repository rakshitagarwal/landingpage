import { whyObekai } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why" tone="paper" aria-label="Why work with Obekai">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-primary">
            Engineering partner
          </p>
          <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl lg:leading-[1.08]">
            You are hiring a team that owns the technical outcome.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Obekai is not a place to send a ticket and wait. We sit with the
            problem, propose an architecture, and stay accountable through
            launch. The commercial terms are as explicit as the code.
          </p>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {whyObekai.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="card-surface h-full p-5">
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
