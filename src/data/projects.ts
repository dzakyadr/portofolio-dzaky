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
  details?: ProjectDetails;
};

export const projects: Project[] = [
  {
    title: "Chesstify",
    slug: "chesstify",
    role: "Full Stack Developer",
    description: "A comprehensive chess application focusing on complex database management for chess moves and player statistics.",
    techStack: ["PostgreSQL", "Python", "HTML", "CSS", "JavaScript"],
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
        "/images/chess.jpg",
        "/images/chess.jpg"
      ]
    }
  },
  {
    title: "Law Institution Website",
    slug: "law-institution-website",
    role: "Frontend Developer & PM",
    description: "A professional corporate website handling real-world client requirements from initial design to final deployment.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/images/institute.png",
    liveUrl: "https://law-institution-demo.com", 
  },
];
