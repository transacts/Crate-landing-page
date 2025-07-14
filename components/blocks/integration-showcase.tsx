"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

const integrations = [
  {
    name: "Shopify",
    logo: "/shopify-logo.png",
    description: "E-commerce platform"
  },
  {
    name: "Amazon",
    logo: "/amazon-icon.svg",
    description: "Marketplace"
  },
  {
    name: "Meta Ads",
    logo: "/meta.svg",
    description: "Advertising platform"
  },
  {
    name: "QuickBooks",
    logo: "/QuickBooks.svg",
    description: "Financial management"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1] as const
    }
  }
};

// const lineVariants = {
//   hidden: { 
//     pathLength: 0,
//     opacity: 0
//   },
//   visible: { 
//     pathLength: 1,
//     opacity: 0.3,
//     transition: {
//       duration: 1.5,
//       ease: [0.4, 0, 0.2, 1] as const,
//       delay: 0.8
//     }
//   }
// };

export function IntegrationShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const amazonRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const quickbooksRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Seamlessly Connects With
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One platform to rule them all. Connect your favorite tools and automate everything.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block relative" ref={containerRef}>
            {/* Integration Cards */}
            <div className="flex flex-row justify-center items-start gap-8 max-w-4xl mx-auto">
              {integrations.map((integration, index) => {
                const refs = [shopifyRef, amazonRef, metaRef, quickbooksRef];
                
                return (
                  <motion.div
                    key={integration.name}
                    ref={refs[index]}
                    variants={itemVariants}
                    className="flex flex-col items-center group cursor-pointer min-w-[120px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-start justify-center mb-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-white text-sm">{integration.name}</h3>
                    <p className="text-gray-400 text-xs text-center">{integration.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-6">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                variants={itemVariants}
                className="flex flex-col items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
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
  ); 
}
