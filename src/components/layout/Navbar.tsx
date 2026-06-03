import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { name: "Services", href: "/services" },
  { name: "Product (ConTrack)", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/85 backdrop-blur-md border-b border-border py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo wrapper */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/DZInfotech_Logo_nobg.svg" 
            alt="DZ Infotech" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-102"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent relative py-1 ${
                  isActive ? 'text-accent' : 'text-primary-muted'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <Link 
            to="/contact" 
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-accent text-white px-5 py-2.5 rounded-theme-sm border border-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-accent hover:bg-accent-light"
          >
            Partner With Us
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary-muted hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border absolute left-0 right-0 top-full overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-8 py-8 border-t border-border">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className={`text-lg font-medium tracking-wide transition-colors ${
                      isActive ? 'text-accent' : 'text-primary-muted hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-[1px] bg-border my-2" />
              <Link 
                to="/contact" 
                className="flex items-center justify-center gap-2 w-full text-sm font-semibold uppercase tracking-wider bg-accent text-white py-3.5 rounded-theme-sm transition-all hover:bg-accent-light"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
