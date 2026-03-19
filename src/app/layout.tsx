import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollBackground } from "@/components/layout/ScrollBackground";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Primary display font — bold, expanded, textured
const brigends = localFont({
  src: "../fonts/brigendsexpanded-nrek1.otf",
  variable: "--font-brigends",
  display: "swap",
});

// Secondary font — clean, strong, solid structure
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Dzaky Adrian | Web Developer",
  description: "Professional portfolio of Muhammad Dzaky Adrian, a passionate Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${brigends.variable} ${inter.variable} antialiased selection:bg-accent/20 flex flex-col min-h-screen`}
      >
        <ScrollBackground />
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
