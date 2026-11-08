import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
            {currentItem.category}
          </span>
          <span className="text-neutral-500 text-xs">·</span>
          <span className="text-neutral-400 text-xs font-mono">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white bg-neutral-900/80 rounded-full border border-neutral-700 hover:bg-neutral-800 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-3 sm:left-6 p-3 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 rounded-full transition-all z-20 focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Image View */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center z-10 px-4">
        <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 max-h-[70vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 text-center max-w-2xl bg-neutral-900/90 border border-neutral-800 px-6 py-3 rounded-xl shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-1">
            <h3 className="text-base font-bold text-white">{currentItem.title}</h3>
            {currentItem.isGenuinePhoto && (
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 rounded-full font-medium">
                <CheckCircle className="w-3 h-3" /> Genuine Company Event
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">{currentItem.caption}</p>
          {currentItem.location && (
            <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400 mt-1.5">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{currentItem.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-3 sm:right-6 p-3 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 rounded-full transition-all z-20 focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
