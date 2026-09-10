import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Award, 
  Users, 
  CalendarCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCalculator: () => void;
}

export function HeroSection({ onOpenCalculator }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-24 bg-white overflow-hidden"
    >
      {/* Subtle clean background architectural grid / aura */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0066FF 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Origin & Credibility Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-800 text-[11px] sm:text-xs font-semibold mb-4 sm:mb-6 shadow-2xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse flex-shrink-0" />
              <span className="whitespace-nowrap">One Step Event Solutions</span>
              <span className="text-blue-300 hidden xs:inline">•</span>
              <span className="text-slate-600 font-normal">Bandung, Jawa Barat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-4 sm:mb-6">
              Momen Sukses Dimulai dari{' '}
              <span className="text-[#0066FF] relative inline-block">
                Eksekusi Presisi
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-amber-400 opacity-80"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              & Energi Kreatif.
            </h1>

            {/* Subtitle / Positioning */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              <strong className="font-semibold text-slate-800">YouNity Group</strong> adalah mitra manajemen dan produksi acara satu pintu di Bandung. Kami memadukan idealisme, energi muda, dan ketelitian manajemen untuk mewujudkan peluncuran produk, expo bisnis, konser kampus, hingga corporate gathering yang tertib dan berkesan.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-6 sm:mb-9 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Zero Technical Delay & Alur Tertib</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Satu Frekuensi dengan Audiens Gen Z</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Peralatan Lengkap (Sound, LED, Stage)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Entitas NIB OSS 1608260012591 Resmi</span>
              </div>
            </div>

            {/* Action CTAs: responsive layout */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
              <button
                type="button"
                onClick={onOpenCalculator}
                id="hero-cta-calculator"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm sm:text-base font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 animate-pulse hover:animate-none ring-4 ring-blue-400/25"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Hitung Estimasi Acara</span>
              </button>

              <a
                href="#galeri"
                id="hero-cta-gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm sm:text-base font-semibold transition-all hover:border-slate-300 shadow-2xs"
              >
                <span>Jelajahi Galeri Acara</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm sm:text-base font-semibold transition-all hover:border-slate-300 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Konsultasi Cepat (WA)</span>
              </a>
            </div>

            {/* Location & Trust Footer */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100 w-full">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Bandung, Jawa Barat</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>100% Kepuasan Klien</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <button 
                type="button" 
                onClick={onOpenCalculator}
                className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Hitung Estimasi Kebutuhan</span>
              </button>
            </div>

          </div>

          {/* Right Visual Column (5 cols on lg) - Photographic Showcase Card */}
          <div className="lg:col-span-5 relative w-full mt-4 lg:mt-0">
            
            {/* Background Decorative Accent Ring */}
            <div 
              className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true"
            />
            <div 
              className="absolute -bottom-8 -left-8 w-60 h-60 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true"
            />

            {/* Main Featured Mosaic Container */}
            <div className="relative bg-white p-3 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              
              {/* Top Banner Tag */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Galeri Sukses Terverifikasi
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  Portfolio Highlight
                </span>
              </div>

              {/* Grid of Real Event Photos */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                
                {/* Photo 1: Purikota Property Launching Setup */}
                <div className="relative group rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                    alt="Tenda VIP Grand Launching Purikota"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-amber-300">Property Launch</span>
                    <h2 className="text-[11px] sm:text-xs font-bold leading-snug line-clamp-1">Purikota Kriya Maha Citra</h2>
                    <span className="text-[9px] sm:text-[10px] text-slate-200">32 Unit Sold Out</span>
                  </div>
                </div>

                {/* Photo 2: IFBC National Franchise Exhibition */}
                <div className="relative group rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
                  <img
                    src="/images/ifbc_ballroom_expo_1788885483057.jpg"
                    alt="Panggung Sudirman Grand Ballroom IFBC"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-blue-300">Exhibition & Expo</span>
                    <h2 className="text-[11px] sm:text-xs font-bold leading-snug line-clamp-1">IFBC Grand Ballroom</h2>
                    <span className="text-[9px] sm:text-[10px] text-slate-200">Multi-Day National Event</span>
                  </div>
                </div>

                {/* Photo 3: Ground Crew in Action */}
                <div className="relative group rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
                  <img
                    src="/images/ifbc_crew_documentary_1788885581400.jpg"
                    alt="Tim YouNity Berompi Resmi"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-emerald-300">Ground Management</span>
                    <h2 className="text-[11px] sm:text-xs font-bold leading-snug line-clamp-1">Tim YouNity On-Site</h2>
                    <span className="text-[9px] sm:text-[10px] text-slate-200">Registrasi & Operasional</span>
                  </div>
                </div>

                {/* Photo 4: Campus Creative & Concert Stage */}
                <div className="relative group rounded-xl overflow-hidden aspect-4/3 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
                    alt="Panggung Konser dan Tata Lampu"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-2.5 sm:p-3 text-white">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-purple-300">Stage & Audio-Visual</span>
                    <h2 className="text-[11px] sm:text-xs font-bold leading-snug line-clamp-1">Full In-House Equipment</h2>
                    <span className="text-[9px] sm:text-[10px] text-slate-200">Lighting, LED & Rigging</span>
                  </div>
                </div>

              </div>

              {/* Floating Stat Badges - responsive layout without overflowing on phones */}
              <div className="mt-3 sm:mt-0 flex flex-col sm:block gap-2">
                <div className="sm:absolute sm:-bottom-4 sm:-left-4 bg-white p-2.5 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-md sm:shadow-lg flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Kepuasan Klien Terjaga</div>
                  </div>
                </div>

                <div className="sm:absolute sm:-top-3 sm:-right-3 bg-white px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-slate-200/90 shadow-md sm:shadow-lg flex items-center gap-2">
                  <CalendarCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs font-bold text-slate-800">Zero Technical Delay</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
