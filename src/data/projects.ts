export type ProjectDetails = {
  overview: {
    tagline: string;
    type: string;
    coreIdentity: string;
    mainProblem: string;
  };
  keyFeatures: { title: string; description: string }[];
  architecture: {
    layer: string;
    stack: { name: string; description: string }[];
  }[];
  technicalAchievement: string;
  galleryImages: string[];
  // Optional extended fields for non-Chesstify projects
  designHighlights?: string[];
  challenges?: { challenge: string; solution: string }[];
};

export type Project = {
  title: string;
  slug: string;
  role: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    title: "Chesstify",
    slug: "chesstify",
    role: "Full Stack Developer",
    description: "A comprehensive chess application focusing on complex database management for chess moves and player statistics.",
    techStack: ["Django", "PostgreSQL", "Python", "HTML", "CSS", "JavaScript"],
    imageUrl: "/images/chess.jpg",
    liveUrl: "https://chesstify-demo.com",
    githubUrl: "https://github.com/dzakyadr/chesstify",
    details: {
      overview: {
        tagline: "Professional Chess Database Management System.",
        type: "Undergraduate Thesis Project (Informatics Engineering).",
        coreIdentity: "Chesstify is a specialized, web-based Decision Support and Knowledge Management System designed for professional chess players and coaches.",
        mainProblem: "Unlike general online playing platforms (like Chess.com or Lichess), Chesstify focuses strictly on personal archive management. It helps athletes transform massive amounts of raw game data (PGN files) into strategic insights, enabling them to study opponents' opening repertoires and prepare for specific tournament matches."
      },
      keyFeatures: [
        { title: "Mass PGN Parsing & Automated Upload", description: "The system can process .pgn files containing thousands of games at once. The backend automatically extracts critical metadata (player names, events, dates, ECO codes, results) and move notations, saving them structurally into a relational database." },
        { title: "Opening Explorer & Move Statistics", description: "Features an interactive opening explorer. Every time a piece is moved on the board, the system calculates real-time win/draw/loss percentages for subsequent moves based on the aggregated data of all saved games." },
        { title: "Advanced Asynchronous Search", description: "Powered by AJAX, users can filter games using complex combinations (e.g., player name + black pieces + year + specific ECO code) with instant table updates and zero page reloads." },
        { title: "Real-time Stockfish Analysis", description: "Integrates the world-class Stockfish engine to provide real-time position evaluation scores and visual arrows recommending the best moves." },
        { title: "Interactive Chessboard & Legal Move Validation", description: "A highly responsive visual board that strictly enforces standard chess rules, preventing illegal moves during manual analysis and exploration." }
      ],
      architecture: [
        {
          layer: "Backend Layer",
          stack: [
            { name: "Python & Django Framework", description: "Acts as the main orchestrator, handling HTTP routing, secure ORM operations, and business logic." },
            { name: "python-chess (Library)", description: "A dedicated backend service used exclusively to parse complex PGN texts and extract metadata before saving it to the database." }
          ]
        },
        {
          layer: "Database Layer",
          stack: [
            { name: "PostgreSQL", description: "Chosen for its robustness in handling large volumes of long-text data and executing complex relational queries across thousands of chess games." }
          ]
        },
        {
          layer: "Frontend Layer",
          stack: [
            { name: "Core Web Tech", description: "HTML5, CSS3, Bootstrap 5, Vanilla JavaScript (with AJAX for seamless UX)." },
            { name: "cm-chessboard (Library)", description: "Renders the interactive, SVG-based visual chessboard." },
            { name: "chess.js (Library)", description: "Acts as the frontend 'digital referee.' It maintains the game state in the browser and validates whether a user's move is legal." }
          ]
        },
        {
          layer: "Engine Layer",
          stack: [
            { name: "Stockfish (WebAssembly)", description: "Runs completely on the client side inside an isolated Web Worker. This architecture ensures that heavy mathematical evaluations do not freeze the main UI thread." }
          ]
        }
      ],
      technicalAchievement: "The biggest technical challenge and achievement of this project was successfully bridging static, text-based PGN data in the database with a highly dynamic, interactive frontend chessboard, while simultaneously running a heavy background calculation engine (Stockfish) without compromising web performance or user experience.",
      galleryImages: [
        "/images/chess.jpg",
        "/images/dashboard.png",
        "/images/detail.png"
      ]
    }
  },
  {
    title: "Law Institution Website",
    slug: "law-institution-website",
    role: "Frontend Developer & Project Manager",
    description: "A professional institutional website for Amarta Artha Institute, handling real-world client requirements from discovery to final deployment.",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript"],
    imageUrl: "/images/institute.png",
    year: "2025–2026",
    details: {
      overview: {
        tagline: "Cultivating Leadership. Advancing Knowledge. Creating Enduring Value.",
        type: "Freelance / Client Project",
        coreIdentity: "Amarta Artha Institute is a strategic leadership and research institute based in Yogyakarta, Indonesia. I was commissioned to build their complete institutional web presence from the ground up — spanning branding, information architecture, and frontend implementation.",
        mainProblem: "The client had no existing digital presence and no design brief. As the sole point of contact, I held discovery and review meetings to align on content, structure, and design direction — translating non-technical requirements into a fully working web product through iterative revision cycles."
      },
      keyFeatures: [
        { title: "Landing Page", description: "Hero section with a full-screen background image, institute tagline, and dual CTA buttons. Includes a profile section, program highlight cards (Strategic Capacity Building + Konsultasi Umum), and a Google Maps contact section." },
        { title: "About Page", description: "Full company story, philosophy (Amarta + Artha meaning), vision & mission, 4 strategic pillars, leadership team profiles, and a 2030 vision section." },
        { title: "Services Page", description: "Two-column layout separating Strategic Capacity Building and Executive Mentorship. Both use a custom card component with hover effects, a dark research summary card, and WhatsApp CTAs." },
        { title: "Portfolio Page", description: "Showcases the institute's client work and organizational impact in a structured, visually engaging layout." }
      ],
      architecture: [
        {
          layer: "Frontend",
          stack: [
            { name: "HTML5 & Tailwind CSS", description: "Semantic markup with a utility-first CSS framework for rapid, consistent styling across all 4 pages." },
            { name: "JavaScript", description: "Handles interactive elements: mobile nav toggles, scroll effects, and micro-animations without any framework overhead." }
          ]
        },
        {
          layer: "Design System",
          stack: [
            { name: "Custom Color Tokens", description: "Primary (#376171) and secondary (#FFB933) color tokens applied site-wide for brand consistency." },
            { name: "Image-Top Card System", description: "Cards feature a hero photo, icon badge, title, and description for visual storytelling, inspired by modern SaaS product pages." }
          ]
        },
        {
          layer: "Integrations",
          stack: [
            { name: "Google Maps Embed", description: "Embedded interactive map for the institute's physical location in the contact section." },
            { name: "WhatsApp API & Google Forms", description: "Conversion-focused CTAs drive direct user action for program inquiries." }
          ]
        }
      ],
      technicalAchievement: "The greatest challenge was acting as both developer and project manager without a design brief. By running structured discovery sessions and iterating rapidly through revision cycles, I delivered a complete, polished, multi-page institutional website entirely from scratch from zero assets to final sign-off.",
      galleryImages: [
        "/images/institute.png",
        "/images/amarta-porto.png",
        "/images/amartha2.png"
      ],
      designHighlights: [
        "Image-top card system — cards feature a hero photo, icon badge, title, and description for visual storytelling",
        "Micro-animations — hover lift, scale-on-hover images, icon transitions throughout",
        "Mobile-first responsive — grid collapses gracefully across all breakpoints",
        "Conversion-focused CTAs — WhatsApp API, Google Forms, and anchor links drive user action",
        "Consistent design system — primary and secondary color tokens applied site-wide"
      ],
      challenges: [
        { challenge: "Client had no design brief", solution: "Ran structured discovery sessions to extract visual preferences and content goals before writing a single line of code" },
        { challenge: "Services page felt cluttered", solution: "Restructured into two distinct columns with a shared outer container for visual breathing room" },
        { challenge: "Cards lacked visual hook", solution: "Introduced image-top card design inspired by modern SaaS product pages for stronger visual storytelling" }
      ]
    }
  },
];
