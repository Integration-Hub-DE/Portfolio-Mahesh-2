import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  title: string;
  images: string[];
  onClose: () => void;
}

export default function ProjectGallery({
  title,
  images,
  onClose,
}: ProjectGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector('img')?.clientWidth ?? 300;
    track.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
  };

  const doubled = [...images, ...images];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[95vw] max-h-[95vh] bg-slate-900 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-lg font-bold text-white pr-8">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery body */}
        <div
          className="relative flex-1 overflow-hidden bg-slate-950 py-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left button */}
          <button
            onClick={() => scrollByAmount(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700 transition-colors shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right button */}
          <button
            onClick={() => scrollByAmount(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800/80 border border-slate-600/50 flex items-center justify-center text-white hover:bg-slate-700 transition-colors shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrolling track */}
          <div
            ref={trackRef}
            className={`flex gap-6 overflow-x-auto scroll-smooth px-6 ${
              paused ? '' : 'animate-gallery-marquee'
            }`}
            style={{ scrollbarWidth: 'none' }}
          >
            {doubled.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-[22rem] sm:w-[26rem] md:w-[30rem] h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800"
              >
                <img
                  src={src}
                  alt={`Dashboard ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <div className="px-6 py-3 border-t border-slate-700/50 text-center">
          <p className="text-xs text-slate-400">
            Hover to pause · Use arrows to navigate manually · Press Esc to
            close
          </p>
        </div>
      </div>
    </div>
  );
}
