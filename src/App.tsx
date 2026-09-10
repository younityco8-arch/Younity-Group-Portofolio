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
        {/* Sticky Main Navigation */}
        <Navbar
          onOpenCalculator={scrollToCalculator}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onOpenCalculator={scrollToCalculator}
          />

          {/* Quantifiable Stats & Verified NIB Ribbon */}
          <StatsCounter />

          {/* About YouNity & Visi Misi */}
          <AboutSection />

          {/* The Star Showcase: Interactive Event Galleries of Every Successful Event */}
          <EventGallerySection />

          {/* Products & Services with Equipment Rental Catalog */}
          <ServicesSection />

          {/* Interactive Event Planner & WhatsApp Brief Generator */}
          <section id="kalkulator-acara" className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/60 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <EventConsultationCalculator />
            </div>
          </section>

          {/* Business Legalitas OSS NIB 1608260012591 */}
          <LegalitasSection />
        </main>

        {/* Footer with "Let's Work Together" & Direct Contact Details */}
        <Footer />

        {/* Floating Action Button (WhatsApp Direct) */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-lg shadow-green-500/25 transition-all transform hover:scale-105 group font-bold text-xs sm:text-sm"
            aria-label="Hubungi YouNity via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
            <span className="hidden sm:inline">Chat YouNity Group</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
}

