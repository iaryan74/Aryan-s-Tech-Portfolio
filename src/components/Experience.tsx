import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Distribution Partner",
    company: "Loyal Mate",
    period: "Dec 2024 – Present",
    description: [
      "Onboarded 10+ cafés and retail businesses onto the Loyal Mate platform",
      "Increased partner adoption and customer engagement by 30%+",
      "Maintained strong business relationships and ensured seamless onboarding",
    ],
    techStack: ["Flutter", "Google Firebase"],
  },
  {
    title: "Media Head",
    company: "RiteMyStory",
    period: "Apr 2023 – Nov 2024",
    description: [
      "Led media and content strategy for the organization",
      "Managed a creative team producing 50+ promotional assets",
      "Boosted audience engagement and brand visibility significantly",
    ],
    techStack: ["Meta Business Suite", "Content Strategy"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-card/50 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label justify-center">
            <span className="w-8 h-px bg-accent inline-block" />
            Experience
            <span className="w-8 h-px bg-accent inline-block" />
          </div>
          <h2 className="heading-lg uppercase">My Journey</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="glass-card p-8 card-hover relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full" />

              <div className="pl-5">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                  <div>
                    <h3 className="font-display font-bold text-xl">{exp.title}</h3>
                    <p className="text-accent font-sans font-medium text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans bg-secondary px-4 py-2 rounded-full">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground font-sans text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
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
