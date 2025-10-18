import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Clear auth token after showing thank you page
    const timer = setTimeout(() => {
      localStorage.removeItem('authToken');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Thank You - FlyProx AI</title>
        <meta name="description" content="Thank you for signing up with FlyProx AI" />
      </Head>

      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0c10' }}>
        {/* Background gradient effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Thank You Card */}
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-12 shadow-2xl">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">FP</span>
                </div>
                <span className="text-2xl font-bold text-white">FlyProx</span>
                <span className="text-2xl font-bold text-yellow-400">AI</span>
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You for Signing Up!
            </h1>

            <p className="text-xl text-gray-300 mb-12">
              We've received your information and will be in touch with you soon
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={handleGoHome}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">What's Next?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-400 font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">We'll Contact You</p>
                    <p className="text-gray-400 text-sm">As soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-400 font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Platform Demo</p>
                    <p className="text-gray-400 text-sm">Personal presentation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-yellow-400 font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Get Started</p>
                    <p className="text-gray-400 text-sm">Account setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </>
  );
}