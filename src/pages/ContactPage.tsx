import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, FAQS } from '../data/content';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate sending message
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = `*ENQUIRY FOR SEJO EVENTS*
Name: ${name || 'Prospective Client'}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Subject: ${subject}
Message: ${message || 'I would like more information about your services and packages.'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Contact SEJO EVENTS
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Reach our event management desk, school talent coordinators, or sound production engineers. We are ready to bring your vision to life.
        </p>
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact info column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-white">Direct Contacts</h2>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Call Line
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <div className="text-[11px] text-neutral-400">Lines open Monday to Saturday</div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Instant WhatsApp
                </div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    COMPANY_INFO.whatsappPresetMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  0181199528
                </a>
                <div className="text-[11px] text-neutral-400">Fast packages, quotes & date availability</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Email Desk
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                >
                  {COMPANY_INFO.email}
                </a>
                <div className="text-[11px] text-neutral-400">Official RFPs & formal proposals</div>
              </div>
            </div>

            {/* Location & Coverage */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Head Office & Hubs
                </div>
                <div className="text-sm font-bold text-white">{COMPANY_INFO.address}</div>
                <div className="text-xs text-neutral-400">
                  Active deployment: {COMPANY_INFO.servingAreas}
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                  Operating Hours
                </div>
                <div className="text-xs text-neutral-300">{COMPANY_INFO.hours}</div>
              </div>
            </div>
          </div>

          {/* Quick Booking CTA banner */}
          <div className="bg-gradient-to-r from-amber-500/20 via-neutral-900 to-neutral-950 border border-amber-500/30 p-6 rounded-2xl space-y-3">
            <h3 className="text-base font-bold text-white">Need a Formal Event Quotation?</h3>
            <p className="text-xs text-neutral-300">
              Use our interactive booking form to specify guest counts, sound systems, and artist requirements.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md text-center"
            >
              Open Booking & Quotation Form
            </button>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-10 space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white">Send Us a Direct Message</h2>
              <p className="text-xs text-neutral-400">
                Fill in your details below and our team will get back to you promptly.
              </p>
            </div>

            {isSent ? (
              <div className="p-8 text-center space-y-4 bg-neutral-950 border border-amber-400/30 rounded-xl">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto">
                  Thank you for reaching out to SEJO EVENTS. A customer representative will review your message and contact you within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-xs font-semibold text-amber-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mary Wanjiku"
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0722 000 000"
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. mary@company.co.ke"
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Corporate Event Planning">Corporate Event Planning</option>
                      <option value="School Talent Show">School Talent Show</option>
                      <option value="Wedding Entertainment">Wedding Entertainment</option>
                      <option value="Sound & Stage Hire">Sound & Stage Hire</option>
                      <option value="Theatre Production">Theatre Production</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Your Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your event date, expected guests, venue, or specific services needed..."
                    className="w-full bg-neutral-950 border border-neutral-700 focus:border-amber-400 rounded-lg p-3 text-sm text-white focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 text-emerald-400 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-8 pt-8 border-t border-neutral-800">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-neutral-400 text-sm">
            Quick answers about booking, coverage across Kenya, and equipment hire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FAQS.map((faq, fIdx) => (
            <div
              key={fIdx}
              className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-2.5 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start gap-2.5 font-bold text-white text-sm">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
