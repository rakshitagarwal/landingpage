import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { credibilityStrip } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function CredibilityStrip() {
  return (
    <SectionWrapper
      id="capability"
      tone="paper"
      aria-label="Product categories we engineer"
    >
      <div className="section-stack">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What we ship"
              title="Product work across the systems businesses rely on."
              description="A clear view of the product categories we engineer. Client names and logos appear here only when approved for publication."
            />
            <Link
              href="/work"
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-primary"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityStrip.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <article className="card-surface card-hover-wash h-full p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                  0{index + 1}
                </p>
                <h3 className="font-heading mt-3 text-xl font-semibold text-text-primary">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
