import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Smartphone, Layers } from 'lucide-react';
import { staggerContainer } from '../animations/variants';
import ScrollReveal from '../components/ui/ScrollReveal';
import contrackDashboard from '../assets/contrack_dashboard.png';
import mobileAppInHand from '../assets/mobile_app_in_hand.png';


const detailedFeatures = [
  {
    title: "Offline-First DPR Capture",
    description: "Built for remote construction zones. Allows site engineers to log diesel consumption, truck trips, raw material deliveries, and weather parameters. Automatically packages logs locally and syncs them once cellular network is detected.",
    bullets: ["Automatic local data preservation", "Multi-site project switching", "Image capture verification for delivery slips", "Daily report compile in one click"]
  },
  {
    title: "AI Schedule-B Tender Parsing",
    description: "Stop spending hours copying line items from tender PDFs. Upload standard Schedule-B PDF files. ConTrack automatically parses codes, extracts item descriptions, matches quantities, and builds clean spreadsheet tables ready for project estimation.",
    bullets: ["Extract rate lists & quantities in seconds", "Automatic PDF text layer recognition", "Matches item codes to historical billing indexes", "Export as structured CSV / XLSX"]
  },
  {
    title: "Leakage-Proof Cost Ledger",
    description: "Connect field expenses directly to active site ledgers. Keep site supervisors accountable for fuel purchasing, machine repairs, and cash advances. Instantly trace cost overruns and keep project margins healthy.",
    bullets: ["Real-time budget consumption tracking", "Supervisor expense approval pipeline", "Categorized vendor credit ledgers", "Stop fuel and material leakage instantly"]
  },
  {
    title: "Asset & Vehicle Utilization Logs",
    description: "Monitor machine running hours, dump truck trips, and fuel consumption rates. Log maintenance cycles and get automatic alarms when machinery exceeds expected idle running limits.",
    bullets: ["Excavator hour-meter verification", "Fuel drain sensor alerts", "Trace trip cycles and dump counts", "Automatic maintenance scheduling alerts"]
  }
];

export default function Product() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="overflow-x-hidden relative">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-grid-mesh [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Product Hero */}
      <section className="relative pt-20 pb-20 md:py-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start gap-6 text-left relative z-10"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-accent/20 bg-accent/5 text-accent-light backdrop-blur-sm">
                <Layers className="h-3.5 w-3.5" />
                Flagship Platform
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1]">
                ConTrack: Civil Site & Financial Intelligence
              </h1>
              <p className="text-base text-primary-muted leading-relaxed max-w-xl">
                A mobile-first construction management platform designed specifically for contractors to track remote site activities, stop asset leakage, and automate client billing.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#download" 
                  className="flex items-center gap-2 text-sm font-bold tracking-wide bg-gradient-to-r from-accent to-accent-light text-white px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  Get ConTrack App
                </a>
                <Link 
                  to="/contact" 
                  className="text-xs font-bold uppercase tracking-wider border border-border text-primary px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-card-hover cursor-pointer"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>

            {/* Right Graphics (App Mockup Image) */}
            <ScrollReveal direction="left" className="lg:col-span-5 relative z-10">
              <div className="spotlight-card p-2 rounded-[28px] shadow-glow-accent relative overflow-hidden" onMouseMove={handleMouseMove}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                <img 
                  src={mobileAppInHand} 
                  alt="ConTrack Mobile App in Action" 
                  className="w-full h-auto rounded-[20px] object-cover hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 bg-card/40 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Feature Breakdown</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary mt-3">
                Engineered for Hard Site Realities
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="none" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedFeatures.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 14 } }
                  }}
                  onMouseMove={handleMouseMove}
                  className="spotlight-card p-8 text-left flex flex-col justify-between rounded-[20px] relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-all duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-display text-primary mb-3">{feat.title}</h3>
                    <p className="text-sm text-primary-muted leading-relaxed mb-6">{feat.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 border-t border-border pt-6 text-xs text-primary-muted text-left relative z-10">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span className="font-semibold">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Centralized Web Control Console */}
      <section className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <ScrollReveal className="lg:col-span-5 flex flex-col items-start gap-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-accent-light/20 bg-accent-light/5 text-accent-light">
                Web Control Console
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                Stop Cost Overruns From a Central Dashboard
              </h2>
              <p className="text-base text-primary-muted leading-relaxed">
                Connect your active project sites to a single control center. Track excavator hours, reconcile fuel logs, review material drops, and monitor budget margins in real-time. DZ Infotech's web dashboard parses messy field data and exposes anomalies immediately.
              </p>
              
              <div className="flex flex-col gap-4 w-full">
                {[
                  "Real-time expense reconciliation",
                  "Automated double-billing alerts",
                  "Tender schedule line-item exports"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-primary-muted font-semibold">
                    <span className="h-2 w-2 rounded-full bg-accent-light" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className="spotlight-card p-2.5 rounded-[24px] shadow-glow-accent relative overflow-hidden" onMouseMove={handleMouseMove}>
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-light/5 rounded-full blur-3xl pointer-events-none" />
                <img 
                  src={contrackDashboard} 
                  alt="ConTrack Web Control Center" 
                  className="w-full h-auto rounded-[16px] object-cover hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* App Store Downloads Section */}
      <section className="py-28 relative z-10" id="download">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto spotlight-card p-10 md:p-16 rounded-[32px] relative overflow-hidden" onMouseMove={handleMouseMove}>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">Deployment</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                Deploy ConTrack Today
              </h2>
              <p className="text-sm text-primary-muted mt-4 max-w-xl mx-auto leading-relaxed">
                Contact our sales engineering team to set up your corporate admin portal. Once set up, your site engineers can download the app to get started.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3.5 bg-card border border-border hover:border-accent-light/40 hover:bg-card-hover text-primary px-6 py-3.5 rounded-full transition-all w-full sm:w-auto cursor-pointer"
                >
                  <Smartphone className="h-5 w-5 text-accent-light" />
                  <div className="text-left font-sans">
                    <span className="text-[9px] uppercase text-primary-dim block leading-none font-bold">Get app on</span>
                    <span className="text-sm font-bold">Google Play Store</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3.5 bg-card border border-border hover:border-accent-light/40 hover:bg-card-hover text-primary px-6 py-3.5 rounded-full transition-all w-full sm:w-auto cursor-pointer"
                >
                  <Smartphone className="h-5 w-5 text-accent-light" />
                  <div className="text-left font-sans">
                    <span className="text-[9px] uppercase text-primary-dim block leading-none font-bold">Download on</span>
                    <span className="text-sm font-bold">Apple App Store</span>
                  </div>
                </a>
              </div>
              
              <div className="mt-8 text-xs text-primary-dim italic font-medium relative z-10">
                *App access requires active company credentials provided by DZ Infotech.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
