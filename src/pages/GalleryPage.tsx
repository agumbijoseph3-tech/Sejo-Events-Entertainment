import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/content';
import { Maximize2, MapPin, CheckCircle2, Filter } from 'lucide-react';

interface GalleryPageProps {
  onSelectImage: (index: number) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Corporate Events',
    'School Events',
    'Weddings and Celebrations',
    'Stage Productions',
    'Music and Dance',
    'Cultural Performances',
    'Sound and Lighting',
    'Event Setups',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          Visual Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Multimedia Event Gallery
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Explore genuine moments from our weddings, school talent tournaments, live cultural performances, and tour-grade production stages across Kenya.
        </p>

        {/* Filter Bar */}
        <div className="pt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of gallery images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          // Find original index in master array
          const masterIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
          return (
            <div
              key={item.id}
              onClick={() => onSelectImage(masterIndex)}
              className="group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-amber-300 font-semibold">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-900/80 border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-300 line-clamp-1 leading-snug">
                    {item.caption}
                  </p>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-400">
                    {item.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{item.location}</span>
                      </span>
                    )}
                    {item.isGenuinePhoto && (
                      <span className="text-amber-400 font-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Genuine Photo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-neutral-400 text-sm">
          No media items in this category currently. Switch category above to view more.
        </div>
      )}
    </div>
  );
};
