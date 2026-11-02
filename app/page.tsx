import Link from 'next/link';
import { Flame, Trophy, CalendarCheck, Gift } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#1A1A1A', color: '#C79A3B' }}>
              <Flame className="w-4 h-4" />
              Lifestyle Loop
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#111827' }}>
              Small Habits. Real Streaks.
              <span className="block" style={{ color: '#C79A3B' }}>Rewards You Can Redeem.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#374151' }}>
              Lifestyle Loop helps you build the daily habits that actually stick — hydration, steps, sleep, mindfulness, and reading. Check in each day, watch your streak grow, and turn every check-in into points you can spend in the Lifestyle Loop rewards catalog.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
                Get Started
              </Link>
              <Link href="/how-it-works" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#C79A3B', borderColor: '#C79A3B', backgroundColor: '#1A1A1A' }}>
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FAFAF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#111827' }}>The Loop That Keeps You Going</h2>
            <p className="mt-4 text-xl" style={{ color: '#374151' }}>Four simple moves, repeated daily, that turn good intentions into lasting habits.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                  <CalendarCheck className="w-7 h-7" style={{ color: '#C79A3B' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Pick Your Habits</h3>
              <p className="text-center" style={{ color: '#374151' }}>Choose from hydration, steps, sleep, mindfulness, and reading — start with one or stack a few that fit your routine.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                  <Flame className="w-7 h-7" style={{ color: '#C79A3B' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Check In Daily</h3>
              <p className="text-center" style={{ color: '#374151' }}>A quick daily check-in confirms you showed up — that's what keeps your streak alive and your momentum building.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                  <Trophy className="w-7 h-7" style={{ color: '#C79A3B' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Build Streaks & Earn Points</h3>
              <p className="text-center" style={{ color: '#374151' }}>Every check-in earns points, and longer streaks earn more — consistency is rewarded, not just effort.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                  <Gift className="w-7 h-7" style={{ color: '#C79A3B' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Redeem Rewards</h3>
              <p className="text-center" style={{ color: '#374151' }}>Redeem your points in the Lifestyle Loop rewards catalog for things worth looking forward to.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>Start Your Loop Today</h2>
          <p className="text-xl mb-10" style={{ color: '#374151' }}>Pick a habit, check in tomorrow, and see how far a streak can take you.</p>
          <Link href="/signup" className="px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
