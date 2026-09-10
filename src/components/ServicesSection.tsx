import { useState } from 'react';
import { 
  Building2, 
  Users2, 
  Compass, 
  Sparkles, 
  Check, 
  Volume2, 
  Tv, 
  Maximize2, 
  Lightbulb, 
  Tent, 
  Camera, 
  ArrowRight,
  MessageCircle,
  Layers
} from 'lucide-react';
import { SERVICES_DATA, EQUIPMENT_CATALOG, COMPANY_INFO } from '../data/portfolioData';

export function ServicesSection() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'Users2':
        return Users2;
      case 'Compass':
        return Compass;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  const getEquipmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return Volume2;
      case 'Tv':
        return Tv;
      case 'Maximize2':
        return Maximize2;
      case 'Lightbulb':
        return Lightbulb;
      case 'Tent':
        return Tent;
      case 'Camera':
      default:
        return Camera;
    }
  };

  return (
    <section id="layanan" className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Produk & Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solusi Menyeluruh untuk Segala Format Acara
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Dikelola dengan pendekatan personal dan eksekusi terstruktur, didukung oleh peralatan in-house dan kru profesional.
          </p>
        </div>

        {/* 4 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-14 sm:mb-20 lg:mb-24">
          {SERVICES_DATA.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-5 sm:p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-blue-500 bg-white shadow-xl ring-1 ring-blue-500/20'
                    : 'border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Top Badge if any */}
                {service.badge && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <span className="bg-amber-100 text-amber-800 text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100/70 text-[#0066FF] flex items-center justify-center mb-4 sm:mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-blue-700 mb-3 sm:mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mb-5 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mb-5 sm:mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 sm:mb-3">
                      Cakupan Layanan:
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Keunggulan Note */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50/60 border border-blue-100/80 text-xs text-slate-700 mb-4">
                    <strong className="text-blue-900 font-semibold block mb-0.5">Keunggulan Utama:</strong>
                    {service.advantage}
                  </div>
                </div>

                {/* Bottom CTA for this specific service */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Cocok untuk: {service.popularFor}
                  </span>
                  <a
                    href={`https://wa.me/6282312515113?text=Halo%20YouNity%20Group,%20kami%20ingin%20konsultasi%20layanan%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    <span>Konsultasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* EQUIPMENT RENTAL INVENTORY SHOWCASE */}
        {/* ======================================================== */}
        <div id="peralatan" className="pt-4 sm:pt-8 scroll-mt-24">
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-slate-200">
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 sm:mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Creative Production & Equipment
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">
                  Sewa Peralatan Event & Rigging
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
                  YouNity Group menyediakan dukungan alat panggung berstandar industri dengan teknisi operator berpengalaman untuk memastikan kelancaran teknis tanpa kendala.
                </p>
              </div>

              <a
                href={`https://wa.me/6282312515113?text=Halo%20YouNity,%20saya%20butuh%20pricelist%20dan%20ketersediaan%20sewa%20peralatan%20event%20(Sound/LED/Lighting/Panggung).`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs sm:text-sm font-bold shadow-xs transition-all flex-shrink-0 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Minta Pricelist Sewa Alat</span>
              </a>
            </div>

            {/* Equipment Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {EQUIPMENT_CATALOG.map((item, idx) => {
                const Icon = getEquipmentIcon(item.iconName);
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all hover:border-blue-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-700">
                      <span className="font-semibold text-slate-900 block mb-0.5">Spesifikasi Unit:</span>
                      {item.specs}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
