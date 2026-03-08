import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "Analytical approach to tackle complex challenges",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Passionate about turning ideas into reality",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong collaboration and leadership skills",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">About Me</div>
          <h2 className="heading-lg">Get to Know Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <p className="text-base text-foreground/80 mb-5 leading-relaxed">
              I'm a tech-driven problem solver currently pursuing my B.Tech in
              Computer Science Engineering at Lovely Professional University. My
              journey in tech has been fueled by curiosity and a desire to build
              solutions that make a real impact.
            </p>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed">
              With hands-on experience in data analysis, full-stack development,
              and competitive programming, I approach every project with an
              analytical mindset and adaptability.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              solving competitive programming challenges, or brainstorming
              startup ideas.
            </p>

            {/* Education Card */}
            <div className="glass-card p-5 shadow-card">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base mb-0.5">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    Lovely Professional University (LPU)
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-5 shadow-card card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: "2+", label: "Projects", color: "text-primary" },
                { value: "2+", label: "Years Exp.", color: "text-secondary" },
                { value: "100+", label: "Problems", color: "text-accent" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 glass-card shadow-card">
                  <p className={`font-display text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
