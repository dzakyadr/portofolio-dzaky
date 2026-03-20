"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import CurvedLoop from "@/components/CurvedLoop";

export function Hero() {
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

  return (
    <>
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8 lg:col-span-7"
          >

            {/* Hero heading with Brigends */}
            <div className="flex flex-col">
              
              {/* 1. HELLO! (Font Brigends/display, tapi ukuran lebih kecil) */}
              <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-display text-foreground uppercase mb-2">
                HELLO!
              </span>

              {/* 2. NAMA (Font Brigends/display, ukuran paling besar) */}
              <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-display leading-[0.9] tracking-tight text-foreground uppercase">
                <span className="text-stroke">I&apos;m{"\u00A0"}Dzaky</span><br />
                <span className="text-accent">Adrian.</span>
              </h1>

              {/* 3. WEB DEVELOPER (Ditambahkan di bawah nama, font sans rapi) */}
              <span className="text-lg md:text-xl font-sans tracking-[0.2em] text-foreground uppercase mt-4 font-bold">
                Web Developer
              </span>
              
            </div>

            {/* Description with Cormorant */}
            <p className="text-sm md:text-xl text-foreground/70 max-w-lg leading-relaxed font-body">
              Bridging robust backend architecture with elegant frontend design. I build high-performance digital solutions focused on speed, scalability, and seamless user experiences.
            </p>

          </motion.div>

          {/* Right Column: Photo Card – Textured */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end lg:col-span-5"
          >

            {/* Accent square offset behind */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full max-w-[260px] md:max-w-[340px] h-full border border-accent/30 -z-10" />

            {/* Card */}
            <motion.div
              className="relative w-full max-w-[260px] md:max-w-[340px] aspect-[3/4] cursor-pointer mx-auto lg:mx-0"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Main photo */}
              <div className="relative w-full h-full overflow-hidden grain">
                <Image
                  src="/images/dean.jpeg"
                  alt="Dzaky Adrian"
                  fill
                  className="object-cover grayscale-[0.4] contrast-110 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                  priority
                />
                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
                    opacity: 0.6,
                  }}
                />
                {/* Accent stripe on bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent z-20" />
                {/* Inner frame */}
                <div className="absolute inset-3 border border-white/10 z-20 pointer-events-none" />
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
    {/* Full-width CurvedLoop acting as a transition divider to the next section */}
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
