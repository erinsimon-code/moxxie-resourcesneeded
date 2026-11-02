'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1E293B' }}>
            Create Your Free Account
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#475569' }}>
            Fill out the short form below and we'll get you set up to pick your first project, save your first guide, and start checking off steps.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl shadow-xl p-8 md:p-12" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#334155' }}>
                <svg className="w-10 h-10" style={{ color: '#B87333' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1E293B' }}>You're All Set!</h2>
              <p className="text-lg mb-8" style={{ color: '#475569' }}>We've got your request. Someone from our team will follow up with you within the next 24 hours to help you pick your first project.</p>
              <Link href="/" className="inline-block px-6 py-3 font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#B87333', color: '#334155' }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#475569' }} />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFFFF', color: '#1E293B' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#475569' }} />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFFFF', color: '#1E293B' }} />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>Phone Number (optional)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#475569' }} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 555-5555" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFFFF', color: '#1E293B' }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1E293B' }}>Anything else we should know?</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about the project you're working on or what guides you're looking for..." className="w-full px-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#E2E8F0', backgroundColor: '#FFFFFF', color: '#1E293B' }} />
              </div>

              {/* Privacy Policy & Terms — checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="termsAgreement" required className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#B87333' }} />
                <label htmlFor="termsAgreement" className="text-sm" style={{ color: '#475569' }}>
                  I've read and accept the{' '}
                  <a href="/privacy" style={{ color: '#B87333' }} className="underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" style={{ color: '#B87333' }} className="underline">Terms of Service</a>. *
                </label>
              </div>

              {/* SMS Consent Checkboxes */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="accountNotifications" checked={accountNotifications} onChange={(e) => setAccountNotifications(e.target.checked)} className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#B87333' }} />
                  <label htmlFor="accountNotifications" className="text-sm" style={{ color: '#475569' }}>
                    Checking this box means I'm okay receiving account notification texts from Resources Needed at the number I've listed above, like checklist reminders and updates to my saved guides. I can text STOP anytime to opt out, or HELP if I have a question. Message and data rates may apply, and frequency can vary. This isn't required to submit the form, and agreeing isn't a condition of buying anything from us.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="customerCare" checked={customerCare} onChange={(e) => setCustomerCare(e.target.checked)} className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#B87333' }} />
                  <label htmlFor="customerCare" className="text-sm" style={{ color: '#475569' }}>
                    Checking this box means I'm okay receiving promotional texts from Resources Needed at the number above, such as announcements of newly published guides. I can text STOP anytime to opt out, or HELP if I have a question. Message and data rates may apply, and frequency can vary. This isn't required to submit the form, and agreeing isn't a condition of buying anything from us.
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: isSubmitting ? '#475569' : '#B87333', color: isSubmitting ? '#FFFFFF' : '#334155' }}>
                {isSubmitting ? 'Submitting...' : 'Sign Us Up'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
