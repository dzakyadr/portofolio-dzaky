"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Silk to avoid SSR issues with WebGL/Three.js
const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Overlay darkens in the middle of the page, fades out at the bottom
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.05, 0.85, 0.85, 0.2]
  );

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
      {/* Silk animated background - fills the entire viewport */}
      <div className="absolute inset-0 w-full h-full">
        <Silk
          speed={4.5}
          scale={0.6}
          color="#7B7481"
          noiseIntensity={1.3}
          rotation={0}
        />
      </div>

      {/* Dark overlay that changes opacity on scroll */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
