"use client";

import { motion, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const CurvedLoop = dynamic(() => import("@/components/CurvedLoop"), {
  ssr: false,
});

// Shared transition for entrance
const ease = "easeOut";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Helper: staggered blur-fade-up transition
  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30, filter: "blur(14px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: 0.5 + delay, ease },
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Left Column: Text ── */}
            <div className="flex flex-col space-y-6 lg:col-span-7">

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
                Bridging robust backend architecture with elegant frontend design. I build high-performance digital solutions focused on speed, scalability, and seamless user experiences.
              </motion.p>

            </div>

            {/* ── Right Column: Photo Card ── */}
            <div className="relative flex justify-center lg:justify-end lg:col-span-5">
              <motion.div
                className="relative w-full max-w-[260px] md:max-w-[340px] mx-auto lg:mx-0"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1, ease }}
              >
                {/* Offset shadow card behind */}
                <div
                  className="absolute inset-0"
                  style={{
                    top: 4, left: 4, bottom: -4, right: -4,
                    background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 8px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    zIndex: 0,
                  }}
                />

                {/* Card with 3D tilt */}
                <motion.div
                  className="relative cursor-pointer z-10"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="border border-foreground/20 p-1.5">
                    <div className="border border-foreground/10 relative overflow-hidden">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src="/images/dzaky.jpeg"
                          alt="Dzaky Adrian"
                          fill
                          className="object-cover grayscale-[0.5] contrast-125 brightness-90 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                          priority
                        />
                        <div
                          className="absolute inset-0 pointer-events-none z-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.18'/%3E%3C/svg%3E")`,
                            mixBlendMode: "overlay",
                            opacity: 0.8,
                          }}
                        />
                        <div
                          className="absolute inset-0 pointer-events-none z-20"
                          style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)" }}
                        />
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent z-30" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

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
