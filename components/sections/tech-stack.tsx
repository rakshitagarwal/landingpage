"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { techStack } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

function TechTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-end gap-10 pr-10 sm:gap-14 sm:pr-14"
      aria-hidden={ariaHidden || undefined}
    >
      {techStack.map((tech) => (
        <li
          key={`${ariaHidden ? "dup" : "main"}-${tech.name}`}
          className="flex w-[5.5rem] shrink-0 flex-col items-center gap-3 sm:w-24"
        >
          <span className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-[1.25rem] border border-border-subtle bg-bg-elevated sm:h-20 sm:w-20">
            <Image
              src={tech.src}
              alt=""
              width={80}
              height={80}
              className="h-full w-full object-contain p-2"
              draggable={false}
            />
          </span>
          <span className="w-full text-center text-xs font-medium leading-tight text-text-secondary sm:text-sm">
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechStack() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let frame = 0;
    // Steady right-to-left crawl; ignore OS “reduce motion” for this strip so
    // the marquee always matches the Clients-style continuous scroll.
    const speed = 0.65;

    const tick = () => {
      if (!pausedRef.current) {
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 0) {
          offsetRef.current -= speed;
          if (-offsetRef.current >= loopWidth) {
            offsetRef.current += loopWidth;
          }
          viewport.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="tech"
      aria-label="Technologies we use"
      className="scroll-mt-24 border-y border-border-subtle bg-bg-primary py-12 text-text-primary sm:py-14"
    >
      <div className="container-site mb-8 sm:mb-10">
        <Reveal>
          <span className="inline-flex rounded-md border border-border-subtle bg-bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-secondary">
            Tech we use
          </span>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Stack behind our websites, software and automation
          </h2>
          <p className="mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
            Proven tools for business sites, CRM platforms, WhatsApp automation,
            APIs and product MVPs—chosen so your build stays maintainable after
            launch.
          </p>
        </Reveal>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-bg-primary to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-bg-primary to-transparent sm:w-16"
          aria-hidden
        />
        <div ref={viewportRef} className="flex w-max will-change-transform">
          <div ref={trackRef} className="flex">
            <TechTrack />
            <TechTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
