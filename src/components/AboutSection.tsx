import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Brain, Gamepad2 } from "lucide-react";

const highlights = [
  { icon: Palette, label: "UI/UX Designer", desc: "Creating intuitive, visually stunning interfaces" },
  { icon: Code, label: "Full-Stack Developer", desc: "Building robust web applications end to end" },
  { icon: Gamepad2, label: "Unity & XR Developer", desc: "Crafting immersive 3D & extended reality experiences" },
  { icon: Brain, label: "ML Practitioner", desc: "Developing intelligent AI-powered solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" aria-labelledby="about-heading">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-2">Who I Am</p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm <strong className="text-foreground">Loganathan Murugan</strong>, a passionate
              multi-disciplinary designer and developer based in India. I blend design thinking with
              technical expertise to create digital products that are both visually engaging and
              functionally strong.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am currently <strong className="text-foreground">pursuing Information Technology</strong>{" "}
              at <strong className="text-foreground">
                Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College
              </strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Through multiple internships, I have worked across{" "}
              <strong className="text-foreground">UI/UX design</strong>,{" "}
              <strong className="text-foreground">graphic design</strong>, and{" "}
              <strong className="text-foreground">mobile & web application development</strong>,
              gaining hands-on experience in building real-world products.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I am deeply passionate about <strong className="text-foreground">design</strong>,{" "}
              <strong className="text-foreground">technology</strong>, and{" "}
              <strong className="text-foreground">research</strong>, and I enjoy creating solutions
              that make a positive and meaningful impact. I thrive at the intersection of creativity
              and technology—whether it’s designing a pixel-perfect interface, building a full-stack
              system, developing XR experiences, or working with machine learning models.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 skill-card-hover group"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
