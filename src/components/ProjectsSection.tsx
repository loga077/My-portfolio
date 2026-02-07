import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Med Scan",
    description: "AI-powered disease prediction system using machine learning models to analyze medical data and provide early diagnosis insights.",
    tech: ["Python", "PyTorch", "Flask", "React"],
    github: "https://github.com/loga077",
  },
  {
    title: "XR-ARM Based Device for Tech Education",
    description: "Extended reality educational device leveraging ARM architecture to create immersive learning experiences for technology students.",
    tech: ["Unity", "C#", "AR/VR", "ARM"],
  },
  {
    title: "Aavishkaar-2026 Event Website",
    description: "Dynamic, visually engaging event website for the department symposium featuring interactive schedules, registration, and live updates.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/loga077",
  },
  {
    title: "Startup Website",
    description: "Modern, conversion-optimized startup landing page with sleek animations, responsive design, and SEO-friendly architecture.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/loga077",
  },
  {
    title: "Fashion Shop Website",
    description: "E-commerce fashion platform with product catalogs, shopping cart functionality, and an elegant user interface design.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/loga077",
  },
  {
    title: "MechLink",
    description: "A collaborative platform connecting mechanical engineering students and professionals for project sharing and networking.",
    tech: ["React", "Node.js", "REST API"],
    github: "https://github.com/loga077",
  },
  {
    title: "Binance Futures Testnet Trading Bot",
    description: "Automated cryptocurrency trading bot for Binance Futures testnet with strategy backtesting and real-time trade execution.",
    tech: ["Python", "REST API", "WebSocket"],
    github: "https://github.com/loga077",
  },
  {
    title: "Voice-Assisted AI Keylogger",
    description: "AI-powered keylogger with speech recognition capabilities for accessibility research and voice-driven input analysis.",
    tech: ["Python", "Speech Recognition", "AI"],
    github: "https://github.com/loga077",
  },
  {
    title: "Web Page Clone",
    description: "Pixel-perfect recreation of popular web pages demonstrating advanced CSS skills, responsive layouts, and attention to design detail.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/loga077",
  },
];

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    className="glass rounded-xl p-6 skill-card-hover group flex flex-col"
  >
    <div className="flex items-start justify-between mb-3">
      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <div className="flex gap-2 flex-shrink-0 ml-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live`}
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>

    <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/15 font-mono"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.article>
);

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative" aria-labelledby="projects-heading">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">My Work</p>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
