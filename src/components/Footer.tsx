import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, CORE_SERVICES } from '../data/content';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Youtube, ShieldCheck, FileText, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (p: PageId) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-300">
        {/* Main Footer grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Col 1 & 2: Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-neutral-950 text-lg">
                  S
                </div>
                <span className="text-xl font-extrabold tracking-wider text-white uppercase">
                  SEJO <span className="text-amber-400">EVENTS</span>
                </span>
              </div>
              <p className="text-amber-400/90 font-medium text-xs tracking-wider uppercase font-mono">
                "{COMPANY_INFO.tagline}"
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                A premier entertainment and event production company dedicated to transforming ideas into memorable experiences through creativity, talent, professional planning, and quality production in Kenya.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsappPresetMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors text-neutral-300"
                  aria-label="SEJO EVENTS WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-colors text-neutral-300"
                  aria-label="SEJO EVENTS Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-colors text-neutral-300"
                  aria-label="SEJO EVENTS Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 hover:border-red-500 hover:text-red-400 flex items-center justify-center transition-colors text-neutral-300"
                  aria-label="SEJO EVENTS YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                <li>
                  <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">
                    About Us & Story
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('schools')} className="hover:text-amber-400 transition-colors">
                    School Programmes
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('gallery')} className="hover:text-amber-400 transition-colors">
                    Multimedia Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('events')} className="hover:text-amber-400 transition-colors">
                    Featured Events
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('team')} className="hover:text-amber-400 transition-colors">
                    Our Leadership Team
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">
                    Contact & Inquiries
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Core Services
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-400">
                {CORE_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => handleNav('services')}
                      className="hover:text-amber-400 transition-colors text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Kenya Contact Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Get In Touch
              </h4>
              <div className="flex items-start gap-2.5 text-xs text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.servingAreas}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsappPresetMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold"
                >
                  WhatsApp: 0181199528
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all text-center"
                >
                  Request Fast Quote
                </button>
              </div>
            </div>
          </div>

          {/* Sub-footer bottom bar */}
          <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} SEJO EVENTS. All rights reserved. Registered Entertainment & Event Production in Kenya.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-neutral-300 transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-neutral-300 transition-colors"
              >
                Terms and Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal modal popup */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-neutral-900 border border-neutral-700 rounded-xl p-6 relative max-h-[80vh] overflow-y-auto text-neutral-200">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
            {legalModal === 'privacy' ? (
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>SEJO EVENTS Privacy Policy</span>
                </div>
                <p>
                  At SEJO EVENTS, we respect your confidentiality. We collect personal contact information (such as your name, telephone number, email, and event location) solely for the purpose of communicating event proposals, quotations, logistics coordination, and invoicing.
                </p>
                <p>
                  We never sell, rent, or lease client information to third parties. Event media captured during public or commissioned productions is handled in accordance with agreed performance release forms.
                </p>
                <p>
                  For data requests or inquiries, reach out to our privacy desk at sejoarts7@gmail.com.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <FileText className="w-5 h-5" />
                  <span>SEJO EVENTS Terms & Conditions</span>
                </div>
                <p>
                  <strong>1. Booking & Reservations:</strong> A quotation does not constitute a confirmed booking. An event reservation is formally confirmed only upon mutual signing of our event service agreement and settlement of the agreed deposit.
                </p>
                <p>
                  <strong>2. Equipment Care & Safety:</strong> Hired audiovisual, stage, and lighting equipment remains under the technical supervision of SEJO EVENTS operators unless dry hire arrangements are explicitly specified.
                </p>
                <p>
                  <strong>3. Cancellation & Rescheduling:</strong> In the event of unforeseen weather or client schedule modifications, SEJO EVENTS will endeavor to reschedule within available calendar dates in accordance with our contractual terms.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
