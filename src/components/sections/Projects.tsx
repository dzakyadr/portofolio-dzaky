"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });
  
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={cardRef}
      style={{ y: yProgress, opacity: opacityProgress }}
      className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 overflow-hidden relative aspect-[4/3] rounded-sm group-hover:shadow-2xl transition-all duration-700 ease-in-out">
        {/* Hover overlay that slides away */}
        <div className="absolute inset-0 bg-background/20 z-10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 border border-foreground/10 z-20 pointer-events-none transition-all duration-500 group-hover:border-accent/50"></div>
        <Image 
          src={project.imageUrl || ""} // fallback
          alt={project.title}
          fill
          className="object-cover filter grayscale-[0.8] contrast-125 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase block mb-2">
            P.{String(index + 1).padStart(2, '0')} — {project.role}
          </span>
          <h3 className="text-3xl lg:text-4xl font-serif text-foreground leading-tight group-hover:text-accent transition-colors duration-500">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
        </div>

        <p className="text-foreground/70 font-sans leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-[12px] border border-foreground/50 bg-foreground/5 backdrop-blur-sm text-xs md:text-sm font-sans tracking-widest uppercase text-foreground transition-colors hover:bg-foreground/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-foreground/10">
          <Link
            href={`/projects/${project.slug}`}
            className="group/btn inline-flex items-center gap-3 text-sm font-sans tracking-widest uppercase text-foreground hover:text-accent transition-colors"
          >
            <span>Detail</span>
            <span className="w-8 h-[1px] bg-foreground group-hover/btn:bg-accent group-hover/btn:w-12 transition-all duration-300"></span>
          </Link>
          
          <div className="flex gap-4 ml-auto">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors" aria-label="GitHub">
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors" aria-label="Live Demo">
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row items-baseline justify-between gap-8 border-b border-foreground/10 pb-8"
        >
          <h2 className="text-5xl lg:text-6xl font-serif text-foreground tracking-tight">
            Karya <span className="text-foreground/40 italic">Pilihan</span>
          </h2>
          <p className="text-accent font-mono text-sm tracking-[0.2em] uppercase max-w-xs text-right">
            Arsip digital dari proyek-proyek unggulan.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32 lg:space-y-48">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
