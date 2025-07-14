"use client";

import { Hero } from "@/components/blocks/hero";
import { Footer } from "@/components/blocks/footer-section";
import { FaqSection } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";
import { FeatureSection } from "@/components/blocks/feature-section";
import AboutSection from "@/components/blocks/about-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Hero />
      </motion.section>
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      >
        <FeatureSection />
      </motion.section>
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
      >
        <AboutSection />
      </motion.section>
      <motion.section
        id="pricing"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <div className="bg-black text-white w-full">
          <Pricing
            plans={[
              {
                name: "Starter",
                price: "29",
                yearlyPrice: "24",
                period: "month",
                features: [
                  "Unlimited campaigns",
                  "Shopify & Amazon integration",
                  "Basic reporting",
                  "Email support",
                ],
                description: "Perfect for new brands and small shops.",
                buttonText: "Get Started",
                href: "#",
                isPopular: false,
              },
              {
                name: "Growth",
                price: "79",
                yearlyPrice: "64",
                period: "month",
                features: [
                  "Everything in Starter",
                  "Meta Ads & QuickBooks integration",
                  "Advanced reporting",
                  "Priority support",
                ],
                description: "Best for scaling e-commerce businesses.",
                buttonText: "Start Free Trial",
                href: "#",
                isPopular: true,
              },
              {
                name: "Enterprise",
                price: "199",
                yearlyPrice: "159",
                period: "month",
                features: [
                  "All integrations",
                  "Custom automations",
                  "Dedicated account manager",
                  "24/7 support",
                ],
                description: "For high-volume brands and agencies.",
                buttonText: "Contact Sales",
                href: "#",
                isPopular: false,
              },
            ]}
            title="Pricing for Every Stage"
            description="Simple, transparent pricing. No hidden fees."
          />
        </div>
      </motion.section>
      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <FaqSection
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our platform."
          items={[
            {
              question: "What is CRATE?",
              answer: "CRATE is an AI-powered platform that helps e-commerce brands automate their daily operations. It connects your store, ad accounts, and finance tools so you can manage everything in one place—without the busywork.",
            },
            {
              question: "Who is CRATE for?",
              answer: "CRATE is built for e-commerce brands and teams who want to save time, reduce manual tasks, and grow faster by automating campaigns, reporting, and more.",
            },
            {
              question: "What platforms does CRATE work with?",
              answer: "You can connect CRATE to Shopify, Amazon, Meta Ads (Facebook/Instagram), and QuickBooks. More integrations are coming soon!",
            },
            {
              question: "Do I need to know how to code to use CRATE?",
              answer: "Nope! CRATE is designed for everyone. You don’t need any technical skills—just connect your accounts and start automating.",
            },
            {
              question: "What can I automate with CRATE?",
              answer: "You can automate ad campaigns, reporting, content creation, and routine tasks. CRATE’s AI helps you plan, launch, and manage everything from one dashboard.",
            },
            {
              question: "Is my data safe with CRATE?",
              answer: "Yes. CRATE uses secure authentication and best practices to keep your data safe. Only you and your team can access your information.",
            },
            {
              question: "Can my whole team use CRATE?",
              answer: "Absolutely! CRATE supports multi-user access, so you can invite your team, assign tasks, and collaborate securely.",
            },
            {
              question: "How do I get started?",
              answer: "Just sign up, connect your store and accounts, and you’ll be guided through the setup. You can start automating right away.",
            },
            {
              question: "What if I need help?",
              answer: "We’re here for you! Reach out to our support team anytime if you have questions or need assistance.",
            },
            {
              question: "Can CRATE grow with my business?",
              answer: "Yes! CRATE is built to scale, so whether you’re just starting out or running a high-traffic store, it will grow with you.",
            },
          ]}
        />
      </motion.section>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <Footer />
      </motion.section>
    </div>
  );
}
