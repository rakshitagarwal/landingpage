import Link from "next/link";
import {
  engagementModels,
  pricingAddOns,
  pricingNotes,
  pricingTiers,
} from "@/lib/site-config";
import { buttonLinkClass } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <SectionWrapper id="pricing" aria-label="Engagement and pricing">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="Clear scope before a price, and a price before we build."
            description="Exact public prices fit defined website packages. Product, SaaS and custom software are quoted after discovery. Ask for the proposal in INR or USD."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {engagementModels.map((model, index) => (
            <Reveal key={model.id} delay={index * 0.04}>
              <article className="card-surface h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-primary">
                  {model.approach}
                </p>
                <h3 className="font-heading mt-3 text-xl font-semibold text-text-primary">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {model.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div>
          <h3 className="font-heading text-2xl font-semibold text-text-primary">
            Current published starting points
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-text-secondary">
            These figures stay in the site configuration and can be edited.
            They are starting points in USD, not a promise that every project
            costs the lowest number.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article
                key={tier.id}
                className={cn(
                  "card-surface flex h-full flex-col p-6",
                  tier.highlighted && "border-accent-primary/40"
                )}
              >
                <h4 className="font-heading text-lg font-semibold text-text-primary">
                  {tier.name}
                </h4>
                <p className="mt-3 font-heading text-3xl font-semibold text-text-primary">
                  {tier.priceFrom}
                  <span className="ml-2 text-sm font-medium text-text-muted">
                    starting
                  </span>
                </p>
                <p className="mt-1 text-xs text-text-muted">{tier.range}</p>
                <p className="mt-3 text-sm text-text-secondary">{tier.timeline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {tier.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {tier.includes.slice(0, 4).map((item) => (
                    <li key={item} className="text-sm text-text-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Related starting prices
            </h3>
            <ul className="mt-4 divide-y divide-border-subtle border-y border-border-subtle">
              {pricingAddOns.map((addon) => (
                <li
                  key={addon.name}
                  className="flex items-baseline justify-between gap-4 py-3 text-sm"
                >
                  <span className="text-text-secondary">{addon.name}</span>
                  <span className="shrink-0 font-medium text-text-primary">
                    {addon.priceFrom}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-6">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Commercial terms
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {pricingNotes.paymentTerms}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {pricingNotes.gst}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {pricingNotes.notIncluded}
            </p>
            <Link
              href="/contact"
              className={cn(buttonLinkClass("primary"), "mt-6")}
            >
              Request a quote in INR or USD
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
