import { useState, FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Globe, 
  MapPin, 
  MessageCircle, 
  Send, 
  Sparkles, 
  Check, 
  ArrowUp
} from 'lucide-react';
import { YouNityLogo } from './YouNityLogo';
import { COMPANY_INFO } from '../data/portfolioData';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    eventType: 'Corporate Gathering',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Redirect to WhatsApp with prefilled message
    const msg = `Halo YouNity Group,%0A%0ASaya: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.organization || 'Pribadi')})%0AIngin konsultasi rencana acara: ${encodeURIComponent(formData.eventType)}%0APesan: ${encodeURIComponent(formData.message || 'Mohon informasi penawaran dan ketersediaan.')}`;
    window.open(`https://wa.me/6282312515113?text=${msg}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-14 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner: "Let's Work Together" */}
        <div className="bg-gradient-to-r from-blue-600 via-[#0066FF] to-blue-700 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white mb-14 sm:mb-20 shadow-xl relative overflow-hidden">
          
          {/* Decorative SVG Sparkles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white dark:bg-[#020617]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Let's Work Together
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight mt-2 mb-3 sm:mb-4">
                Wujudkan Acara Impian Anda Bersama YouNity
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-6">
                Tim YouNity Group siap berdiskusi, merancang rundown presisi, dan menyusun estimasi anggaran yang transparan sesuai kebutuhan acara Anda.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white dark:bg-[#020617] text-blue-700 dark:text-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:bg-blue-500/10 font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat WhatsApp (0823-1251-5113)</span>
                </a>

                <a
                  href="#kalkulator-acara"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Hitung Estimasi Acara</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="lg:col-span-5 bg-white dark:bg-[#020617] rounded-2xl p-5 sm:p-6 text-slate-800 dark:text-slate-200 shadow-2xl border border-white/20">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Kirim Pesan Langsung
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Terhubung langsung dengan tim representatif YouNity di WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Lengkap Anda"
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:bg-[#020617] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Perusahaan / Kampus / Brand"
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:bg-[#020617] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:bg-[#020617] focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 dark:text-slate-300"
                  >
                    <option value="Property Grand Launching">Property Grand Launching</option>
                    <option value="Exhibition & Franchise Expo">Exhibition & Franchise Expo</option>
                    <option value="Corporate Gathering & Outbound">Corporate Gathering & Outbound</option>
                    <option value="Festival Musik & Campus Event">Festival Musik & Campus Event</option>
                    <option value="Seminar / Conference">Seminar / Conference</option>
                    <option value="Sewa Peralatan (Sound/LED/Stage)">Sewa Peralatan Saja</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Deskripsi singkat atau tanggal rencana..."
                    className="w-full text-xs p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:bg-[#020617] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp YouNity</span>
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-100 dark:border-slate-800/50 text-xs text-slate-600 dark:text-slate-400">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <YouNityLogo size="lg" className="mb-4" />
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
              Penyedia jasa manajemen dan produksi acara kreatif yang berpusat di Bandung. Memadukan idealisme, energi muda, dan ketelitian manajemen untuk menciptakan ekosistem event yang berdampak.
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <div><strong>NIB:</strong> 1608260012591 (OSS Republik Indonesia)</div>
              <div><strong>Klasifikasi:</strong> Event Organizer & Jasa Kreatif</div>
              <div><strong>Domisili:</strong> Bandung, Jawa Barat</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigasi Portfolio
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#tentang" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Layanan & Jasa</a></li>
              <li><a href="#galeri" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Galeri Dokumentasi</a></li>
              <li><a href="#peralatan" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Sewa Peralatan</a></li>
              <li><a href="#legalitas" className="hover:text-blue-600 dark:text-blue-400 transition-colors">Legalitas NIB OSS</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5">
              <li>Corporate & Brand Activation</li>
              <li>Campus & Community Events</li>
              <li>Experiential Gathering & Outbound</li>
              <li>Creative Stage Production</li>
              <li>Videotron & Line Array Rental</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Kontak Resmi
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">WhatsApp / Telepon</span>
                  <a href={COMPANY_INFO.whatsappUrl} className="font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:text-blue-400 font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Email Bisnis</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:text-blue-400">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Instagram</span>
                  <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:text-blue-400">
                    {COMPANY_INFO.instagram}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Domisili</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{COMPANY_INFO.location}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>YouNity Group</strong> (YOUNITY GROUP). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">One Step Event Solutions</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:text-blue-400 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
