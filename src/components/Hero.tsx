import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImage from "@/assets/aryan-profile.jpg";

const roles = [
  "Full-Stack Developer",
  "Data Enthusiast",
  "Problem Solver",
  "ML Explorer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden noise-overlay"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] -right-[200px] w-[700px] h-[700px] rounded-full bg-primary/15 blur-[120px] animate-blob" />
        <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] animate-blob animation-delay-400" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <div className="section-label animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            <p className="text-muted-foreground font-medium mb-3 animate-fade-up animation-delay-200 text-sm tracking-wide uppercase">
              Greetings, I'm
            </p>
            
            <h1 className="heading-xl mb-4 animate-fade-up animation-delay-200">
              Aryan{" "}
              <span className="text-gradient">Sudhanshu</span>
            </h1>

            {/* Typing effect */}
            <div className="h-10 mb-8 animate-fade-up animation-delay-400">
              <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                <span className="text-primary font-semibold">{displayText}</span>
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
              </p>
            </div>

            <p className="text-muted-foreground mb-10 max-w-md animate-fade-up animation-delay-600 text-base leading-relaxed">
              A passionate Computer Science student turning ideas and data into scalable,
              impactful solutions. Experienced in data analysis, full-stack
              development, and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up animation-delay-600">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline group">
                <span>Contact Me</span>
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-up animation-delay-600">
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/aryan-sudhanshu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Linkedin size={18} className="text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/iaryan74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Github size={18} className="text-muted-foreground" />
                </a>
                <a
                  href="mailto:sudhanshuaryan7749@gmail.com"
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail size={18} className="text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl opacity-60" />
              
              {/* Main image */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src={profileImage}
                  alt="Aryan Sudhanshu"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge - Experience */}
              <div className="absolute -bottom-3 -left-3 glass-card shadow-elevated p-3 animate-float z-20">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground leading-none">2+</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Years Building</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - Projects */}
              <div className="absolute -top-2 -right-3 glass-card shadow-elevated p-3 animate-float animation-delay-200 z-20">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-secondary text-secondary-foreground">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground leading-none">2+</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
