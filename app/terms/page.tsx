import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF9' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#111827' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#374151' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>1. Agreeing to These Terms</h2>
          <p className="mb-6" style={{ color: '#374151' }}>
            Lifecycle Loop LLC runs Lifestyle Loop. Accessing or using our service (the "Service") means you're agreeing to follow these Terms of Service (the "Terms"). If these Terms don't work for you, please don't use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>2. What the Service Does</h2>
          <p className="mb-6" style={{ color: '#374151' }}>
            Through www.livelifestyleloop.com, Lifestyle Loop lets members pick habits like hydration, steps, sleep, mindfulness, and reading, check in daily, build streaks, and redeem the points they earn in the Lifestyle Loop rewards catalog.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>3. Text Message Program</h2>
          <p className="mb-4" style={{ color: '#374151' }}>
            Opting in to receive texts means you're agreeing to get account notification texts (check-in reminders, streak updates, and points confirmations), promotional texts (new habit challenges and new rewards), or both from Lifestyle Loop. Here's what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#374151' }}>
            <li>Standard message and data rates may apply, and how often you hear from us can vary.</li>
            <li>Opt out whenever you like by texting STOP. Need help? Text HELP or email support@livelifestyleloop.com.</li>
            <li>We're not responsible if a carrier delays or fails to deliver a message.</li>
            <li>You don't need to agree to texts in order to make a purchase, and opting in does not earn you any points.</li>
            <li>Want the full picture on how we handle your data? Check out our <Link href="/privacy" style={{ color: '#C79A3B' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>4. Liability Limits</h2>
          <p className="mb-6" style={{ color: '#374151' }}>
            Lifestyle Loop isn't responsible for indirect, incidental, special, consequential, or punitive damages that come from using, or being unable to use, the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#111827' }}>5. Get in Touch</h2>
          <p className="mb-6" style={{ color: '#374151' }}>
            Questions about these Terms? Reach us at support@livelifestyleloop.com or write to 3 Germay Dr, Unit 4-3226, Wilmington, DE 19804.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
