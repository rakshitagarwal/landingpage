import {
  Bot,
  Database,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";
import { capabilities } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<string, LucideIcon> = {
  Globe,
  Database,
  Bot,
  Users,
};

export function TrustStrip() {
  return (
    <SectionWrapper
      id="capabilities"
      aria-label="What we deliver"
      muted
    >
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Technology that earns its place"
            description="Clear builds for getting found online, running day-to-day operations, and answering customers on WhatsApp — without the enterprise fluff."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = icons[item.icon] ?? Globe;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="card-surface card-lift flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
