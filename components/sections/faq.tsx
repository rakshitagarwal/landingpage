"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SectionWrapper id="faq" tone="raised">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before you commit"
            description="Ownership, support, payments and how we work with remote teams. If your question is missing, get in touch."
          />
        </Reveal>

        <div className="w-full divide-y divide-border-subtle border-y border-border-subtle">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <Reveal key={faq.question} delay={Math.min(index * 0.03, 0.24)} y={24}>
                <div className="transition-colors duration-300 hover:bg-bg-secondary/40">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary sm:py-6"
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span className="pr-2 font-serif text-lg font-bold text-text-primary sm:text-xl">
                        {faq.question}
                      </span>
                      <Plus
                        className={cn(
                          "h-5 w-5 shrink-0 text-accent-primary transition-transform duration-300 ease-out",
                          open && "rotate-45"
                        )}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  {/*
                    Keep every answer in the HTML (not unmounted) so crawlers and
                    “view source” retrieval always see complete FAQ content.
                  */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!open}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-8 text-base leading-relaxed text-text-secondary sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
