import { getWhatsAppLink, pricingTiers } from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" tone="muted">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing guide"
            title="Starting points in ₹ — final quote after a free call"
            description="Fill in the placeholder amounts in site-config when you're ready. Every project gets a fixed-price quote before work starts."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 0.05}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-[1.25rem] border p-6 sm:p-7",
                  "highlighted" in tier && tier.highlighted
                    ? "border-accent-primary/40 bg-bg-elevated"
                    : "border-white/10 bg-bg-card"
                )}
              >
                <h3 className="font-serif text-2xl font-bold text-text-primary">
                  {tier.name}
                </h3>
                <p className="mt-4 font-serif text-3xl font-bold text-accent-primary">
                  {tier.priceFrom}
                  <span className="ml-1 text-sm font-sans font-medium text-text-secondary">
                    starting from
                  </span>
                </p>
                <p className="mt-2 text-sm text-text-secondary">{tier.timeline}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                  {tier.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
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
                <a
                  href={getWhatsAppLink(
                    `Hi Pixelnest, I'd like a quote for ${tier.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonLinkClass("primary"), "mt-6 w-full")}
                >
                  Get a quote on WhatsApp
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
