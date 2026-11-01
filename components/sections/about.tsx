import { aboutContent, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <SectionWrapper id="about" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={`About ${siteConfig.name}`}
            description={aboutContent.story}
          />
        </Reveal>
        <p className="text-sm text-text-secondary sm:text-base">
          <span className="font-semibold text-text-primary">Where we work: </span>
          {siteConfig.whereWeWork}
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {aboutContent.principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="card-surface h-full p-5 sm:p-6">
                <h3 className="font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
