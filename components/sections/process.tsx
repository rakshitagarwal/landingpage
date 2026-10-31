"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-process-line]", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-process-list]",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-process-step]").forEach((step) => {
        gsap.from(step, {
          opacity: 0.25,
          x: -24,
          ease: "none",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 55%",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="scroll-mt-24 bg-bg-secondary/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="Strategy first. Then we stay on."
            description="A clear path from discovery to launch — designed to reduce ambiguity and keep delivery focused."
          />
        </Reveal>

        <div className="relative mt-16 max-w-3xl" data-process-list>
          <div className="absolute bottom-2 left-[1.15rem] top-2 w-px overflow-hidden bg-white/10">
            <div
              data-process-line
              className="h-full w-full origin-top bg-gradient-to-b from-accent-primary to-accent-secondary"
            />
          </div>
          <ol className="space-y-10">
            {processSteps.map((step) => (
              <li
                key={step.step}
                data-process-step
                className="relative grid grid-cols-[auto_1fr] gap-5 pl-0"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-accent-primary/40 bg-bg-primary font-mono text-xs text-accent-primary">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
