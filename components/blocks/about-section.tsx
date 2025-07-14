'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Bounds } from '@react-three/drei';
import * as THREE from 'three';

// 3D Model Component
function CrateModel() {
  const { scene } = useGLTF('/crate.glb');
  const modelRef = useRef<THREE.Group>(null);
  
  // Auto-rotate the model
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return <primitive ref={modelRef} object={scene} scale={1} />;
}

// Loading component
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color="white" opacity={0.6} transparent />
    </mesh>
  );
}

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
          <div className="w-full lg:col-span-2 text-center lg:text-left order-2 lg:order-1">
            <p className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed lg:leading-loose tracking-wide max-w-2xl mx-auto lg:mx-0">
              We&apos;re <span className="font-bold">CRATE</span> — an AI-powered operational agent for e-commerce brands who actually want to scale efficiently. 
              We connect your Shopify, Amazon, Meta Ads, and QuickBooks accounts through one unified dashboard that automates campaigns, 
              generates financial reports, and deploys smart tasks. Founded in 2024, we eliminate repetitive busywork so commerce teams 
              can focus on growth instead of manual processes. No complexity, no hassle — just intelligent automation that works.
            </p>
          </div>

          {/* 3D Model Viewer */}
          <div className="w-full lg:col-span-3 h-80 sm:h-96 lg:h-[600px] order-1 lg:order-2">
            <Canvas
              camera={{
                position: [5, 5, 5],
                fov: 50,
                near: 0.1,
                far: 1000
              }}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
              }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={<Loader />}>
                <Bounds fit clip observe margin={1.5}>
                  <CrateModel />
                </Bounds>
              </Suspense>
              <OrbitControls
                makeDefault
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                minDistance={1}
                maxDistance={50}
                autoRotate={true}
                autoRotateSpeed={1}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
