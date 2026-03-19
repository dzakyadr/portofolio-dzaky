"use client";

import * as React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-md border-b border-foreground/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Dzaky<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Unified Nav for all screens on the right side */}
          <nav className="flex flex-wrap justify-end gap-2 md:gap-8 items-center max-w-[65%] md:max-w-none">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[9px] sm:text-[10px] md:text-xs font-mono tracking-[0.1em] md:tracking-[0.3em] uppercase text-foreground/70 hover:text-accent transition-colors text-right"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
