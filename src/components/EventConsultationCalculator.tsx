import { useState } from 'react';
import { 
  Calculator, 
  MessageCircle, 
  Check, 
  Sparkles, 
  HelpCircle, 
  Calendar, 
  MapPin, 
  Users,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface EventConsultationCalculatorProps {
  onClose?: () => void;
}

export function EventConsultationCalculator({ onClose }: EventConsultationCalculatorProps) {
  const [eventType, setEventType] = useState('Property Launching / Grand Opening');
  const [guestCount, setGuestCount] = useState('100 - 300 Tamu');
  const [services, setServices] = useState<string[]>([
    'Full Event Management & Flow SOP',
    'Dokumentasi Foto & Video Sinematik',
  ]);
  const [locationPlan, setLocationPlan] = useState('Bandung / Jawa Barat');
  const [notes, setNotes] = useState('');

  const serviceOptions = [
    'Full Event Management & Flow SOP',
    'Desain Konsep & Key Visual Panggung',
    'Sound System Audio Rig & Mic Wireless',
    'Videotron / LED Screen P3.9',
    'Lighting Panggung (Moving Beam & Par LED)',
    'Tenda Sarnafil & Roder Plafon VIP',
    'Dokumentasi Foto & Video Sinematik',
    'Outbound Facilitator & Games Itinerary',
  ];

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      setServices(services.filter((s) => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Halo YouNity Group (One Step Event Solutions), saya ingin konsultasi rencana acara:

📌 Jenis Acara: ${eventType}
👥 Estimasi Tamu: ${guestCount}
📍 Lokasi Rencana: ${locationPlan}
🛠️ Kebutuhan Layanan:
${services.map((s) => `• ${s}`).join('\n')}
${notes ? `\n📝 Catatan Khusus: ${notes}` : ''}

Mohon informasi ketersediaan tanggal dan estimasi penawaran/proposal. Terima kasih!`;

    return `https://wa.me/6282312515113?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 md:p-10 shadow-lg">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Kalkulator & Estimasi Kebutuhan</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Rancang Kebutuhan Acara Anda
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pilih preferensi Anda untuk menghasilkan brief rencana acara instan ke YouNity Group.
          </p>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        
        {/* Step 1: Jenis Acara */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Pilih Format / Jenis Acara
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
            {[
              'Property Launching / Grand Opening',
              'Exhibition & Franchise Expo',
              'Campus Festival & Wisuda',
              'Corporate Gathering & Outbound',
              'Seminar, Workshop & Conference',
              'Sewa Alat Panggung Saja (Equipment)',
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setEventType(type)}
                className={`p-2.5 sm:p-3 text-xs font-semibold rounded-xl text-left border transition-all ${
                  eventType === type
                    ? 'border-blue-600 bg-blue-50/80 text-blue-800 ring-1 ring-blue-500/30'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Estimasi Tamu */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            2. Estimasi Jumlah Tamu / Peserta
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {['50 - 100 Tamu', '100 - 300 Tamu', '300 - 1.000 Tamu', '1.000+ Tamu'].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setGuestCount(count)}
                className={`p-2.5 sm:p-3 text-xs font-semibold rounded-xl text-center border transition-all ${
                  guestCount === count
                    ? 'border-blue-600 bg-blue-50/80 text-blue-800 ring-1 ring-blue-500/30'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Layanan & Perlengkapan */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              3. Layanan & Fasilitas yang Dibutuhkan
            </label>
            <span className="text-[10px] sm:text-[11px] text-slate-500">Pilih satu atau lebih</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {serviceOptions.map((opt) => {
              const isChecked = services.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleService(opt)}
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                    isChecked
                      ? 'border-blue-500 bg-blue-50 text-blue-900 font-semibold'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center text-white text-[10px] flex-shrink-0 ${
                      isChecked ? 'bg-[#0066FF]' : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3" />}
                  </div>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Lokasi & Rencana */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              4. Lokasi / Kota Rencana
            </label>
            <input
              type="text"
              value={locationPlan}
              onChange={(e) => setLocationPlan(e.target.value)}
              placeholder="Contoh: Bandung, Rancaekek, Lembang, dll."
              className="w-full text-xs sm:text-sm p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Catatan Tambahan (Opsional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Butuh MC, rencana bulan depan, dll."
              className="w-full text-xs sm:text-sm p-2.5 sm:p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Action Button: Send via WhatsApp */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Respon Cepat:</span> Tim YouNity siap memberikan estimasi penawaran resmi dalam 1x24 jam.
          </div>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Kirim Rencana ke WhatsApp YouNity</span>
          </a>
        </div>

      </div>

    </div>
  );
}
