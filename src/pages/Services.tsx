import { Link } from 'react-router-dom';
import { Terminal, Layers, ArrowRight, CheckCircle, Smartphone, Cpu } from 'lucide-react';

const coreServices = [
  {
    icon: Terminal,
    title: "Custom Enterprise Software",
    description: "We build tailored web dashboards and operational portals that centralize raw logs, dispatch information, and accounting ledgers from scattered Excel files. Get a single source of truth for your entire business.",
    capabilities: ["Vendor credit tracking", "Material dispatch scheduling", "Corporate administration portals", "Real-time cost variance dashboards"],
    badge: "Scale"
  },
  {
    icon: Smartphone,
    title: "Offline-First Mobile Apps",
    description: "Using cross-platform SDKs like Flutter, we create powerful utility apps for warehouse managers, truck operators, and site supervisors. Designed to work in zero-bandwidth locations and sync seamlessly.",
    capabilities: ["GPS & route verification", "Camera and barcode scanning", "Offline database caching", "Push notification alert systems"],
    badge: "Field-First"
  },
  {
    icon: Layers,
    title: "Workflow Automation Systems",
    description: "Eliminate repetitive email trails and manual document processing. We design programmatic triggers that route approval logs, file tax filings, compile reports, and alert stakeholders automatically.",
    capabilities: ["Automated invoice routing", "SMS/WhatsApp alert gateways", "Schedule-B PDF document scraping", "Third-party ERP integrations"],
    badge: "Automation"
  }
];

const techStack = [
  { category: "Frontend & Mobile", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Flutter", "React Native"] },
  { category: "Backend & Systems", items: ["Node.js", "Go", "Python (Django/FastAPI)", "PostgreSQL", "MongoDB"] },
  { category: "Infrastructure", items: ["AWS Cloud Suite", "Docker & Kubernetes", "GitHub Actions CI/CD", "Vercel / Supabase"] }
];

export default function Services() {
  return (
    <div className="overflow-x-hidden relative">
      
      {/* Background Grid Accent */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-grid-mesh [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Services Hero */}
      <section className="relative pt-20 pb-20 md:py-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left max-w-3xl flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-accent/20 bg-accent/5 text-accent-light backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5" />
              Engineering Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1]">
              Custom Industrial Software Engineered for Precision
            </h1>
            <p className="text-base text-primary-muted leading-relaxed max-w-xl">
              We design and write custom digital pipelines that handle complex industrial workflows, prevent data leaks, and automate remote asset control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card/40 border-y border-border relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 gap-8">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-[24px] relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-300" />
                  
                  <div className="lg:col-span-5 flex flex-col items-start relative z-10">
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="h-12 w-12 bg-accent/5 rounded-[12px] border border-accent/20 flex items-center justify-center text-accent-light">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-card border border-border px-2.5 py-1 rounded-full text-primary-dim">
                        {srv.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-primary mb-3">{srv.title}</h3>
                    <p className="text-sm text-primary-muted leading-relaxed">{srv.description}</p>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 relative z-10 h-full flex flex-col justify-center">
                    <span className="sm:col-span-2 text-xs font-bold uppercase tracking-wider text-accent-light mb-2 block">Key Capabilities</span>
                    {srv.capabilities.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-primary-muted text-left">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="font-semibold">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Toolbox</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary tracking-tight">
              Modern Technology Calibrated for Resilience
            </h2>
            <p className="text-base text-primary-muted mt-4 font-normal max-w-xl mx-auto">
              We write clean, typed code and deploy to auto-scaling cloud environments to guarantee systems stay active 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {techStack.map((cat, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-[20px] relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-xl" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-4 mb-6 relative z-10">
                  {cat.category}
                </h4>
                <ul className="flex flex-wrap gap-2.5 relative z-10">
                  {cat.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-2 text-xs text-primary-muted bg-card border border-border px-3 py-1.5 rounded-full hover:border-accent-light/30 transition-all shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 bg-accent-light rounded-full shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-card/40 border-t border-border relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-display font-extrabold text-primary tracking-tight">
            Have a Specific Operational Bottleneck?
          </h2>
          <p className="text-base text-primary-muted mt-4 max-w-lg mx-auto leading-relaxed">
            Consult with our engineering architects. We will evaluate your spreadsheets and design a proof-of-concept prototype.
          </p>
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide bg-gradient-to-r from-accent to-accent-light text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-0.5 hover:brightness-110"
            >
              Consult with our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
