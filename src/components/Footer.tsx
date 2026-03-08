import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <span>© {currentYear} Aryan Sudhanshu. Made with</span>
            <Heart size={14} className="text-secondary fill-secondary" />
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/aryan-sudhanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/iaryan74"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:sudhanshuaryan7749@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
