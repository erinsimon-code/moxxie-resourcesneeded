'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, User, KeyRound } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', companyCode: '', message: '' });
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
      setFormData({ name: '', email: '', phone: '', companyCode: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F7FA' }}>
      <Navbar />

      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#10243E' }}>
            Sign Up for Wallet Wiser
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#3B5773' }}>
            Employers: sign up to get your company code. Employees: enter the company code your employer shared with you to enroll.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl shadow-xl p-8 md:p-12" style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9E2EC' }}>
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#0F2A4A' }}>
                <svg className="w-10 h-10" style={{ color: '#E3B341' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#10243E' }}>You're All Set!</h2>
              <p className="text-lg mb-8" style={{ color: '#3B5773' }}>We've got your request. Someone from our team will follow up with you within the next 24 hours to help you get started.</p>
              <Link href="/" className="inline-block px-6 py-3 font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#E3B341', color: '#0F2A4A' }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#10243E' }}>Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#3B5773' }} />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#D9E2EC', backgroundColor: '#FFFFFF', color: '#10243E' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#10243E' }}>Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#3B5773' }} />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#D9E2EC', backgroundColor: '#FFFFFF', color: '#10243E' }} />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#10243E' }}>Company Code (employees) or leave blank if signing up as an employer</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#3B5773' }} />
                  <input type="text" name="companyCode" value={formData.companyCode} onChange={handleChange} placeholder="e.g. ACME2026" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#D9E2EC', backgroundColor: '#FFFFFF', color: '#10243E' }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#10243E' }}>Phone Number (optional)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#3B5773' }} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 555-5555" className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#D9E2EC', backgroundColor: '#FFFFFF', color: '#10243E' }} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#10243E' }}>Anything else we should know?</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your organization or what you're hoping to get out of the program..." className="w-full px-4 py-3 rounded-lg border focus:outline-none" style={{ borderColor: '#D9E2EC', backgroundColor: '#FFFFFF', color: '#10243E' }} />
              </div>

              {/* Privacy Policy & Terms — checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="termsAgreement" required className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#E3B341' }} />
                <label htmlFor="termsAgreement" className="text-sm" style={{ color: '#3B5773' }}>
                  I've read and accept the{' '}
                  <a href="/privacy" style={{ color: '#E3B341' }} className="underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" style={{ color: '#E3B341' }} className="underline">Terms of Service</a>. *
                </label>
              </div>

              {/* SMS Consent Checkboxes */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="accountNotifications" checked={accountNotifications} onChange={(e) => setAccountNotifications(e.target.checked)} className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#E3B341' }} />
                  <label htmlFor="accountNotifications" className="text-sm" style={{ color: '#3B5773' }}>
                    Checking this box means I'm okay receiving account notification texts from Wallet Wiser at the number I've listed above, like workshop reminders and goal check-ins. I can text STOP anytime to opt out, or HELP if I have a question. Message and data rates may apply, and frequency can vary. This isn't required to submit the form, and is not a condition of employment.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="customerCare" checked={customerCare} onChange={(e) => setCustomerCare(e.target.checked)} className="mt-1 w-4 h-4 rounded" style={{ accentColor: '#E3B341' }} />
                  <label htmlFor="customerCare" className="text-sm" style={{ color: '#3B5773' }}>
                    Checking this box means I'm okay receiving promotional texts from Wallet Wiser at the number above, such as new guides and upcoming workshop announcements. I can text STOP anytime to opt out, or HELP if I have a question. Message and data rates may apply, and frequency can vary. This isn't required to submit the form, and is not a condition of employment.
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: isSubmitting ? '#3B5773' : '#E3B341', color: isSubmitting ? '#FFFFFF' : '#0F2A4A' }}>
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
