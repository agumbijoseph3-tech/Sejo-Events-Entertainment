import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Menu, X, Calendar, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'OUR SERVICES' },
    { id: 'schools', label: 'SCHOOL PROGRAMMES' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'events', label: 'OUR EVENTS' },
    { id: 'team', label: 'OUR TEAM' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top emergency / quick contact ticker */}
      <div className="bg-neutral-900/90 border-b border-neutral-800/80 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-neutral-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              Kenya's Premier Entertainment & Event Production Partner
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-400">Rongo, Migori · Western Kenya · Nationwide Coverage</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappPresetMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar strictly adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none shrink-0"
            aria-label="SEJO EVENTS Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center font-bold text-neutral-950 text-xl tracking-tighter shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase whitespace-nowrap">
                SEJO <span className="text-amber-400">EVENTS</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs font-semibold tracking-wider text-neutral-300">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors uppercase ${
                    isActive
                      ? 'text-amber-400 font-bold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK AN EVENT</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-md text-sm font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-400'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:to-amber-600 transition-all shadow-md shadow-amber-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK AN EVENT</span>
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsappPresetMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-amber-400 bg-neutral-900 border border-neutral-800 hover:bg-neutral-850 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp ({COMPANY_INFO.phone})</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
