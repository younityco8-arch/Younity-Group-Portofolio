import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { EventGallerySection } from './components/EventGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { LegalitasSection } from './components/LegalitasSection';
import { EventConsultationCalculator } from './components/EventConsultationCalculator';
import { Footer } from './components/Footer';
import { MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from './data/portfolioData';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  const scrollToCalculator = () => {
    const el = document.getElementById('kalkulator-acara');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-800 dark:text-slate-200 antialiased flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <Navbar onOpenCalculator={scrollToCalculator} />
        <main className="flex-1">
          <HeroSection onOpenCalculator={scrollToCalculator} />
          <StatsCounter />
          <AboutSection />
          <EventGallerySection />
          <ServicesSection />
          <section id="kalkulator-acara" className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/60 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <EventConsultationCalculator />
            </div>
          </section>
          <LegalitasSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
