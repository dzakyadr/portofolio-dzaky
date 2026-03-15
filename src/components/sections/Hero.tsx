"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-transparent">
      {/* Remove previous solid background gradient to allow ScrollBackground to show */}

      <div className="max-w-7xl w-full mx-auto pr-4 sm:pr-6 lg:pr-8 pl-4 lg:pl-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 lg:col-span-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-mono text-4xl tracking-[0.2em] uppercase">
                Hello,
              </span>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-secondary leading-none ">
                I'm Dzaky Adrian 
                <span className="block mt-2 text-secondary text-6xl md:text-7xl lg:text-8xl font-serif">Web Developer.</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg leading-relaxed font-sans">
              Membangun pengalaman digital yang elegan, memadukan estetika klasik 
              dengan teknologi modern untuk menciptakan harmoni pada setiap pixel.
            </p>

            <div className="pt-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-4 text-sm font-sans tracking-widest uppercase text-foreground hover:text-accent transition-colors pb-2 border-b border-foreground/30 hover:border-accent"
              >
                <span>SCROLL!!!</span>
                
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end lg:col-span-4"
          >
            {/* The structural "pillar" behind the image */}
            <div className="absolute inset-0 bg-accent/5 rounded-t-full -z-10 transform -translate-y-8 translate-x-4 max-w-[400px] mx-auto lg:mx-0 w-full h-[110%] border border-accent/10"></div>

            <motion.div 
              className="relative w-full max-w-[360px] aspect-[3/4] group cursor-pointer perspective-1000"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Card Container with 3D Rotate effect on Hover */}
              <motion.div 
                className="w-full h-full relative preserve-3d transition-transform duration-700 ease-out group-hover:rotate-y-12 group-hover:-rotate-x-5"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Decorative border frame that expands on hover */}
                <div className="absolute -inset-4 border border-accent/30 rounded-sm z-0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:-inset-6 group-hover:border-accent/60" style={{ transform: "translateZ(-20px)" }}></div>
                
                {/* Main Photo Container */}
                <div className="relative w-full h-full rounded-sm overflow-hidden z-10 shadow-2xl bg-foreground/5 shadow-black/20 dark:shadow-black/50 border border-foreground/10" style={{ transform: "translateZ(20px)" }}>
                  <Image 
                    src="" 
                    alt="Dzaky Adrian"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter sepia-[0.2] group-hover:sepia-0"
                    priority
                  />
                  {/* Subtle noise/texture overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Inner classic border */}
                  <div className="absolute inset-3 border border-background/40 z-20 pointer-events-none transition-all duration-500 group-hover:inset-5"></div>
                </div>

                {/* Floating classical element (e.g., small emblem or text) */}
                <div 
                  className="absolute -bottom-6 -right-6 bg-background border border-accent/30 p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-30 flex items-center justify-center w-24 h-24"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <span className="font-serif italic text-accent text-sm text-center transform -rotate-12">Est.<br/>2024</span>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
