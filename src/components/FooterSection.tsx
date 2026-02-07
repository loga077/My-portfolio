import { Github, Linkedin, Mail, Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4" role="contentinfo">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-bold gradient-text text-lg">&lt;Loga /&gt;</p>
          <p className="text-xs text-muted-foreground mt-1">
            UI/UX Designer · Full-Stack Developer · ML Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:loganathanmurugan055@gmail.com"
            aria-label="Email Loganathan"
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/loga077"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/loganathan-murugan-259353361"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Loganathan. Made with <Heart className="w-3 h-3 text-destructive" /> 
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
