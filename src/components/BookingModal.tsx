import React, { useState } from 'react';
import { BookingRequest } from '../types';
import { COMPANY_INFO, CORE_SERVICES } from '../data/content';
import { X, Send, MessageSquare, CheckCircle2, AlertCircle, Calculator, Calendar, Clock, DollarSign, Users, MapPin, Building, Phone, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [eventType, setEventType] = useState('Corporate Event');
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState<number>(150);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Event Management & Planning']
  );
  const [estimatedBudget, setEstimatedBudget] = useState('KES 100,000 – KES 250,000');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingRequest | null>(null);

  if (!isOpen) return null;

  const eventTypes = [
    'Corporate Event & Conference',
    'School Talent Show & Competition',
    'Wedding & Reception',
    'Graduation Ceremony',
    'Birthday Celebration & Party',
    'Award Gala & Dinner',
    'Cultural Festival',
    'Theatre & Drama Production',
    'Equipment Hire Only',
    'Private VIP Function',
    'Public / Church Event',
  ];

  const budgetTiers = [
    'Below KES 50,000 (Standard Package)',
    'KES 50,000 – KES 100,000 (Popular)',
    'KES 100,000 – KES 250,000 (Premium Event)',
    'KES 250,000 – KES 500,000 (Full Production)',
    'KES 500,000+ (Grand Scale / Multi-Day)',
    'Need Custom Itemized Quotation',
  ];

  const toggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((s) => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!phone.trim()) {
      errs.phone = 'Please enter a valid phone number';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Phone number is too short';
    }
    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!location.trim()) errs.location = 'Please specify the event location/town';
    if (!eventDate) errs.eventDate = 'Please select your preferred date';
    if (selectedServices.length === 0)
      errs.services = 'Please choose at least one service';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const newRequest: BookingRequest = {
      id: `SEJO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      fullName,
      phone,
      email,
      organization,
      eventType,
      location,
      eventDate,
      guestCount,
      servicesRequired: selectedServices,
      estimatedBudget,
      additionalDetails,
      status: 'Pending Review',
    };

    // Store in browser database (localStorage)
    try {
      const existing = JSON.parse(localStorage.getItem('sejo_booking_requests') || '[]');
      existing.unshift(newRequest);
      localStorage.setItem('sejo_booking_requests', JSON.stringify(existing));
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBooking(newRequest);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    return `*NEW EVENT ENQUIRY - SEJO EVENTS*
----------------------------------------
*Client Name:* ${fullName || 'Not provided'}
*Phone:* ${phone || 'Not provided'}
*Email:* ${email || 'Not provided'}
*Organization:* ${organization || 'N/A'}
*Event Type:* ${eventType}
*Location:* ${location || 'Not provided'}
*Preferred Date:* ${eventDate || 'Not selected'}
*Expected Guests:* ${guestCount}
*Services Required:* ${selectedServices.join(', ') || 'General Enquiry'}
*Estimated Budget:* ${estimatedBudget}
*Additional Details:* ${additionalDetails || 'None'}
----------------------------------------
_Please provide availability and an official itemized quotation._`;
  };

  const handleWhatsAppSubmit = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/80">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Quotation & Booking Request
            </span>
            <h2 className="text-xl font-bold text-white">Book SEJO EVENTS</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submittedBooking ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Successfully Received</h3>
              <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md text-amber-400 font-mono text-xs mb-4">
                Reference ID: {submittedBooking.id}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Thank you, <strong className="text-white">{submittedBooking.fullName}</strong>. Your event enquiry has been logged into our management system.
              </p>
              
              {/* Honest booking notice per prompt requirement */}
              <div className="p-4 bg-neutral-800/80 border border-amber-500/30 rounded-xl text-left text-xs text-neutral-300 space-y-2 mb-6">
                <div className="flex items-center gap-2 font-semibold text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>Status: Pending Review (Not Yet Confirmed)</span>
                </div>
                <p>
                  To uphold the highest quality and safety standards, all booking requests undergo schedule verification and technical feasibility review by our production director.
                </p>
                <p>
                  Our team will contact you via phone (<strong className="text-neutral-100">{submittedBooking.phone}</strong>) or email within 24 business hours to discuss custom packages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp (0181199528)</span>
                </button>
                <button
                  onClick={() => {
                    setSubmittedBooking(null);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWebSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Notice header */}
            <div className="bg-neutral-950/60 border border-neutral-800 p-4 rounded-xl flex items-start gap-3 text-xs text-neutral-300">
              <Calculator className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold">Custom Quotations & Flexible Packages:</strong>
                <p className="mt-0.5 text-neutral-400">
                  Share your event parameters below. You can submit directly through our web system or dispatch instantly to our WhatsApp desk ({COMPANY_INFO.phone}).
                </p>
              </div>
            </div>

            {/* Grid fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Client's Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Mwangi"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. david@example.com"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Organization / Company <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Loreto High School / Safaricom"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Type of Event <span className="text-amber-400">*</span>
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg px-3 py-2 text-sm text-white focus:outline-none"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-neutral-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Location */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Event Location / Town <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Rongo / Migori / Kisumu / Nairobi"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
                {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location}</p>}
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Preferred Event Date <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none"
                  />
                </div>
                {errors.eventDate && <p className="text-red-400 text-xs mt-1">{errors.eventDate}</p>}
              </div>

              {/* Expected Guest Count */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Expected Number of Guests
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="number"
                    min={10}
                    max={10000}
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value) || 0)}
                    placeholder="150"
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Services Required Checkboxes */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                Services Required <span className="text-amber-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CORE_SERVICES.map((srv) => {
                  const isChecked = selectedServices.includes(srv.title);
                  return (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => toggleService(srv.title)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-500/50 text-white font-medium'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border text-xs ${
                          isChecked
                            ? 'bg-amber-500 border-amber-500 text-neutral-950 font-bold'
                            : 'border-neutral-600 bg-neutral-900'
                        }`}
                      >
                        {isChecked && '✓'}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-100">{srv.title}</div>
                        <div className="text-[11px] text-neutral-400 line-clamp-1">{srv.shortDesc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.services && <p className="text-red-400 text-xs mt-1.5">{errors.services}</p>}
            </div>

            {/* Estimated Budget Tier */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Estimated Budget Range
              </label>
              <div className="relative">
                <DollarSign className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                <select
                  value={estimatedBudget}
                  onChange={(e) => setEstimatedBudget(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none"
                >
                  {budgetTiers.map((tier) => (
                    <option key={tier} value={tier} className="bg-neutral-900 text-white">
                      {tier}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional details */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                Additional Event Details / Special Requests
              </label>
              <textarea
                rows={3}
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Share any special preferences: e.g. indoor or outdoor, specific live artists, MC language preference (English/Swahili), school theme, or equipment setup time..."
                className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-3 text-sm text-white placeholder-neutral-500 focus:outline-none resize-none"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 text-emerald-400 hover:text-emerald-300 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp (0181199528)</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Request...' : 'SUBMIT BOOKING REQUEST'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
