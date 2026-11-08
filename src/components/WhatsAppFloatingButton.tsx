import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappPresetMessage
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick popup card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-neutral-900 border border-neutral-700 p-4 rounded-xl shadow-2xl text-xs text-neutral-200 animate-in fade-in slide-in-from-bottom-2 duration-200 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-neutral-400 hover:text-white p-1"
            aria-label="Close message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-semibold text-white">SEJO EVENTS Concierge</span>
          </div>
          <p className="text-neutral-300 leading-relaxed mb-3">
            Have an upcoming event or school competition in Kenya? Chat with our team directly on WhatsApp for rapid packages and date checks!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-center"
          >
            Start WhatsApp Chat (0181199528)
          </a>
        </div>
      )}

      {/* Main floating action button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          aria-label="Chat with SEJO EVENTS on WhatsApp at 0181199528"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="font-bold text-sm tracking-wide hidden sm:inline-block">WhatsApp Us</span>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono hidden md:inline-block">
            0181199528
          </span>
        </a>
      </div>
    </aside>
  );
};
