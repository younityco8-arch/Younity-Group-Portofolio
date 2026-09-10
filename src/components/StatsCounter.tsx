import { Calendar, Users, HeartHandshake, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export function StatsCounter() {
  const stats = [
    {
      icon: Calendar,
      value: COMPANY_INFO.stats.eventsDone,
      label: 'Acara Besar Berhasil',
      description: 'Dari Property Grand Launching hingga National Business Expo',
    },
    {
      icon: Users,
      value: COMPANY_INFO.stats.clients,
      label: 'Klien Utama Terpercaya',
      description: 'Purikota Kriya Maha Citra, IFBC Nasional, & Komunitas Kampus',
    },
    {
      icon: HeartHandshake,
      value: COMPANY_INFO.stats.satisfactionRate,
      label: 'Tingkat Kepuasan Klien',
      description: 'Zero technical delay & alur registrasi tertib berstandar SOP',
    },
    {
      icon: Award,
      value: COMPANY_INFO.stats.yearsExperience,
      label: 'Tahun Pengalaman',
      description: 'Kolektif kepemimpinan matang & kru lapangan ber-SOP',
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-slate-50/70 border-y border-slate-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Headline */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Track Record & Pencapaian
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Dipercaya Menangani Berbagai Skala Acara dengan Presisi
            </h2>
          </div>
          
          {/* Legalitas Ribbon */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-[#020617] px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs text-xs self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">Legalitas OSS NIB:</span>{' '}
              <span className="font-mono text-blue-700 dark:text-blue-400 dark:text-blue-400 font-bold">{COMPANY_INFO.nib}</span>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#020617] p-5 sm:p-6 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-200 dark:hover:border-blue-800 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 mb-1">
                  {item.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
