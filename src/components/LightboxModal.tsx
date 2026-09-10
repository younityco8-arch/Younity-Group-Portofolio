import { useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Tag, 
  Sparkles, 
  Maximize2,
  Share2,
  MessageCircle
} from 'lucide-react';
import { GalleryPhoto } from '../types';
import { COMPANY_INFO } from '../data/portfolioData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export function LightboxModal({
  photo,
  photos,
  isOpen,
  onClose,
  onSelectPhoto,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, photo]);

  if (!isOpen || !photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const totalCount = photos.length;

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      onSelectPhoto(photos[currentIndex + 1]);
    } else {
      onSelectPhoto(photos[0]); // loop back
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPhoto(photos[currentIndex - 1]);
    } else {
      onSelectPhoto(photos[totalCount - 1]); // loop to end
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Content */}
      <div
        className="relative max-w-5xl w-full bg-white dark:bg-[#020617] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Main Image Stage (Left / Top) */}
        <div className="relative lg:w-3/4 bg-slate-900 flex items-center justify-center overflow-hidden min-h-[250px] sm:min-h-[380px] lg:min-h-[540px]">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[45vh] sm:max-h-[60vh] lg:max-h-[75vh]"
            referrerPolicy="no-referrer"
          />

          {/* Prev / Next Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/70 hover:bg-white dark:bg-[#020617] text-white hover:text-slate-900 dark:text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/70 hover:bg-white dark:bg-[#020617] text-white hover:text-slate-900 dark:text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Photo Counter Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-slate-950/70 backdrop-blur-xs text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
            {currentIndex + 1} dari {totalCount} Foto
          </div>

          {/* Tag Pill */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-blue-600/90 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Tag className="w-3 h-3" />
            <span>{photo.tag}</span>
          </div>
        </div>

        {/* Sidebar Info & Context (Right / Bottom) */}
        <div className="lg:w-1/4 p-4 sm:p-6 flex flex-col justify-between bg-white dark:bg-[#020617] border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 overflow-y-auto">
          
          <div>
            {/* Top Close Button for Mobile & Desktop */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/50 mb-4">
              <span className="text-[11px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">
                Dokumentasi Acara
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Event Title */}
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
              {photo.eventTitle}
            </div>

            {/* Photo Title */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3">
              {photo.title}
            </h3>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {photo.caption}
            </p>

            {/* Event Organizer Guarantee */}
            <div className="bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-2 mb-6">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Eksekusi YouNity Group</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                Setiap dokumentasi dihasilkan dari manajemen lapangan profesional dengan koordinasi tim ber-SOP terstruktur.
              </p>
            </div>
          </div>

          {/* Quick CTA to inquire about this type of event */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
            <a
              href={`https://wa.me/6282312515113?text=Halo%20YouNity%20Group,%20saya%20tertarik%20dengan%20konsep%20acara%20seperti%20${encodeURIComponent(photo.eventTitle)}%20(${encodeURIComponent(photo.title)}).%20Bisa%20diskusi%20lebih%20lanjut?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tanya Konsep Acara Ini (WA)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
