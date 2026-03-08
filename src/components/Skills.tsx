import { Code2, Database, Globe, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  { title: "Programming Languages", icon: Code2, skills: ["C++", "Java", "JavaScript", "C"], period: "2022–Present" },
  { title: "Web Technologies", icon: Globe, skills: ["React", "Node.js", "HTML", "CSS"], period: "2023–Present" },
  { title: "Databases & Tools", icon: Database, skills: ["MySQL", "MongoDB", "Firebase", "Git"], period: "2023–Present" },
  { title: "Frameworks", icon: Wrench, skills: ["Express.js", "Flutter", "Tailwind CSS"], period: "2023–Present" },
  { title: "Data & ML", icon: Brain, skills: ["Excel", "Data Analysis", "Pivot Tables", "Visualization"], period: "2024–Present" },
  { title: "Soft Skills", icon: Users, skills: ["Problem-Solving", "Leadership", "Time Management", "Adaptability"], period: "Always" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-accent inline-block" />
            Skills
            <span className="w-8 h-px bg-accent inline-block" />
          </div>
          <h2 className="heading-lg uppercase">Experience & Skills</h2>
        </div>

        {/* Timeline-style skills */}
        <div className="max-w-4xl mx-auto space-y-0">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="grid grid-cols-[100px_1fr_1fr] sm:grid-cols-[140px_1fr_1fr] gap-4 sm:gap-8 py-6 border-b border-border items-start group hover:bg-card/50 -mx-4 px-4 rounded-xl transition-all duration-300"
            >
              {/* Period */}
              <p className="font-sans text-sm text-muted-foreground pt-1">{category.period}</p>

              {/* Title with icon */}
              <div className="flex items-center gap-3">
                <category.icon size={18} className="text-accent shrink-0" />
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="font-sans text-sm text-muted-foreground">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
