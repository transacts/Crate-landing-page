"use client";

import React from "react";
import { X, Bot, BarChart3, Users, RotateCw, CheckCircle, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
  };
}

const featureDetails = {
  "Integrations": {
    title: "Seamless Integrations",
    subtitle: "Connect all your e-commerce tools in one unified platform",
    description: "CRATE seamlessly connects with Shopify, Amazon, Meta Ads, and QuickBooks to create a unified workflow that eliminates data silos and manual data entry.",
    benefits: [
      "One-click setup for major e-commerce platforms",
      "Real-time data synchronization across all tools",
      "Automated data mapping and conflict resolution",
      "Secure API connections with enterprise-grade encryption",
      "Custom integration support for specialized tools"
    ],
    features: [
      {
        icon: Globe,
        title: "Universal Connectivity",
        description: "Connect with 50+ popular e-commerce and business tools"
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level encryption and SOC 2 compliance"
      },
      {
        icon: Zap,
        title: "Real-time Sync",
        description: "Instant data updates across all connected platforms"
      }
    ]
  },
  "AI Assistant": {
    title: "AI-Powered Automation",
    subtitle: "Advanced AI that understands your business and automates complex tasks",
    description: "Our AI assistant leverages GPT-4 and Claude to plan tasks, generate content, and automate processes with human-like intelligence and business context awareness.",
    benefits: [
      "Intelligent task planning and execution",
      "Natural language content generation",
      "Context-aware decision making",
      "Continuous learning from your business patterns",
      "24/7 automated operations without supervision"
    ],
    features: [
      {
        icon: Bot,
        title: "Smart Task Planning",
        description: "AI breaks down complex workflows into actionable steps"
      },
      {
        icon: Zap,
        title: "Content Generation",
        description: "Create product descriptions, ads, and emails instantly"
      },
      {
        icon: CheckCircle,
        title: "Quality Assurance",
        description: "Built-in validation and optimization for all AI outputs"
      }
    ]
  },
  "Insights & Campaigns": {
    title: "Smart Analytics & Campaign Management",
    subtitle: "Data-driven insights and automated campaign optimization",
    description: "Launch, monitor, and optimize advertising campaigns automatically while getting real-time insights into your business performance across all channels.",
    benefits: [
      "Automated campaign creation and optimization",
      "Real-time performance tracking and alerts",
      "Cross-platform analytics and reporting",
      "Predictive insights and trend analysis",
      "ROI optimization with AI-driven recommendations"
    ],
    features: [
      {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Deep insights into customer behavior and sales patterns"
      },
      {
        icon: Zap,
        title: "Auto-Optimization",
        description: "AI continuously improves campaign performance"
      },
      {
        icon: ArrowRight,
        title: "Predictive Modeling",
        description: "Forecast trends and identify growth opportunities"
      }
    ]
  },
  "Collaborate": {
    title: "Team Collaboration",
    subtitle: "Seamless teamwork with secure multi-user access and real-time collaboration",
    description: "Enable your entire team to work together efficiently with role-based access, real-time updates, and collaborative workflows that keep everyone aligned.",
    benefits: [
      "Role-based access control and permissions",
      "Real-time collaboration and updates",
      "Task assignment and progress tracking",
      "Team communication and feedback tools",
      "Audit trails and activity monitoring"
    ],
    features: [
      {
        icon: Users,
        title: "Team Management",
        description: "Organize teams with custom roles and permissions"
      },
      {
        icon: Shield,
        title: "Secure Access",
        description: "Enterprise-grade security with SSO support"
      },
      {
        icon: CheckCircle,
        title: "Task Tracking",
        description: "Monitor progress and deadlines across all projects"
      }
    ]
  },
  "Automations": {
    title: "Workflow Automation",
    subtitle: "Set it and forget it - let CRATE handle your repetitive tasks",
    description: "Create custom workflows that run automatically, eliminating manual busywork and ensuring consistent execution of your business processes.",
    benefits: [
      "Custom workflow builder with drag-and-drop interface",
      "Trigger-based automation for any business event",
      "Error handling and retry mechanisms",
      "Performance monitoring and optimization",
      "Integration with all connected platforms"
    ],
    features: [
      {
        icon: RotateCw,
        title: "Smart Workflows",
        description: "Build complex automations with simple visual tools"
      },
      {
        icon: Zap,
        title: "Instant Triggers",
        description: "React to business events in real-time"
      },
      {
        icon: CheckCircle,
        title: "Reliable Execution",
        description: "99.9% uptime with automatic error recovery"
      }
    ]
  }
};

export function FeatureModal({ isOpen, onClose, feature }: FeatureModalProps) {
  const details = featureDetails[feature.name as keyof typeof featureDetails];
  
  if (!details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl bg-black/80 backdrop-blur-xl rounded-xl border border-white/20 z-50 overflow-hidden"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <feature.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{details.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-gray-200 mb-4">
                {details.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                {details.description}
              </p>

              {/* Key Benefits */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white mb-3">Key Benefits</h3>
                {details.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}