import Link from 'next/link';
import { CalendarCheck, Flame, Trophy, Gift } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>How Lifestyle Loop Works</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#374151' }}>
            Four simple steps stand between you and a habit that actually sticks. No complicated tracking, no guesswork — just a daily loop you can repeat.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
              <CalendarCheck className="w-7 h-7" style={{ color: '#C79A3B' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>1. Pick Your Habits</h3>
              <p style={{ color: '#374151' }}>Choose from hydration, steps, sleep, mindfulness, and reading. Add as many as you want to focus on — you're in control of your own loop.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
              <Flame className="w-7 h-7" style={{ color: '#C79A3B' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>2. Check In Every Day</h3>
              <p style={{ color: '#374151' }}>Log a quick daily check-in for each habit you're tracking. Each check-in keeps your streak alive and moves you one day closer to a habit that sticks.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
              <Trophy className="w-7 h-7" style={{ color: '#C79A3B' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>3. Build Your Streak, Earn Points</h3>
              <p style={{ color: '#374151' }}>Every check-in earns points. Keep your streak going and the points add up faster — consistency is what the Loop rewards most.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
              <Gift className="w-7 h-7" style={{ color: '#C79A3B' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#111827' }}>4. Redeem in the Rewards Catalog</h3>
              <p style={{ color: '#374151' }}>Spend the points you've earned on items in the Lifestyle Loop rewards catalog. The more consistent your loop, the more you can redeem.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
            Start Your Loop
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
