"use client";

import React, { useRef, useState } from "react";
import { BentoCard } from "@/components/ui/bento-grid";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Plug, Bot, BarChart3, Users, RotateCw } from "lucide-react";
import Image from "next/image";
import { FeatureModal } from "@/components/ui/feature-modal";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { Component as Globe } from "@/components/ui/globe";
import { InsightsChart } from "@/components/ui/insights-chart";

// Integration showcase component with animated beams
function IntegrationsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const crateRef = useRef<HTMLDivElement>(null);
  const shopifyRef = useRef<HTMLDivElement>(null);
  const amazonRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const quickbooksRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      {/* Integration logos positioned closer to center */}
      <div 
        ref={shopifyRef}
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/20"
      >
        <Image 
          src="/shopify-logo.png" 
          alt="Shopify" 
          width={32} 
          height={32} 
          className="rounded-md"
        />
      </div>
      
      <div 
        ref={amazonRef}
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/20"
      >
        <Image 
          src="/amazon-icon.svg" 
          alt="Amazon" 
          width={32} 
          height={32} 
          className="rounded-md"
        />
      </div>
      
      <div 
        ref={metaRef}
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/20"
      >
        <Image 
          src="/meta.svg" 
          alt="Meta" 
          width={32} 
          height={32} 
          className="rounded-md"
        />
      </div>
      
      <div 
        ref={quickbooksRef}
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg border border-white/20"
      >
        <Image 
          src="/QuickBooks.svg" 
          alt="QuickBooks" 
          width={32} 
          height={32} 
          className="rounded-md"
        />
      </div>

      {/* Central CRATE logo */}
      <div 
        ref={crateRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20 z-10"
      >
        <Image 
          src="/crate-logo.png" 
          alt="CRATE Logo" 
          width={40} 
          height={40} 
          className="rounded-lg"
        />
      </div>

      {/* Animated beams connecting integrations to CRATE */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={shopifyRef}
        toRef={crateRef}
        gradientStartColor="#10b981"
        gradientStopColor="#3b82f6"
        delay={0}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={amazonRef}
        toRef={crateRef}
        gradientStartColor="#f97316"
        gradientStopColor="#8b5cf6"
        delay={0.5}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={metaRef}
        toRef={crateRef}
        gradientStartColor="#2563eb"
        gradientStopColor="#06b6d4"
        delay={1}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={quickbooksRef}
        toRef={crateRef}
        gradientStartColor="#3b82f6"
        gradientStopColor="#10b981"
        delay={1.5}
        duration={3}
      />
    </div>
  );
}

const crateFeatures = [
  {
    Icon: Plug,
    name: "Integrations",
    description: "Sync all your sales and finance tools effortlessly. Connect Shopify, Amazon, Meta Ads, and QuickBooks in seconds.",
    href: "#integrations",
    cta: "Learn more",
    background: <IntegrationsShowcase />,
  },
  {
    Icon: Bot,
    name: "AI Assistant",
    description: "Plan tasks and generate content in seconds with advanced AI automation.",
    href: "#ai-assistant",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* ChatGPT Logo Square with Glass Effect */}
        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    Icon: BarChart3,
    name: "Insights & Campaigns",
    description: "Launch and optimize ads automatically while instantly viewing trends and performance metrics.",
    href: "#insights-campaigns",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <InsightsChart />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Collaborate",
    description: "Share tasks and feedback with your team in real-time collaboration.",
    href: "#collaborate",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <Globe 
          className="w-full h-full text-white [--guide-color:white] [--line-color-1:white] [--line-color-2:white] [--line-color-3:white]" 
          fullGlobe={false}
        />
      </div>
    ),
  },
  {
    Icon: RotateCw,
    name: "Automations",
    description: "Set workflows to run on autopilot and eliminate repetitive busywork completely.",
    href: "#automations",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <CpuArchitecture 
          className="text-white/40" 
          width="120%" 
          height="120%" 
          text="AUTO" 
          showCpuConnections={true}
          animateText={false}
          animateLines={true}
          animateMarkers={true}
        />
      </div>
    ),
  },
];

export function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState<typeof crateFeatures[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureClick = (feature: typeof crateFeatures[0]) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <section 
      id="features" 
      className="w-full flex flex-col items-center justify-center py-16 sm:py-20 lg:py-32 bg-black text-white relative"
    >
      <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
          Features
        </h2>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
          Everything you need to automate your e-commerce operations in one unified platform
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stack all cards vertically */}
        <div className="lg:hidden flex flex-col gap-6">
          {crateFeatures.map((feature) => (
            <div key={feature.name} className="w-full">
              <BentoCard 
                {...feature} 
                className="h-80 sm:h-96 cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
                onClick={() => handleFeatureClick(feature)}
              />
            </div>
          ))}
        </div>
        
        {/* Desktop Layout - Original complex layout */}
        <div className="hidden lg:flex flex-row gap-4 h-[36rem]">
          {/* Left column - Integrations card (30% width) */}
          <div className="w-[30%]">
            <BentoCard 
              {...crateFeatures[0]} 
              className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
              onClick={() => handleFeatureClick(crateFeatures[0])}
            />
          </div>
          
          {/* Right column - 4 smaller cards (70% width) */}
          <div className="w-[70%] flex flex-col gap-4">
            {/* Top row - 2 cards */}
            <div className="flex gap-4 flex-1">
              <div className="flex-1">
                <BentoCard 
                  {...crateFeatures[1]} 
                  className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
                  onClick={() => handleFeatureClick(crateFeatures[1])}
                />
              </div>
              <div className="flex-1">
                <BentoCard 
                  {...crateFeatures[2]} 
                  className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
                  onClick={() => handleFeatureClick(crateFeatures[2])}
                />
              </div>
            </div>
            
            {/* Bottom row - 2 cards */}
            <div className="flex gap-4 flex-1">
              <div className="flex-1">
                <BentoCard 
                  {...crateFeatures[3]} 
                  className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
                  onClick={() => handleFeatureClick(crateFeatures[3])}
                />
              </div>
              <div className="flex-1">
                <BentoCard 
                  {...crateFeatures[4]} 
                  className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-200" 
                  onClick={() => handleFeatureClick(crateFeatures[4])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      {selectedFeature && (
        <FeatureModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          feature={selectedFeature}
        />
      )}
    </section>
  );
}

export default FeatureSection;
