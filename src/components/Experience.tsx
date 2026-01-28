import { Briefcase, TrendingUp, Users, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Distribution Partner",
    company: "Loyal Mate",
    period: "December 2024 – Present",
    description: [
      "Onboarded 10+ cafés and retail businesses onto the Loyal Mate platform",
      "Increased partner adoption and customer engagement by 30%+",
      "Maintained strong business relationships and ensured seamless onboarding",
    ],
    techStack: ["Flutter", "Google Firebase"],
    icon: TrendingUp,
  },
  {
    title: "Media Head",
    company: "RiteMyStory",
    period: "April 2023 – November 2024",
    description: [
      "Led media and content strategy for the organization",
      "Managed a creative team producing 50+ promotional assets",
      "Boosted audience engagement and brand visibility significantly",
    ],
    techStack: ["Meta Business Suite", "Content Strategy"],
    icon: Users,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="heading-lg">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        <exp.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-xl">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-foreground/70 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
