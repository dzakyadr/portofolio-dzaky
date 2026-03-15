import { IconType } from "react-icons";
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
  SiFigma 
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
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
