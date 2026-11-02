import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#0E3B36' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resources Needed</h3>
            <p style={{ color: '#F5F4EF' }}>
              A free library of step-by-step guides and checklists for life events. Pick a project, save the guides you need, and check off steps as you go.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" style={{ color: '#F5F4EF' }} className="hover:text-white">How It Works</Link></li>
              <li><Link href="/guides" style={{ color: '#F5F4EF' }} className="hover:text-white">Guides</Link></li>
              <li><Link href="/about" style={{ color: '#F5F4EF' }} className="hover:text-white">About</Link></li>
              <li><Link href="/signup" style={{ color: '#F5F4EF' }} className="hover:text-white">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" style={{ color: '#F5F4EF' }} className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: '#F5F4EF' }} className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" style={{ color: '#F5F4EF' }} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#F5F4EF' }}>support@resourcesneeded.com</p>
            <p className="mt-2" style={{ color: '#F5F4EF' }}>600 N Broad St 446, Suite 5, Middletown, DE 19709</p>
            <a href="tel:+18335719204" className="mt-2 block hover:text-white" style={{ color: '#F5F4EF' }}>(833) 571-9204</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #DE7A49', color: '#F5F4EF' }}>
          <p>&copy; 2026 Resources Needed. All rights reserved.</p>
          <p className="mt-2 text-sm">Resources Needed is a service of The Benefit Advisor LLC.</p>
        </div>
      </div>
    </footer>
  );
}
