"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

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
    <Section id="faq" tone="default">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions small business owners ask us"
            description="Straight answers. If yours isn't here, message us on WhatsApp."
          />
        </Reveal>

        <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.02}>
                <div>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary sm:py-6"
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span className="pr-2 font-serif text-lg font-bold text-text-primary sm:text-xl">
                        {faq.question}
                      </span>
                      <Plus
                        className={cn(
                          "h-5 w-5 shrink-0 text-accent-primary transition-transform duration-300",
                          open && "rotate-45"
                        )}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduceMotion ? undefined : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-base leading-relaxed text-text-secondary sm:pb-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
