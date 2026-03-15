"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-foreground/5 dark:bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-4">
            <span className="text-sky-500 font-mono text-xl">03.</span> Featured Projects
            <div className="h-[1px] bg-foreground/20 flex-grow ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-background rounded-2xl p-8 border border-foreground/10 hover:border-sky-500/50 transition-colors flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-sky-500 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      <span className="absolute inset-0 z-10 rounded-2xl"></span>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sky-500 font-mono text-sm">{project.role}</p>
                </div>
                
                <div className="flex space-x-3 z-20">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/50 hover:text-sky-500 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/50 hover:text-sky-500 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="text-foreground/70 mb-8 flex-grow">
                <p>{project.description}</p>
              </div>

              <div className="mt-auto z-20">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-foreground/5 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-sm font-medium hover:text-sky-500 transition-colors group/link"
                >
                  Read Case Study <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
