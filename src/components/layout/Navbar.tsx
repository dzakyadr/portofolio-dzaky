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
          <nav className="flex flex-nowrap justify-end gap-2 md:gap-8 items-center max-w-[75%] md:max-w-none overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] sm:text-[11px] md:text-sm font-mono tracking-tighter md:tracking-[0.2em] whitespace-nowrap uppercase text-foreground/70 hover:text-accent transition-colors"
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
