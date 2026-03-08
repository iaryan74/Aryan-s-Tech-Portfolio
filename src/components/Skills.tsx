import { Code2, Database, Globe, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  { title: "Programming Languages", icon: Code2, skills: ["C++", "Java", "JavaScript", "C"] },
  { title: "Web Technologies", icon: Globe, skills: ["React", "Node.js", "HTML", "CSS"] },
  { title: "Databases & Tools", icon: Database, skills: ["MySQL", "MongoDB", "Firebase", "Git"] },
  { title: "Frameworks", icon: Wrench, skills: ["Express.js", "Flutter", "Tailwind CSS"] },
  { title: "Data & ML", icon: Brain, skills: ["Excel", "Data Analysis", "Pivot Tables", "Visualization"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem-Solving", "Leadership", "Time Management", "Adaptability"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/40 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Skills</div>
          <h2 className="heading-lg">What I Can Do</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 card-hover group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <category.icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-base mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
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
