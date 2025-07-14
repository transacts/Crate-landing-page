"use client";

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function HeroSection() {
    const router = useRouter();
    
    return (
        <main className="overflow-visible">
                <section>
                    <div className="relative w-full">
                        <div className="absolute inset-0 z-0 sm:hidden pointer-events-none" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)'}} />
                        <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 text-center max-w-4xl mx-auto">
                            {/* Headline */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white px-2">
                                <span className="block">The Future of E-commerce is Here.</span>
                            </h1>
                            {/* Subheadline */}
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl text-gray-300 px-2">
                                Automate operations with one intelligent platform.
                            </p>
                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-4 w-full max-w-md sm:max-w-none">
                                <InteractiveHoverButton
                                  text="Start Now"
                                  defaultActive={true}
                                  onClick={() => router.push('/sign-in')}
                                />
                                <InteractiveHoverButton
                                  text="Book a Demo"
                                  onClick={() => {
                                    const demoSection = document.getElementById('demo');
                                    if (demoSection) {
                                      demoSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }}
                                />
                            </div>
                            {/* Removed Integrations Row and 'Works with' section */}
                            {/* Add extra space at the bottom on mobile */}
                            <div className="h-12 sm:h-0" />
                        </div>
                    </div>
                </section>
            <section className="pb-16 pt-8 md:pb-32">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Integration Showcase */}
                    <motion.div 
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-white">
                            Seamlessly Connects With
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                            One platform to rule them all. Connect your favorite tools and automate everything.
                        </p>
                    </motion.div>

                    {/* Integration Grid */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
                    >
                        {/* Desktop Layout */}
                        <div className="hidden lg:block relative">
                            {/* Connecting Lines SVG */}
                            <svg 
                                className="absolute inset-0 w-full h-full pointer-events-none" 
                                viewBox="0 0 800 300"
                                fill="none"
                            >
                                {/* Horizontal line */}
                                <motion.path
                                    d="M100 150 L700 150"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                />
                                {/* Vertical lines to each integration */}
                                <motion.path
                                    d="M200 150 L200 100"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                />
                                <motion.path
                                    d="M300 150 L300 200"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                />
                                <motion.path
                                    d="M500 150 L500 100"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                />
                                <motion.path
                                    d="M600 150 L600 200"
                                    stroke="url(#gradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                />
                                
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Integration Cards */}
                            <div className="grid grid-cols-4 gap-8 items-center h-[300px]">
                                {[
                                { name: "Shopify", logo: "/shopify-logo.png", description: "E-commerce platform", position: "self-start mt-8" },
                                { name: "Amazon", logo: "/amazon-icon.svg", description: "Marketplace", position: "self-start mt-8" },
                                { name: "Meta Ads", logo: "/meta.svg", description: "Advertising platform", position: "self-start mt-8" },
                                { name: "QuickBooks", logo: "/QuickBooks.svg", description: "Financial management", position: "self-start mt-8" }
                            ].map((integration, index) => (
                                    <motion.div
                                        key={integration.name}
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                                        className={cn(
                                            "flex flex-col items-center group cursor-pointer",
                                            integration.position
                                        )}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                            <Image
                                                src={integration.logo}
                                                alt={`${integration.name} logo`}
                                                width={48}
                                                height={48}
                                                className="w-12 h-12 object-contain"
                                            />
                                        </div>
                                        <h3 className="font-semibold text-white text-sm">{integration.name}</h3>
                                        <p className="text-gray-400 text-xs text-center">{integration.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { name: "Shopify", logo: "/shopify-logo.png", description: "E-commerce platform" },
                                { name: "Amazon", logo: "/amazon-icon.svg", description: "Marketplace" },
                                { name: "Meta Ads", logo: "/meta.svg", description: "Advertising platform" },
                                { name: "QuickBooks", logo: "/QuickBooks.svg", description: "Financial management" }
                            ].map((integration, index) => (
                                <motion.div
                                    key={integration.name}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                                    className="flex flex-col items-center group cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                        <Image
                                            src={integration.logo}
                                            alt={`${integration.name} logo`}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-white text-sm">{integration.name}</h3>
                                    <p className="text-gray-400 text-xs text-center">{integration.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div 
                        className="text-center mt-12 sm:mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-gray-300 text-sm sm:text-base">
                            Connect all your tools in minutes, not hours
                        </p>
                    </motion.div>
                </div>
            </section>
            </main>
    );
}