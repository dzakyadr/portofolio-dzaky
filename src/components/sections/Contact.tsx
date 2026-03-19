"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-mono text-base mb-4 block">
            What&apos;s Next?
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-foreground tracking-tight mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-xl mx-auto font-sans">
            I&apos;m currently looking for new opportunities, whether it&apos;s a full-time role, internship, or freelance project. 
            My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          <a
            href="mailto:placeholder@email.com"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-sky-500 bg-transparent border border-sky-500 rounded-lg transition-all hover:bg-sky-500/10 mb-16"
          >
            Say Hello <FiMail className="ml-2" />
          </a>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/dzakyadr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-sky-500 transition-colors p-2"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/dzakyadrian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-sky-500 transition-colors p-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
