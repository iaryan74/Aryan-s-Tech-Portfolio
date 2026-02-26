import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Globe, Cpu, Sparkles } from "lucide-react";
import profileImage from "@/assets/aryan-profile.jpg";

const roles = [
  "Full-Stack Developer",
  "Data Enthusiast",
  "Problem Solver",
  "ML Explorer",
];

const floatingIcons = [
  { Icon: Code2, delay: 0, position: "top-20 right-20" },
  { Icon: Database, delay: 1, position: "top-40 right-40" },
  { Icon: Globe, delay: 2, position: "bottom-40 right-24" },
  { Icon: Cpu, delay: 0.5, position: "top-32 left-20 hidden lg:block" },
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
      className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/20 via-orange-300/10 to-transparent blur-3xl animate-blob animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl animate-pulse" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 animate-float`}
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/10">
            <Icon size={32} className="text-primary" />
          </div>
        </div>
      ))}

      {/* Sparkles decoration */}
      <div className="absolute top-1/4 right-1/4 animate-pulse">
        <Sparkles className="text-secondary/40" size={24} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-pulse animation-delay-200">
        <Sparkles className="text-primary/40" size={20} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            <p className="text-primary font-medium mb-4 animate-fade-up animation-delay-200">
              Greetings, I'm
            </p>
            
            <h1 className="heading-xl mb-4 animate-fade-up animation-delay-200">
              Md Nayeem{" "}
              <span className="relative">
                <span className="text-gradient">Akhtar</span>
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 12" 
                  fill="none"
                >
                  <path 
                    d="M2 8C50 2 150 2 198 8" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                </svg>
              </span>
            </h1>

            {/* Typing effect */}
            <div className="h-12 mb-6 animate-fade-up animation-delay-400">
              <p className="text-xl sm:text-2xl font-display font-semibold text-foreground/80">
                <span className="text-muted-foreground">I'm a </span>
                <span className="text-primary">{displayText}</span>
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
              </p>
            </div>

            <p className="text-foreground/70 mb-8 max-w-lg animate-fade-up animation-delay-600 text-lg leading-relaxed">
              A passionate Computer Science student turning ideas and data into scalable,
              impactful solutions. Experienced in data analysis, full-stack
              development, and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up animation-delay-600">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline group">
                <span>Contact Me</span>
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fade-up animation-delay-600">
              <span className="text-sm text-muted-foreground font-medium">Connect with me</span>
              <div className="h-px flex-1 max-w-20 bg-border" />
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/aryan-sudhanshu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin size={20} className="text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href="https://github.com/iaryan74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Github size={20} className="text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href="mailto:sudhanshuaryan7749@gmail.com"
                  className="p-3 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail size={20} className="text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Rotating border */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary via-secondary to-primary opacity-30 blur-sm animate-spin-slow" 
                   style={{ animationDuration: '8s' }} />
              
              {/* Decorative rings */}
              <div className="absolute -inset-8 border-2 border-dashed border-primary/20 rounded-[2.5rem] animate-spin-slow"
                   style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-12 border border-dashed border-secondary/10 rounded-[3rem] animate-spin-slow"
                   style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

              {/* Main image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-elevated border-4 border-background">
                <img
                  src={profileImage}
                  alt="Md Nayeem Akhtar"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge - Experience */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-elevated p-4 border border-border animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">2+</p>
                    <p className="text-xs text-muted-foreground">Years Building</p>
                  </div>
                </div>
              </div>

              {/* Floating badge - Projects */}
              <div className="absolute -top-2 -right-4 bg-card rounded-2xl shadow-elevated p-4 border border-border animate-float animation-delay-200 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-secondary to-orange-400 text-secondary-foreground">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">2+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
