import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, Smartphone, Zap, Bot, ArrowRight, Play, 
  Layers, Landmark, ShieldCheck, FileSpreadsheet, Truck, Quote
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations/variants';

const capabilities = [
  {
    icon: Cpu,
    title: "Custom Software Solutions",
    description: "Tailored enterprise solutions designed to solve specific industry bottlenecks and centralize databases."
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Powerful, offline-first mobile tools that empower field engineers and site operations."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Eliminating manual errors by digitizing fragmented communication, approvals, and reporting."
  },
  {
    icon: Bot,
    title: "AI-Based Intelligence",
    description: "Future-ready intelligence layers that provide predictive insights and parse heavy document lines."
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
        { item: "Diesel fuel (Asset-14)", quantity: "450 Litres", status: "Awaiting QC" }
      ],
      progress: "84% complete"
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
        { party: "Ganesh Transport Corp", amount: "₹2,50,000", status: "Pending Verification" }
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

export default function Home() {
  const [activeTab, setActiveTab] = useState(simulatorTabs[0]);

  return (
    <div className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 md:pb-28">
        
        {/* Glow Elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Tech Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-light"
              >
                <Layers className="h-3 w-3" />
                DZ INFOTECH
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-primary leading-[1.08]"
              >
                Building Smart <em className="text-secondary not-italic">Digital Solutions</em> <br />
                for Real-World Industries.
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-primary-muted font-normal leading-relaxed max-w-xl"
              >
                We design and develop technology that simplifies operations, improves efficiency, and gives businesses complete control over their workflows.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link 
                  to="/services" 
                  className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide bg-accent text-white px-7 py-4 rounded-theme-sm border border-accent/20 transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-glow-accent w-full sm:w-auto"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  to="/product" 
                  className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide bg-card border border-border text-primary px-7 py-4 rounded-theme-sm transition-all hover:bg-card-hover hover:border-secondary/40 w-full sm:w-auto hover:shadow-glow-secondary"
                >
                  View ConTrack
                </Link>
              </motion.div>

              {/* Quick Specs */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-border/80 w-full"
              >
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary">15+</h3>
                  <p className="text-xs text-primary-muted uppercase tracking-wider mt-1">Major Contractors Onboard</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary">Offline</h3>
                  <p className="text-xs text-primary-muted uppercase tracking-wider mt-1">Remote Field Sync</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-primary">AI</h3>
                  <p className="text-xs text-primary-muted uppercase tracking-wider mt-1">Schedule-B Parser</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Graphic Panel (Tablet Mockup) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-[340px] lg:max-w-none bg-card border border-border rounded-theme-lg p-3 shadow-2xl glow-accent">
                <div className="bg-[#05070a] border border-border/80 rounded-theme-md overflow-hidden aspect-[4/3] flex flex-col">
                  {/* Top bar */}
                  <div className="bg-[#0c0e15] border-b border-border/50 px-4 py-2.5 flex items-center justify-between text-[10px] text-primary-muted">
                    <span className="font-semibold text-secondary flex items-center gap-1">
                      <span className="h-1.5 w-1.5 bg-secondary rounded-full animate-pulse" />
                      ConTrack Live Site Logs
                    </span>
                    <span>Site: NH-48 Pkg-3</span>
                  </div>
                  {/* Content body */}
                  <div className="p-4 flex-1 flex flex-col gap-3 font-mono text-[11px]">
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="bg-card border border-border/40 p-2.5 rounded-theme-sm">
                        <span className="text-[9px] uppercase text-primary-muted block">Active Labor Log</span>
                        <span className="text-sm font-bold text-primary font-display">48 Workers</span>
                      </div>
                      <div className="bg-card border border-border/40 p-2.5 rounded-theme-sm">
                        <span className="text-[9px] uppercase text-primary-muted block">Fuel Drop Alerts</span>
                        <span className="text-sm font-bold text-red-400 font-display">0 Alerts</span>
                      </div>
                    </div>
                    {/* Material logs table */}
                    <div className="flex-1 bg-card border border-border/40 rounded-theme-sm p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-border/40 pb-1.5 mb-1.5 text-[9px] uppercase tracking-wider text-primary-muted">
                        <span>Material Drop</span>
                        <span>Quantity</span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between text-left">
                          <span className="text-primary truncate">Cement (OPC)</span>
                          <span className="text-accent-light font-semibold">250 Bags</span>
                        </div>
                        <div className="flex items-center justify-between text-left">
                          <span className="text-primary truncate">Reinforcement Steel</span>
                          <span className="text-accent-light font-semibold">12.5 Tons</span>
                        </div>
                      </div>
                      <div className="h-2" />
                      <div className="text-[9px] text-primary-muted text-right italic border-t border-border/40 pt-1.5">
                        DPR Verified by QC Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust / Marquee Section */}
      <section className="bg-[#05070A] py-10 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-muted shrink-0">
            Trusted By Leading Brands
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-primary-muted font-display font-bold text-lg select-none">
            <span className="hover:text-primary transition-colors">VADILAL</span>
            <span className="hover:text-primary transition-colors">ANCHOR</span>
            <span className="hover:text-primary transition-colors">CREAMBELL</span>
            <span className="hover:text-primary transition-colors">INDIA DAIRY</span>
            <span className="hover:text-primary transition-colors">KHUSHBOO</span>
          </div>
        </div>
      </section>

      {/* What We Do / Capabilities Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Capabilities</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight" id="capabilities-header">
              What We Do
            </h3>
            <p className="text-base text-primary-muted mt-4 font-normal">
              We bridge the divide between messy operational variables in the field and clean database records in the office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-theme-md p-8 text-left transition-all hover:bg-card-hover hover:border-accent/30 group"
                >
                  <div className="h-12 w-12 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-primary mb-3">{cap.title}</h4>
                  <p className="text-sm text-primary-muted leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Quote Banner Section (Page 4 PDF) */}
      <section className="py-20 bg-[#05070a] border-y border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <Quote className="h-10 w-10 text-secondary opacity-30 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-primary tracking-tight leading-relaxed max-w-4xl text-center italic text-primary/95">
              &ldquo;Transforming how industries operate through digital intelligence.&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* Interactive Product Simulator Section */}
      <section className="py-24 md:py-32 bg-[#05070A] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Scalable innovations built for tough operational environments.
            </h2>
            <p className="text-base text-primary-muted mt-4 font-normal">
              Toggle the core modules below to see how ConTrack captures data, verifies inputs, and compiles sheets in real-time.
            </p>
          </div>

          {/* Simulator Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Tabs Selector list */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 scrollbar-thin">
              {simulatorTabs.map((tab) => {
                const isSelected = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left shrink-0 lg:shrink px-5 py-4 border rounded-theme-sm transition-all focus:outline-none flex items-center justify-between gap-3 ${
                      isSelected 
                        ? 'border-accent bg-accent/5 text-primary' 
                        : 'border-border bg-card text-primary-muted hover:text-primary hover:border-border/80'
                    }`}
                  >
                    <div className="text-sm font-semibold">{tab.name}</div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? 'bg-accent/10 text-accent-light' : 'bg-white/5 text-primary-muted'
                    }`}>
                      {tab.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Dashboard Frame */}
            <div className="lg:col-span-8 bg-card border border-border rounded-theme-md p-6 lg:p-8 flex flex-col justify-between text-left">
              <div>
                <h3 className="text-xl font-bold font-display text-primary flex items-center gap-3">
                  {activeTab.title}
                </h3>
                <p className="text-sm text-primary-muted mt-2 leading-relaxed max-w-2xl">
                  {activeTab.description}
                </p>
              </div>

              {/* Tab Data Displays */}
              <div className="mt-8 flex-grow border border-border/80 bg-[#06080d] rounded-theme-sm overflow-hidden flex flex-col min-h-[220px]">
                <div className="bg-[#0b0e16] border-b border-border/60 px-4 py-2 text-[10px] uppercase font-mono text-primary-muted tracking-wider">
                  Live Preview: {activeTab.name} Console
                </div>
                
                <div className="p-5 flex-1 font-mono text-xs text-left">
                  {activeTab.id === 'dpr' && (
                    <div className="flex flex-col gap-4">
                      <div className="text-[10px] text-accent-light border border-accent/20 bg-accent/5 px-2.5 py-1.5 rounded-sm inline-block max-w-fit">
                        Sync Queue: 0 Pending Items (Site Online)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm">
                          <span className="text-[9px] uppercase text-primary-muted block">Project Block</span>
                          <span className="font-semibold text-primary">{activeTab.data.site}</span>
                        </div>
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm">
                          <span className="text-[9px] uppercase text-primary-muted block">Active Labor Summary</span>
                          <span className="font-semibold text-primary">{activeTab.data.labor?.present} On Site ({activeTab.data.labor?.overtime} Overtime)</span>
                        </div>
                      </div>
                      <div className="bg-card border border-border/40 rounded-theme-sm overflow-hidden">
                        <table className="w-full text-left text-[11px]">
                          <thead>
                            <tr className="border-b border-border/40 bg-white/5 text-primary-muted">
                              <th className="p-2.5">Material log</th>
                              <th className="p-2.5">Drop Qty</th>
                              <th className="p-2.5 text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeTab.data.materials?.map((m: any, i) => (
                              <tr key={i} className="border-b border-border/20">
                                <td className="p-2.5 text-primary">{m.item}</td>
                                <td className="p-2.5 text-accent">{m.quantity}</td>
                                <td className="p-2.5 text-right text-accent-light">{m.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab.id === 'scheduleb' && (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-[10px] text-primary-muted bg-white/5 border border-border/50 px-3 py-2 rounded-sm">
                        <FileSpreadsheet className="h-4 w-4 text-accent" />
                        Parsed File: {activeTab.data.fileName}
                      </div>
                      <div className="bg-card border border-border/40 rounded-theme-sm overflow-x-auto">
                        <table className="w-full text-left text-[11px] min-w-[500px]">
                          <thead>
                            <tr className="border-b border-border/40 bg-white/5 text-primary-muted">
                              <th className="p-2.5">Item</th>
                              <th className="p-2.5">Description</th>
                              <th className="p-2.5">Qty</th>
                              <th className="p-2.5">Rate</th>
                              <th className="p-2.5 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {activeTab.data.extractedItems?.map((it: any, i) => (
                              <tr key={i} className="border-b border-border/20">
                                <td className="p-2.5 text-accent font-semibold">{it.itemCode}</td>
                                <td className="p-2.5 text-primary truncate max-w-[200px]">{it.desc}</td>
                                <td className="p-2.5 text-primary">{it.qty}</td>
                                <td className="p-2.5 text-primary-muted">{it.rate}</td>
                                <td className="p-2.5 text-right text-primary font-semibold">{it.total}</td>
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
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm">
                          <span className="text-[9px] uppercase text-primary-muted block">Project Budget</span>
                          <span className="font-semibold text-primary">{activeTab.data.projectBudget}</span>
                        </div>
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm">
                          <span className="text-[9px] uppercase text-primary-muted block">Spent to Date</span>
                          <span className="font-semibold text-primary">{activeTab.data.spentToDate}</span>
                        </div>
                        <div className="bg-card border border-accent/20 bg-accent/5 p-3 rounded-theme-sm">
                          <span className="text-[9px] uppercase text-accent-light block font-bold">Leakage Blocked</span>
                          <span className="font-semibold text-accent font-display">{activeTab.data.leakageBlocked}</span>
                        </div>
                      </div>
                      <div className="bg-card border border-border/40 rounded-theme-sm overflow-hidden">
                        <div className="border-b border-border/40 bg-white/5 px-3 py-2 text-[10px] uppercase text-primary-muted">
                          Recent Expense ledger transactions
                        </div>
                        {activeTab.data.recentTransactions?.map((t: any, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 border-b border-border/20 text-[11px] last:border-b-0">
                            <span className="text-primary">{t.party}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-primary font-semibold">{t.amount}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                                t.status === 'Approved' ? 'bg-accent/10 text-accent-light' : 'bg-amber-500/10 text-amber-400'
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
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm flex items-center justify-between">
                          <div>
                            <span className="text-[9px] uppercase text-primary-muted block">Active Trucks</span>
                            <span className="font-semibold text-primary">{activeTab.data.activeAssets} Vehicles</span>
                          </div>
                          <Truck className="h-5 w-5 text-accent opacity-55" />
                        </div>
                        <div className="bg-card border border-border/40 p-3 rounded-theme-sm flex items-center justify-between">
                          <div>
                            <span className="text-[9px] uppercase text-primary-muted block">Assets Idle</span>
                            <span className="font-semibold text-primary">{activeTab.data.idleAssets} Machinery</span>
                          </div>
                          <Cpu className="h-5 w-5 text-amber-500 opacity-55" />
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-primary-muted uppercase tracking-wider block">Live Asset Alerts:</span>
                        {activeTab.data.fuelAlerts?.map((a: any, i) => (
                          <div key={i} className={`flex items-start gap-3 p-3 border rounded-theme-sm text-left ${
                            a.severity === 'high' ? 'bg-red-500/5 border-red-500/20' : 'bg-amber-500/5 border-amber-500/20'
                          }`}>
                            <span className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${a.severity === 'high' ? 'bg-red-400' : 'bg-amber-400'}`} />
                            <div className="flex-1 text-[11px] text-left">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-primary">{a.asset}</span>
                                <span className={`text-[8px] uppercase tracking-wider font-bold ${a.severity === 'high' ? 'text-red-400' : 'text-amber-400'}`}>{a.type}</span>
                              </div>
                              <p className="text-primary-muted mt-0.5">{a.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Brand Core (Page 6 PDF) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#05070a] border-b border-border">
        {/* Glow ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary border border-secondary/20 bg-secondary/5 px-3.5 py-1.5 rounded-full">
              Vision Statement
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight mt-2">
              Our Vision
            </h2>
            <p className="text-lg text-primary-muted leading-relaxed font-normal mt-2">
              We aim to build a suite of intelligent digital tools that <strong className="text-primary font-semibold">transform how industries operate</strong>, starting with construction and expanding into multiple sectors worldwide.
            </p>
            
            {/* Branding anchors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-12 pt-12 border-t border-border/80">
              {["AUTOMATE", "INTEGRATE", "SCALE", "PROTECT"].map((word, idx) => (
                <div 
                  key={idx} 
                  className="bg-card border border-border/60 py-5 rounded-theme-sm flex items-center justify-center font-display font-bold text-sm tracking-widest text-primary-muted hover:text-secondary hover:border-secondary/30 transition-colors"
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DZ Infotech Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our Edge</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              A Partnership Built on Field Validation
            </h2>
            <p className="text-base text-primary-muted mt-4 font-normal">
              Most software companies write code from offices. We designed ConTrack by walking construction sites and observing daily leakages firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Bento Edge 1 */}
            <div className="bg-card border border-border p-8 rounded-theme-md text-left flex flex-col justify-between md:col-span-2">
              <div>
                <div className="h-10 w-10 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold font-display text-primary mb-3">Guaranteed Data Integrity</h4>
                <p className="text-sm text-primary-muted leading-relaxed max-w-xl">
                  Our system verifies GPS coordinates and captures camera photos for attendance logs. We prevent fake time-clocking entries, verify material delivery slips, and automatically double-check structural dimensions to keep logs truthful.
                </p>
              </div>
              <div className="h-4" />
            </div>

            {/* Bento Edge 2 */}
            <div className="bg-card border border-border p-8 rounded-theme-md text-left flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <Landmark className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold font-display text-primary mb-3">Localized Compliance</h4>
                <p className="text-sm text-primary-muted leading-relaxed">
                  Engineered specifically for national/state highway guidelines in India. Features direct Schedule-B layout mapping, tax structures, and regional vendor billing templates.
                </p>
              </div>
              <div className="h-4" />
            </div>

          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 md:py-32 bg-[#05070A] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Tactical Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              How We Digitize Your Operations
            </h2>
            <p className="text-base text-primary-muted mt-4 font-normal">
              We guide B2B clients through a controlled deployment timeline to ensure field crews adopt the software immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left relative">
            {/* Timeline connection lines */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-border z-0" />
            
            {[
              { num: "01", step: "Operational Mapping", desc: "We review your active tenders, spreadsheets, and site reporting chains to isolate exact leakage sources and verify bottlenecks." },
              { num: "02", step: "Prototype Pilot", desc: "We deploy ConTrack to a single active pilot project site, onboarding your engineers and collecting direct field usage feedback." },
              { num: "03", step: "Full Integration & Scale", desc: "Once validated, we roll out the application across all active projects, connect ledger APIs, and train administration teams." }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 flex flex-col gap-5 bg-card border border-border/80 p-8 rounded-theme-md">
                <div className="h-10 w-10 bg-accent/10 border border-accent text-accent font-display font-bold text-sm rounded-full flex items-center justify-center">
                  {p.num}
                </div>
                <h4 className="text-lg font-bold font-display text-primary">{p.step}</h4>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call To Action Block (Page 7 PDF) */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
            Ready to Digitize Your Industry?
          </h2>
          <p className="text-base text-primary-muted mt-6 max-w-xl mx-auto leading-relaxed">
            Join the growing list of businesses scaling with DZ Infotech intelligence. Partner with us to deploy ConTrack or build custom configurations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="flex items-center gap-2 text-sm font-semibold tracking-wide bg-accent text-white px-8 py-4 rounded-theme-sm border border-accent/20 transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-glow-accent w-full sm:w-auto justify-center"
            >
              Schedule a Meeting
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              to="/product" 
              className="text-sm font-semibold tracking-wide text-primary hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              See ConTrack Pricing
              <Play className="h-3 w-3 fill-current text-secondary" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
