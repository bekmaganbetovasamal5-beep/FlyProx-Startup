import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-yellow-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">FP</span>
            </div>
            <span className="text-2xl font-bold text-white">FlyProx</span>
            <span className="text-2xl font-bold text-yellow-400">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Products
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/help-center" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Help Center
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 font-semibold">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
            <div className="px-4 py-6 space-y-4">
              {['Products', 'Pricing', 'Help Center', 'About'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Help Center' ? '/help-center' : `#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full px-4 py-2 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 font-semibold">
                  Sign In
                </button>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}