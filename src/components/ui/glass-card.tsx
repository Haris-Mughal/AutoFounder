import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const glassCardVariants = cva(
  "relative backdrop-blur-md border border-card-border rounded-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-card shadow-glass",
        solid: "bg-card/80 shadow-glass",
        hero: "bg-gradient-card shadow-glow border-primary/20",
        feature: "bg-gradient-card shadow-glass hover:shadow-glow transition-all duration-300 hover:border-primary/30",
        input: "bg-card/40 shadow-glass border-card-border/50 hover:border-primary/50 focus-within:border-primary/70 transition-all duration-300",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };