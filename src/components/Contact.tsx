import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sudhanshuaryan7749@gmail.com", href: "mailto:sudhanshuaryan7749@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6207062498", href: "tel:+916207062498" },
  { icon: Linkedin, label: "LinkedIn", value: "aryan-sudhanshu", href: "https://www.linkedin.com/in/aryan-sudhanshu/" },
  { icon: Github, label: "GitHub", value: "iaryan74", href: "https://github.com/iaryan74" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-muted/40 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">Contact</div>
          <h2 className="heading-lg">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">
              Let's build something amazing together
            </h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on
              projects, or just have a chat about technology.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 glass-card hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <info.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{info.label}</p>
                    <p className="font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2.5 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>Jalandhar, Punjab, India</span>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card p-7">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-muted-foreground uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-muted-foreground uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-muted-foreground uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none text-sm"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : (<><Send size={16} /> Send Message</>)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
