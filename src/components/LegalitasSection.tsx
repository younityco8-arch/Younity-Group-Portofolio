import { ShieldCheck, FileCheck, Award, CheckCircle2, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export function LegalitasSection() {
  return (
    <section id="legalitas" className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Official Legal Identity Badge */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Legalitas Terverifikasi Republik Indonesia</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-4">
                Business Legalitas Resmi & Terdaftar di OSS
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                YouNity Group beroperasi dengan kepatuhan hukum penuh, memberikan jaminan keamanan transaksi, transparansi pertanggungjawaban anggaran, serta kelayakan dokumen administrasi untuk kerja sama korporasi swasta, BUMN, maupun institusi pendidikan.
              </p>

              {/* Data Table */}
              <div className="space-y-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-slate-200/70 gap-0.5">
                  <span className="font-semibold text-slate-500">Nama Entitas Bisnis:</span>
                  <span className="font-bold text-slate-900 font-mono sm:text-right">
                    {COMPANY_INFO.fullName}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-slate-200/70 gap-0.5">
                  <span className="font-semibold text-slate-500">Nomor Induk Berusaha (NIB):</span>
                  <span className="font-bold text-[#0066FF] font-mono sm:text-right">
                    {COMPANY_INFO.nib}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 border-b border-slate-200/70 gap-0.5">
                  <span className="font-semibold text-slate-500">Sistem Registrasi:</span>
                  <span className="font-bold text-slate-800 sm:text-right">
                    OSS (Online Single Submission) BKPM RI
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 gap-0.5">
                  <span className="font-semibold text-slate-500">Klasifikasi Aktivitas:</span>
                  <span className="font-bold text-slate-800 sm:text-right">
                    {COMPANY_INFO.classification}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Trust Badges */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 to-slate-50 p-5 sm:p-8 rounded-2xl border border-blue-100 flex flex-col justify-between">
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Kesiapan Administrasi Lengkap
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Setiap pengadaan jasa EO didukung kelengkapan berkas resmi:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Surat Perjanjian Kerja Sama (SPK) resmi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Invoice resmi, kwitansi, & perincian RAB detail</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Laporan pertanggungjawaban (LPJ) & arsip dokumentasi</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Mitigasi keselamatan & koordinasi perizinan venue</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center gap-2 text-[11px] text-blue-900 font-semibold">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>Aman, Terpercaya, & Siap B2B Partnership</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
