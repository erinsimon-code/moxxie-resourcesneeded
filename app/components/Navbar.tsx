'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#E3B341' : '#F4F7FA';

  return (
    <nav className="shadow-sm" style={{ backgroundColor: '#0F2A4A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold" style={{ color: '#E3B341' }}>Wallet Wiser</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/for-employers" style={{ color: linkColor('/for-employers') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                For Employers
              </Link>
              <Link href="/for-employees" style={{ color: linkColor('/for-employees') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                For Employees
              </Link>
              <Link href="/workshops-guides" style={{ color: linkColor('/workshops-guides') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Workshops & Guides
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/signup" className="px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#E3B341', color: '#0F2A4A' }}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
