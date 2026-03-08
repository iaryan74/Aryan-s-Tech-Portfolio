import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Note Sphere",
    subtitle: "Note Taking Application",
    date: "July 2025",
    description:
      "A secure MERN-based note-taking application with authentication, data storage, and responsive UI for seamless cross-device experience.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "from-primary to-accent",
    githubUrl: "https://github.com/iaryan74/NoteSphere",
  },
  {
    title: "Marriage Patterns Analysis",
    subtitle: "Data Visualization Dashboard",
    date: "January 2025",
    description:
      "Interactive Excel dashboard for analyzing marriage patterns and marital outcomes using Pivot Tables, Charts, Slicers, and Conditional Formatting.",
    techStack: ["Excel", "Data Analysis", "Visualization"],
    color: "from-secondary to-orange-400",
    githubUrl: "https://github.com/iaryan74/Election-Data-Analysis",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="heading-lg">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border card-hover group"
            >
              {/* Project header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} p-6 flex items-end relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Folder size={120} />
                </div>
                <div className="relative z-10">
                  <p className="text-primary-foreground/80 text-sm mb-1">
                    {project.date}
                  </p>
                  <h3 className="font-display font-bold text-2xl text-primary-foreground">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80">{project.subtitle}</p>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="font-display font-semibold text-xl mb-4">
              Open to Opportunities
            </h3>
            <p className="text-muted-foreground">
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
