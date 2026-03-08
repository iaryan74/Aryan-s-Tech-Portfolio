import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
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
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 px-5 sm:px-8 lg:px-12"
    >
      {/* Warm gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Top section with greeting and image */}
        <div className="relative flex flex-col items-center text-center mb-8">
          {/* Script greeting */}
          <p className="font-display italic text-3xl sm:text-4xl lg:text-5xl text-foreground/70 mb-6 animate-fade-up">
            Hey, there
          </p>

          {/* Profile image - large and prominent */}
          <div className="relative w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-[22rem] rounded-3xl overflow-hidden mb-8 animate-scale-in">
            <img
              src={profileImage}
              alt="Aryan Sudhanshu"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>

          {/* Available badge */}
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border mb-10 animate-fade-up animation-delay-200">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-sans text-sm font-medium text-foreground">Available for new opportunities</span>
          </div>
        </div>

        {/* Big bold name */}
        <div className="text-center animate-fade-up animation-delay-400">
          <h1 className="heading-xl mb-4 uppercase">
            I Am{" "}
            <br className="sm:hidden" />
            <span className="text-foreground">Aryan</span>
          </h1>
        </div>

        {/* Role and description row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-6 animate-fade-up animation-delay-600">
          {/* Typing role */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-sm text-center lg:text-right leading-relaxed font-sans">
            Specialized in Full-Stack Development, Data Analysis, and building scalable solutions.
          </p>

          {/* Stats */}
          <div className="flex gap-10">
            <div className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-bold text-foreground">2+</p>
              <p className="font-sans text-xs text-muted-foreground mt-1">Projects completed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-bold text-foreground">100+</p>
              <p className="font-sans text-xs text-muted-foreground mt-1">Problems solved</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
