import Head from 'next/head';

export default function ThankYou() {
  const handleInteraction = () => {
    sessionStorage.setItem('thankYouInteracted', 'true');
  };

  return (
    <>
      <Head>
        <title>Спасибо за регистрацию! - FlyProx AI</title>
        <meta name="description" content="Спасибо за регистрацию в FlyProx AI - ваше AI решение для автоматизации звонков" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          {/* Success Animation */}
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-3xl font-bold">✓</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            THANK YOU FOR SIGNING UP!
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to FlyProx AI! Your account has been successfully created, and we're already preparing a personalized solution for your business.
          </p>

          {/* Business Info Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-white">🚀 Why FlyProx AI?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400 mb-1">32%</div>
                <div className="text-sm text-gray-300">Conversion Increase</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300">Works Without Days Off</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400 mb-1">$99</div>
                <div className="text-sm text-gray-300">Monthly Cost</div>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-4 hover:bg-gray-700/70 transition-all hover:scale-105">
                <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-sm text-gray-300">Calls Per Day</div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4 text-white">🎯 How It Works</h3>
              <div className="space-y-4 ml-6">
                <div className="flex gap-4">
                  <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-white">Personalization</div>
                    <div className="text-gray-300 text-sm">Our manager will contact you to understand your business and goals</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-white">AI Setup</div>
                    <div className="text-gray-300 text-sm">We'll configure your AI agent for your specific needs</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-white">Launch</div>
                    <div className="text-gray-300 text-sm">AI agents start processing calls and booking meetings</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-7 h-7 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <div className="font-semibold text-white">Optimization</div>
                    <div className="text-gray-300 text-sm">Continuous improvement based on results and feedback</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-700">
              <div className="text-3xl mb-4">💰</div>
              <div className="font-semibold text-white mb-2">98% Cost Savings</div>
              <div className="text-sm text-gray-300">Compared to traditional sales teams</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-700">
              <div className="text-3xl mb-4">🎯</div>
              <div className="font-semibold text-white mb-2">Precise Targeting</div>
              <div className="text-sm text-gray-300">AI analyzes and processes only relevant leads</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-700">
              <div className="text-3xl mb-4">📊</div>
              <div className="font-semibold text-white mb-2">Real-time Analytics</div>
              <div className="text-sm text-gray-300">Complete statistics for all calls and conversions</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all hover:scale-105 border border-gray-700">
              <div className="text-3xl mb-4">🔄</div>
              <div className="font-semibold text-white mb-2">Continuous Improvement</div>
              <div className="text-sm text-gray-300">AI constantly learns based on results</div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <a
              href="/"
              onClick={handleInteraction}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all hover:shadow-lg"
            >
              🏠 Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}