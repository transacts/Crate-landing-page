import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[36rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  // href,
  cta,
  onClick,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
  onClick?: () => void;
}) => (
  <div
    key={name}
    onClick={onClick}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // CRATE dark theme with black/gray shiny corner borders
      "bg-black/80 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:bg-black/90",
      "hover:border-gray-400/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
      "before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-br before:from-gray-600/40 before:via-gray-700/20 before:to-transparent before:opacity-70 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-10",
      onClick && "cursor-pointer",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 sm:p-8 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 sm:h-14 sm:w-14 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2">
        {name}
      </h3>
      <p className="max-w-lg text-gray-400 text-base sm:text-lg leading-relaxed">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" size="sm" className="pointer-events-auto text-white hover:bg-gray-800">
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03]" />
  </div>
);

export { BentoCard, BentoGrid };