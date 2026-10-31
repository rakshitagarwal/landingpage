"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions founders ask us."
            description="Quick clarity on how we work, what we build, and what to expect when you reach out."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/8 border-y border-white/8">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.02}>
                <div>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-primary"
                      onClick={() => setOpenIndex(open ? null : index)}
                    >
                      <span className="font-serif text-lg font-bold text-text-primary sm:text-xl">
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
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-sm leading-relaxed text-text-secondary sm:text-base">
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
    </section>
  );
}
