import { whoWeHelp } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhoWeHelp() {
  return (
    <SectionWrapper id="who-we-help" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Industries we understand"
            title="Built for how Indian small businesses actually work"
            description="We combine engineering with domain context — from the counter to WhatsApp — so what we build fits your day."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="card-surface card-lift flex h-full flex-col p-6 sm:p-7">
                <span className="font-mono text-xs text-accent-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.problem}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
