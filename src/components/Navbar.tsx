import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass glow-box" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4">
        <a href="#" className="text-lg sm:text-xl font-bold gradient-text">
          &lt;Loga /&gt;
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/loganathan_resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Tablet nav (medium screens) */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/loganathan_resume.pdf"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg gradient-primary text-primary-foreground"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            className="text-foreground ml-1"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet dropdown menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors py-2.5 px-3 rounded-lg"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="/loganathan_resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2.5 mt-2 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground w-fit"
                onClick={() => setIsMobileOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
