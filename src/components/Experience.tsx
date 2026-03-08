import { TrendingUp, Users, Calendar } from "lucide-react";

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
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Experience</div>
          <h2 className="heading-lg">My Journey</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="glass-card p-6 card-hover relative overflow-hidden">
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />

              <div className="pl-5">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
