import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface SkillCategory {
  title: string;
  color: "primary" | "accent";
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Web",
    color: "primary",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Design",
    color: "accent",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe Creative Suite", level: 80 },
      { name: "Canva", level: 85 },
      { name: "DaVinci Resolve", level: 70 },
    ],
  },
  {
    title: "ML & Backend",
    color: "primary",
    skills: [
      { name: "Python", level: 85 },
      { name: "NumPy & Pandas", level: 80 },
      { name: "PyTorch", level: 70 },
      { name: "Flask & REST APIs", level: 75 },
      { name: "Streamlit", level: 70 },
    ],
  },
  {
    title: "3D & Game Dev",
    color: "accent",
    skills: [
      { name: "Unity", level: 75 },
      { name: "Blender", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay, inView }: { name: string; level: number; color: "primary" | "accent"; delay: number; inView: boolean }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full ${color === "primary" ? "gradient-primary" : "gradient-accent"}`}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding relative" aria-labelledby="skills-heading">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">What I Know</p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIdx * 0.1 }}
              onMouseEnter={() => setHoveredCard(catIdx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`glass rounded-xl p-6 transition-all duration-300 ${
                hoveredCard === catIdx
                  ? category.color === "primary"
                    ? "glow-box"
                    : "glow-accent"
                  : ""
              }`}
            >
              <h3 className={`text-lg font-bold mb-5 ${category.color === "primary" ? "gradient-text" : "gradient-text-accent"}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={0.4 + catIdx * 0.1 + skillIdx * 0.08}
                    inView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI & Productivity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 glass rounded-xl p-6"
        >
          <h3 className="text-lg font-bold gradient-text mb-4">AI & Productivity</h3>
          <div className="flex flex-wrap gap-3">
            {["AI-Assisted Development", "Rapid Prototyping", "Vibe Coding", "Prompt Engineering"].map((tool) => (
              <span key={tool} className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
