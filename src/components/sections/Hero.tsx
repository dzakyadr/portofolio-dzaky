"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-background to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sky-500 font-mono text-sm tracking-wider uppercase mb-4 block">
            Hello, World! I am
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Muhammad Dzaky Adrian.
            <br />
            <span className="text-foreground/60">I build for the web.</span>
          </h1>
          <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-balance">
            I am a Web Developer specializing in building exceptional digital experiences. 
            Currently, I am focused on creating accessible, human-centered products.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-foreground dark:text-black dark:bg-white rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative flex items-center gap-2">
                View My Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-foreground bg-transparent border border-foreground/20 rounded-full transition-all hover:bg-foreground/5"
            >
              Download CV <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
