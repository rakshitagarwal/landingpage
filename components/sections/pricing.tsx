import { getWhatsAppLink, pricingAddOns, pricingNotes, pricingTiers } from "@/lib/site-config";
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
            eyebrow="Pricing"
            title="Clear starting prices in ₹"
            description="Final quotes are fixed after a free call. Ranges below help you plan."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => {
            const hasPrice = Boolean(tier.priceFrom?.trim());
            return (
              <Reveal key={tier.id} delay={index * 0.05}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-[1.25rem] border p-6 sm:p-7",
                    tier.highlighted
                      ? "border-accent-primary/40 bg-bg-elevated"
                      : "border-white/10 bg-bg-card"
                  )}
                >
                  {tier.highlighted ? (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-primary">
                      Most popular
                    </p>
                  ) : null}
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {tier.name}
                  </h3>
                  {hasPrice ? (
                    <>
                      <p className="mt-4 font-serif text-3xl font-bold text-accent-primary">
                        {tier.priceFrom}
                        <span className="ml-1 text-sm font-sans font-medium text-text-secondary">
                          from
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Typical range: {tier.range}
                      </p>
                    </>
                  ) : null}
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
                  <p className="mt-4 text-sm text-text-primary">
                    <span className="font-semibold">Best for: </span>
                    {tier.bestFor}
                  </p>
                  <a
                    href={getWhatsAppLink(
                      `Hi Pixelnest, I'd like a quote for ${tier.name}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonLinkClass("primary"), "mt-6 w-full")}
                  >
                    {hasPrice ? "Get a quote on WhatsApp" : "Get a quote"}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="rounded-[1.25rem] border border-white/10 bg-bg-card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-text-primary">
              Add-ons
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {pricingAddOns.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start justify-between gap-3 border-b border-white/5 pb-3 text-sm last:border-0"
                >
                  <span className="text-text-secondary">{item.name}</span>
                  <span className="shrink-0 font-medium text-text-primary">
                    from {item.priceFrom}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-text-secondary">
              <p>{pricingNotes.notIncluded}</p>
              <p className="font-medium text-text-primary">{pricingNotes.gst}</p>
              <p>{pricingNotes.paymentTerms}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
