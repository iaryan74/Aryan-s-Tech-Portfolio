import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Resume</div>
          <h2 className="heading-lg">Download CV</h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card p-10 shadow-card text-center">
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary mb-6">
              <FileText size={36} />
            </div>
            
            <h3 className="font-display font-semibold text-lg mb-3">
              Aryan Sudhanshu - Resume
            </h3>
            
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed max-w-sm mx-auto">
              Download my resume to learn more about my education, experience, skills, and projects.
            </p>

            <a
              href="/Aryan_CV.pdf"
              download="Aryan_Sudhanshu_Resume.pdf"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
