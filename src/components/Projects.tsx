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
    <section id="projects" className="section-padding bg-muted/40 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Projects</div>
          <h2 className="heading-lg">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="glass-card overflow-hidden card-hover group">
              {/* Header */}
              <div className="h-40 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary p-6 flex items-end relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-all duration-500" />
                <div className="relative z-10">
                  <p className="text-muted-foreground text-xs font-medium mb-1">{project.date}</p>
                  <h3 className="font-display font-bold text-xl text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                  <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowUpRight size={14} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-lg mx-auto">
          <div className="glass-card p-8">
            <h3 className="font-display font-semibold text-lg mb-3">Open to Opportunities</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Currently focused on learning, building projects, and gaining
              experience. Open to internships, collaborations, and exciting
              opportunities in tech!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
