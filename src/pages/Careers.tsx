import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Smartphone, TrendingUp, Sparkles, Send, Check, Briefcase } from 'lucide-react';
import CustomSelect from '../components/common/CustomSelect';
import { useToast } from '../components/ui/Toast';
import ScrollReveal from '../components/ui/ScrollReveal';


const positions = [
  {
    id: "react-intern",
    title: "React Developer Intern",
    location: "Remote / Bhavnagar",
    department: "Engineering",
    icon: Terminal,
    desc: "Collaborate on building next-generation web dashboards using Vite, React 19, TypeScript, and Tailwind CSS."
  },
  {
    id: "flutter-intern",
    title: "Flutter Developer Intern",
    location: "Remote / Bhavnagar",
    department: "Engineering",
    icon: Smartphone,
    desc: "Work on mobile-first field logs, offline syncing, maps, and vehicle sensor tracking tools."
  },
  {
    id: "sales-intern",
    title: "Sales & Account Intern",
    location: "Field / Remote",
    department: "Business Development",
    icon: TrendingUp,
    desc: "Connect with infrastructure and road construction contractors, collect feedback, and generate qualified platform leads."
  },
  {
    id: "marketing-intern",
    title: "Digital Marketing Intern",
    location: "Remote",
    department: "Marketing",
    icon: Sparkles,
    desc: "Draft case studies, structure software user guides, and direct branding campaigns for B2B channels."
  }
];

export default function Careers() {
  const { toast } = useToast();
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeUrl: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePositionChange = (value: string) => {
    setSelectedPosition(value);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPosition) {
      toast("Error", "Please select a position to apply for.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData();
      submissionData.append("access_key", "32224b3a-9e51-477c-876b-a5fa993dee9c");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("position", selectedPosition);
      submissionData.append("resumeUrl", formData.resumeUrl);
      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const res = await response.json();
      if (res.success) {
        setIsSuccess(true);
        toast("Application Submitted!", "Thank you for applying. We will review your profile shortly.", "success");
        setFormData({ name: "", email: "", phone: "", resumeUrl: "", message: "" });
        setSelectedPosition("");
      } else {
        toast("Submission Failed", res.message || "Something went wrong.", "error");
      }
    } catch (err) {
      toast("Connection Error", "Could not reach submission server.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden relative">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-grid-mesh [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Careers Hero */}
      <section className="relative pt-20 pb-20 md:py-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center gap-5">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-5">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-accent/20 bg-accent/5 text-accent-light backdrop-blur-sm">
                <Briefcase className="h-3.5 w-3.5" />
                Join the team
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1] max-w-3xl">
                Build the Future of Industrial Software
              </h1>
              <p className="text-base text-primary-muted leading-relaxed max-w-xl">
                We are looking for self-driven, ambitious interns to help us construct digital pipelines for infrastructure and civil engineering fields.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internship Slots */}
      <section className="py-24 bg-card/40 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-display text-primary mb-10 text-left">Open Positions</h2>
          </ScrollReveal>
          
          <ScrollReveal direction="none" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {positions.map((pos) => {
                const Icon = pos.icon;
                return (
                  <motion.div 
                    key={pos.id} 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 14 } }
                    }}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card p-8 rounded-[24px] flex flex-col justify-between hover:border-accent-light/35 transition-colors relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 border-b border-border pb-5 mb-5">
                        <div className="h-11 w-11 bg-accent/5 rounded-[12px] border border-accent/20 flex items-center justify-center text-accent-light group-hover:scale-105 transition-transform duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-primary">{pos.title}</h3>
                          <span className="text-[10px] text-primary-dim uppercase tracking-wider font-bold">{pos.department} &bull; {pos.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-primary-muted leading-relaxed mb-8">{pos.desc}</p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setSelectedPosition(pos.id);
                        const el = document.getElementById('apply-form-container');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-accent-light hover:text-primary self-start flex items-center gap-1 transition-colors relative z-10 cursor-pointer"
                    >
                      Apply for position &rarr;
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-28 relative z-10" id="apply-form-container">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal duration={0.8}>
            <div className="spotlight-card p-8 md:p-12 text-left rounded-[32px] relative overflow-hidden" onMouseMove={handleMouseMove}>
              <div className="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-2xl font-bold font-display text-primary mb-3 relative z-10">Application Form</h2>
              <p className="text-sm text-primary-muted mb-8 relative z-10">
                Complete the fields below to submit your resume. We evaluate candidate profiles weekly.
              </p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center relative z-10"
                  >
                    <div className="h-16 w-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center text-accent-light mb-6 animate-pulse">
                      <Check className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-primary">Application Received</h3>
                    <p className="text-sm text-primary-muted mt-2 max-w-sm">
                      Your details have been registered. A recruiting coordinator will reach out to you within 3 business days if there is a profile match.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 text-xs font-bold uppercase tracking-widest border border-border hover:border-accent-light/40 text-primary hover:bg-card-hover px-6 py-3 rounded-full transition-all cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 relative z-10"
                  >
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Yash Bhalodiya"
                        className="bg-card border border-border focus:border-accent-light rounded-[12px] px-4 py-3 text-sm text-primary placeholder:text-primary-dim/40 focus:outline-none focus:ring-1 focus:ring-accent-light/20 transition-all shadow-inner"
                      />
                    </div>

                    {/* Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Email Address</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="name@company.com"
                          className="bg-card border border-border focus:border-accent-light rounded-[12px] px-4 py-3 text-sm text-primary placeholder:text-primary-dim/40 focus:outline-none focus:ring-1 focus:ring-accent-light/20 transition-all shadow-inner"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 99999 99999"
                          className="bg-card border border-border focus:border-accent-light rounded-[12px] px-4 py-3 text-sm text-primary placeholder:text-primary-dim/40 focus:outline-none focus:ring-1 focus:ring-accent-light/20 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Custom Selection positioning */}
                    <CustomSelect 
                      label="Position to Apply For"
                      value={selectedPosition}
                      onChange={handlePositionChange}
                      options={positions.map(p => ({ value: p.id, label: p.title }))}
                      placeholder="Choose an open internship"
                      required
                    />

                    {/* Resume Link */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="resumeUrl" className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Resume Link (Google Drive / PDF Link)</label>
                      <input 
                        type="url" 
                        id="resumeUrl"
                        name="resumeUrl"
                        value={formData.resumeUrl}
                        onChange={handleInputChange}
                        required
                        placeholder="https://drive.google.com/... (Ensure access is public)"
                        className="bg-card border border-border focus:border-accent-light rounded-[12px] px-4 py-3 text-sm text-primary placeholder:text-primary-dim/40 focus:outline-none focus:ring-1 focus:ring-accent-light/20 transition-all shadow-inner"
                      />
                    </div>

                    {/* Cover note message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-accent-light">Cover Note / Why join us?</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Detail your experience, code repositories, or background details..."
                        className="bg-card border border-border focus:border-accent-light rounded-[12px] px-4 py-3 text-sm text-primary placeholder:text-primary-dim/40 focus:outline-none focus:ring-1 focus:ring-accent-light/20 transition-all shadow-inner resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 mt-4 text-sm font-bold tracking-wide bg-gradient-to-r from-accent to-accent-light disabled:opacity-40 text-white py-4 rounded-full shadow-lg transition-all hover:shadow-glow-accent hover:brightness-110 cursor-pointer animate-pulse"
                    >
                      {isSubmitting ? (
                        <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Application
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
