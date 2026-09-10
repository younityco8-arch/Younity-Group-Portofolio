import { useState, useEffect } from 'react';
import { YouNityLogo } from './YouNityLogo';
import { COMPANY_INFO } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export function Navbar({ onOpenCalculator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Galeri Acara', href: '#galeri' },
    { label: 'Peralatan', href: '#peralatan' },
    { label: 'Legalitas', href: '#legalitas' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md shadow-xs border-b border-slate-100 dark:border-slate-800 py-3'
          : 'bg-white/80 dark:bg-[#020617]/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
            <YouNityLogo size="md" variant={theme === 'dark' ? 'white' : 'color'} />
          </a>

          {/* Desktop Navigation Links (Large Screens & Desktops) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 px-2.5 xl:px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs for Desktop & Tablet */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Estimate / Consultation */}
            <button
              type="button"
              onClick={onOpenCalculator}
              id="nav-btn-calculator"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-400 dark:text-blue-400 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 dark:bg-blue-50 dark:bg-blue-500/100/10 hover:bg-blue-100 dark:hover:bg-blue-50 dark:bg-blue-500/100/20 border border-blue-200 dark:border-blue-500/30 px-3 py-2 rounded-lg transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 dark:text-blue-400" />
              <span>Estimasi Acara</span>
            </button>

            {/* WhatsApp Direct CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-btn-whatsapp"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0066FF] hover:bg-[#0052cc] px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>Konsultasi WA</span>
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* On small phones, show quick estimate icon button */}
            <button
              type="button"
              onClick={onOpenCalculator}
              className="sm:hidden inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 dark:text-blue-400 dark:text-blue-400 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 dark:bg-blue-50 dark:bg-blue-500/100/10 px-2.5 py-1.5 rounded-md border border-blue-100 dark:border-blue-500/30"
            >
              <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400 dark:text-blue-400" />
              <span>Estimasi</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#020617]/98 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 max-w-lg mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400 py-2.5 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 border-b border-slate-50 dark:border-slate-800/50"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5 mt-1 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 dark:bg-blue-50 dark:bg-blue-500/100/10 text-blue-700 dark:text-blue-400 dark:text-blue-400 dark:text-blue-400 text-sm font-semibold border border-blue-200 dark:border-blue-500/30"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 dark:text-blue-400" />
                <span>Kalkulator & Estimasi Kebutuhan Acara</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0066FF] text-white text-sm font-bold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp (0823-1251-5113)</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                <span>NIB OSS: 1608260012591 Resmi Terverifikasi</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
