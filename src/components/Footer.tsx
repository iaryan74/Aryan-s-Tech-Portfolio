import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Md Nayeem Akhtar. Made with</span>
            <Heart size={16} className="text-destructive fill-destructive" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nayeem-akhtar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/nayeem75"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:nayeemakhtar@gmail.com"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
