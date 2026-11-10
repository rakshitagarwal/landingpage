import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-[8px] bg-btn-primary-bg text-btn-primary-fg hover:bg-btn-primary-hover active:scale-[0.98]",
        secondary:
          "rounded-[8px] border border-btn-secondary-border bg-transparent text-text-primary hover:border-copper hover:bg-bg-card",
        ghost:
          "rounded-[8px] text-text-secondary hover:bg-bg-card hover:text-text-primary",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-10 min-h-10 px-4 text-xs",
        lg: "h-12 min-h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export function buttonLinkClass(
  variant: "primary" | "secondary" | "ghost" = "primary",
  size: "default" | "sm" | "lg" = "default"
) {
  return buttonVariants({ variant, size });
}
