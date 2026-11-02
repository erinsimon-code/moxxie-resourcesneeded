import Link from 'next/link';
import { UserPlus, FolderKanban, ListChecks, BellRing } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1E293B' }}>How Resources Needed Works</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#475569' }}>
            Four simple steps turn a big life event into a project you can actually finish. No guesswork, no scattered searches — just one checklist to follow.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
              <UserPlus className="w-7 h-7" style={{ color: '#B87333' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E293B' }}>1. Create an Account</h3>
              <p style={{ color: '#475569' }}>Set up a free account so your saved guides, checklists, and progress are waiting for you every time you come back.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
              <FolderKanban className="w-7 h-7" style={{ color: '#B87333' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E293B' }}>2. Pick a Project</h3>
              <p style={{ color: '#475569' }}>Browse the guide library and pick the life event you're working through, whether that's moving, a new job, or tax season prep.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
              <ListChecks className="w-7 h-7" style={{ color: '#B87333' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E293B' }}>3. Save Guides & Check Off Steps</h3>
              <p style={{ color: '#475569' }}>Save the guides you need and work through each checklist step by step, checking off tasks as you complete them.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
              <BellRing className="w-7 h-7" style={{ color: '#B87333' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1E293B' }}>4. Get Reminders</h3>
              <p style={{ color: '#475569' }}>Get reminders for the steps you still have left, so even a long project keeps moving forward week after week.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#B87333', color: '#334155' }}>
            Create Your Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
