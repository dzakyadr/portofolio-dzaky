export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    id: "kkn",
    role: "Head of Community Service Program (KKN)",
    company: "Universitas Islam Indonesia",
    duration: "2025",
    description: [
      "Led a multidisciplinary team of 10 students to execute community development programs in Kotabaru, Yogyakarta.",
      "Managed project timelines and coordinated with village officials to ensure successful program implementation.",
      "Facilitated educational workshops and infrastructure improvement projects, enhancing community engagement and well-being.",
      "Resolved conflicts within the team and facilitated effective communication between students and the local community.",
    ],
  },
  {
    id: "pdd-staff",
    role: "Publication, Design, and Documentation (PDD) Staff",
    company: "Campus Event Committee",
    duration: "2023",
    description: [
      "Managed digital assets and social media publications for major campus events.",
      "Collaborated with the core committee to ensure consistent branding and communication.",
    ],
  },
];
