import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Note Sphere",
    subtitle: "Note Taking Application",
    date: "July 2025",
    description:
      "A secure MERN-based note-taking application with authentication, data storage, and responsive UI for seamless cross-device experience.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/iaryan74/NoteSphere",
  },
  {
    title: "Marriage Patterns Analysis",
    subtitle: "Data Visualization Dashboard",
    date: "January 2025",
    description:
      "Interactive Excel dashboard for analyzing marriage patterns and marital outcomes using Pivot Tables, Charts, Slicers, and Conditional Formatting.",
    techStack: ["Excel", "Data Analysis", "Visualization"],
    githubUrl: "https://github.com/iaryan74/Election-Data-Analysis",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-accent inline-block" />
            Portfolio
            <span className="w-8 h-px bg-accent inline-block" />
          </div>
          <h2 className="heading-lg uppercase">Recent Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Project card with image area */}
              <div className="glass-card overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-accent/10 via-secondary to-card p-8 flex items-end relative">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <button className="p-2.5 rounded-full bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-muted-foreground mb-1">{project.date}</p>
                    <h3 className="font-display font-bold text-2xl text-foreground">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-sans text-sm text-accent font-medium mb-2">{project.subtitle}</p>
                  <p className="text-muted-foreground font-sans text-sm mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="skill-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="glass-card p-10 max-w-xl mx-auto">
            <h3 className="font-display font-bold text-2xl mb-3">Open to Opportunities</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
              Currently focused on learning, building projects, and gaining
              experience. Open to internships, collaborations, and exciting
              opportunities in tech!
            </p>
            <a href="#contact" className="btn-primary">
              Let's Connect
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
