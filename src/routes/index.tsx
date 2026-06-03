import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Lazy load pages for optimal bundle splitting
const Home = React.lazy(() => import('../pages/Home'));
const Product = React.lazy(() => import('../pages/Product'));
const Services = React.lazy(() => import('../pages/Services'));
const About = React.lazy(() => import('../pages/About'));
const Careers = React.lazy(() => import('../pages/Careers'));
const Contact = React.lazy(() => import('../pages/Contact'));

export default function AppRoutes() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-widest text-primary-muted animate-pulse">DZ Loading...</span>
        </div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/product" element={<Layout><Product /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </React.Suspense>
  );
}
