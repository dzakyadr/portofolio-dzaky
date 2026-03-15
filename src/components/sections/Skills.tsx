"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-accent font-mono text-xl">02.</span> Technical Arsenal
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A comprehensive list of the tools and technologies I use to bring digital products to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-foreground/5 dark:bg-foreground/5 rounded-2xl p-8 border border-foreground/10 hover:border-sky-500/50 transition-colors"
            >
              <h3 className="text-xl font-serif mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-[24px] border border-foreground/50 bg-foreground/5 backdrop-blur-sm text-xs md:text-sm font-sans tracking-widest uppercase text-foreground transition-colors hover:bg-foreground/10 cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
