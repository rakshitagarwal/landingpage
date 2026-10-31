import { processExtras, processSteps } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <Section id="process" tone="default">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How a project usually runs"
            description="Four clear steps. You always know what happens next and what you get."
          />
        </Reveal>

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <li className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-accent-primary">
                    {step.step}
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-text-secondary">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {step.description}
                </p>
                <p className="mt-4 text-sm font-medium text-text-primary">
                  You get: {step.outcome}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
              <h3 className="font-serif text-xl font-bold text-text-primary">
                What we need from you
              </h3>
              <ul className="mt-4 space-y-2">
                {processExtras.whatWeNeed.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-text-secondary sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-7">
              <h3 className="font-serif text-xl font-bold text-text-primary">
                Revisions
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {processExtras.revisions}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
