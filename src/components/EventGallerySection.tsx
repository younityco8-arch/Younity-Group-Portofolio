import { useState } from 'react';
import { 
  Camera, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Maximize2, 
  Building2, 
  Users, 
  ArrowUpRight,
  Filter,
  Check
} from 'lucide-react';
import { PORTFOLIO_EVENTS, ALL_GALLERY_PHOTOS, COMPANY_INFO } from '../data/portfolioData';
import { GalleryPhoto, EventCategory } from '../types';
import { LightboxModal } from './LightboxModal';

export function EventGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<EventCategory>('all');

  const openPhoto = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  // Filter photos for the master gallery grid
  const filteredPhotos = activeFilter === 'all'
    ? ALL_GALLERY_PHOTOS
    : ALL_GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="galeri" className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-blue-600" />
            <span>Portofolio & Galeri Sukses</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Galeri Dokumentasi Setiap Acara yang Sukses
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Menampilkan bukti nyata eksekusi lapangan YouNity Group. Dari kemegahan grand ballroom expo nasional hingga ketertiban peluncuran properti komersial.
          </p>
        </div>

        {/* ======================================================== */}
        {/* FEATURED CASE STUDY 1: Property Grand Launching (Purikota) */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-20 lg:mb-24 bg-slate-50/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-xs">
          
          {/* Header & Meta Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-slate-200">
            
            {/* Title & Overview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Case Study Unggulan
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                  Corporate & Brand Activation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Property Grand Launching
              </h3>
              <p className="text-base text-blue-700 font-semibold mt-1 mb-4">
                Klien: Purikota Kriya Maha Citra
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                YouNity Group mengelola seluruh alur operasional acara, mulai dari setup tenda VIP, panggung presentasi, hospitality lounge, alur registrasi pengunjung tertib, hingga crowd control yang menghasilkan konversi booking fee maksimal.
              </p>

              {/* Event Metadata Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span><strong>Frekuensi:</strong> 3 Kali Pelaksanaan Beruntun</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span><strong>Lokasi:</strong> Rancaekek, Kab. Bandung</span>
                </div>
              </div>
            </div>

            {/* Impact Box & Result Stats (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-slate-100">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Key Impact & Capaian Klien</span>
              </div>

              {/* 2 Big Numbers from PDF */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#0066FF] font-['Outfit']">
                    32
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    Tamu Booking Unit
                  </div>
                  <div className="text-[10px] text-slate-500">100% Target Penjualan</div>
                </div>

                <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-100 text-center">
                  <div className="text-3xl sm:text-4xl font-black text-amber-600 font-['Outfit']">
                    101
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-1">
                    Tamu Yang Datang
                  </div>
                  <div className="text-[10px] text-slate-500">Calon Buyer Terdata</div>
                </div>
              </div>

              {/* Key Impact Quote */}
              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                "Berhasil mengeksekusi 3 seri launching secara beruntun dengan alur registrasi tertib, zero technical delay, serta mendukung tercapainya target booking fee penjualan unit klien."
              </p>
            </div>

          </div>

          {/* Purikota 6-Photo Gallery Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Dokumentasi Lapangan Purikota (Klik untuk Perbesar)
              </h4>
              <span className="text-xs text-slate-500">
                {PORTFOLIO_EVENTS[0].photos.length} Foto Dokumentasi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_EVENTS[0].photos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => openPhoto(photo)}
                  className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Photo Overlay Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {photo.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-3.5 bg-white border-t border-slate-100">
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {photo.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* ======================================================== */}
        {/* FEATURED CASE STUDY 2: IFBC Exhibition Activation */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-20 lg:mb-24 bg-slate-50/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-xs">
          
          {/* Header & Meta Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-slate-200">
            
            {/* Title & Overview (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Exhibition & Expo Skala Nasional
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  Crew & Media Production
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                IFBC Exhibition Activation
              </h3>
              <p className="text-base text-blue-700 font-semibold mt-1 mb-4">
                Klien: IFBC (Info Franchise & Business Concept)
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Pameran waralaba dan konsep bisnis tingkat nasional di Sudirman Grand Ballroom Bandung. YouNity Group dipercaya sebagai garda depan pengawalan kru operasional booth dan produksi dokumentasi foto/video sinematik harian.
              </p>

              {/* Event Metadata Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span><strong>Durasi:</strong> Rangkaian Multi-Day Event</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span><strong>Lokasi:</strong> Sudirman Grand Ballroom, Bandung</span>
                </div>
              </div>
            </div>

            {/* Impact Box & Result Stats (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Peran Kunci & Keberhasilan</span>
              </div>

              <div className="space-y-3 mb-5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <span><strong>Aset Visual Menyeluruh:</strong> Suasana ballroom, interaksi booth, momen talkshow pembicara, dan seremonial panggung.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <span><strong>Kestabilan Operasional:</strong> Pengawalan ketertiban booth Coffeetamin, Warkopedia, hingga vendor pendukung.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <span><strong>Daily Report Content:</strong> Kurasi cepat materi visual siap publikasi promosi harian penyelenggara.</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-lg border border-slate-100">
                "Pengambilan aset visual sinematik menyeluruh dan menjaga kestabilan operasional booth selama pameran berlangsung dengan kepuasan 100%."
              </p>
            </div>

          </div>

          {/* IFBC 5-Photo Gallery Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                Dokumentasi IFBC Sudirman Grand Ballroom (Klik untuk Perbesar)
              </h4>
              <span className="text-xs text-slate-500">
                {PORTFOLIO_EVENTS[1].photos.length} Foto Dokumentasi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO_EVENTS[1].photos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => openPhoto(photo)}
                  className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {photo.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Caption Strip */}
                  <div className="p-3.5 bg-white border-t border-slate-100">
                    <h5 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {photo.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* ======================================================== */}
        {/* MASTER FILTERABLE PHOTO GALLERY (All Events & Categories) */}
        {/* ======================================================== */}
        <div className="pt-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Eksplorasi Lengkap
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Koleksi Galeri Foto Interaktif
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Filter berdasarkan kategori acara atau jelajahi seluruh dokumentasi.
              </p>
            </div>

            {/* Category Filter Chips - mobile horizontal scrollable with smooth touch */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap w-full md:w-auto scrollbar-none">
              {[
                { id: 'all', label: 'Semua Foto' },
                { id: 'property', label: 'Property Launching' },
                { id: 'exhibition', label: 'Exhibition & Expo' },
                { id: 'campus', label: 'Campus Festival' },
                { id: 'corporate', label: 'Corporate Outbound' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id as EventCategory)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                    activeFilter === filter.id
                      ? 'bg-[#0066FF] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => openPhoto(photo)}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200/80 cursor-pointer shadow-2xs hover:shadow-md hover:border-blue-400 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <span className="text-[10px] text-amber-300 font-bold uppercase">{photo.tag}</span>
                  <div className="text-xs font-bold leading-tight">{photo.title}</div>
                  <div className="text-[10px] text-slate-300 mt-0.5">{photo.eventTitle}</div>
                </div>

                <div className="p-2.5 bg-white block group-hover:hidden">
                  <div className="text-[11px] font-bold text-slate-800 line-clamp-1">{photo.title}</div>
                  <div className="text-[10px] text-slate-500">{photo.eventTitle}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setIsLightboxOpen(false)}
        onSelectPhoto={(p) => setSelectedPhoto(p)}
      />
    </section>
  );
}
