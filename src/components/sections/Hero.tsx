"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

const CurvedLoop = dynamic(() => import("@/components/CurvedLoop"), {
  ssr: false,
});

// Shared easing — typed as literal to satisfy Framer Motion's Easing type
const EASE = "easeOut" as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Helper: staggered blur-fade-up transition
  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30, filter: "blur(14px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: 0.5 + delay, ease: EASE },
  });

  return (
    <>
      {/* ── Noise Curtain (full-viewport flash on load) ── */}
      {!prefersReducedMotion && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeIn" }}
          aria-hidden
        >
          <svg className="absolute inset-0 w-full h-full">
            <filter id="intro-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#intro-noise)" opacity="0.45" />
          </svg>
          <div className="absolute inset-0 bg-background opacity-80" />
        </motion.div>
      )}

      <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col space-y-6">

            {/* HELLO */}
            <motion.span
              className="text-[clamp(1.2rem,6vw,2rem)] font-display text-foreground uppercase"
              {...fadeUp(0)}
            >
              HELLO!
            </motion.span>

            {/* Name */}
            <motion.h1
              className="text-[clamp(2.5rem,10vw,6rem)] font-display leading-[0.9] tracking-tight text-foreground uppercase"
              {...fadeUp(0.1)}
            >
              <span className="text-stroke">I&apos;m{"\u00A0"}Dzaky</span><br />
              <span className="text-accent">Adrian.</span>
            </motion.h1>

            {/* Role */}
            <motion.span
              className="text-base md:text-xl font-sans tracking-[0.2em] text-foreground uppercase font-bold"
              {...fadeUp(0.22)}
            >
              Web Developer
            </motion.span>

            {/* Description */}
            <motion.p
              className="text-sm md:text-sm text-white max-w-lg leading-relaxed font-body"
              {...fadeUp(0.34)}
            >
              I build high-performance digital solutions focused on speed, scalability, and seamless user experiences.
            </motion.p>

          </div>
        </div>
      </section>

      {/* Full-width CurvedLoop transition divider */}
      <div className="w-full relative z-20 overflow-hidden bg-transparent py-12">
        <CurvedLoop
          marqueeText={"OPEN ✦ FOR ✦ WORK ✦ OPEN ✦ FOR ✦ WORK ✦".repeat(5)}
          speed={1.5}
          curveAmount={120}
          interactive
          className="font-sans font-bold text-foreground tracking-widest text-5xl lg:text-6xl"
        />
      </div>
    </>
  );
}
