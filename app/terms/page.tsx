import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#163832' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#47564F' }}>Effective Date: November 2, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#163832' }}>1. Agreeing to These Terms</h2>
          <p className="mb-6" style={{ color: '#47564F' }}>
            The Benefit Advisor LLC runs Resources Needed. Accessing or using our service (the "Service") means you're agreeing to follow these Terms of Service (the "Terms"). If these Terms don't work for you, please don't use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#163832' }}>2. What the Service Does</h2>
          <p className="mb-6" style={{ color: '#47564F' }}>
            Through www.resourcesneeded.com, Resources Needed lets members create an account, pick a project like moving or starting a new job, save step-by-step guides and checklists, check off steps as they complete them, and get reminders on what's left to do.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#163832' }}>3. Text Message Program</h2>
          <p className="mb-4" style={{ color: '#47564F' }}>
            Opting in to receive texts means you're agreeing to get account notification texts (checklist reminders and updates to your saved guides), promotional texts (announcements of newly published guides), or both from Resources Needed. Here's what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#47564F' }}>
            <li>Standard message and data rates may apply, and how often you hear from us can vary.</li>
            <li>Opt out whenever you like by texting STOP. Have a question? Text HELP or email support@resourcesneeded.com.</li>
            <li>We're not responsible if a carrier delays or fails to deliver a message.</li>
            <li>You don't need to agree to texts in order to use the Service.</li>
            <li>Want the full picture on how we handle your data? Check out our <Link href="/privacy" style={{ color: '#DE7A49' }} className="underline">Privacy Policy</Link>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#163832' }}>4. Liability Limits</h2>
          <p className="mb-6" style={{ color: '#47564F' }}>
            Resources Needed isn't responsible for indirect, incidental, special, consequential, or punitive damages that come from using, or being unable to use, the Service. The guides and checklists in our library are provided for general informational purposes only and are not legal, tax, or financial advice.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#163832' }}>5. Get in Touch</h2>
          <p className="mb-6" style={{ color: '#47564F' }}>
            Questions about these Terms? Reach us at support@resourcesneeded.com or write to 600 N Broad St 446, Suite 5, Middletown, DE 19709.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
