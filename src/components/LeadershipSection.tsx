import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Users, Award, Megaphone } from "lucide-react";

const roles = [
  { icon: Crown, title: "Cultural Coordinator", desc: "Organized and led cultural events, managing teams and creative programming across the department." },
  { icon: Users, title: "Department Coordinator", desc: "Coordinated departmental activities, ensuring seamless collaboration between faculty and students." },
  { icon: Award, title: "Placement Coordinator", desc: "Facilitated campus placement drives, bridging the gap between students and industry recruiters." },
  { icon: Megaphone, title: "Founder – Tech Info", desc: "Founded and leading Tech Info, delivering technology-driven digital solutions." },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-padding relative" aria-labelledby="leadership-heading">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-2">Roles & Impact</p>
          <h2 id="leadership-heading" className="text-3xl md:text-4xl font-bold">
            Leadership & <span className="gradient-text-accent">Responsibilities</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 text-center skill-card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110 transition-transform">
                <role.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
