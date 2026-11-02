import Link from 'next/link';
import { KeyRound, Users, CalendarCheck, LineChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ForEmployersPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F7FA' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#10243E' }}>For Employers</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#3B5773' }}>
            Sign up your organization and get a company code to share with your team. There's nothing to install and nothing for your HR staff to administer day to day.
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
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>Get Your Company Code</h3>
              <p style={{ color: '#3B5773' }}>Sign up as an employer and receive a unique company code that connects your employees to your organization's program.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <Users className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>Share It with Your Team</h3>
              <p style={{ color: '#3B5773' }}>Pass the company code along to employees so they can enroll themselves whenever it's convenient for them.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <CalendarCheck className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>Workshops on a Regular Schedule</h3>
              <p style={{ color: '#3B5773' }}>Live workshops run on a recurring schedule, so employees always have an upcoming session they can plan around.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#D9E2EC' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F2A4A' }}>
              <LineChart className="w-7 h-7" style={{ color: '#E3B341' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#10243E' }}>A Program That Runs Itself</h3>
              <p style={{ color: '#3B5773' }}>Once employees are enrolled, guides, workshop reminders, and monthly check-ins are delivered on their own.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#E3B341', color: '#0F2A4A' }}>
            Sign Up Your Organization
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
