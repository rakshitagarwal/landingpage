"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { solutions } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

gsap.registerPlugin(ScrollTrigger);

export function Solutions() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const cards = list.querySelectorAll<HTMLElement>("[data-solution-card]");
    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        const media = card.querySelector("[data-solution-media]");
        gsap.fromTo(
          card,
          { y: 60, opacity: 0.4 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 45%",
              scrub: true,
            },
          }
        );
        if (media) {
          gsap.fromTo(
            media,
            { y: 40, scale: 0.96 },
            {
              y: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 40%",
                scrub: true,
              },
            }
          );
        }
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Build"
            title="Solution categories with real product depth."
            description="Illustrative product types we design and develop — not claims about specific client projects."
          />
        </Reveal>

        <div ref={listRef} className="mt-14 space-y-6">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              data-solution-card
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-bg-card"
            >
              <div className="grid items-stretch lg:grid-cols-2">
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <span className="inline-flex w-fit rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-text-secondary">
                    {solution.tags[0]}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-text-primary sm:text-3xl">
                    {solution.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                    {solution.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  data-solution-media
                  className="relative min-h-[240px] border-t border-white/8 bg-bg-secondary p-6 lg:border-l lg:border-t-0"
                >
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      background:
                        index % 2 === 0
                          ? "radial-gradient(circle at 70% 30%, rgba(46,242,255,0.18), transparent 50%)"
                          : "radial-gradient(circle at 30% 70%, rgba(125,255,179,0.16), transparent 50%)",
                    }}
                  />
                  <div className="relative mx-auto mt-4 h-full max-w-sm rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.9)]">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                      <span className="h-2 w-2 rounded-full bg-white/25" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1 space-y-2">
                        <div className="h-8 rounded-lg bg-white/8" />
                        <div className="h-8 rounded-lg bg-white/6" />
                        <div className="h-8 rounded-lg bg-white/6" />
                      </div>
                      <div className="col-span-2 space-y-2">
                        <div className="h-4 w-2/3 rounded bg-white/15" />
                        <div className="h-24 rounded-xl border border-white/10 bg-gradient-to-br from-accent-primary/20 to-transparent" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-12 rounded-lg bg-white/8" />
                          <div className="h-12 rounded-lg bg-white/8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
