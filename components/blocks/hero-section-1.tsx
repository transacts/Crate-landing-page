import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { Marquee } from "@/components/ui/marquee";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { WritingText } from "@/components/animate-ui/text/writing";
import { GetStartedButton } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: "spring" as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export function HeroSection() {
    return (
        <main className="overflow-visible">
                <section>
                    <div className="relative w-full">
                        <div className="absolute inset-0 z-0 sm:hidden pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)'}} />
                        <div className="relative z-10 flex flex-col items-center gap-8 px-4 pt-12 pb-16 sm:gap-12 sm:px-0 sm:pt-24 sm:pb-32 text-center max-w-2xl mx-auto">
                            {/* Headline */}
                            <h1 className="text-[2.8rem] sm:text-[5rem] font-extrabold leading-[1.08] sm:leading-[1.08] mb-6 sm:mb-10 text-center">
                                <span className="block">Automate Your Store.</span>
                                <span className="block mt-2">Grow Faster.</span>
                            </h1>
                            {/* Subheadline */}
                            <p className="text-base sm:text-xl leading-relaxed sm:leading-tight mb-8 sm:mb-10 max-w-xl mx-auto text-center text-gray-300">
                                Connect your store, ads, and finance tools. Run campaigns, create content, and manage it all with AI—no busywork.
                            </p>
                            {/* Buttons */}
                            <div className="flex flex-row gap-6 justify-center items-center w-full max-w-md mx-auto mb-8 sm:mb-12">
                                <a href="#get-started">
                                  <InteractiveHoverButton
                                    text="Get Started"
                                    className="px-10 py-4 text-2xl sm:text-3xl font-extrabold"
                                    style={{ fontSize: '2rem' }}
                                  />
                                </a>
                                <a href="#link">
                                    <button
                                        className="bg-white border-4 border-black text-black rounded-2xl px-7 py-3 flex items-center justify-center text-lg sm:text-xl font-bold uppercase tracking-wide shadow-xl transition hover:bg-black hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                                    >
                                        Demo
                                    </button>
                                </a>
                            </div>
                            {/* Removed Integrations Row and 'Works with' section */}
                            {/* Add extra space at the bottom on mobile */}
                            <div className="h-12 sm:h-0" />
                        </div>
                    </div>
                </section>
            <section className="pb-16 pt-16 md:pb-32">
                <div className="w-full mt-8 sm:mt-12 flex flex-col items-center">
                    {/* customer logos ... */}
                    </div>
                </section>
            </main>
    );
}