"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl">04.</span> Experience
            <div className="h-[1px] bg-foreground/20 flex-grow ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                {/* Mobile timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-foreground/10 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full border-2 border-sky-500 bg-background md:hidden"></div>
                
                <div className="md:col-span-1 mb-2 md:mb-0">
                  <span className="text-sm font-mono text-foreground/50 tracking-wider uppercase">
                    {exp.duration}
                  </span>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold mb-1 text-foreground">
                    {exp.role}
                  </h3>
                  <div className="text-sky-500 font-medium mb-4">
                    {exp.company}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-foreground/70">
                        <span className="text-sky-500 mr-2 mt-1.5 opacity-50 text-xs">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
