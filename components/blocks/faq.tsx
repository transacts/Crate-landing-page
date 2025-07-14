"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 sm:py-16 w-full bg-background",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent px-4 sm:px-0">
              {title}
            </h2>
            {description && (
              <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-2 px-4 sm:px-0">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg text-center"
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-lg mb-4">
                <Mail className="h-4 w-4 text-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">
                {contactInfo.title}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                {contactInfo.description}
              </p>
              <Button size="sm" onClick={contactInfo.onContact} className="w-full sm:w-auto">
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group rounded-lg cursor-pointer",
        "transition-all duration-300 ease-in-out",
        "border border-border",
        "hover:border-foreground/20 hover:shadow-md hover:shadow-foreground/5",
        isOpen
          ? "bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50 border-foreground/30"
          : "hover:bg-muted/40 hover:scale-[1.02]"
      )}
      whileHover={{ 
        scale: isOpen ? 1 : 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 py-4 sm:py-5 h-auto justify-between hover:bg-transparent text-left cursor-pointer min-h-[56px] sm:min-h-[60px]"
      >
        <h3
          className={cn(
            "text-base sm:text-lg font-medium transition-colors duration-300 text-left pr-3 sm:pr-4 leading-relaxed",
            "text-foreground/70 break-words overflow-hidden",
            isOpen && "text-foreground",
            isHovered && !isOpen && "text-foreground/90"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isHovered ? 1.2 : isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-0.5 rounded-lg flex-shrink-0",
            "transition-colors duration-300",
            isOpen ? "text-foreground" : "text-muted-foreground",
            isHovered && "text-foreground/80"
          )}
        >
          <ChevronDown className="h-5 w-5 sm:h-4 sm:w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };