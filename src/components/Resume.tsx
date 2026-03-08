import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Resume</p>
          <h2 className="heading-lg">Download CV</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6">
              <FileText size={40} />
            </div>
            
            <h3 className="font-display font-semibold text-xl mb-4">
              Aryan Sudhanshu - Resume
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Download my resume to learn more about my education, experience, skills, and projects.
            </p>

            <a
              href="/Aryan_CV.pdf"
              download="Aryan_Sudhanshu_Resume.pdf"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
