import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { GALLERY_ITEMS } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectedService, setBookingPreselectedService] = useState<string | undefined>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'schools',
        'gallery',
        'events',
        'team',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    setBookingPreselectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingPreselectedService(undefined);
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Main Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={(img) => {
              const idx = GALLERY_ITEMS.findIndex((g) => g.image === img);
              handleOpenLightbox(idx !== -1 ? idx : 0);
            }}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'schools' && (
          <SchoolsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onSelectImage={handleOpenLightbox} />
        )}
        {currentPage === 'events' && (
          <EventsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'team' && (
          <TeamPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp Contact Button (0181199528) */}
      <WhatsAppFloatingButton />

      {/* Booking and Quotation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingPreselectedService}
      />

      {/* Multimedia Image Lightbox */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
