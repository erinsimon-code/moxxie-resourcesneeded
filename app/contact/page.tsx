'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>Get In Touch</h1>
          <p className="text-lg" style={{ color: '#374151' }}>Questions about habits, streaks, points, or the rewards catalog? We'd love to hear from you.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>Drop Us a Line</h2>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #C79A3B' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1A1A1A' }}>
                  <svg className="w-8 h-8" style={{ color: '#C79A3B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#111827' }}>Message On Its Way!</h3>
                <p style={{ color: '#374151' }}>Thanks for reaching out — expect to hear back from our team within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="block w-full px-4 py-3 rounded-lg" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#111827' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="block w-full px-4 py-3 rounded-lg" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#111827' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#111827' }}>
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="habits">Habit Setup Help</option>
                    <option value="streaks">Streaks & Check-Ins</option>
                    <option value="points">Points Question</option>
                    <option value="rewards">Rewards Catalog</option>
                    <option value="sms-optout">SMS Opt-Out Request</option>
                    <option value="sms-help">SMS Help</option>
                    <option value="privacy">Privacy / Data Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#111827' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="What's on your mind?" className="block w-full px-4 py-3 rounded-lg" style={{ border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', color: '#111827' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 px-6 rounded-lg font-semibold transition-opacity" style={{ backgroundColor: submitting ? '#374151' : '#C79A3B', color: submitting ? '#FFFFFF' : '#1A1A1A', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>How to Reach Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#374151' }}>Email</h3>
                  <a href="mailto:support@livelifestyleloop.com" className="text-base font-medium hover:underline" style={{ color: '#C79A3B' }}>support@livelifestyleloop.com</a>
                  <p className="text-sm mt-1" style={{ color: '#374151' }}>We typically reply within 1–2 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#374151' }}>Phone</h3>
                  <a href="tel:+18335719204" className="text-base font-medium hover:underline" style={{ color: '#C79A3B' }}>(833) 571-9204</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#374151' }}>Mailing Address</h3>
                  <p style={{ color: '#374151' }}>Lifestyle Loop<br />3 Germay Dr, Unit 4-3226<br />Wilmington, DE 19804</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#374151' }}>Text Support</h3>
                  <p className="text-sm" style={{ color: '#374151' }}>Text <strong>STOP</strong> anytime to opt out, or <strong>HELP</strong> if you need a hand. Carrier rates may apply.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111827' }}>Common Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#111827' }}>How can I stop getting texts?</h3>
                  <p className="text-sm" style={{ color: '#374151' }}>Just text <strong>STOP</strong> back to any message and you'll be taken off the list right away.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#111827' }}>Do you share my details with anyone?</h3>
                  <p className="text-sm" style={{ color: '#374151' }}>Never for marketing purposes — your phone number stays with us. Full details are in our <a href="/privacy" className="font-medium hover:underline" style={{ color: '#C79A3B' }}>Privacy Policy</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
