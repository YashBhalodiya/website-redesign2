import { Link } from 'react-router-dom';
import { Terminal, Layers, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';

const coreServices = [
  {
    icon: Terminal,
    title: "Custom Enterprise Software",
    description: "We build tailored web dashboards and operational portals that centralize raw logs, dispatch information, and accounting ledgers from scattered Excel files. Get a single source of truth for your entire business.",
    capabilities: ["Vendor credit tracking", "Material dispatch scheduling", "Corporate administration portals", "Real-time cost variance dashboards"]
  },
  {
    icon: Smartphone,
    title: "Offline-First Mobile Apps",
    description: "Using cross-platform SDKs like Flutter, we create powerful utility apps for warehouse managers, truck operators, and site supervisors. Designed to work in zero-bandwidth locations and sync seamlessly.",
    capabilities: ["GPS & route verification", "Camera and barcode scanning", "Offline database caching", "Push notification alert systems"]
  },
  {
    icon: Layers,
    title: "Workflow Automation Systems",
    description: "Eliminate repetitive email trails and manual document processing. We design programmatic triggers that route approval logs, file tax filings, compile reports, and alert stakeholders automatically.",
    capabilities: ["Automated invoice routing", "SMS/WhatsApp alert gateways", "Schedule-B PDF document scraping", "Third-party ERP integrations"]
  }
];

const techStack = [
  { category: "Frontend & Mobile", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Flutter", "React Native"] },
  { category: "Backend & Systems", items: ["Node.js", "Go", "Python (Django/FastAPI)", "PostgreSQL", "MongoDB"] },
  { category: "Infrastructure", items: ["AWS Cloud Suite", "Docker & Kubernetes", "GitHub Actions CI/CD", "Vercel / Supabase"] }
];

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      
      {/* Services Hero */}
      <section className="relative pt-12 pb-24 md:py-32">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-light mb-6">
              Engineering Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Custom Industrial Software Engineered for Precision
            </h1>
            <p className="text-base text-primary-muted leading-relaxed max-w-xl">
              We design and write custom digital pipelines that handle complex industrial workflows, prevent data leaks, and automate remote asset control.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#05070A] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
          
          <div className="grid grid-cols-1 gap-12">
            {coreServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border/80 rounded-theme-lg p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-4">
                    <div className="h-12 w-12 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-primary mb-3">{srv.title}</h3>
                    <p className="text-sm text-primary-muted leading-relaxed">{srv.description}</p>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-12 border-t lg:border-t-0 lg:border-l border-border/60 pt-8 lg:pt-0">
                    <span className="sm:col-span-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">Key Capabilities</span>
                    {srv.capabilities.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-primary-muted text-left">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{c}</span>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our Toolbox</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
              Modern Technology Calibrated for Resilience
            </h2>
            <p className="text-sm text-primary-muted mt-4 font-normal">
              We write clean, typed code and deploy to auto-scaling cloud environments to guarantee systems stay active 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {techStack.map((cat, idx) => (
              <div key={idx} className="bg-card border border-border p-8 rounded-theme-md">
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent border-b border-border/80 pb-4 mb-6">
                  {cat.category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary-muted">
                      <span className="h-1.5 w-1.5 bg-accent rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-[#05070A] border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
            Have a Specific Operational Bottleneck?
          </h2>
          <p className="text-sm text-primary-muted mt-4 max-w-md mx-auto leading-relaxed">
            Consult with our engineering architects. We will evaluate your spreadsheets and design a proof-of-concept prototype.
          </p>
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide bg-accent text-white px-7 py-3.5 rounded-theme-sm border border-accent/20 transition-all hover:bg-accent-light hover:-translate-y-0.5"
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
