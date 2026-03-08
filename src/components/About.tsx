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
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Get to Know Me</p>
          <h2 className="heading-lg">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a tech-driven problem solver currently pursuing my B.Tech in
              Computer Science Engineering at Lovely Professional University. My
              journey in tech has been fueled by curiosity and a desire to build
              solutions that make a real impact.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              With hands-on experience in data analysis, full-stack development,
              and competitive programming, I approach every project with an
              analytical mindset and adaptability. I'm passionate about machine
              learning, product development, and entrepreneurship.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              solving competitive programming challenges, or brainstorming
              startup ideas.
            </p>

            {/* Education Card */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-primary font-medium">
                    Lovely Professional University (LPU)
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-xl shadow-card border border-border">
                <p className="font-display text-3xl font-bold text-primary">
                  2+
                </p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-card border border-border">
                <p className="font-display text-3xl font-bold text-secondary">
                  2+
                </p>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-card border border-border">
                <p className="font-display text-3xl font-bold text-primary">
                  100+
                </p>
                <p className="text-sm text-muted-foreground">Problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
