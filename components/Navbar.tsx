// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react'; // For hamburger icons
import { Button } from './ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image
              height={40}
              width={40}
              alt='logo'
              src="/logo.svg"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Clerk UserButton for signed-in users */}
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: 'h-10 w-10'
                  }
                }}
              />
              <Link href="/dashboard">
              <Button>
                Dashboard
              </Button>
              </Link>
            </SignedIn>
            {/* Sign In link for signed-out users */}
            <SignedOut>
              <Link
                href="/sign-in"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Sign In
              </Link>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <SignedIn>
                <div className="px-3 py-2">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: 'h-10 w-10'
                      }
                    }}
                  />
                </div>
                <Link href="/dashboard">
              <Button>
                Dashboard
              </Button>
              </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;