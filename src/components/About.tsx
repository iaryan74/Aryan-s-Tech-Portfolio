import { GraduationCap, Target, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: Target, title: "Problem Solver", description: "Analytical approach to tackle complex challenges" },
  { icon: Lightbulb, title: "Innovation", description: "Passionate about turning ideas into reality" },
  { icon: Users, title: "Team Player", description: "Strong collaboration and leadership skills" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="mb-16">
          <div className="section-label">
            <span className="w-8 h-px bg-accent inline-block" />
            About Me
          </div>
          <h2 className="heading-lg uppercase">Turning My Vision<br />Into Reality</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-base text-foreground/80 mb-5 leading-relaxed font-sans">
              I'm a tech-driven problem solver currently pursuing my B.Tech in
              Computer Science Engineering at Lovely Professional University. My
              journey in tech has been fueled by curiosity and a desire to build
              solutions that make a real impact.
            </p>
            <p className="text-base text-muted-foreground mb-5 leading-relaxed font-sans">
              With hands-on experience in data analysis, full-stack development,
              and competitive programming, I approach every project with an
              analytical mindset and adaptability.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed font-sans">
              When I'm not coding, you'll find me exploring new technologies,
              solving competitive programming challenges, or brainstorming
              startup ideas.
            </p>

            {/* Education */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-0.5">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-accent font-sans font-medium text-sm">
                    Lovely Professional University (LPU)
                  </p>
                  <p className="text-muted-foreground font-sans text-xs mt-1">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div key={item.title} className="glass-card p-6 card-hover" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary text-primary-foreground shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground font-sans text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
