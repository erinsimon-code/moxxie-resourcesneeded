import Link from 'next/link';
import { Truck, Briefcase, FileStack, PiggyBank, Wrench, Receipt } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GuidesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />

      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1E293B' }}>The Guide Library</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#475569' }}>
            Every guide breaks a life event down into clear, ordered steps. Save the ones you need, check off steps as you go, and pick up right where you left off.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Truck className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Moving</h3>
            <p className="text-center" style={{ color: '#475569' }}>A room-by-room packing checklist, a timeline for notifying your utilities and mail, and a step-by-step plan for moving day itself.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Briefcase className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Starting a New Job</h3>
            <p className="text-center" style={{ color: '#475569' }}>A first-week checklist covering paperwork to bring, questions to ask, and small habits that help a new role go smoothly.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <FileStack className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Organizing Household Paperwork</h3>
            <p className="text-center" style={{ color: '#475569' }}>A simple filing system for the documents every household collects, plus a checklist for sorting, labeling, and storing them.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <PiggyBank className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Budgeting for a Big Purchase</h3>
            <p className="text-center" style={{ color: '#475569' }}>A step-by-step worksheet for setting a savings goal, tracking progress, and comparing your options before you buy.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Wrench className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Home Maintenance Basics</h3>
            <p className="text-center" style={{ color: '#475569' }}>A season-by-season checklist for the upkeep tasks that keep a home running smoothly, from filters to gutters.</p>
          </div>
          <div className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#334155' }}>
                <Receipt className="w-7 h-7" style={{ color: '#B87333' }} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1E293B' }}>Getting Ready for Tax Season</h3>
            <p className="text-center" style={{ color: '#475569' }}>A checklist for gathering and organizing the documents you'll want on hand before you sit down to file.</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center border mt-16" style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1E293B' }}>More Guides Are On the Way</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#475569' }}>
            Create a free account to save the guides you need and be the first to know when new ones are published.
          </p>
          <Link href="/signup" className="inline-block px-10 py-5 text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#B87333', color: '#334155' }}>
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
