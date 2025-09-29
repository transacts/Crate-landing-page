'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {

  return (
    <section 
      id="about" 
      className="bg-black text-white relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0 py-16 sm:py-20 lg:py-32">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="flex items-baseline justify-center gap-6 font-mono mb-4">
            <span className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider">ABOUT</span>
          </h2>
        </div>

        {/* Dotted Separator */}
        <div className="w-full border-b border-dashed border-neutral-600 mb-12 sm:mb-16"></div>

        {/* Content Grid with 3D Model */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="w-full lg:col-span-2 text-center lg:text-left order-2 lg:order-1 lg:pl-8 xl:pl-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed lg:leading-loose tracking-wide max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
              We&apos;re <span className="font-bold">CRATE</span> — an AI-powered operational agent for ecommerce brands who actually want to scale efficiently. 
              We connect your Shopify, Amazon, Meta Ads, and QuickBooks accounts through one unified dashboard that automates campaigns, 
              generates financial reports, and deploys smart tasks. Eliminate repetitive busywork so commerce teams 
              can focus on growth instead of manual processes. No complexity, no hassle — just intelligent automation that works.
            </p>
          </div>

          {/* Animated Integration Visual */}
          <div className="w-full lg:col-span-3 h-80 sm:h-96 lg:h-[600px] order-1 lg:order-2 relative flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
              {/* Central CRATE Hub */}
              <motion.div
                className="absolute z-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-bold text-2xl">CRATE</span>
              </motion.div>

              {/* Orbiting Integrations */}
              {[
                { name: "Shopify", logo: "/shopify-logo.png", angle: 0, color: "from-green-500 to-green-600" },
                { name: "Amazon", logo: "/amazon-icon.svg", angle: 90, color: "from-orange-500 to-orange-600" },
                { name: "Meta", logo: "/meta.svg", angle: 180, color: "from-blue-500 to-blue-600" },
                { name: "QuickBooks", logo: "/QuickBooks.svg", angle: 270, color: "from-purple-500 to-purple-600" }
              ].map((integration, index) => {
                const radius = 180;
                const angleRad = (integration.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <React.Fragment key={integration.name}>
                    {/* Connection Line */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`${50 + (x / 4)}%`}
                        y2={`${50 + (y / 4)}%`}
                        stroke={`url(#gradient-${integration.name})`}
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="10;0"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </motion.line>
                      <defs>
                        <linearGradient id={`gradient-${integration.name}`}>
                          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                        </linearGradient>
                      </defs>
                    </motion.svg>

                    {/* Integration Node */}
                    <motion.div
                      className={`absolute z-10 w-20 h-20 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg`}
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 40px)`
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: 1
                      }}
                      transition={{ 
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.5
                        },
                        opacity: {
                          duration: 0.5,
                          delay: 0.5 + index * 0.1
                        }
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={40}
                        height={40}
                        className="object-contain filter brightness-0 invert"
                      />
                    </motion.div>

                    {/* Data Flow Particles */}
                    <motion.div
                      className="absolute w-2 h-2 bg-blue-400 rounded-full z-5"
                      style={{
                        left: "50%",
                        top: "50%"
                      }}
                      animate={{
                        x: [0, x],
                        y: [0, y],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                        ease: "linear"
                      }}
                    />
                    <motion.div
                      className="absolute w-2 h-2 bg-blue-400 rounded-full z-5"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`
                      }}
                      animate={{
                        x: [-x, 0],
                        y: [-y, 0],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 1 + index * 0.5,
                        ease: "linear"
                      }}
                    />
                  </React.Fragment>
                );
              })}

              {/* Glow Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
