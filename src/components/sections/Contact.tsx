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
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a
              href="mailto:muhadrian061@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-background bg-accent border border-accent rounded-lg transition-all hover:bg-accent/90 min-w-[200px]"
            >
              Email Me <FiMail className="ml-2" />
            </a>
            <a
              href="https://wa.me/6285712437633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-accent bg-transparent border border-accent rounded-lg transition-all hover:bg-accent/10 min-w-[200px]"
            >
              WhatsApp
            </a>
          </div>

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
