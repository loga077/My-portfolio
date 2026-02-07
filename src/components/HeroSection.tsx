import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Scene3D from "./Scene3D";
import profilePhoto from "@/assets/profile-photo.jpeg";

const roles = [
  "UI/UX Designer",
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Unity Developer",
  "Graphic Designer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.slice(0, displayText.length - 1)
              : currentRole.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Mouse tracking for cursor glow
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Scene3D />

      {/* Mouse cursor glow effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute z-20 hidden md:block transition-opacity duration-300"
          style={{
            left: mousePos.x - 200,
            top: mousePos.y - 200,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, hsl(175 85% 50% / 0.08) 0%, hsl(175 85% 50% / 0.03) 40%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
          
          {/* Profile photo - shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glowing border ring */}
              <div className="absolute -inset-1 rounded-2xl gradient-primary opacity-30 blur-md animate-pulse-glow" />
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden ring-2 ring-primary/40 relative">
                <img
                  src={profilePhoto}
                  alt="Loganathan Murugan – UI/UX Designer and Full-Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Shine overlay animation */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
              </div>
            </motion.div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full gradient-primary opacity-15 blur-2xl" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-accent opacity-15 blur-xl" />
          </motion.div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs sm:text-sm font-mono text-primary mb-3 sm:mb-4 tracking-widest uppercase"
            >
              ⚡ Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              <motion.span
                className="text-foreground inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Loganathan
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 min-h-[2rem] sm:min-h-[2.5rem]"
            >
              <span className="gradient-text">{displayText}</span>
              <span className="border-r-2 border-primary ml-0.5 animate-typewriter-blink">&nbsp;</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
            >
              I design and build immersive, intelligent, and interactive digital
              experiences using UI/UX design, web technologies, Unity, and machine learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(175 85% 50% / 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg gradient-primary text-primary-foreground font-semibold transition-opacity glow-box text-sm sm:text-base text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
              <motion.a
                href="/loganathan_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-accent/40 text-accent font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
