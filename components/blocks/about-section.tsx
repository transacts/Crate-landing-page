'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Square } from 'lucide-react';

function CrateModel() {
  const { scene } = useGLTF('/crate.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-black text-white relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-0 py-20 lg:py-32">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="flex items-baseline justify-center gap-6 font-mono mb-4">
            <span className="text-5xl lg:text-7xl font-bold tracking-wider">ABOUT</span>
          </h2>
          <div className="flex justify-center">
            <div className="text-white border border-white p-2">
              <Square size={32} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Dotted Separator */}
        <div className="w-full border-b border-dashed border-neutral-600 mb-16"></div>

        {/* Content Grid with 3D Model */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="text-xl lg:text-2xl font-medium leading-relaxed lg:leading-loose tracking-wide">
              We&apos;re <span className="font-bold">CRATE</span> — an AI-powered operational agent for e-commerce brands who actually want to scale efficiently. 
              We connect your Shopify, Amazon, Meta Ads, and QuickBooks accounts through one unified dashboard that automates campaigns, 
              generates financial reports, and deploys smart tasks. Founded in 2024, we eliminate repetitive busywork so commerce teams 
              can focus on growth instead of manual processes. No complexity, no hassle — just intelligent automation that works.
            </p>
          </div>

          {/* 3D Model Viewer */}
          <div className="lg:col-span-3 h-96 lg:h-[600px] w-full">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <Suspense fallback={null}>
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <CrateModel />
                <OrbitControls enableZoom={true} enablePan={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
