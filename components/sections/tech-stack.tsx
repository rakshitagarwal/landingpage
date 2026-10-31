import { techStack } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechStack() {
  return (
    <Section tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Tech we use"
            title="Reliable tools for websites, apps and automation"
            description="We pick proven tech so your product is maintainable after launch."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-bg-card px-4 py-2.5 text-sm text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
