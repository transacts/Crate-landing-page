import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { FaPlug, FaRobot, FaBullhorn, FaChartBar, FaUsers, FaSync } from "react-icons/fa";

export function FeatureSection() {
  return (
    <section id="features" className="w-full flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
      <BentoGrid className="mx-auto max-w-5xl grid-cols-3 auto-rows-[18rem]">
        <BentoCard
          name="Integrations"
          className="col-span-1 row-span-2"
          background={null}
          Icon={FaPlug}
          description="Sync all your sales and finance tools effortlessly."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="AI Assistant"
          className="col-span-1 row-span-1"
          background={null}
          Icon={FaRobot}
          description="Plan tasks and generate content in seconds."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Campaigns"
          className="col-span-1 row-span-1"
          background={null}
          Icon={FaBullhorn}
          description="Launch and optimize ads automatically."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Insights"
          className="col-span-1 row-span-1"
          background={null}
          Icon={FaChartBar}
          description="Instantly view trends and performance."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Collaborate"
          className="col-span-1 row-span-1"
          background={null}
          Icon={FaUsers}
          description="Share tasks and feedback with your team."
          href="#"
          cta="Learn More"
        />
        <BentoCard
          name="Automations"
          className="col-span-1 row-span-1"
          background={null}
          Icon={FaSync}
          description="Set workflows to run on autopilot."
          href="#"
          cta="Learn More"
        />
      </BentoGrid>
    </section>
  );
}