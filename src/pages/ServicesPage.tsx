import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_SERVICES, EQUIPMENT_CATALOG, COMPANY_INFO } from '../data/content';
import { Check, ArrowRight, MessageSquare, Sliders, Calendar, PackageCheck, Zap, Volume2, Film, Sparkles, Building2, GraduationCap } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const toggleEquipmentItem = (id: string) => {
    setSelectedEquipment((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleEquipmentQuote = () => {
    const selectedNames = EQUIPMENT_CATALOG.filter((eq) =>
      selectedEquipment.includes(eq.id)
    ).map((eq) => eq.name);

    const message = `*EQUIPMENT HIRE QUOTATION REQUEST - SEJO EVENTS*
----------------------------------------
*Selected Items:*
${selectedNames.length > 0 ? selectedNames.map((n, i) => `${i + 1}. ${n}`).join('\n') : 'All Equipment Catalog Consult'}
----------------------------------------
_Please send me availability, daily rates, and delivery details for our event._`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          What We Deliver
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Core Business Services
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          SEJO EVENTS provides end-to-end event management, world-class entertainment, youth talent development, and tour-grade production hire across Kenya.
        </p>

        {/* Filter Tabs */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'all'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Services
          </button>
          {CORE_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
                activeTab === s.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('equipment-catalog')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
              activeTab === 'equipment-catalog'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Equipment Hire
          </button>
        </div>
      </div>

      {/* Services List Details */}
      {(activeTab === 'all' || activeTab !== 'equipment-catalog') && (
        <div className="space-y-16">
          {CORE_SERVICES.filter(
            (srv) => activeTab === 'all' || activeTab === srv.id
          ).map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 sm:p-10 lg:p-12 hover:border-neutral-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? 'lg:order-last' : ''
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-950 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/80 backdrop-blur-md rounded-md border border-neutral-700 text-amber-400 font-mono text-xs font-bold">
                      Pillar 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      Dedicated Service Department
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Service Specific Offerings */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Scope of Offerings:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-400">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-2">
                    <h5 className="text-[11px] font-mono text-amber-300 uppercase tracking-widest font-semibold">
                      Quality Standards:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book {service.title}</span>
                    </button>

                    {service.id === 'schools' && (
                      <button
                        onClick={() => {
                          onNavigate('schools');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-amber-400 text-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        View School Hub
                      </button>
                    )}

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hello SEJO EVENTS, I would like to enquire about your ${service.title} services.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct Query</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}

      {/* EQUIPMENT AND EVENT SOLUTIONS (Section F) */}
      {(activeTab === 'all' || activeTab === 'equipment-catalog') && (
        <section id="equipment" className="space-y-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                Section F: Equipment & Production Solutions
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Available Event Equipment & Hire Catalog
              </h2>
              <p className="text-neutral-400 text-sm">
                Select required gear below to calculate an instant quotation or forward an equipment rental request to our technical department.
              </p>
            </div>

            {/* Quote Action Bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleEquipmentQuote}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-950/40 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  Request Hire Quote ({selectedEquipment.length} Selected)
                </span>
              </button>
            </div>
          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_CATALOG.map((eq) => {
              const isSelected = selectedEquipment.includes(eq.id);
              return (
                <div
                  key={eq.id}
                  onClick={() => toggleEquipmentItem(eq.id)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-400 shadow-lg shadow-amber-500/10'
                      : 'bg-neutral-900/50 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                        {eq.category}
                      </span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                          isSelected
                            ? 'bg-amber-400 border-amber-400 text-neutral-950 font-bold'
                            : 'border-neutral-700 bg-neutral-950'
                        }`}
                      >
                        {isSelected && '✓'}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white">{eq.name}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {eq.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 space-y-2">
                    <div className="text-[11px] text-neutral-400 font-mono">
                      <strong className="text-neutral-300">Specs:</strong> {eq.specs}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300">
                        {eq.dailyRateEstimate}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {isSelected ? 'Click to deselect' : '+ Click to add to quote'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick notice on technicians */}
          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between flex-wrap gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-amber-400" />
              <span>All rentals include optional certified audio-visual operators, rigging engineers, and soundcheck verification.</span>
            </div>
            <button
              onClick={() => onOpenBooking('Equipment & Production Hire')}
              className="text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider"
            >
              Fill General Hire Form &rarr;
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
