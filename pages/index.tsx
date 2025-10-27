import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>FlyProx AI - Increase Your Sales Meetings by 32%</title>
        <meta name="description" content="AI-powered outbound calling that delivers 32% more booked meetings. Automate prospecting, qualification, and scheduling with intelligent AI agents." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero, Demo Video, Problems, and Features will be rendered with Header/Footer from _app.tsx */}
      <Hero />

      {/* Demo Video Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">See FlyProx AI in</span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch our AI agents make real sales calls and book meetings automatically
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-yellow-500/20">
              {/* Responsive Video Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/iAZs2NiIPm"
                  title="FlyProx AI Demo Video"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors">
                <a
                  href="https://youtu.be/iAZs2NiIPm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-8 h-8 text-black ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.192A1 1 0 00-1.41-1.41L10.586 3.415A1 1 0 01-.168.99l3.415 3.415H8a1 1 0 01-1-.707-1.708L12 5.172a1 1 0 01.707 1.708l4.93 2.83a1 1 0 01.416.96L18.344 10.172a1 1 0 01.832.914l-.832 1.414H17a1 1 0 01-1.414-1.414V7a1 1 0 011.414-1.414L16 12.828a1 1 0 00-1.414-1.414L12 8.586l-4-4z" />
                  </svg>
                  <span className="font-bold mr-2">Watch on YouTube</span>
                </a>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-6">
                See how FlyProx AI transforms outbound calling with intelligent prospecting,
                qualification, and automated scheduling. Book 32% more meetings in your first month.
              </p>

              {/* Video Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <h4 className="text-yellow-400 font-bold mb-2">🎯 Smart Prospecting</h4>
                  <p className="text-gray-400 text-sm">AI researches companies and decision-makers</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <h4 className="text-yellow-400 font-bold mb-2">💬 Natural Conversations</h4>
                  <p className="text-gray-400 text-sm">Human-like voice interactions</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <h4 className="text-yellow-400 font-bold mb-2">📅 Instant Scheduling</h4>
                  <p className="text-gray-400 text-sm">Auto-booking in your calendar</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/sign-in"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Book a Live Demo
                </a>
                <a
                  href="https://youtu.be/iAZs2NiIPm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m-4 4h1m-6-8h6a2 2 0 002-2v6a2 2 0 002-2h2a2 2 0 002-2v6a2 2 0 002-2z" />
                  </svg>
                  Watch Full Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
}