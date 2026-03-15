"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 inline-flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl">02.</span> Technical Arsenal
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
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-foreground/10 transition-colors group cursor-default"
                  >
                    <skill.icon className="w-8 h-8 mb-2 text-foreground/70 group-hover:text-sky-500 transition-colors" />
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
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
