import { Boxes, Layers, Sparkles } from "lucide-react";
import { pricingNotes, pricingTiers } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const tierIcons = [Layers, Sparkles, Boxes] as const;

export function Pricing() {
  return (
    <SectionWrapper id="pricing" muted>
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing from day one"
            description="Starting prices in USD. Final quotes are fixed after a discovery call, and we can quote in your currency."
          />
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const hasPrice = Boolean(tier.priceFrom?.trim());
            const inverted = tier.highlighted;
            const Icon = tierIcons[index] ?? Layers;
            return (
              <Reveal
                key={tier.id}
                delay={index * 0.1}
                y={48}
                scale={0.96}
                className="flex h-full"
              >
                <article
                  className={cn(
                    "card-hover-wash group relative flex h-full w-full flex-col rounded-[1.25rem] border p-6 sm:p-7",
                    inverted
                      ? "border-accent-primary/40 bg-bg-elevated shadow-[var(--shadow-card)]"
                      : "card-surface"
                  )}
                >
                  {inverted ? (
                    <p className="relative z-[1] mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-primary">
                      Most popular
                    </p>
                  ) : null}
                  <div className="card-icon relative z-[1] mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="relative z-[1] font-serif text-2xl font-bold text-text-primary">
                    {tier.name}
                  </h3>
                  {hasPrice ? (
                    <>
                      <p className="relative z-[1] mt-4 font-serif text-3xl font-bold text-accent-primary">
                        {tier.priceFrom}
                        <span className="ml-1 text-sm font-sans font-medium text-text-secondary">
                          from
                        </span>
                      </p>
                      <p className="relative z-[1] mt-1 text-sm text-text-secondary">
                        Typical range: {tier.range}
                      </p>
                    </>
                  ) : null}
                  <p className="relative z-[1] mt-2 text-sm text-text-secondary">
                    {tier.timeline}
                  </p>
                  <p className="relative z-[1] mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {tier.description}
                  </p>
                  <ul className="relative z-[1] mt-5 flex-1 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="relative z-[1] mt-4 text-sm text-text-primary">
                    <span className="font-semibold">Best for: </span>
                    {tier.bestFor}
                  </p>
                  <a
                    href="/contact"
                    className={cn(
                      buttonLinkClass("primary"),
                      "card-cta relative z-[1] mt-6 w-full"
                    )}
                  >
                    Get in touch
                    <span className="sr-only"> for {tier.name}</span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="text-center text-sm text-text-secondary">
          {pricingNotes.gst}
        </p>
      </div>
    </SectionWrapper>
  );
}
