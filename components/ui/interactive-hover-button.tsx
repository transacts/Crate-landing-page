import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  defaultActive?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, defaultActive = false, onClick, ...props }, ref) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (defaultActive) {
      setIsActive(!isActive);
    }
    onClick?.(e);
  };

  const shouldShowActive = defaultActive ? isActive : false;

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-full sm:w-48 h-12 cursor-pointer overflow-hidden rounded-lg border bg-background p-3 text-center font-semibold min-w-[140px] max-w-[200px] sm:max-w-none",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className={cn(
        "inline-block translate-x-1 transition-all duration-300",
        shouldShowActive ? "translate-x-12 opacity-0" : "group-hover:translate-x-12 group-hover:opacity-0"
      )}>
        {text}
      </span>
      <div className={cn(
        "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300",
        shouldShowActive ? "-translate-x-1 opacity-100" : "group-hover:-translate-x-1 group-hover:opacity-100"
      )}>
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300",
        shouldShowActive ? "left-[0%] top-[0%] h-full w-full scale-[1.8] bg-primary" : "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
