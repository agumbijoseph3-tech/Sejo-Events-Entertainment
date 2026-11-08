import React from 'react';
import { PageId } from '../types';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/content';
import { User, Sparkles, Shield, Mail, Phone, MessageSquare, Award, CheckCircle2 } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          Creative & Operational Leadership
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Meet Our Team
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          The passionate producers, technical directors, stage managers, and creative leaders behind SEJO EVENTS' productions across Kenya.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-amber-400/40 transition-all duration-200 group"
          >
            <div className="space-y-4">
              {/* Profile Avatar / Badge */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-neutral-950 border border-neutral-700 flex items-center justify-center font-bold text-amber-400 text-2xl group-hover:border-amber-400 transition-colors shadow-inner">
                  {member.name.charAt(0)}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800">
                  SEJO Leadership
                </div>
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {member.name}
                </h2>
                <div className="text-xs font-semibold text-amber-400/90 font-mono uppercase tracking-wider">
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-neutral-300 leading-relaxed">
                {member.bio}
              </p>

              {/* Specialties */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Core Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact / Office footer */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono text-[11px]">{member.contact}</span>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `Hello SEJO EVENTS, I would like to consult with ${member.name} (${member.role}) regarding an event.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Consult</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Production Culture Banner */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Creativity Backed by Operational Rigor
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Our multidisciplinary team brings together scriptwriters, lighting programmers, sound technicians, choreographers, and logistical coordinators under one unified brand. No finger-pointing, no excuses — just standing ovations.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            Request a Consultation with Our Producers
          </button>
        </div>
      </div>
    </div>
  );
};
