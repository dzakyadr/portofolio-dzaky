import { FiDownload, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export const metadata = {
  title: "Resume | Dzaky Adrian",
  description: "View and download Dzaky Adrian's professional resume.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background relative pt-24 pb-8 flex flex-col items-center">
      {/* Header & Controls */}
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-foreground/50 hover:text-accent transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <a 
          href="/cv.pdf" 
          download="Dzaky_Adrian_CV.pdf"
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono tracking-widest uppercase text-background bg-accent hover:bg-accent/90 transition-colors shadow-lg"
        >
          <FiDownload className="mr-3 w-4 h-4" /> Download PDF
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="w-full max-w-5xl mx-auto px-6 flex-grow flex flex-col relative z-10 h-[75vh]">
        <div className="w-full h-full border border-foreground/20 bg-foreground/5 rounded-lg overflow-hidden relative shadow-2xl">
          {/* Fallback overlay in case PDF blocker is active */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-background">
            <p className="text-foreground/50 font-mono text-sm tracking-widest text-center px-6">
              Loading preview... <br/><br/>
              <span className="text-xs">If it doesn&apos;t appear, you can download the file directly using the button above.</span>
            </p>
          </div>
          <iframe 
            src="/cv.pdf#view=FitH" 
            className="w-full h-full border-none relative z-10 bg-transparent"
            title="Resume Preview"
          />
        </div>
      </div>
    </main>
  );
}
