import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (title: string, description?: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((title: string, description?: string, type: ToastType = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    
    // Auto dismiss
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      
      {/* Toast Viewport Portal container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = t.type === 'success' 
              ? CheckCircle 
              : t.type === 'error' 
                ? AlertCircle 
                : Info;
            
            const typeColor = t.type === 'success'
              ? 'text-emerald-400 border-emerald-500/20 bg-[#0E1612]'
              : t.type === 'error'
                ? 'text-red-400 border-red-500/20 bg-[#160E0E]'
                : 'text-sky-400 border-sky-500/20 bg-[#0E1316]';

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                layout
                className={`pointer-events-auto border rounded-theme-md p-4 flex gap-3 shadow-glow-card ${typeColor}`}
              >
                <div className="shrink-0 mt-0.5">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-primary">{t.title}</h4>
                  {t.description && (
                    <p className="text-xs text-primary-muted mt-1 leading-relaxed">{t.description}</p>
                  )}
                </div>
                <button 
                  onClick={() => removeToast(t.id)} 
                  className="shrink-0 text-primary-muted hover:text-primary transition-colors focus:outline-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
