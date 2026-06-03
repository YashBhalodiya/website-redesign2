import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Smartphone, TrendingUp, Sparkles, Send, Check } from 'lucide-react';
import CustomSelect from '../components/common/CustomSelect';
import { useToast } from '../components/ui/Toast';

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
    <div className="overflow-x-hidden">
      
      {/* Careers Hero */}
      <section className="relative pt-12 pb-20 md:py-24">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-light mb-6">
            Join the team
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1] mb-6 max-w-3xl">
            Build the Future of Industrial Software
          </h1>
          <p className="text-base text-primary-muted leading-relaxed max-w-xl">
            We are looking for self-driven, ambitious interns to help us construct digital pipelines for infrastructure and civil engineering fields.
          </p>
        </div>
      </section>

      {/* Internship Slots */}
      <section className="py-16 bg-[#05070A] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-lg font-bold font-display text-primary mb-10 text-left">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {positions.map((pos) => {
              const Icon = pos.icon;
              return (
                <div key={pos.id} className="bg-card border border-border p-8 rounded-theme-md flex flex-col justify-between hover:border-accent/30 transition-colors">
                  <div>
                    <div className="flex items-center gap-4 border-b border-border/60 pb-4 mb-5">
                      <div className="h-10 w-10 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-primary">{pos.title}</h3>
                        <span className="text-[10px] text-primary-muted uppercase tracking-wider">{pos.department} &bull; {pos.location}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-primary-muted leading-relaxed mb-6">{pos.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPosition(pos.id);
                      const el = document.getElementById('apply-form-container');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-light self-start flex items-center gap-1 transition-colors"
                  >
                    Apply for position &rarr;
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20" id="apply-form-container">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border border-border rounded-theme-lg p-8 md:p-12 text-left relative">
            <h2 className="text-xl font-bold font-display text-primary mb-3">Application Form</h2>
            <p className="text-xs text-primary-muted mb-8">
              Complete the fields below to submit your resume. We evaluate candidate profiles weekly.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="h-16 w-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center text-accent mb-6 animate-pulse">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-primary">Application Received</h3>
                  <p className="text-sm text-primary-muted mt-2 max-w-sm">
                    Your details have been registered. A recruiting coordinator will reach out to you within 3 business days if there is a profile match.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-wider border border-border text-primary hover:bg-card-hover px-5 py-2.5 rounded-theme-sm transition-colors"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Yash Bhalodiya"
                      className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="name@company.com"
                        className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 99999 99999"
                        className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
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
                    <label htmlFor="resumeUrl" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Resume Link (Google Drive / PDF Link)</label>
                    <input 
                      type="url" 
                      id="resumeUrl"
                      name="resumeUrl"
                      value={formData.resumeUrl}
                      onChange={handleInputChange}
                      required
                      placeholder="https://drive.google.com/... (Ensure access is public)"
                      className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Cover note message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Cover Note / Why join us?</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Detail your experience, code repositories, or background details..."
                      className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 mt-4 text-sm font-semibold tracking-wide bg-accent disabled:bg-accent/40 text-white py-4 rounded-theme-sm border border-accent/20 transition-all hover:bg-accent-light"
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
        </div>
      </section>

    </div>
  );
}
