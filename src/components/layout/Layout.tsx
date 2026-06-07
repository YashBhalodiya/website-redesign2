import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import InteractiveMesh from '../ui/InteractiveMesh';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Scroll restoration on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background text-primary-muted transition-colors duration-300">
      {/* Dynamic Animated Mesh Backdrop */}
      <InteractiveMesh />

      <Navbar />

      <main className="flex-grow pt-24 relative z-10 flex flex-col">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            {children}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
