import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import type { SVGProps } from 'react';

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const footerCategories = {
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Partner With Us", href: "/contact" }
  ],
  Products: [
    { name: "ConTrack Platform", href: "/product" },
    { name: "Enterprise Services", href: "/services" }
  ],
  Resources: [
    { name: "Success Stories", href: "/about" },
    { name: "Platform Help", href: "/contact" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/45 border-t border-border pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-6 gap-12 mb-20 relative z-10">
        
        {/* Brand Information */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Link to="/" className="inline-block focus:outline-none">
            <img 
              src="/DZInfotech_Logo_nobg.svg" 
              alt="DZ Infotech" 
              className="h-14 w-auto"
            />
          </Link>
          <p className="text-primary-muted text-sm leading-relaxed max-w-sm">
            DZ Infotech is a visionary B2B software engineering firm. We design and build high-precision digital ecosystems that empower real-world industries with operational visibility, control, and efficiency.
          </p>
          <div className="flex items-center gap-4 text-primary-muted">
            <a href="#" className="hover:text-accent-light transition-colors p-2 bg-card-hover hover:bg-accent/15 rounded-full border border-border" aria-label="LinkedIn Profile"><LinkedinIcon className="h-4 w-4" /></a>
            <a href="#" className="hover:text-accent-light transition-colors p-2 bg-card-hover hover:bg-accent/15 rounded-full border border-border" aria-label="Twitter Profile"><TwitterIcon className="h-4 w-4" /></a>
            <a href="#" className="hover:text-accent-light transition-colors p-2 bg-card-hover hover:bg-accent/15 rounded-full border border-border" aria-label="GitHub Profile"><GithubIcon className="h-4 w-4" /></a>
            <a href="mailto:info@dzinfotech.in" className="hover:text-accent-light transition-colors p-2 bg-card-hover hover:bg-accent/15 rounded-full border border-border" aria-label="Email Contact"><Mail className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Dynamic Categories */}
        {Object.entries(footerCategories).map(([title, links]) => (
          <div key={title} className="flex flex-col gap-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">{title}</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href}
                      className="group text-sm text-primary-muted hover:text-primary transition-colors flex items-center gap-0.5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="group text-sm text-primary-muted hover:text-primary transition-colors flex items-center gap-0.5"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-accent-light" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-xs text-primary-dim">
          &copy; {currentYear} DZ Infotech. All rights reserved.
        </p>
        <p className="text-xs text-primary-dim">
          Designed and engineered to premium B2B SaaS architecture standards.
        </p>
      </div>
    </footer>
  );
}
