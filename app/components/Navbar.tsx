'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#C79A3B' : '#FAFAF9';

  return (
    <nav className="shadow-sm" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold" style={{ color: '#C79A3B' }}>Lifestyle Loop</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/how-it-works" style={{ color: linkColor('/how-it-works') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </Link>
              <Link href="/habits" style={{ color: linkColor('/habits') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Habits
              </Link>
              <Link href="/rewards" style={{ color: linkColor('/rewards') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Rewards
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/signup" className="px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#C79A3B', color: '#1A1A1A' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
