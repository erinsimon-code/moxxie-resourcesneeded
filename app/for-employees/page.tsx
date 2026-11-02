import Link from 'next/link';
import { KeyRound, BookOpen, Video, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ForEmployeesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F7FA' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#10243E' }}>For Employees</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3B5773' }}>
            Ask your employer for your company code, then enroll in a few minutes to start getting short guides, live workshops, and monthly savings goal check-ins.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <KeyRound className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>1. Enroll with Your Company Code</h3>
              <p style={{ color: '#3B5773' }}>Get the company code from your employer and use it when you sign up to join your workplace's program.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <BookOpen className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>2. Read Short Guides</h3>
              <p style={{ color: '#3B5773' }}>Work through short guides on topics like understanding your paycheck and budgeting basics, at your own pace.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <Video className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>3. Join Live Workshops</h3>
              <p style={{ color: '#3B5773' }}>Attend live workshops with coworkers and ask questions in real time on the topics that matter most to you.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <Target className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>4. Set a Savings Goal</h3>
              <p style={{ color: '#3B5773' }}>Set a monthly savings goal and get a check-in each month to reflect on progress and adjust as life changes.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#E3B341', color: '#0F2A4A' }}>
            Enroll Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
