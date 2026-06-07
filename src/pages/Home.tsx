import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Smartphone, Zap, Bot, ArrowRight, Play, 
  Landmark, ShieldCheck, FileSpreadsheet, Truck, Quote,
  Activity, Database
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';
import ScrollReveal from '../components/ui/ScrollReveal';


const capabilities = [
  {
    icon: Cpu,
    title: "Custom Software Solutions",
    description: "Tailored enterprise solutions designed to solve specific industry bottlenecks and centralize databases. We replace fragmented legacy processes with clean cloud pipelines.",
    className: "md:col-span-2",
    badge: "Enterprise"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Powerful, offline-first mobile tools that empower field engineers and site operations. Works with zero cellular bandwidth.",
    className: "md:col-span-1",
    badge: "Offline-First"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Eliminate human input errors by digitizing approval chains, field log routing, and operational schedules.",
    className: "md:col-span-1",
    badge: "Automation"
  },
  {
    icon: Bot,
    title: "AI-Based Intelligence",
    description: "Future-ready intelligence layers that estimate project variables, parse heavy government tender documents, and flag fuel/material transaction leaks automatically.",
    className: "md:col-span-2",
    badge: "Artificial Intelligence"
  }
];

const simulatorTabs = [
  {
    id: "dpr",
    name: "DPR Site Logs",
    title: "Field-First Site Reporting",
    description: "Empower site engineers to log progress, capture labor attendance, and register material drops even without internet access. Data syncs automatically once online.",
    badge: "Offline-First",
    data: {
      site: "NH-48 highway construction (Pkg 3)",
      labor: { present: 48, active: 45, overtime: 6 },
      materials: [
        { item: "Cement (OPC)", quantity: "250 Bags", status: "Verified" },
        { item: "Reinforcement Steel", quantity: "12.5 Tons", status: "Verified" },
        { item: "Diesel fuel (Asset-14)", quantity: "450 Litres", status: "QC Approved" }
      ],
      progress: 84
    }
  },
  {
    id: "scheduleb",
    name: "Schedule-B Parsing",
    title: "AI-Powered Tender Processing",
    description: "Upload heavy government Schedule-B document PDFs. Our parsing engine automatically separates items, extracts rates, and formats line-item spreadsheets in seconds.",
    badge: "Automation AI",
    data: {
      fileName: "NHAI_RoadProject_ScheduleB.pdf",
      extractedItems: [
        { itemCode: "2.14", desc: "Earthwork excavation in all classes of soil", qty: "45,000 Cum", rate: "₹185", total: "₹83,25,000" },
        { itemCode: "4.02", desc: "Providing and laying Wet Mix Macadam (WMM)", qty: "18,200 Cum", rate: "₹1,420", total: "₹2,58,44,000" },
        { itemCode: "5.08", desc: "Providing and laying Bituminous Concrete (BC)", qty: "8,900 Cum", rate: "₹4,850", total: "₹4,31,65,000" }
      ]
    }
  },
  {
    id: "ledger",
    name: "Financial Ledger",
    title: "Leakage-Proof Ledger Systems",
    description: "Link site purchases, fuel slips, and vendor advances directly to individual projects. Stop financial leakage and verify margins in real-time.",
    badge: "Financial Control",
    data: {
      projectBudget: "₹12,45,00,000",
      spentToDate: "₹8,12,34,500",
      leakageBlocked: "₹14,50,000",
      recentTransactions: [
        { party: "Somnath Cement Agency", amount: "₹4,20,000", status: "Approved" },
        { party: "Bharat Petroleum Fuel Station", amount: "₹1,85,000", status: "Approved" },
        { party: "Ganesh Transport Corp", amount: "₹2,50,000", status: "Pending" }
      ]
    }
  },
  {
    id: "fleet",
    name: "Fleet & Asset Logs",
    title: "Fleet Utility & Fuel Tracking",
    description: "Monitor excavator hours, dump truck trips, and fuel consumption rates. Instantly flag fuel theft and trace equipment idle times.",
    badge: "Asset Optimization",
    data: {
      activeAssets: 14,
      idleAssets: 3,
      fuelAlerts: [
        { asset: "Excavator CAT-320", type: "Fuel Drop Alert", detail: "Sudden 40L drop detected at Site B", severity: "high" },
        { asset: "Dumper Truck TR-09", type: "Idle Limit Exceeded", detail: "Engine running idle for 45 mins", severity: "medium" }
      ]
    }
  }
];

function TerminalLog({ tabId }: { tabId: string }) {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const initialLogs: Record<string, string[]> = {
      dpr: [
        "[SYS] ConTrack offline core initialized.",
        "[SYS] Sync queue listener: active (wifi/cellular).",
        "[SYS] Waiting for local field logs..."
      ],
      scheduleb: [
        "[SYS] Parser Engine ready (OCR + NLP parsing layers).",
        "[SYS] Waiting for PDF document drop..."
      ],
      ledger: [
        "[SYS] Financial API link: connected to ledger databases.",
        "[SYS] Fraud detection engine: scanning transaction streams...",
        "[SYS] Active budget monitor: OK."
      ],
      fleet: [
        "[SYS] GPS and fuel sensor network: connected (14 assets).",
        "[SYS] Telemetry streams: listening on websocket...",
        "[SYS] Idle alert limit: set to 30 mins."
      ]
    };

    setLogs(initialLogs[tabId] || []);

    const intervalMessages: Record<string, string[]> = {
      dpr: [
        "Site engineer submitted DPR log: 250 Bags Cement.",
        "Labor log: 48 workers checked-in via GPS card.",
        "Database sync completed: Site NH-48-PKG3 updated.",
        "QC checked Diesel fuel drop (Asset-14): 450 Litres approved.",
        "Offline cache cleared. System standby."
      ],
      scheduleb: [
        "PDF upload detected: NHAI_RoadProject_ScheduleB.pdf.",
        "OCR layer scanned 48 pages in 1.4s.",
        "Parsed Item 2.14: Earthwork excavation. Qty: 45,000 Cum.",
        "Parsed Item 4.02: Wet Mix Macadam. Rate ₹1,420 matched.",
        "Exporter generated: CSV structured list ready."
      ],
      ledger: [
        "Somnath Cement Agency invoice parsed: ₹4,20,000. Matching...",
        "Match index 100%: Invoice matches drop log cement. Status: Approved.",
        "Flagged double fuel slip for Asset-09. Prevented leak: ₹14,50,000.",
        "Bharat Petroleum invoice reconciled: ₹1,85,000.",
        "Syncing ERP database. Budget usage computed: 65.2%."
      ],
      fleet: [
        "GPS: Excavator CAT-320 verified at lat: 21.7601, lng: 72.1501.",
        "WARN: Excavator CAT-320 fuel drop detected! 40L drop in 10 mins. Alarm sent.",
        "GPS: Dumper Truck TR-09 speed alert: 45km/h inside zone.",
        "WARN: Dumper Truck TR-09 idling limit exceeded (45 mins). Engine shutoff requested.",
        "SYS: Maintenance schedule check: 3 assets require service."
      ]
    };

    const interval = setInterval(() => {
      const msgs = intervalMessages[tabId];
      if (msgs && msgs.length > 0) {
        const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
        const time = new Date().toLocaleTimeString();
        setLogs(prev => [...prev.slice(-3), `[${time}] ${randomMsg}`]);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [tabId]);

  return (
    <div className="bg-black/90 border border-white/5 rounded-[12px] p-3.5 font-mono text-[10px] text-emerald-400/90 text-left h-[105px] overflow-hidden flex flex-col gap-1.5 shadow-inner mt-4">
      <div className="text-[9px] uppercase text-emerald-500/50 font-bold border-b border-emerald-500/10 pb-1.5 mb-1 flex items-center justify-between">
        <span>Console Output Stream</span>
        <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
      </div>
      <div className="flex-1 flex flex-col gap-1 overflow-hidden">
        {logs.map((log, i) => (
          <motion.div
            key={log + i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="truncate"
          >
            {log}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(simulatorTabs[0]);

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
      <div className="absolute top-0 inset-x-0 h-[800px] bg-grid-mesh [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 md:pb-28">
        
        {/* Glow Elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-accent-light/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start gap-8 text-left"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-primary leading-[1.08]"
              >
                Building Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-secondary-light">Digital Solutions</span> <br />
                for Heavy Industries.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-primary-muted font-normal leading-relaxed max-w-xl"
              >
                We design and engineer high-performance systems that simplify field operations, eliminate financial leakage, and give enterprises complete database control.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link 
                  to="/services" 
                  className="flex items-center justify-center gap-2 text-sm font-bold tracking-wide bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-0.5 hover:brightness-110 w-full sm:w-auto"
                >
                  Explore Capabilities
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  to="/product" 
                  className="flex items-center justify-center gap-2 text-sm font-bold tracking-wide bg-card border border-border text-primary px-8 py-4 rounded-full transition-all duration-300 hover:bg-card-hover w-full sm:w-auto shadow-sm"
                >
                  Discover ConTrack
                </Link>
              </motion.div>

              {/* Quick Specs */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border w-full"
              >
                <div>
                  <h3 className="text-3xl font-extrabold font-display text-primary">15+</h3>
                  <p className="text-[10px] text-primary-dim uppercase tracking-wider mt-1 font-bold">Active Contractors</p>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold font-display text-primary">Offline</h3>
                  <p className="text-[10px] text-primary-dim uppercase tracking-wider mt-1 font-bold">Field-First Sync</p>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold font-display text-primary">AI</h3>
                  <p className="text-[10px] text-primary-dim uppercase tracking-wider mt-1 font-bold">Tender Analytics</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Graphic Panel (Modern SaaS Screen Mockup) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[360px] lg:max-w-none glass-panel p-3.5 rounded-[24px] shadow-glow-accent">
                <div className="bg-background border border-border rounded-[16px] overflow-hidden aspect-[4/3] flex flex-col relative">
                  
                  {/* Floating decorative elements */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
                  
                  {/* Dashboard header */}
                  <div className="bg-card border-b border-border px-4 py-3 flex items-center justify-between text-[10px] relative z-10">
                    <span className="font-bold text-accent-light flex items-center gap-1.5">
                      <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                      ConTrack Live Site Terminal
                    </span>
                    <span className="text-primary-dim font-semibold font-mono">Site: NH-48-PKG3</span>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-4 flex-1 flex flex-col gap-3.5 font-sans relative z-10 text-left">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-card border border-border p-3 rounded-[12px]">
                        <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Active Labor Log</span>
                        <span className="text-base font-extrabold text-primary font-display mt-0.5 block">48 Workers</span>
                      </div>
                      <div className="bg-card border border-border p-3 rounded-[12px]">
                        <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Fuel Security</span>
                        <span className="text-sm font-extrabold text-emerald-400 font-display mt-0.5 block flex items-center gap-1">
                          <Activity className="h-3.5 w-3.5 text-emerald-400" />
                          0 Leaks
                        </span>
                      </div>
                    </div>

                    {/* Material logs table */}
                    <div className="flex-grow bg-card border border-border rounded-[12px] p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-border pb-2 text-[9px] uppercase tracking-widest text-primary-dim font-bold">
                        <span>Material Drop</span>
                        <span>Quantity</span>
                      </div>
                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-primary-muted font-medium">Cement (OPC)</span>
                          <span className="text-primary font-extrabold">250 Bags</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-primary-muted font-medium">Reinforcement Steel</span>
                          <span className="text-primary font-extrabold">12.5 Tons</span>
                        </div>
                      </div>
                      <div className="text-[9px] text-primary-dim text-right font-medium italic border-t border-border pt-2 mt-2">
                        System Sync Verified &bull; Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust / Badge Marquee Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-base font-bold uppercase tracking-widest text-accent-light mb-8">
            Trusted By Infrastructure Leaders
          </h3>
          <div className="border border-border bg-card/10 backdrop-blur-sm rounded-[24px] overflow-hidden p-6 relative">
            {/* Soft edge masking for smooth fade-in/fade-out of scrolling logos */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
            
            <div className="relative flex overflow-x-hidden w-full">
              <div className="animate-marquee flex gap-0">
                {[
                  "VADILAL", "ANCHOR", "CREAMBELL", "INDIA DAIRY", "KHUSHBOO",
                  "VADILAL", "ANCHOR", "CREAMBELL", "INDIA DAIRY", "KHUSHBOO"
                ].map((name, i) => (
                  <div key={i} className="flex-shrink-0 px-3">
                    <div className="w-64 md:w-80 h-32 md:h-40 flex items-center justify-center rounded-[16px] bg-card border border-border text-primary font-display font-extrabold text-xl md:text-2xl tracking-widest shadow-sm hover:text-accent hover:border-accent/40 hover:shadow-glow-accent transition-all duration-300 select-none">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Bento Capabilities Section */}
      <section className="py-28 md:py-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Capabilities</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight" id="capabilities-header">
                What We Do
              </h3>
              <p className="text-base text-primary-muted mt-4 font-normal max-w-2xl mx-auto">
                We bridge the divide between messy operational variables in the field and clean database records in the office.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <ScrollReveal direction="none" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                    }}
                    onMouseMove={handleMouseMove}
                    className={`spotlight-card p-8 rounded-[20px] flex flex-col justify-between relative group overflow-hidden text-left ${cap.className}`}
                  >
                    {/* Hover visual accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="h-12 w-12 bg-accent/5 rounded-[12px] border border-accent/20 flex items-center justify-center text-accent-light group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-card border border-border px-2.5 py-1 rounded-full text-accent-light">
                          {cap.badge}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold font-display text-primary mb-3">{cap.title}</h4>
                      <p className="text-sm text-primary-muted leading-relaxed max-w-xl">{cap.description}</p>
                    </div>
                    
                    <div className="h-4" />
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Quote Banner Section */}
      <section className="py-24 bg-card/40 border-y border-border relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <Quote className="h-10 w-10 text-accent opacity-40 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-primary tracking-tight leading-relaxed max-w-4xl text-center italic">
              &ldquo;Transforming how industrial enterprises operate through deep-tech digital intelligence.&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* Interactive Product Simulator Section */}
      <section className="py-28 md:py-36 bg-background border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Platform</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                Interactive ConTrack Console Modules.
              </h2>
              <p className="text-base text-primary-muted mt-4 font-normal max-w-xl mx-auto">
                Simulate the core features below to see how ConTrack captures data, parses tenders, and manages budgets.
              </p>
            </div>
          </ScrollReveal>

          {/* Simulator Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Tabs Selector list */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 scrollbar-none">
              {simulatorTabs.map((tab) => {
                const isSelected = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left shrink-0 lg:shrink px-5 py-4.5 border rounded-[16px] transition-all duration-300 focus:outline-none flex items-center justify-between gap-3 cursor-pointer ${isSelected
                      ? 'border-accent bg-accent/10 text-accent-light shadow-md'
                      : 'border-border bg-card text-primary-muted hover:text-primary hover:border-border/80'
                      }`}
                  >
                    <div className="text-sm font-bold">{tab.name}</div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${isSelected ? 'bg-accent/20 text-accent-light' : 'bg-background border border-border text-primary-dim'
                      }`}>
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Dashboard Frame */}
            <ScrollReveal direction="left" className="lg:col-span-8 flex">
              <div className="w-full spotlight-card p-6 lg:p-8 flex flex-col justify-between text-left rounded-[24px]" onMouseMove={handleMouseMove}>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary flex items-center gap-3">
                    {activeTab.title}
                  </h3>
                  <p className="text-sm text-primary-muted mt-2 leading-relaxed max-w-2xl">
                    {activeTab.description}
                  </p>
                </div>

                {/* Tab Data Displays */}
                <div className="mt-8 flex-grow border border-border bg-card/40 rounded-[16px] overflow-hidden flex flex-col min-h-[260px] shadow-inner relative z-10">
                  <div className="bg-background border-b border-border px-4 py-3 text-[10px] font-bold font-mono text-accent-light tracking-widest uppercase flex items-center gap-2">
                    <span className="h-2 w-2 bg-accent rounded-full animate-ping" />
                    Console Live System: {activeTab.name}
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col justify-between font-mono text-[11px] text-left">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-grow flex flex-col justify-between"
                      >
                        {activeTab.id === 'dpr' && (
                          <div className="flex flex-col gap-4">
                            <div className="text-[10px] text-emerald-500 border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 rounded-full inline-block max-w-fit font-bold">
                              Database Status: Active & Synced
                            </div>
                            
                            {/* Progress bar */}
                            <div className="bg-background border border-border p-4 rounded-[12px] flex flex-col gap-2">
                              <div className="flex justify-between text-primary font-bold">
                                <span>Overall Project Completion</span>
                                <span>{activeTab.data.progress}%</span>
                              </div>
                              <div className="h-2 bg-border rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${activeTab.data.progress}%` }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-accent to-accent-light" 
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-background border border-border p-3 rounded-[12px]">
                                <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Project Location</span>
                                <span className="font-bold text-primary text-xs mt-0.5 block truncate">{activeTab.data.site}</span>
                              </div>
                              <div className="bg-background border border-border p-3 rounded-[12px]">
                                <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Active Attendance</span>
                                <span className="font-bold text-primary text-xs mt-0.5 block">{activeTab.data.labor?.present} Men ({activeTab.data.labor?.overtime} OT)</span>
                              </div>
                            </div>
                            <div className="bg-background border border-border rounded-[12px] overflow-hidden">
                              <table className="w-full text-left text-[11px]">
                                <thead>
                                  <tr className="border-b border-border bg-background text-primary-dim font-bold">
                                    <th className="p-3">Material log</th>
                                    <th className="p-3">Drop Qty</th>
                                    <th className="p-3 text-right">Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activeTab.data.materials?.map((m: any, i) => (
                                    <tr key={i} className="border-b border-border hover:bg-card-hover transition-colors">
                                      <td className="p-3 text-primary font-semibold">{m.item}</td>
                                      <td className="p-3 text-accent-light font-bold">{m.quantity}</td>
                                      <td className="p-3 text-right text-emerald-500 font-bold">{m.status}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {activeTab.id === 'scheduleb' && (
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-[11px] text-primary bg-background border border-border px-3.5 py-2.5 rounded-[12px]">
                              <FileSpreadsheet className="h-4 w-4 text-accent-light shrink-0" />
                              <span className="font-bold">Extracted from PDF:</span>
                              <span className="text-primary-dim">{activeTab.data.fileName}</span>
                            </div>
                            <div className="bg-background border border-border rounded-[12px] overflow-x-auto">
                              <table className="w-full text-left text-[11px] min-w-[500px]">
                                <thead>
                                  <tr className="border-b border-border bg-background text-primary-dim font-bold">
                                    <th className="p-3">Code</th>
                                    <th className="p-3">Item Description</th>
                                    <th className="p-3">Qty</th>
                                    <th className="p-3">Rate</th>
                                    <th className="p-3 text-right">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {activeTab.data.extractedItems?.map((it: any, i) => (
                                    <tr key={i} className="border-b border-border hover:bg-card-hover">
                                      <td className="p-3 text-accent-light font-bold">{it.itemCode}</td>
                                      <td className="p-3 text-primary truncate max-w-[200px] font-medium">{it.desc}</td>
                                      <td className="p-3 text-primary font-medium">{it.qty}</td>
                                      <td className="p-3 text-primary-dim font-medium">{it.rate}</td>
                                      <td className="p-3 text-right text-accent-light font-bold">{it.total}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {activeTab.id === 'ledger' && (
                          <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div className="bg-background border border-border p-3 rounded-[12px]">
                                <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Project Budget</span>
                                <span className="font-bold text-primary text-xs mt-0.5 block">{activeTab.data.projectBudget}</span>
                              </div>
                              <div className="bg-background border border-border p-3 rounded-[12px]">
                                <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Spent to Date</span>
                                <span className="font-bold text-primary text-xs mt-0.5 block">{activeTab.data.spentToDate}</span>
                              </div>
                              <div className="bg-accent/5 border border-accent/20 p-3 rounded-[12px]">
                                <span className="text-[9px] uppercase tracking-wider text-accent-light block font-bold">Leakage Prevented</span>
                                <span className="font-bold text-emerald-500 text-xs mt-0.5 block font-display">{activeTab.data.leakageBlocked}</span>
                              </div>
                            </div>
                            <div className="bg-background border border-border rounded-[12px] overflow-hidden">
                              <div className="border-b border-border bg-background px-3.5 py-2.5 text-[10px] uppercase tracking-wider text-primary-dim font-bold">
                                Expense ledger transactions
                              </div>
                              {activeTab.data.recentTransactions?.map((t: any, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border-b border-border text-[11px] last:border-b-0">
                                  <span className="text-primary font-medium">{t.party}</span>
                                  <div className="flex items-center gap-4">
                                    <span className="text-primary font-bold">{t.amount}</span>
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${t.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                                      }`}>{t.status}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {activeTab.id === 'fleet' && (
                          <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-background border border-border p-3.5 rounded-[12px] flex items-center justify-between">
                                <div>
                                  <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Active Fleet</span>
                                  <span className="font-bold text-primary text-xs mt-0.5 block">{activeTab.data.activeAssets} Vehicles</span>
                                </div>
                                <Truck className="h-5 w-5 text-accent-light opacity-60" />
                              </div>
                              <div className="bg-background border border-border p-3.5 rounded-[12px] flex items-center justify-between">
                                <div>
                                  <span className="text-[9px] uppercase tracking-wider text-primary-dim block font-bold">Active Machinery</span>
                                  <span className="font-bold text-primary text-xs mt-0.5 block">{activeTab.data.idleAssets} Units</span>
                                </div>
                                <Database className="h-5 w-5 text-accent-light opacity-60" />
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                              <span className="text-[10px] text-primary-dim uppercase tracking-widest font-bold block mb-1">Live Security Warnings:</span>
                              {activeTab.data.fuelAlerts?.map((a: any, i) => (
                                <div key={i} className={`flex items-start gap-3.5 p-3.5 border rounded-[12px] text-left ${a.severity === 'high' ? 'bg-red-500/5 border-red-500/20' : 'bg-amber-500/5 border-amber-500/20'
                                  }`}>
                                  <span className={`h-2.5 w-2.5 rounded-full mt-1 shrink-0 ${a.severity === 'high' ? 'bg-red-500 animate-pulse' : 'bg-amber-500'}`} />
                                  <div className="flex-1 text-[11px] text-left">
                                    <div className="flex items-center justify-between">
                                      <span className="font-bold text-primary">{a.asset}</span>
                                      <span className={`text-[8px] uppercase tracking-widest font-extrabold ${a.severity === 'high' ? 'text-red-400' : 'text-amber-400'}`}>{a.type}</span>
                                    </div>
                                    <p className="text-primary-muted mt-1 font-medium">{a.detail}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* LIVE STREAMING TERMINAL MODULE */}
                    <TerminalLog tabId={activeTab.id} />
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Vision & Brand Core */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-background border-b border-border z-10">
        {/* Glow ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light border border-accent-light/20 bg-accent-light/5 px-4 py-2 rounded-full">
              Vision Statement
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
              Our Vision
            </h2>
            <p className="text-lg text-primary-muted leading-relaxed font-normal mt-2 max-w-2xl">
              We build intelligent, resilient software that <strong className="text-primary font-bold">completely digitizes heavy operational workflows</strong>, establishing full accountability and structural compliance.
            </p>
            
            {/* Branding anchors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-12 pt-12 border-t border-border">
              {["AUTOMATE", "INTEGRATE", "SCALE", "PROTECT"].map((word, idx) => (
                <div 
                  key={idx} 
                  className="bg-card border border-border py-5 rounded-[12px] flex items-center justify-center font-display font-extrabold text-sm tracking-widest text-primary-muted hover:text-accent-light hover:border-accent-light/35 transition-all duration-300 shadow-sm"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DZ Infotech Section (Bento Grid Edge) */}
      <section className="py-28 md:py-36 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Edge</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                Engineered Through Field Experience.
              </h2>
              <p className="text-base text-primary-muted mt-4 font-normal max-w-2xl mx-auto">
                We design software by standing on active work sites and analyzing transaction leaks firsthand.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="none" staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Bento Edge 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                }}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-8 rounded-[20px] text-left flex flex-col justify-between md:col-span-2 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="h-10 w-10 bg-accent/5 rounded-[12px] border border-accent/20 flex items-center justify-center text-accent-light mb-6">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-primary mb-3">Guaranteed Data Integrity</h4>
                  <p className="text-sm text-primary-muted leading-relaxed max-w-xl">
                    Our system verifies GPS tags and photo submissions to prevent fake time-clocking entries, logs structural test logs, and validates fuel slips mathematically.
                  </p>
                </div>
                <div className="h-4" />
              </motion.div>

              {/* Bento Edge 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
                }}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-8 rounded-[20px] text-left flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                <div className="relative z-10">
                  <div className="h-10 w-10 bg-accent/5 rounded-[12px] border border-accent/20 flex items-center justify-center text-accent-light mb-6">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-primary mb-3">Localized Compliance</h4>
                  <p className="text-sm text-primary-muted leading-relaxed">
                    Engineered specifically for national/state highway frameworks, direct Schedule-B layout mapping, and billing cycles.
                  </p>
                </div>
                <div className="h-4" />
              </motion.div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-28 md:py-36 bg-card/40 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Tactical Roadmap</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
                Structured Digital Deployment.
              </h2>
              <p className="text-base text-primary-muted mt-4 font-normal max-w-2xl mx-auto">
                We guide B2B clients through a controlled deployment timeline to ensure field crew adoption immediately.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="none" staggerChildren={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
              
              {[
                { num: "01", step: "Operational Mapping", desc: "We review your active tenders, spreadsheets, and site reporting chains to isolate exact leakage sources and verify bottlenecks." },
                { num: "02", step: "Prototype Pilot", desc: "We deploy ConTrack to a single active pilot project site, onboarding your engineers and collecting direct field usage feedback." },
                { num: "03", step: "Full Scale Rollout", desc: "Once validated, we roll out the application across all active projects, connect ledger APIs, and train administration teams." }
              ].map((p, idx) => (
                <motion.div 
                  key={idx} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 85, damping: 14 } }
                  }}
                  onMouseMove={handleMouseMove}
                  className="relative z-10 flex flex-col gap-5 spotlight-card p-8 rounded-[20px]"
                >
                  <div className="h-10 w-10 bg-gradient-to-r from-accent to-accent-light text-white font-display font-extrabold text-sm rounded-full flex items-center justify-center shadow-lg">
                    {p.num}
                  </div>
                  <h4 className="text-lg font-bold font-display text-primary">{p.step}</h4>
                  <p className="text-sm text-primary-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Call To Action Block */}
      <section className="py-28 md:py-36 relative z-10 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <ScrollReveal duration={0.8} direction="up">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-tight">
              Ready to Digitize Your Industry?
            </h2>
            <p className="text-base text-primary-muted mt-6 max-w-xl mx-auto leading-relaxed">
              Join the growing list of enterprises scaling with DZ Infotech intelligence. Partner with us to deploy ConTrack or build custom configurations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="flex items-center gap-2 text-sm font-bold tracking-wide bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-0.5 hover:brightness-110 w-full sm:w-auto justify-center cursor-pointer"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/product" 
                className="text-sm font-bold tracking-wide text-primary hover:text-accent-light transition-colors flex items-center gap-1.5 py-3 cursor-pointer"
              >
                See ConTrack Details
                <Play className="h-3.5 w-3.5 fill-current text-accent-light" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
