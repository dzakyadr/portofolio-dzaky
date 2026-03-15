import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollBackground } from "@/components/layout/ScrollBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const margaret = localFont({
  src: "../fonts/margaret.regular.ttf",
  variable: "--font-margaret",
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
        className={`${inter.variable} ${geistMono.variable} ${margaret.variable} font-sans antialiased selection:bg-accent/30 flex flex-col min-h-screen`}
      >
        <ScrollBackground />
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
