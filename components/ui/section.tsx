import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternating surface for clearer section start/end */
  tone?: "default" | "muted" | "deep";
  bordered?: boolean;
  "aria-label"?: string;
};

const toneClass = {
  default: "bg-bg-primary",
  muted: "bg-bg-secondary",
  deep: "bg-[#08080a]",
} as const;

export function Section({
  id,
  children,
  className,
  tone = "default",
  bordered = true,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "section-y scroll-mt-24",
        toneClass[tone],
        bordered && "border-y border-white/[0.08]",
        className
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
