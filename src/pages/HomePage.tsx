import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, CORE_SERVICES, WHY_CHOOSE_US, FEATURED_EVENTS } from '../data/content';
import { Calendar, ArrowRight, Sparkles, CheckCircle2, Star, Shield, Users, Radio, MapPin, MessageSquare, Play } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
  onOpenLightbox: (imageUrl: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Full-width entertainment-themed background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_event_stage_1794136433211.jpg"
            alt="SEJO EVENTS Grand Concert & Stage Atmosphere"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-layer gradient scrim for supreme typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
          <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-neutral-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 space-y-8">
          {/* Subtle category kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-amber-400/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase font-mono tracking-widest text-amber-300 font-semibold">
              Premier Entertainment & Event Production in Kenya
            </span>
          </div>

          {/* Main Title & Slogan */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
              SEJO <span className="text-amber-400">EVENTS</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-200/90 tracking-wide font-serif italic max-w-3xl mx-auto">
              "{COMPANY_INFO.tagline}"
            </p>
          </div>

          {/* Supporting Statement */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {COMPANY_INFO.shortStatement}
          </p>

          {/* Two Prominent Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all shadow-xl shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>BOOK AN EVENT</span>
            </button>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-amber-400/50 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </button>
          </div>

          {/* Client Segment Indicator */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-neutral-400 border-t border-neutral-800/80">
            <span className="text-neutral-500 font-mono uppercase tracking-wider">Trusted by:</span>
            <span>Corporate Clients</span>
            <span>·</span>
            <span>Schools & Colleges</span>
            <span>·</span>
            <span>Bridal Couples</span>
            <span>·</span>
            <span>Cultural Festivals</span>
            <span>·</span>
            <span>Public Institutions</span>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                Company Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                WELCOME TO SEJO EVENTS
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                SEJO EVENTS is a dynamic entertainment, talent development, and event production powerhouse founded on a simple belief: <strong className="text-white">every gathering should be transformative</strong>.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Whether orchestrating a high-stakes corporate conference in Nairobi, cultivating budding youth actors in an inter-school drama festival in Western Kenya, or orchestrating a dream wedding celebration, we combine creative artistry with meticulous logistical rigor.
              </p>

              {/* Three trust highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-amber-400 font-bold text-lg">100%</span>
                  <div className="text-xs font-semibold text-white">Full-Spectrum Service</div>
                  <div className="text-[11px] text-neutral-400">Planning, talent & technical stage</div>
                </div>
                <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-amber-400 font-bold text-lg">Kenya</span>
                  <div className="text-xs font-semibold text-white">Countrywide Footprint</div>
                  <div className="text-[11px] text-neutral-400">From urban cities to rural schools</div>
                </div>
                <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-1">
                  <span className="text-amber-400 font-bold text-lg">24/7</span>
                  <div className="text-xs font-semibold text-white">Technical Support</div>
                  <div className="text-[11px] text-neutral-400">Sound engineers & stage managers</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
                >
                  <span>Read Our Full Story & Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right visual collage with real event photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
                <img
                  src="/public/assets/aistudio/1047157350851581531_e2ed7499.jpeg"
                  alt="SEJO EVENTS Wedding & Celebrations Elegance"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-neutral-900/90 border border-neutral-700 rounded-xl backdrop-blur-md">
                  <div className="text-xs font-bold text-white">Exceptional Client Experiences</div>
                  <div className="text-[11px] text-amber-300">Celebrating milestones with grace & style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Event & Entertainment Solutions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            From creative conceptualization and stage talent to tour-grade sound rigs, explore the six pillars of SEJO EVENTS.
          </p>
        </div>

        {/* 6 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-neutral-900/60 border border-neutral-800 hover:border-amber-500/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Preview */}
              <div className="relative h-52 overflow-hidden bg-neutral-950">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[11px] font-mono text-amber-300 font-semibold">
                  0{index + 1}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key feature pills / items */}
                <div className="space-y-1.5 pt-2 border-t border-neutral-800">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="text-[11px] font-semibold text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-750 px-3 py-1.5 rounded-lg border border-neutral-700 transition-colors"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SEJO EVENTS? */}
      <section className="bg-neutral-900/30 border-y border-neutral-800/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Our Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose SEJO EVENTS?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              We bring integrity, technical dependability, and artistic brilliance to every production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900/80 border border-neutral-800 p-6 rounded-2xl space-y-3 hover:border-amber-400/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm font-mono">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* Direct WhatsApp Callout Card */}
            <div className="bg-gradient-to-br from-amber-500/15 via-neutral-900 to-neutral-950 border border-amber-500/30 p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                  Direct Line
                </span>
                <h3 className="text-base font-bold text-white">Speak With Our Event Producer</h3>
                <p className="text-xs text-neutral-300">
                  Ready to check dates or discuss custom technical equipment?
                </p>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappPresetMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp 0181199528</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Portfolio & Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Events & Productions
            </h2>
            <p className="text-neutral-400 text-sm">
              Capturing memorable celebrations, school championships, and live cultural showcases.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
          >
            <span>View All Event Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_EVENTS.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-neutral-700 transition-colors"
            >
              <div className="relative h-60 overflow-hidden bg-neutral-950">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                
                {/* Genuine photo vs Demonstration badge per prompt instruction */}
                <div className="absolute top-3 left-3">
                  {event.isDemonstration ? (
                    <span className="px-2.5 py-1 rounded-md bg-neutral-900/80 border border-neutral-700 text-[10px] text-neutral-400 font-mono">
                      Demonstration Blueprint
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/50 text-[10px] text-amber-300 font-mono font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" /> Genuine Company Event
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{event.location}</span>
                  </span>
                  <span className="text-amber-400 font-mono font-medium">{event.attendance}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-amber-400/90 font-semibold">
                    {event.category}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-neutral-800">
                  {event.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          {/* Subtle golden radial glow */}
          <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Ready to collaborate?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              LET'S MAKE YOUR NEXT EVENT UNFORGETTABLE.
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              "Whether you are planning a school event, corporate function, wedding, cultural celebration or entertainment production, SEJO EVENTS is ready to bring your vision to life."
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all shadow-xl shadow-amber-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK SEJO EVENTS TODAY</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappPresetMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Chat ({COMPANY_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
