import Link from 'next/link';
import { Droplet, Footprints, Moon, Brain, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HabitsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>Habits Worth Building</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#374151' }}>
            Start with one habit or stack a few. Every habit in Lifestyle Loop works the same simple way — check in daily, build a streak, earn points.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Droplet className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Hydration</h3>
            <p className="text-center" style={{ color: '#374151' }}>Check in each day you hit your water goal. Small sips, tracked daily, add up to a streak worth keeping.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Footprints className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Steps</h3>
            <p className="text-center" style={{ color: '#374151' }}>Log a check-in on days you reach your step goal, whether that's a walk around the block or a full workout.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Moon className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Sleep</h3>
            <p className="text-center" style={{ color: '#374151' }}>Check in on nights you get your target amount of rest, and watch a well-rested streak build night after night.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Brain className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Mindfulness</h3>
            <p className="text-center" style={{ color: '#374151' }}>Check in after a few quiet minutes of breathing, meditation, or journaling — however you like to reset.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <BookOpen className="w-7 h-7" style={{ color: '#C79A3B' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#111827' }}>Reading</h3>
            <p className="text-center" style={{ color: '#374151' }}>Check in on days you pick up a book, even for a few pages. Streaks grow one chapter at a time.</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
            Pick Your First Habit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
