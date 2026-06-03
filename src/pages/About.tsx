import { Target, TrendingUp, Calendar } from 'lucide-react';

const timelineSteps = [
  {
    date: "April 2025",
    title: "ConTrack Conceived",
    desc: "The idea for ConTrack emerged after observing heavy financial leakages and reporting delays on active road construction projects in Gujarat."
  },
  {
    date: "June – July 2025",
    title: "Prototype Pilot",
    desc: "First working mobile code tested live on-site, focusing on offline DPR entries and automatic cellular sync loops."
  },
  {
    date: "September 2025",
    title: "DZ Infotech Foundation",
    desc: "DZ Infotech was officially registered as a technology partnership firm in Bhavnagar, Gujarat, with a focus on heavy industry software."
  },
  {
    date: "Late 2025",
    title: "ConTrack MVP Launch",
    desc: "Version 1.0 rolled out to initial clients, featuring diesel registers, labor logs, and automatic Schedule-B document parsing."
  },
  {
    date: "Early Adoption",
    title: "Validated Proof of Concept",
    desc: "Successfully deployed ConTrack across 15 active road and civil sites, proving fuel leakages dropped by 18%."
  },
  {
    date: "Future Expansion",
    title: "AI Integration & Logistics",
    desc: "Actively engineering predictive material demand pipelines and expanding digital platforms to global logistics markets."
  }
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      
      {/* About Hero */}
      <section className="relative pt-12 pb-20 md:py-28">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent-light mb-6">
              Our Identity
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
              Building Pragmatic Technology for the Real World
            </h1>
            <p className="text-base text-primary-muted leading-relaxed max-w-2xl">
              Based in Bhavnagar, Gujarat, DZ Infotech is a software engineering firm focused on developing robust digital tools that automate remote site logs, consolidate project margins, and drive cost control.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-16 bg-[#05070A] border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Mission Card */}
          <div className="bg-card border border-border p-8 rounded-theme-md flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary mb-3">Our Mission</h3>
              <p className="text-sm text-primary-muted leading-relaxed">
                To digitally empower heavy industrial operations and construction firms by building simple, field-tested software tools that solve complex financial, resource, and administrative leaks.
              </p>
            </div>
            <div className="h-4" />
          </div>

          {/* Vision Card */}
          <div className="bg-card border border-border p-8 rounded-theme-md flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 bg-accent/5 rounded-theme-sm border border-accent/20 flex items-center justify-center text-accent mb-6">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary mb-3">Our Vision</h3>
              <p className="text-sm text-primary-muted leading-relaxed">
                To become the premier operating platform for heavy industries worldwide—a unified dashboard where every log is verified, every drop is accounted for, and every site is optimized.
              </p>
            </div>
            <div className="h-4" />
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-3xl mx-auto mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Chronology</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
              Our Journey of Site Calibration
            </h2>
            <p className="text-sm text-primary-muted mt-4 font-normal">
              From walks in construction dust to processing enterprise databases, see how our focus has evolved.
            </p>
          </div>

          {/* Timeline grids */}
          <div className="relative border-l border-border/80 pl-6 md:pl-10 max-w-4xl mx-auto text-left flex flex-col gap-12">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1 h-4 w-4 bg-background border-2 border-accent rounded-full transition-transform group-hover:scale-110" />
                
                <div className="flex items-center gap-3 text-xs font-bold text-accent uppercase tracking-wider font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{step.date}</span>
                </div>
                
                <h3 className="text-lg font-bold font-display text-primary mt-2">{step.title}</h3>
                <p className="text-sm text-primary-muted mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
