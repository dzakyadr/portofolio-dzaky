export type Project = {
  title: string;
  slug: string;
  role: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Chesstify",
    slug: "chesstify",
    role: "Full Stack Developer",
    description: "A comprehensive chess application focusing on complex database management for chess moves and player statistics.",
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "Chess.js"],
    liveUrl: "https://chesstify-demo.com", // Placeholder
    githubUrl: "https://github.com/dzakyadr/chesstify",
  },
  {
    title: "Law Institution Website",
    slug: "law-institution-website",
    role: "Frontend Developer & PM",
    description: "A professional corporate website handling real-world client requirements from initial design to final deployment.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Figma"],
    liveUrl: "https://law-institution-demo.com", // Placeholder
  },
];
