import { ExternalLink, Github, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Election Data Analysis",
    subtitle: "Data Analytics & Impact",
    date: "April 2025",
    problem: "Understanding voter behavior, party performance, and regional trends accurately from complex datasets.",
    solution: "Performed Exploratory Data Analysis (EDA) on synthetic Indian election datasets and built visual insights.",
    impact: "Clearly identified turnout patterns, constituency trends, and key party performance metrics.",
    techStack: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/iaryan74/Election-Data-Analysis",
    featured: true,
  },
  {
    title: "Global Recession & Layoff Tracker",
    subtitle: "Interactive Power BI Dashboard",
    date: "Jun 2025 – Jul 2025",
    problem: "Lack of highly structured, accessible insights into global layoffs across various industries.",
    solution: "Built a 3-page interactive Power BI dashboard analyzing over 436K+ global layoff records.",
    impact: "Enabled intuitive exploration of workforce trends by industry, region, and time period.",
    techStack: ["Power BI", "DAX", "Data Modeling", "Visualization"],
    demoUrl: "https://www.linkedin.com/posts/aryan-sudhanshu_over-the-last-few-days-ive-been-diving-activity-7406357174597365760-aQo5",
    featured: true,
  },
  {
    title: "ATS Resume Analyzer Bot",
    subtitle: "AI-Powered Telegram Tool",
    date: "2026",
    problem: "Students and professionals lack immediate, ATS-focused feedback on their resume quality.",
    solution: "Built a Telegram bot for real-time ATS scoring, keyword matching, and AI suggestions via Gemini.",
    impact: "Successfully deployed and gained real user adoption, providing instant, actionable resume feedback.",
    techStack: ["Node.js", "Telegram API", "Gemini AI"],
    githubUrl: "https://github.com/iaryan74/ats-resume-analyzer-bot",
    demoUrl: "https://t.me/Cvchecker5Bot",
    featured: true,
  },
  {
    title: "Note Sphere",
    subtitle: "Full-stack Application",
    date: "July 2025",
    problem: "Need for a secure, cross-device platform to organize personal notes efficiently.",
    solution: "Developed a MERN-based app with secure authentication architectures and robust data storage.",
    impact: "Provided a seamless, responsive UI for consistent cross-device note management.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/iaryan74/NoteSphere",
    featured: false,
  },
  {
    title: "Marriage Patterns Analysis",
    subtitle: "Excel Dashboard",
    date: "January 2025",
    problem: "Difficulty in visualizing and correlating marital outcomes with demographics.",
    solution: "Created an interactive Excel dashboard utilizing Pivot Tables, Slicers, and Conditional Formatting.",
    impact: "Synthesized raw data into easily digestible, dynamic charts highlighting key demographic patterns.",
    techStack: ["Excel", "Data Analysis", "Visualization"],
    githubUrl: "https://github.com/iaryan74/Marriage-Patterns-Analysis",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium mb-3 tracking-wide uppercase text-sm"
          >
            Case Studies
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Featured Projects
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 md:gap-24 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-card rounded-3xl overflow-hidden shadow-card border border-border/60 card-hover group"
            >
              <div className="grid md:grid-cols-12 gap-0 overflow-hidden">
                {/* Project Header Area */}
                <div className="md:col-span-5 bg-muted/20 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/60 flex flex-col justify-center relative overflow-hidden group-hover:bg-muted/30 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-[hsl(240,100%,70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <p className="text-accent text-sm font-semibold mb-3 tracking-wide uppercase">
                      {project.date}
                    </p>
                    <h3 className="font-display font-bold text-3xl text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 font-medium mb-8">{project.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-background border border-border shadow-sm hover:border-accent hover:text-accent transition-all hover:scale-105"
                          title="View Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-foreground text-background shadow-md hover:bg-accent transition-all flex items-center gap-2 hover:scale-105"
                          title="View Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Case Study Details Area */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center bg-card">
                  <div className="space-y-8">
                    {/* Problem */}
                    <div>
                      <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        The Problem
                      </h4>
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        The Solution
                      </h4>
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                        {project.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        The Impact
                      </h4>
                      <p className="text-foreground/70 leading-relaxed text-sm md:text-base flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{project.impact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="https://github.com/iaryan74" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent font-medium transition-colors border-b border-transparent hover:border-accent pb-1">
            Explore more on GitHub
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
