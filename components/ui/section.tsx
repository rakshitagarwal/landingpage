import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Alternate secondary surface for rhythm */
  muted?: boolean;
  bordered?: boolean;
  "aria-label"?: string;
};

/**
 * Section shell — colors come from html[data-color-mode], not per-section themes.
 */
export function SectionWrapper({
  id,
  children,
  className,
  muted = false,
  bordered = true,
  "aria-label": ariaLabel,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "section-y scroll-mt-24 text-text-primary",
        muted ? "bg-bg-secondary" : "bg-bg-primary",
        bordered && "border-y border-border-subtle",
        className
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export const Section = SectionWrapper;
