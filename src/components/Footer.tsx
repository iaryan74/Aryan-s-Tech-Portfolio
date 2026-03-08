import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <span>© {currentYear} Aryan Sudhanshu. Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-2">
            {[
              { href: "https://www.linkedin.com/in/aryan-sudhanshu/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/iaryan74", icon: Github, label: "GitHub" },
              { href: "mailto:sudhanshuaryan7749@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
