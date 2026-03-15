"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-foreground/5 dark:bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-foreground/20 flex-grow ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              Hi! I&apos;m Dzaky Adrian, an Informatics student with a deep passion for software engineering
              and web development. My journey started with a curiosity about how things work on the internet,
              which quickly evolved into building complex applications to solve real-world problems.
            </p>
            <p>
              I specialize in creating robust backend architectures and seamless frontend experiences.
              My approach focuses on clean code, scalable design, and user-centric problem solving. Whether
              it&apos;s managing a database of chess moves or delivering a professional website for a law institution,
              I thrive on turning business requirements into technical realities.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, leading student organization initiatives,
              or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:ml-auto max-w-sm w-full mx-auto"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-foreground/10 relative group">
              {/* Profile Photo Placeholder */}
              <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <div className="w-full h-full flex items-center justify-center text-foreground/40 font-mono">
                [Profile Photo]
              </div>
            </div>
            <div className="absolute -inset-4 border-2 border-sky-500 rounded-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
