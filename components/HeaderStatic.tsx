import Link from 'next/link';

export default function HeaderStatic() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
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
            <a href="/#products" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Products
            </a>
            <Link href="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/help-center" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Help Center
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/sign-in" className="px-4 py-2 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 font-semibold">
              Sign In
            </a>
            <a
              href="/sign-in"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
              }
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="md:hidden hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
          <div className="px-4 py-6 space-y-4">
            <a href="/#products" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Products
            </a>
            <Link href="/pricing" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/help-center" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium">
              Help Center
            </Link>
            <div className="pt-4 space-y-3">
              <a
                href="/sign-in"
                className="w-full px-4 py-2 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 font-semibold text-center block"
              >
                Sign In
              </a>
              <a
                href="/sign-in"
                className="w-full px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}