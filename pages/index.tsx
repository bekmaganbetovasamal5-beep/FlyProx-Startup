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
                  src="https://www.youtube.com/embed/iAZs2NiIPmM?rel=0&showinfo=1"
                  title="FlyProx AI Demo Video"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
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

              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="https://www.youtube.com/watch?v=iAZs2NiIPmM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
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