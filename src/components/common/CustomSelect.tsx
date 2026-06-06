import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  required = false
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 relative w-full" ref={containerRef}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary-muted">
          {label}
        </span>
      )}
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full bg-card border text-sm rounded-theme-sm px-4 py-3 text-left transition-all ${
          isOpen 
            ? 'border-accent shadow-glow-accent' 
            : 'border-border hover:border-accent/40'
        }`}
      >
        <span className={selectedOption ? 'text-primary' : 'text-primary-muted'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-primary-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 z-20 mt-1 bg-card border border-border rounded-theme-sm overflow-hidden shadow-2xl max-h-60 overflow-y-auto"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-card-hover ${
                    value === opt.value 
                      ? 'text-accent font-semibold bg-accent/5' 
                      : 'text-primary-muted'
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hidden input to support HTML5 standard validation */}
      {required && (
        <input
          tabIndex={-1}
          type="text"
          value={value}
          required
          onChange={() => {}}
          className="absolute inset-0 opacity-0 pointer-events-none"
        />
      )}
    </div>
  );
}
