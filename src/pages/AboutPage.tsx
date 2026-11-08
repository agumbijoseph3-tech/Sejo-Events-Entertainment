import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Target, Eye, Sparkles, HeartHandshake, Award, Shield, CheckCircle2, ArrowRight, Calendar, Users, Music, Film } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  const coreValues = [
    {
      name: 'Creativity',
      desc: 'Infusing every stage, script, lighting cue, and theme with fresh, inspiring artistic ideas.',
    },
    {
      name: 'Professionalism',
      desc: 'Upholding punctual delivery, transparent contracts, courteous conduct, and technical precision.',
    },
    {
      name: 'Integrity',
      desc: 'Honest billing, dependable equipment commitments, and sincere client partnerships.',
    },
    {
      name: 'Teamwork',
      desc: 'Seamless synergy between creative directors, stage managers, sound engineers, and client liaisons.',
    },
    {
      name: 'Excellence',
      desc: 'Striving for acoustic clarity, stage safety, visual elegance, and standing ovations.',
    },
    {
      name: 'Reliability',
      desc: 'Backup power generators, redundant audio lines, and punctual call times so you never worry.',
    },
    {
      name: 'Innovation',
      desc: 'Embracing modern LED visual tech, computerized lighting, and contemporary African performance arts.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          About SEJO EVENTS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Who We Are
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          A dedicated entertainment and event production company dedicated to transforming ideas into memorable experiences through creativity, talent, professional planning and quality production.
        </p>
      </div>

      {/* Company Profile & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Rooted in Passion, Driven by Performance
            </h2>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            SEJO EVENTS was established to bridge a crucial need in Kenya’s event industry: providing seamless synergy between <strong className="text-white">creative entertainment talent</strong> and <strong className="text-white">technical event production</strong>. Too often, organizers had to source stage sound from one vendor, performers from another, and coordinators from elsewhere.
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            At SEJO EVENTS, we provide an integrated ecosystem. We work hand-in-hand with corporate entities, educational institutions, community elders, couples, and creative artists to orchestrate events that flow effortlessly from the first welcome handshake to the closing ovation.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            From staging high-energy school talent festivals and live setbook performance tours to coordinating sophisticated corporate summits in Nairobi, our team approaches every engagement with the same dedication to excellence and genuine respect for culture.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('team')}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
            >
              <span>Meet Our Production Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-neutral-600">·</span>
            <button
              onClick={() => onNavigate('schools')}
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
            >
              <span>Explore School Programmes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Story Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
            <img
              src="/public/assets/aistudio/Celebrations_by_John_Downey___500px_4f817159.jpeg"
              alt="Cultural celebration and traditional entertainment by SEJO EVENTS"
              className="w-full h-96 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 border border-neutral-700 rounded-xl backdrop-blur-md">
              <div className="text-xs font-bold text-white">Celebrating African Heritage & Youth Talent</div>
              <div className="text-[11px] text-amber-400">Authentic rhythms, live drama, and inspiring moments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 rounded-3xl space-y-4 hover:border-amber-400/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Our Purpose
          </span>
          <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            "To deliver exceptional event experiences and promote creativity, talent and entertainment through professional planning, innovative production and quality service."
          </p>
        </div>

        {/* Vision */}
        <div className="bg-neutral-900/60 border border-neutral-800 p-8 sm:p-10 rounded-3xl space-y-4 hover:border-amber-400/40 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Our Aspiration
          </span>
          <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            "To become a leading entertainment and event solutions brand recognized for creativity, professionalism, talent development and unforgettable experiences."
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our Core Values</h2>
          <p className="text-neutral-400 text-sm">
            The foundation of our client relationships, technical standards, and artist mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-2.5 hover:border-amber-500/30 transition-colors"
            >
              <div className="text-amber-400 font-mono text-xs font-bold">0{idx + 1}</div>
              <h3 className="text-base font-bold text-white">{val.name}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}

          {/* Slogan highlight tile */}
          <div className="bg-gradient-to-br from-amber-500/20 via-neutral-900 to-neutral-950 border border-amber-500/40 p-6 rounded-2xl flex flex-col justify-center space-y-2">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-bold">
              The SEJO Creed
            </span>
            <div className="text-sm font-serif italic text-white font-semibold">
              "Creating Experiences. Celebrating Talent. Making Memories."
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment & Approach to Events */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-10">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Operational Blueprint
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Our Approach to Entertainment & Event Management
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Every memorable event is 80% preparation and 20% spontaneous magic. Here is how we ensure your vision is realized without stress:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-base font-bold text-white">Discovery & Concept Development</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We listen closely to your objectives, audience profile, budget parameters, and venue constraints to architect a customized event blueprint.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="text-base font-bold text-white">Technical Staging & Talent Curation</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We match appropriate sound gear, intelligent lighting, stage platforms, and vetted performers (MCs, live musicians, dancers) to the event atmosphere.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="text-base font-bold text-white">Flawless Run-of-Show Governance</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Our on-site stage managers and audio engineers oversee every second of the program, resolving emergencies before guests ever notice.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">Work With SEJO EVENTS</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Let's discuss dates, technical requirements, and custom entertainment packages.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-amber-500/20"
        >
          Book An Event
        </button>
      </div>
    </div>
  );
};
