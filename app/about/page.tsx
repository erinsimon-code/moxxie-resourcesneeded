import { MapPinned, Briefcase, FileStack, Wrench } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#334155', color: '#B87333' }}>
              <FileStack className="w-4 h-4" />
              About Resources Needed
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1E293B' }}>
              Built Around Real-Life Projects
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#475569' }}>
              Big life events come with a long list of small tasks, and it's easy to lose track of what still needs doing. Resources Needed was built around one idea — turn each event into a project, give you a clear checklist, and let you track your own progress at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1E293B' }}>Why We Built Resources Needed</h2>
          <p className="text-lg mb-4" style={{ color: '#475569' }}>
            Searching the internet for scattered advice on moving, starting a new job, or getting your paperwork organized can take hours and still leave gaps. We wanted a simpler way: one library of clear, step-by-step guides, organized around the projects people actually face.
          </p>
          <p className="text-lg" style={{ color: '#475569' }}>
            Every guide becomes a checklist you can save to your account, work through at your own pace, and revisit whenever you need a reminder of what's left to do.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <MapPinned className="w-5 h-5" style={{ color: '#B87333' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1E293B' }}>Guides for Real Life Events</h3>
                <p style={{ color: '#475569' }}>Moving, starting a new job, and organizing paperwork are projects almost everyone faces — our guides walk through each one step by step.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Briefcase className="w-5 h-5" style={{ color: '#B87333' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1E293B' }}>Saved to Your Account</h3>
                <p style={{ color: '#475569' }}>Save any guide to your account so it's there the next time you log in, instead of starting your search over from scratch.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Wrench className="w-5 h-5" style={{ color: '#B87333' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1E293B' }}>Checklists You Can Track</h3>
                <p style={{ color: '#475569' }}>Check off each step as you complete it, so you can see exactly what's done and what's still left on your project.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <FileStack className="w-5 h-5" style={{ color: '#B87333' }} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1E293B' }}>Reminders That Keep You Moving</h3>
                <p style={{ color: '#475569' }}>Get a nudge on the steps you haven't finished yet, so a busy week doesn't turn into a stalled project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
