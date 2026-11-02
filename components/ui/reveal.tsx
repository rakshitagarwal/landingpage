"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  x = 0,
  scale = 1,
  duration = 0.8,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const from: gsap.TweenVars = {
      opacity: 0,
      y,
      x,
    };
    if (scale !== 1) from.scale = scale;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        clearProps: "filter",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          el.style.opacity = "1";
          el.style.transform = "none";
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, x, scale, duration]);

  return (
    <div ref={ref} className={cn("opacity-100 will-change-transform", className)}>
      {children}
    </div>
  );
}
