import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import CustomSelect from '../components/common/CustomSelect';
import { useToast } from '../components/ui/Toast';

const inquiryTypes = [
  { value: "contrack_demo", label: "Request ConTrack Demo" },
  { value: "custom_software", label: "Custom Enterprise Software Build" },
  { value: "automation", label: "Workflow Automation Project" },
  { value: "general", label: "General Business Partnership" }
];

export default function Contact() {
  const { toast } = useToast();
  const [inquiryType, setInquiryType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquiryChange = (value: string) => {
    setInquiryType(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryType) {
      toast("Error", "Please select an inquiry type.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = new FormData();
      submissionData.append("access_key", "32224b3a-9e51-477c-876b-a5fa993dee9c");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("company", formData.company);
      submissionData.append("inquiryType", inquiryType);
      submissionData.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const res = await response.json();
      if (res.success) {
        setIsSuccess(true);
        toast("Inquiry Sent!", "Thank you for contacting us. Our sales engineers will get in touch shortly.", "success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setInquiryType("");
      } else {
        toast("Submission Failed", res.message || "Something went wrong.", "error");
      }
    } catch (err) {
      toast("Connection Error", "Could not connect to the submission gateway.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* Contact Header */}
      <section className="relative pt-12 pb-20 md:py-24">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-light mb-6">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
            Partner With Our Engineering Team
          </h1>
          <p className="text-base text-primary-muted leading-relaxed max-w-lg">
            Discuss a pilot project, schedule a ConTrack platform demonstration, or request structured estimation proposals.
          </p>
        </div>
      </section>

      {/* Grid: Form & Info */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Card - Left */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left bg-card border border-border p-8 rounded-theme-lg">
            <div>
              <h3 className="text-lg font-bold font-display text-primary mb-2">Corporate Office</h3>
              <p className="text-xs text-primary-muted leading-relaxed">
                Reach out directly or coordinate a physical site visit to our development office.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm text-primary-muted">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-accent/5 border border-accent/20 rounded-theme-sm flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Office Location</h4>
                  <p className="text-xs leading-relaxed mt-1">
                    Plot No. 58, Vishwakarma Estate,<br />
                    Chitra G.I.D.C, Bhavnagar, Gujarat, India 364004
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-accent/5 border border-accent/20 rounded-theme-sm flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone Lines</h4>
                  <p className="text-xs leading-relaxed mt-1">
                    +91 94262 72081 (Sales)<br />
                    +91 98259 82727 (Technical)
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-accent/5 border border-accent/20 rounded-theme-sm flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">E-mail Correspondence</h4>
                  <p className="text-xs leading-relaxed mt-1">
                    sales@dzinfotech.in<br />
                    info@dzinfotech.in
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-accent/5 border border-accent/20 rounded-theme-sm flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Working Hours</h4>
                  <p className="text-xs leading-relaxed mt-1">
                    Monday &ndash; Friday: 9:00 AM &ndash; 7:00 PM IST<br />
                    Saturday: 9:00 AM &ndash; 5:00 PM IST (Sunday Closed)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form - Right */}
          <div className="lg:col-span-7 bg-card border border-border p-8 md:p-12 rounded-theme-lg text-left relative">
            <h2 className="text-xl font-bold font-display text-primary mb-2">Send Inquiry</h2>
            <p className="text-xs text-primary-muted mb-8">
              Complete the intake wizard below. A sales engineer will respond within 12 hours.
            </p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="h-16 w-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center text-accent mb-6 animate-pulse">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-primary">Inquiry Sent Successfully</h3>
                  <p className="text-sm text-primary-muted mt-2 max-w-sm">
                    Thank you for reaching out. We have logged your details and routed them to our technical planning team.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-wider border border-border text-primary hover:bg-card-hover px-5 py-2.5 rounded-theme-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Bhupesh Kumar"
                      className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact info split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Corporate Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="bhupesh@contracts.com"
                        className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Contact Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 94262 00000"
                        className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. BK Road Infrastructure Developers"
                      className="bg-background border border-border focus:border-accent rounded-theme-sm px-4 py-3 text-sm text-primary placeholder:text-primary-muted/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Inquiry Type Select */}
                  <CustomSelect 
                    label="What can we help you with?"
                    value={inquiryType}
                    onChange={handleInquiryChange}
                    options={inquiryTypes}
                    placeholder="Select inquiry subject"
                    required
                  />

                  {/* Message body */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-primary-muted">Inquiry Details & Site Count</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Include details about active site counts, estimated monthly billing volumes, or technical details..."
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
                        Submit Inquiry
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
