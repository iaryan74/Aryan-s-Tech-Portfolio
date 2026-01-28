import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/aryan-profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-400" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 animate-fade-up">
              Hello, I'm
            </p>
            <h1 className="heading-xl mb-4 animate-fade-up animation-delay-200">
              Aryan{" "}
              <span className="text-gradient">Sudhanshu</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-up animation-delay-400">
              Tech-Driven Problem Solver | Full-Stack Developer | Data & ML
              Enthusiast
            </p>
            <p className="text-foreground/70 mb-8 max-w-lg animate-fade-up animation-delay-600">
              A passionate CS student turning ideas and data into scalable,
              impactful solutions. Experienced in data analysis, full-stack
              development, and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up animation-delay-600">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-up animation-delay-600">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <a
                href="https://www.linkedin.com/in/aryan-sudhanshu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/iaryan74"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:sudhanshuaryan7749@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-2xl -z-10" />

              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={profileImage}
                  alt="Aryan Sudhanshu"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elevated p-4 animate-float">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-display text-2xl font-bold text-primary">
                  2+ Years
                </p>
                <p className="text-xs text-muted-foreground">
                  Building Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#about" className="text-muted-foreground hover:text-primary">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
