import React, { useState } from 'react';
import { PageId } from '../types';
import { FEATURED_EVENTS, COMPANY_INFO } from '../data/content';
import { MapPin, Users, Calendar, CheckCircle2, AlertCircle, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'actual' | 'demonstration'>('all');

  const filteredEvents = FEATURED_EVENTS.filter((ev) => {
    if (filterType === 'actual') return !ev.isDemonstration;
    if (filterType === 'demonstration') return ev.isDemonstration;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          Proven Track Record
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Our Events & Productions
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          From live secondary school setbook performance tours to lavish wedding galas in Nairobi, witness how SEJO EVENTS turns visions into lasting memories.
        </p>

        {/* Filter / Clarity Toggles */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filterType === 'all'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Event Showcases ({FEATURED_EVENTS.length})
          </button>
          <button
            onClick={() => setFilterType('actual')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filterType === 'actual'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Actual Company Events
          </button>
          <button
            onClick={() => setFilterType('demonstration')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              filterType === 'demonstration'
                ? 'bg-amber-400 text-neutral-950 font-bold'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Illustrative Blueprints
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-12">
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className="bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-colors shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Image side */}
              <div
                className={`lg:col-span-5 relative h-72 sm:h-96 overflow-hidden bg-neutral-950 ${
                  index % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                
                {/* Genuine vs Demonstration status flag */}
                <div className="absolute top-4 left-4">
                  {event.isDemonstration ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-950/90 border border-neutral-700 text-neutral-400 font-mono text-xs">
                      <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Illustrative Demonstration Blueprint</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/50 text-amber-300 font-mono text-xs font-semibold backdrop-blur-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>Actual Company Event</span>
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 bg-neutral-900/80 px-3 py-2 rounded-xl backdrop-blur-sm border border-neutral-800">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>{event.location}</span>
                  </span>
                  <span className="text-amber-400 font-mono font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{event.attendance}</span>
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      {event.category}
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {event.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {event.title}
                  </h2>
                </div>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                    Key Production Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((hl, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-neutral-300"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenBooking(event.category)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Plan Similar Event</span>
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello SEJO EVENTS, I was viewing your "${event.title}" case study and would like to enquire about similar planning for our event.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
