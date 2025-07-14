'use client';

import React from 'react';
import { Square } from 'lucide-react';


export default function About() {
  return (
    <section 
      id="about" 
      className="bg-black text-white relative overflow-hidden"
    >
     

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="flex items-baseline gap-6 font-mono">
            <span className="text-6xl lg:text-8xl font-bold text-white">01</span>
            <span className="text-5xl lg:text-7xl font-bold tracking-wider">ABOUT*</span>
          </h2>
          <div className="text-white border border-white p-2 hidden md:block">
            <Square size={32} strokeWidth={1} />
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="w-full border-b border-dashed border-neutral-600 mb-12"></div>

        {/* Main Content */}
        <div className="max-w-4xl">
          <p className="text-xl lg:text-2xl font-medium leading-relaxed lg:leading-loose tracking-wide">
            We&apos;re <span className="font-bold">CRATE</span> — an AI-powered operational agent for e-commerce brands who actually want to scale efficiently. 
            We connect your Shopify, Amazon, Meta Ads, and QuickBooks accounts through one unified dashboard that automates campaigns, 
            generates financial reports, and deploys smart tasks. Founded in 2024, we eliminate repetitive busywork so commerce teams 
            can focus on growth instead of manual processes. No complexity, no hassle — just intelligent automation that works.
          </p>
        </div>
      </div>
    </section>
  );
}
