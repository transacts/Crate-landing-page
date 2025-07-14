import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glow: "bg-primary text-primary-foreground shadow-[0_0_16px_4px_rgba(99,102,241,0.6)] hover:shadow-[0_0_24px_8px_rgba(99,102,241,0.8)] border-2 border-indigo-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export interface GetStartedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

export const GetStartedButton = React.forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  ({ children = "Get Started", href, ...props }, ref) => {
    const buttonContent = (
      <span className="text-white text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
        {children}
      </span>
    );
    if (href) {
      return (
        <a href={href}>
          <button
            ref={ref}
            className="bg-black/80 border-4 border-white shadow-2xl rounded-2xl px-10 py-4 flex items-center justify-center transition hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-white/30"
            {...props}
          >
            {buttonContent}
          </button>
        </a>
      );
    }
    return (
      <button
        ref={ref}
        className="bg-black/80 border-4 border-white shadow-2xl rounded-2xl px-10 py-4 flex items-center justify-center transition hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-white/30"
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);
GetStartedButton.displayName = "GetStartedButton";

export { Button, buttonVariants }
