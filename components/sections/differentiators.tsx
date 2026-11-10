import {
  Boxes,
  Code2,
  KeyRound,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { differentiators } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  MessagesSquare,
  Boxes,
  KeyRound,
};

export function Differentiators() {
  return (
    <SectionWrapper id="approach" tone="raised" aria-label="Why companies work with Obekai">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Why Obekai"
            title="A software partner for work that has to hold up."
            description="Companies come to us when the product matters to the business: it has to be clear, maintainable and delivered without surprises."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="card-surface card-hover-wash flex h-full gap-4 p-6 sm:p-7">
                  <span className="card-icon relative z-[1] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="relative z-[1]">
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
