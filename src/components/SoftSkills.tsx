import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users, Lightbulb, MessageSquare, Handshake,
  Calendar, Clock, Compass, RefreshCw, Sparkles
} from "lucide-react";

const softSkills = [
  { icon: Users, label: "Leadership" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: MessageSquare, label: "Communication" },
  { icon: Handshake, label: "Team Collaboration" },
  { icon: Calendar, label: "Event Coordination" },
  { icon: Clock, label: "Time Management" },
  { icon: Compass, label: "Decision Making" },
  { icon: RefreshCw, label: "Adaptability" },
  { icon: Sparkles, label: "Creative Thinking" },
];

const SoftSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" aria-labelledby="soft-skills-heading">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-2">Beyond Code</p>
          <h2 id="soft-skills-heading" className="text-3xl md:text-4xl font-bold">
            Soft <span className="gradient-text-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="glass rounded-xl p-4 text-center skill-card-hover group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
