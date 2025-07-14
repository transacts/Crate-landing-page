import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Plug, Bot, BarChart3, Users, RotateCw } from "lucide-react";

const crateFeatures = [
  {
    Icon: Plug,
    name: "Integrations",
    description: "Sync all your sales and finance tools effortlessly. Connect Shopify, Amazon, Meta Ads, and QuickBooks in seconds.",
    href: "#integrations",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-10"><div className="w-40 h-40 bg-gradient-to-br from-white to-gray-300 rounded-full blur-3xl"></div></div>,
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    Icon: Bot,
    name: "AI Assistant",
    description: "Plan tasks and generate content in seconds with advanced AI automation.",
    href: "#ai-assistant",
    cta: "Learn more",
    background: <div className="absolute -right-10 -top-10 opacity-10"><div className="w-32 h-32 bg-gradient-to-br from-white to-gray-300 rounded-lg blur-2xl"></div></div>,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: BarChart3,
    name: "Insights & Campaigns",
    description: "Launch and optimize ads automatically while instantly viewing trends and performance metrics.",
    href: "#insights-campaigns",
    cta: "Learn more",
    background: <div className="absolute -right-16 -top-16 opacity-10"><div className="w-36 h-36 bg-gradient-to-br from-white to-gray-300 rounded-xl blur-3xl"></div></div>,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: Users,
    name: "Collaborate",
    description: "Share tasks and feedback with your team in real-time collaboration.",
    href: "#collaborate",
    cta: "Learn more",
    background: <div className="absolute -right-12 -top-12 opacity-10"><div className="w-28 h-28 bg-gradient-to-br from-white to-gray-300 rounded-full blur-2xl"></div></div>,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: RotateCw,
    name: "Automations",
    description: "Set workflows to run on autopilot and eliminate repetitive busywork completely.",
    href: "#automations",
    cta: "Learn more",
    background: <div className="absolute -right-14 -top-14 opacity-10"><div className="w-32 h-32 bg-gradient-to-br from-white to-gray-300 rounded-lg blur-3xl"></div></div>,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function FeatureSection() {
  return (
    <section 
      id="features" 
      className="w-full flex flex-col items-center justify-center py-20 lg:py-32 bg-black text-white relative"
    >
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          Features
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl">
          Everything you need to automate your e-commerce operations in one unified platform
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <BentoGrid className="lg:grid-rows-2">
          {crateFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default FeatureSection;
