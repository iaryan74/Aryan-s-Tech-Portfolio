import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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
      className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden"
    >
      {/* Subtle warm gradient bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="section-label animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            <p className="text-muted-foreground font-medium mb-3 animate-fade-up animation-delay-200 text-sm tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="heading-xl mb-4 animate-fade-up animation-delay-200">
              Aryan{" "}
              <span className="text-gradient">Sudhanshu</span>
            </h1>

            {/* Typing */}
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

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up animation-delay-600">
              <a href="#projects" className="btn-primary group">
                <span>View Projects</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline group">
                <span>Contact Me</span>
                <Mail size={16} />
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 animate-fade-up animation-delay-600">
              {[
                { href: "https://www.linkedin.com/in/aryan-sudhanshu/", icon: Linkedin },
                { href: "https://github.com/iaryan74", icon: Github },
                { href: "mailto:sudhanshuaryan7749@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Icon size={18} className="text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="relative w-72 h-80 sm:w-80 sm:h-[22rem] lg:w-[22rem] lg:h-[26rem] rounded-3xl overflow-hidden border-2 border-border">
                <img
                  src={profileImage}
                  alt="Aryan Sudhanshu"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary text-primary-foreground">
                    <span className="text-sm font-bold">2+</span>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">Years</p>
                    <p className="text-xs text-muted-foreground">Building</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-3 -right-3 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float animation-delay-200 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent text-accent-foreground">
                    <span className="text-sm font-bold">2+</span>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">Projects</p>
                    <p className="text-xs text-muted-foreground">Completed</p>
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
