export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "kkn-it",
    role: "Head of IT Community Service Program (KKN)",
    company: "University Student Organization",
    duration: "2023 - 2024",
    description: [
      "Led the IT division for the community service program, managing a team to deliver digital solutions for local villages.",
      "Developed basic informational websites and digital literacy modules for the community.",
    ],
  },
  {
    id: "pdd-staff",
    role: "Publication, Decoration, and Documentation (PDD) Staff",
    company: "Campus Event Committee",
    duration: "2023",
    description: [
      "Managed digital assets and social media publications for major campus events.",
      "Collaborated with the core committee to ensure consistent branding and communication.",
    ],
  },
];
