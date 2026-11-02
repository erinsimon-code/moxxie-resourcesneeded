import { Droplet, Footprints, Moon, Flame } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#1A1A1A', color: '#C79A3B' }}>
              <Flame className="w-4 h-4" />
              About Lifestyle Loop
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#111827' }}>
              Built Around One Simple Loop
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#374151' }}>
              Most habit apps ask you to track everything at once. Lifestyle Loop was built around one repeatable loop instead — pick a habit, check in, build a streak, earn a reward — because that's what actually keeps people coming back.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>Why We Built Lifestyle Loop</h2>
          <p className="text-lg mb-4" style={{ color: '#374151' }}>
            Most habit trackers hand you a long list of metrics and leave you to figure out why none of them stick. We wanted something simpler: a loop you repeat every day, built around habits you actually care about — hydration, steps, sleep, mindfulness, and reading.
          </p>
          <p className="text-lg" style={{ color: '#374151' }}>
            Every check-in feeds your streak, every streak feeds your points, and every point gets you closer to something in the Lifestyle Loop rewards catalog. It's a simple cycle, built to repeat.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Droplet className="w-5 h-5" style={{ color: '#C79A3B' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#111827' }}>Habits That Fit Real Life</h3>
                <p style={{ color: '#374151' }}>Hydration, steps, sleep, mindfulness, and reading are habits you can realistically keep up with, day after day, no matter how busy things get.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Footprints className="w-5 h-5" style={{ color: '#C79A3B' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#111827' }}>Daily Check-Ins</h3>
                <p style={{ color: '#374151' }}>A simple daily check-in is all it takes to keep your streak alive — no complicated logs, no overthinking.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Moon className="w-5 h-5" style={{ color: '#C79A3B' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#111827' }}>Streaks Worth Protecting</h3>
                <p style={{ color: '#374151' }}>Once a streak starts building, it becomes its own motivation — Lifestyle Loop just helps you see it and keep it going.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                <Flame className="w-5 h-5" style={{ color: '#C79A3B' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#111827' }}>Points That Mean Something</h3>
                <p style={{ color: '#374151' }}>Points earned from check-ins and streaks go straight toward real items in the Lifestyle Loop rewards catalog.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
