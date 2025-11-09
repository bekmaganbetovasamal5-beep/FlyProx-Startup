import Head from 'next/head';

export default function ThankYou() {
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

        {/* Thank You Content */}
        <div className="relative z-10 text-center px-4">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-black text-2xl font-bold">✓</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Thank you for signing up!
          </h1>

          <p className="text-xl text-gray-300 max-w-lg mx-auto mb-8">
            We will contact you soon.
          </p>

          {/* Back to Home Link */}
          <div>
            <a href="/"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </a>
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