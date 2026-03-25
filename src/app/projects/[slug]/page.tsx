import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.details) {
    notFound();
  }

  const { details } = project;

  return (
    <main className="project-detail min-h-screen relative pt-32 pb-32 grain overflow-hidden">

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-foreground/50 hover:text-accent transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-sans font-bold uppercase leading-tight tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-body text-foreground/80 max-w-3xl leading-relaxed italic">
              &ldquo;{details.overview.tagline}&rdquo;
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-5 lg:pl-8 border-l border-foreground/10 lg:pb-4">
            <div>
              <span className="block text-[0.6rem] font-mono tracking-[0.4em] uppercase text-foreground/50 mb-1">Role</span>
              <span className="text-sm font-sans font-semibold text-foreground">{project.role}</span>
            </div>
            <div>
              <span className="block text-[0.6rem] font-mono tracking-[0.4em] uppercase text-foreground/50 mb-1">Type</span>
              <span className="text-sm font-sans font-semibold text-foreground">{details.overview.type}</span>
            </div>
            {project.year && (
              <div>
                <span className="block text-[0.6rem] font-mono tracking-[0.4em] uppercase text-foreground/50 mb-1">Year</span>
                <span className="text-sm font-sans font-semibold text-foreground">{project.year}</span>
              </div>
            )}
            <div className="flex gap-4 pt-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 border border-foreground/20 hover:border-accent hover:text-accent transition-all">
                  <FiExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 border border-foreground/20 hover:border-accent hover:text-accent transition-all">
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3-Photo Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px]">
          <div className="md:col-span-8 relative h-full group overflow-hidden border border-foreground/10">
            <Image
              src={details.galleryImages[0]}
              alt={`${project.title} - Main View`}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.3] hover:grayscale-0"
              priority
            />
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 h-full">
            <div className="relative flex-1 group overflow-hidden border border-foreground/10">
              <Image
                src={details.galleryImages[1]}
                alt={`${project.title} - View 2`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.5] hover:grayscale-0"
              />
            </div>
            <div className="relative flex-1 group overflow-hidden border border-foreground/10">
              <Image
                src={details.galleryImages[2]}
                alt={`${project.title} - View 3`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.5] hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Context */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">About the Project</span>
            <p className="text-lg font-body leading-relaxed text-foreground/80">{details.overview.coreIdentity}</p>
          </div>
          <div>
            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">My Approach</span>
            <p className="text-lg font-body leading-relaxed text-foreground/80">{details.overview.mainProblem}</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-6 py-3 border border-foreground/20 text-xs font-mono uppercase tracking-widest text-foreground hover:border-accent transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pages & Architecture */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Key Features */}
          <div className="lg:col-span-6 space-y-10">
            <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-foreground pb-4 border-b border-foreground/20">
              Pages &amp; Features
            </h2>
            <div className="space-y-10">
              {details.keyFeatures.map((feature, idx) => (
                <div key={idx}>
                  <span className="text-accent font-mono text-xs tracking-widest mb-2 block">0{idx + 1} {"//"}</span>
                  <h3 className="text-base font-sans font-bold uppercase tracking-wider text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 font-body text-base leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="lg:col-span-6 space-y-10">
            <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-foreground pb-4 border-b border-foreground/20">
              Tech &amp; Architecture
            </h2>
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-6 bottom-6 w-px bg-foreground/10 -z-10" />
              {details.architecture.map((arch, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-accent flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent" />
                  </div>
                  <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-accent mb-4">{arch.layer}</h3>
                  <div className="space-y-3">
                    {arch.stack.map((item, i) => (
                      <div key={i} className="p-5 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                        <h4 className="font-sans font-semibold text-foreground mb-1 text-sm">{item.name}</h4>
                        <p className="font-body text-foreground/65 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Design Highlights — shown when data exists */}
      {details.designHighlights && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
          <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-foreground pb-4 border-b border-foreground/20 mb-10">
            Design Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.designHighlights.map((highlight, idx) => (
              <div key={idx} className="p-6 border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-accent/30 transition-all">
                <span className="text-accent font-mono text-xs tracking-widest mb-3 block">0{idx + 1}</span>
                <p className="font-body text-foreground/75 text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges & Solutions — shown when data exists */}
      {details.challenges && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative z-10">
          <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-foreground pb-4 border-b border-foreground/20 mb-10">
            Challenges &amp; Solutions
          </h2>
          <div className="space-y-px">
            <div className="grid grid-cols-2 gap-px bg-foreground/10">
              <div className="bg-background px-6 py-3">
                <span className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-foreground/50">Challenge</span>
              </div>
              <div className="bg-background px-6 py-3">
                <span className="text-[0.65rem] font-mono tracking-[0.3em] uppercase text-foreground/50">Solution</span>
              </div>
            </div>
            {details.challenges.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-px bg-foreground/10 group">
                <div className="bg-background px-6 py-5 group-hover:bg-foreground/[0.02] transition-colors">
                  <p className="font-body text-foreground/80 text-sm leading-relaxed">{row.challenge}</p>
                </div>
                <div className="bg-background px-6 py-5 group-hover:bg-foreground/[0.02] transition-colors">
                  <p className="font-body text-foreground/70 text-sm leading-relaxed">{row.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final Reflection Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="p-12 md:p-20 border border-accent/30 bg-accent/[0.02] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 text-[10rem] text-accent/10 font-sans font-black leading-none rotate-12 select-none">!</div>
          <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase mb-8 block">Final Reflection</span>
          <p className="text-xl md:text-2xl lg:text-3xl font-body text-foreground leading-relaxed">
            &ldquo;{details.technicalAchievement}&rdquo;
          </p>
        </div>
      </div>

    </main>
  );
}
