import { Code2, Database, Globe, Brain, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Java", "JavaScript", "C"],
    color: "from-primary to-accent",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["React", "Node.js", "HTML", "CSS"],
    color: "from-secondary to-orange-400",
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase", "Git"],
    color: "from-primary to-teal-400",
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["Express.js", "Flutter", "Tailwind CSS"],
    color: "from-accent to-cyan-400",
  },
  {
    title: "Data & ML",
    icon: Brain,
    skills: ["Excel", "Data Analysis", "Pivot Tables", "Visualization"],
    color: "from-secondary to-amber-400",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-Solving", "Leadership", "Time Management", "Adaptability"],
    color: "from-primary to-indigo-400",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">What I Can Do</p>
          <h2 className="heading-lg">My Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
