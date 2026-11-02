import Link from 'next/link';
import { FolderKanban, ListChecks, BellRing, BookOpenCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#0E3B36', color: '#DE7A49' }}>
              <BookOpenCheck className="w-4 h-4" />
              Resources Needed
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#163832' }}>
              Big Life Events.
              <span className="block" style={{ color: '#DE7A49' }}>Clear, Simple Checklists.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#47564F' }}>
              Resources Needed is a free library of step-by-step guides and checklists for life's big moments — moving, starting a new job, organizing paperwork, and more. Create an account, pick a project, save the guides you need, and check off each step as you go.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#DE7A49', color: '#0E3B36' }}>
                Get Started
              </Link>
              <Link href="/how-it-works" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#DE7A49', borderColor: '#DE7A49', backgroundColor: '#0E3B36' }}>
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F4EF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#163832' }}>Everything You Need, In One Place</h2>
            <p className="mt-4 text-xl" style={{ color: '#47564F' }}>Four simple steps that turn an overwhelming life event into a manageable project.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE3DA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0E3B36' }}>
                  <FolderKanban className="w-7 h-7" style={{ color: '#DE7A49' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#163832' }}>Pick a Project</h3>
              <p className="text-center" style={{ color: '#47564F' }}>Choose the life event you're tackling, from moving to tax season, and we'll line up the guides that match it.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE3DA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0E3B36' }}>
                  <BookOpenCheck className="w-7 h-7" style={{ color: '#DE7A49' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#163832' }}>Save Your Guides</h3>
              <p className="text-center" style={{ color: '#47564F' }}>Save the step-by-step guides and checklists you need so they're ready whenever you come back to your project.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE3DA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0E3B36' }}>
                  <ListChecks className="w-7 h-7" style={{ color: '#DE7A49' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#163832' }}>Check Off Steps</h3>
              <p className="text-center" style={{ color: '#47564F' }}>Work through each guide one step at a time, checking off tasks as you finish them so nothing falls through the cracks.</p>
            </div>
            <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE3DA' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0E3B36' }}>
                  <BellRing className="w-7 h-7" style={{ color: '#DE7A49' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#163832' }}>Get Reminders</h3>
              <p className="text-center" style={{ color: '#47564F' }}>Get reminders for the steps still left on your checklist, so your project keeps moving even on busy weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#163832' }}>Start Your First Project Today</h2>
          <p className="text-xl mb-10" style={{ color: '#47564F' }}>Create a free account, pick a guide, and take the next step with confidence.</p>
          <Link href="/signup" className="px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#DE7A49', color: '#0E3B36' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
