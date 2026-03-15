"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import bgImage from "@/images/rome-bg.jpg"; // Adjust path based on absolute imports

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  // Map scroll progress to opacity of the dark overlay
  // 0.0 (top): 0% opacity (image fully visible)
  // 0.2 - 0.8 (middle): 85% opacity (dark, readable content)
  // 1.0 (bottom): 20% opacity (image reappears)
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.1, 0.9, 0.9, 0.3]
  );

  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
      {/* Base Image */}
      <Image
        src={bgImage}
        alt="Roman Mythology Theme Background"
        fill
        className="object-cover object-center filter grayscale-[0.3]"
        quality={75}
        priority
      />
      
      {/* Dark Overlay that changes opacity based on scroll */}
      <motion.div
        className="absolute inset-0 bg-background mix-blend-multiply"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Additional solid dark tint for better contrast in general */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: useTransform(overlayOpacity, (val) => val * 0.9) }}
      />
    </div>
  );
}
