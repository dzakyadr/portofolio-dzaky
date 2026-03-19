import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiDocker, 
  SiFigma,
  SiCplusplus,
  SiPhp,
  SiDjango,
} from "react-icons/si";

export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    icon: IconType;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C+", icon: SiCplusplus },
      { name: "PHP", icon: SiPhp},
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    title: "Databases and Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
