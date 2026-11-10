import Image from "next/image";
import { techGroups } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { SectionWrapper } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function TechStack() {
  return (
    <SectionWrapper id="technology" aria-label="Technology expertise">
      <div className="section-stack">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="The stack we use to ship and keep systems running."
            description="Tools are chosen for the product, not collected for a logo wall. These are the ones we reach for most often."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-6">
          {techGroups.map((group, index) => (
            <Reveal
              key={group.name}
              delay={index * 0.04}
              className={cn(
                "h-full",
                index < 2 ? "md:col-span-3" : "md:col-span-2"
              )}
            >
              <article className="card-surface flex h-full flex-col p-5 sm:p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-primary">
                  {group.name}
                </h3>
                <ul className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-secondary/50 px-3 py-2.5"
                    >
                      {"src" in item && item.src ? (
                        <Image
                          src={item.src}
                          alt=""
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                      ) : (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border-subtle text-[10px] font-semibold text-accent-primary">
                          {item.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span className="text-sm font-medium text-text-primary">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
