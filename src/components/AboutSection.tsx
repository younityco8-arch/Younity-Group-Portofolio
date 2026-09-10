import { useState } from 'react';
import { 
  Compass, 
  Zap, 
  Target, 
  Check, 
  Sparkles,
  MapPin,
  Users2
} from 'lucide-react';
import { ABOUT_TEXT, COMPANY_INFO } from '../data/portfolioData';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'misi' | 'visi'>('visi');

  return (
    <section id="tentang" className="py-14 sm:py-20 lg:py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Tentang YouNity Group</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            One Step Event Solutions yang Lahir dari Semangat Kolaboratif
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {ABOUT_TEXT.paragraph1}
          </p>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {ABOUT_TEXT.paragraph2}
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {ABOUT_TEXT.pillars.map((pillar, idx) => {
            const icons = [Compass, Zap, Target];
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100/70 text-[#0066FF] flex items-center justify-center mb-4 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Misi & Visi Interactive Container */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 sm:p-8 lg:p-10 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Selector Column */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Arah & Komitmen Kami
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-2 sm:mb-4">
                Visi & Misi Perusahaan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 sm:mb-6 leading-relaxed">
                Sebagai fondasi dalam setiap perancangan konsep, penyusunan anggaran, hingga eksekusi panggung acara Anda.
              </p>

              {/* Tab Selector Buttons: side-by-side on mobile/tablet, stacked on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('visi')}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left font-semibold text-xs sm:text-sm transition-all ${
                    activeTab === 'visi'
                      ? 'bg-white dark:bg-[#020617] text-blue-700 dark:text-blue-400 dark:text-blue-400 shadow-xs border border-blue-200'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      activeTab === 'visi' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700 dark:text-slate-300'
                    }`}>
                      V
                    </div>
                    <span>5 Butir Visi YouNity</span>
                  </div>
                  <Sparkles className={`w-4 h-4 ${activeTab === 'visi' ? 'text-amber-500' : 'text-slate-300'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('misi')}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left font-semibold text-xs sm:text-sm transition-all ${
                    activeTab === 'misi'
                      ? 'bg-white dark:bg-[#020617] text-blue-700 dark:text-blue-400 dark:text-blue-400 shadow-xs border border-blue-200'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      activeTab === 'misi' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700 dark:text-slate-300'
                    }`}>
                      M
                    </div>
                    <span>Misi Utama Perusahaan</span>
                  </div>
                  <Sparkles className={`w-4 h-4 ${activeTab === 'misi' ? 'text-amber-500' : 'text-slate-300'}`} />
                </button>
              </div>

              {/* Location Badge */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200/70 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 dark:text-blue-400 dark:text-blue-400 font-bold flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Berbasis di Bandung</div>
                  <div>Siap melayani kebutuhan acara di Jawa Barat & sekitarnya</div>
                </div>
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="lg:col-span-8 bg-white dark:bg-[#020617] rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-200/80 shadow-xs">
              {activeTab === 'visi' ? (
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/50">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Visi Perusahaan
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                        Menjadi Penggerak Acara yang Adaptif & Berkelanjutan
                      </h4>
                    </div>
                    <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 dark:text-blue-400 font-bold text-xs px-2.5 py-1 rounded">
                      5 Pilar Visi
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {ABOUT_TEXT.visi.map((v, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                          {v}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800/50">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        Misi Perusahaan
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                        Komitmen YouNity untuk Setiap Klien
                      </h4>
                    </div>
                    <span className="bg-amber-50 text-amber-700 font-bold text-xs px-2.5 py-1 rounded">
                      Core Mission
                    </span>
                  </div>

                  <blockquote className="relative p-6 sm:p-8 bg-blue-50/50 dark:bg-blue-500/20 dark:bg-blue-50 dark:bg-blue-500/100/20 rounded-xl border-l-4 border-[#0066FF] mb-6">
                    <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
                      "{ABOUT_TEXT.misi}"
                    </p>
                  </blockquote>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Inspirasi kreatif tanpa batas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Kolaborasi lintas komunitas & kampus</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>SOP ketat & zero delay guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Dampak positif di setiap memori</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
