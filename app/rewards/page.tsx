import Link from 'next/link';
import { Gift, Trophy, Sparkles, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RewardsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>The Rewards Catalog</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#374151' }}>
            Every point you earn from a check-in or a streak milestone can be redeemed right here. New items rotate into the catalog regularly, so there's always something worth working toward.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Flame className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Daily Check-In Points</h3>
            <p className="text-center" style={{ color: '#374151' }}>Earn points every time you check in on a tracked habit, no matter how long your streak is.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Trophy className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Streak Milestone Bonuses</h3>
            <p className="text-center" style={{ color: '#374151' }}>Hit a 7-day, 30-day, or 100-day streak on any habit and collect a bonus point boost for the milestone.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Sparkles className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>New Habit Challenges</h3>
            <p className="text-center" style={{ color: '#374151' }}>Jump into limited-time challenges across hydration, steps, sleep, mindfulness, and reading for extra points.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Gift className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Catalog Redemptions</h3>
            <p className="text-center" style={{ color: '#374151' }}>Browse the Lifestyle Loop rewards catalog anytime and spend your points on items available right now.</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#111827' }}>The Catalog Keeps Growing</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#374151' }}>
            New rewards rotate into the catalog as you build your Loop, so there's always a reason to keep your streaks alive.
          </p>
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
