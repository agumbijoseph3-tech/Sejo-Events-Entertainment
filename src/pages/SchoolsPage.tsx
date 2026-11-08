import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { GraduationCap, Trophy, Sparkles, BookOpen, Music, Users, ShieldAlert, CheckCircle2, ArrowRight, Calendar, MessageSquare, Heart } from 'lucide-react';

interface SchoolsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const SchoolsPage: React.FC<SchoolsPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedSchoolType, setSelectedSchoolType] = useState('Secondary / High School');

  const schoolPrograms = [
    {
      title: 'Secondary School Setbook Performances',
      desc: 'Live stage dramatizations of national curriculum English literature and Kiswahili Fasihi setbooks, helping learners master plot, themes, character traits, and stylistic devices for top examination performance.',
      bullets: ['KCSE Literature & Fasihi setbook enactments', 'Post-show interactive character & examiner Q&A', 'Nationwide high school tour with complete stage sets', 'Enhances literary comprehension and examination confidence'],
    },
    {
      title: 'School Talent Shows & Festivals',
      desc: 'Complete turn-key production of annual talent exhibitions with stage, sound, lighting, judges, and encouraging student mentorship.',
      bullets: ['Singing & solo instrumentalists', 'Group dance & choreography', 'Spoken word & poetic recitation', 'Creative magic & variety acts'],
    },
    {
      title: 'Inter-School Arts Tournaments',
      desc: 'Bringing schools together for structured friendly competitions that build inter-school camaraderie and competitive spirit.',
      bullets: ['Zonal & county talent meets', 'Standardized scoring rubrics', 'Official trophies, medals & certificates', 'Safe, monitored student gathering logistics'],
    },
    {
      title: 'Drama & Theatre Productions',
      desc: 'Professional script guidance, stage blocking, costume design, and voice projection coaching for school drama clubs.',
      bullets: ['Festival set design & props', 'Character development workshops', 'Social advocacy & values education', 'Adjudicator feedback sessions'],
    },
    {
      title: 'Music & Dance Adjudications',
      desc: 'Expert music training and choreography coaching spanning contemporary Afrobeat, traditional folklore, and choir ensembles.',
      bullets: ['Traditional Kenyan folk dances', 'Modern urban dance crew training', 'Vocal pitch & harmony coaching', 'Live acoustic accompaniment'],
    },
    {
      title: 'Talent Identification & Mentorship',
      desc: 'Spotting raw artistic brilliance early and guiding promising students toward creative careers and higher education pathways.',
      bullets: ['Individual artist appraisal', 'Confidence-building bootcamps', 'Media literacy & stage presence', 'Portfolio documentation for college'],
    },
    {
      title: 'Educational Entertainment (Edutainment)',
      desc: 'Using entertaining skits, interactive games, and music to reinforce STEM concepts, environmental conservation, and health hygiene.',
      bullets: ['Curriculum-linked sketches', 'Peer interaction & debates', 'Reward-based learning quizzes', 'Assembly hall & outdoor formats'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Youth Empowerment & Creative Arts</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          School Talent Development Programmes
        </h1>
        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
          Partnering with primary schools, high schools, colleges, and educational foundations across Kenya to cultivate artistic gifts, build character, and inspire leadership.
        </p>
      </div>

      {/* Hero Showcase with User's Genuine School Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Photo: Setbook Performance & School Gathering */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-900 group">
          <img
            src="/public/assets/aistudio/IMG-20260329-WA0007_e1985ca1.jpg"
            alt="Secondary School Setbook Performance & Student Assembly by SEJO EVENTS"
            className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 border border-neutral-700 rounded-xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Secondary School Setbook Performance Tour</span>
            </div>
            <p className="text-xs text-neutral-300">
              Students gathered under outdoor festival tents for live curriculum setbook dramatization and educational arts.
            </p>
          </div>
        </div>

        {/* Right Photo: School Auditorium Assembly */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-900 group">
          <img
            src="/public/assets/aistudio/IMG-20260318-WA0047_c940c265.jpg"
            alt="School Auditorium Youth Educational Assembly by SEJO EVENTS"
            className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 border border-neutral-700 rounded-xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Auditorium Creative Arts Development</span>
            </div>
            <p className="text-xs text-neutral-300">
              Empowering hundreds of enthusiastic pupils through interactive storytelling, music, and values coaching.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars of School Engagement */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Curriculum-Enriching Modules
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Our School Talent Offerings
          </h2>
          <p className="text-neutral-400 text-sm">
            Designed to fit cleanly into academic calendars without disrupting classwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolPrograms.map((prog, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-amber-400/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-sm font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{prog.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{prog.desc}</p>
              </div>

              <div className="pt-3 border-t border-neutral-800 space-y-1.5">
                {prog.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-[11px] text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety, Discipline & School Administrative Assurance */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Administrative Commitment
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Built for Principals, Patrons & Boards of Management
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            We understand the strict safety, child-protection, and discipline standards demanded by educational administrators:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-2">
            <h4 className="font-bold text-white text-sm">Wholesome Content Guidelines</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every musical setlist, skit, and comedy routine is pre-vetted for positive moral values, educational relevance, and age-appropriateness.
            </p>
          </div>

          <div className="p-5 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-2">
            <h4 className="font-bold text-white text-sm">Stage Safety & Crowd Flow</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Certified electrical grounding, covered cables, secured stage ramps, and clear exit pathways ensuring zero hazard for energetic students.
            </p>
          </div>

          <div className="p-5 bg-neutral-950/60 border border-neutral-800 rounded-xl space-y-2">
            <h4 className="font-bold text-white text-sm">Flexible School Budget Tiers</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subsidized institution packages and partnership models that allow schools of all sizes to give their learners a tour-grade stage experience.
            </p>
          </div>
        </div>
      </div>

      {/* School Inquiry Action Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-500/20 via-neutral-900 to-neutral-950 border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Schedule an Educational Consultation
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Plan Your School’s Next Talent Showcase
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Let our school programs coordinator tailor a talent schedule, drama stage setup, or inter-school festival tailored to your term dates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking('School Talent Development')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25"
          >
            Submit School Proposal Request
          </button>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hello SEJO EVENTS School Programmes, I am writing on behalf of our school to enquire about organizing a talent show / drama event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-emerald-400 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp School Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
