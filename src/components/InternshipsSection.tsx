import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, PenTool, Palette } from "lucide-react";

const internships = [
  {
    icon: Smartphone,
    role: "Mobile App Development Intern",
    duration: "15 Days",
    company: "NSIC",
    desc: "Worked on mobile application development fundamentals, UI implementation, and real-world app workflows."
  },
  {
    icon: PenTool,
    role: "UI/UX Designer Intern",
    duration: "2 Months",
    company: "Eluid Technology, Bangalore",
    desc: "Designed user-centric interfaces, wireframes, and prototypes while collaborating with development teams."
  },
  {
    icon: Palette,
    role: "Graphic Designer Intern",
    duration: "3 Months",
    company: "DevTown",
    desc: "Created visual designs, marketing creatives, and brand assets following modern design principles."
  }
];

const InternshipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="section-padding relative" aria-labelledby="internships-heading">
      <div className="container mx-auto" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">
            Professional Experience
          </p>
          <h2 id="internships-heading" className="text-3xl md:text-4xl font-bold">
            Internships
          </h2>
        </motion.div>

        {/* Internship Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {item.role}
              </h3>

              <p className="text-sm text-muted-foreground mb-2">
                {item.company} · {item.duration}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;
