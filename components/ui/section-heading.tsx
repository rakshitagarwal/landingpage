import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 flex flex-col gap-3",
            align === "center" && "items-center"
          )}
        >
          <span
            className="h-0.5 w-10 rounded-full bg-accent-primary"
            aria-hidden
          />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-primary">
            {eyebrow}
          </p>
        </div>
      ) : (
        <span
          className={cn(
            "mb-5 block h-0.5 w-10 rounded-full bg-accent-primary",
            align === "center" && "mx-auto"
          )}
          aria-hidden
        />
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="prose-measure mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
