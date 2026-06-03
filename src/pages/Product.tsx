import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Smartphone } from 'lucide-react';
import { staggerContainer } from '../animations/variants';

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
  return (
    <div className="overflow-x-hidden">
      
      {/* Product Hero */}
      <section className="relative pt-12 pb-24 md:py-32">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
            >
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3 py-1.5 rounded-full">
                Flagship Platform
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1]">
                ConTrack: Construction & Financial Intelligence
              </h1>
              <p className="text-base text-primary-muted leading-relaxed max-w-xl">
                A mobile-first construction management platform designed specifically for contractors to track remote site activities, stop asset leakage, and automate client billing.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href="#download" 
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-accent text-white px-5 py-3 rounded-theme-sm border border-accent/20 transition-all hover:bg-accent-light"
                >
                  <Download className="h-4 w-4" />
                  Get ConTrack App
                </a>
                <Link 
                  to="/contact" 
                  className="text-xs font-semibold uppercase tracking-wider border border-border text-primary px-5 py-3 rounded-theme-sm transition-all hover:bg-card-hover hover:border-accent/40"
                >
                  Schedule Training Demo
                </Link>
              </div>
            </motion.div>

            {/* Right Graphics */}
            <div className="lg:col-span-5 relative">
              <div className="bg-card border border-border rounded-theme-lg p-6 shadow-2xl relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-accent/10 border border-accent/20 rounded-theme-sm flex items-center justify-center text-accent">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-primary">ConTrack App</h4>
                      <span className="text-[10px] text-primary-muted uppercase tracking-wider">Version 2.4.1 (Stable)</span>
                    </div>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent-light px-2.5 py-1 rounded font-semibold">Active</span>
                </div>
                
                {/* Simulated Screen lists */}
                <div className="flex flex-col gap-3 font-mono text-[11px] text-left">
                  <div className="bg-[#05070a] border border-border/60 p-3 rounded-theme-sm flex items-center justify-between">
                    <span className="text-primary truncate">Total Active Sites</span>
                    <span className="text-accent font-semibold">4 active</span>
                  </div>
                  <div className="bg-[#05070a] border border-border/60 p-3 rounded-theme-sm flex items-center justify-between">
                    <span className="text-primary truncate">Pending Sync Logs</span>
                    <span className="text-accent font-semibold">0 (All Uploaded)</span>
                  </div>
                  <div className="bg-[#05070a] border border-border/60 p-3 rounded-theme-sm flex items-center justify-between">
                    <span className="text-primary truncate">Monthly Fuel Verified</span>
                    <span className="text-accent font-semibold">14,200 Litres</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 bg-[#05070A] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Feature Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Engineered Specifically for Hard Site Realities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {detailedFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/80 rounded-theme-md p-8 text-left flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-primary mb-3">{feat.title}</h3>
                  <p className="text-sm text-primary-muted leading-relaxed mb-6">{feat.description}</p>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-border/50 pt-5 text-xs text-primary-muted text-left">
                  {feat.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* App Store Downloads Section */}
      <section className="py-24" id="download">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto bg-card border border-border p-10 md:p-16 rounded-theme-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Deployment</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
              Get Started with ConTrack Today
            </h2>
            <p className="text-sm text-primary-muted mt-4 max-w-xl mx-auto leading-relaxed">
              Contact our sales engineering team to set up your corporate admin portal. Once set up, your site engineers can download the app to get started.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 bg-white/5 border border-border hover:border-accent/40 text-primary px-6 py-3.5 rounded-theme-sm transition-all w-full sm:w-auto"
              >
                <Smartphone className="h-5 w-5 text-accent" />
                <div className="text-left font-sans">
                  <span className="text-[9px] uppercase text-primary-muted block leading-none">Get app on</span>
                  <span className="text-sm font-semibold">Google Play Store</span>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-3 bg-white/5 border border-border hover:border-accent/40 text-primary px-6 py-3.5 rounded-theme-sm transition-all w-full sm:w-auto"
              >
                <Smartphone className="h-5 w-5 text-accent" />
                <div className="text-left font-sans">
                  <span className="text-[9px] uppercase text-primary-muted block leading-none">Download on</span>
                  <span className="text-sm font-semibold">Apple App Store</span>
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-xs text-primary-muted italic">
              *App access requires active company credentials provided by DZ Infotech.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
