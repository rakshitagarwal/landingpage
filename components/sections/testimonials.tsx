"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = testimonials[index];

  const previous = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="scroll-mt-24 bg-bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What partners say when the work holds up."
            description="Demo content for layout and interaction only. Replace with real reviews before publishing."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-card p-8 sm:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-100">
              Demo content — not a verified customer review
            </div>
            <div className="min-h-[150px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="font-serif text-xl leading-relaxed text-text-primary sm:text-2xl"
                >
                  “{current.quote}”
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-text-primary">{current.name}</p>
                <p className="text-sm text-text-secondary">{current.company}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Previous testimonial"
                  onClick={previous}
                  className="px-2.5"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  aria-label="Next testimonial"
                  onClick={next}
                  className="px-2.5"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
