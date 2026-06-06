import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

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

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 ${isScrolled ? 'pt-4' : 'pt-6'
      }`}>
      <div className={`max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between rounded-full border transition-all duration-300 ${isScrolled
          ? 'bg-card/75 backdrop-blur-md border-border shadow-glow-card'
          : 'bg-transparent border-transparent'
        }`}>

        {/* Logo wrapper */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="/DZInfotech_Logo_nobg.svg"
            alt="DZ Infotech"
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
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
                className={`text-base font-semibold tracking-wide transition-colors duration-200 hover:text-accent-light relative py-1 ${isActive ? 'text-accent-light' : 'text-primary-muted'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-light rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Panel: Theme Switcher & CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/5 border border-border hover:border-accent-light/40 transition-colors text-primary hover:text-accent-light focus:outline-none cursor-pointer"
            aria-label="Toggle Color Theme"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <Link
            to="/contact"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-accent-light text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-glow-accent hover:brightness-110 hover:-translate-y-0.5"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-primary-muted hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Color Theme"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary-muted hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-card/95 backdrop-blur-xl border border-border absolute left-4 right-4 mt-2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navigationLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-base font-semibold tracking-wide transition-colors py-2 border-b border-border/50 ${isActive ? 'text-accent-light' : 'text-primary-muted hover:text-accent-light'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-[1px] bg-border/50 my-1" />
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-accent-light text-white py-3 rounded-full transition-all hover:brightness-110"
              >
                Partner With Us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
