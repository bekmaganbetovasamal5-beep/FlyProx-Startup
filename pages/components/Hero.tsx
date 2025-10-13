import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-600/5 via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            AI Voice Agents
          </span>
          <br />
          <span className="text-white">for Sales & Support</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform your customer interactions with intelligent AI agents that handle
          sales calls, support tickets, and lead qualification 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
            Start Free Trial
          </button>
          <button className="px-8 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              required
            />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
              Get Started
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            No credit card required • 14-day free trial
          </p>
        </form>

        {/* Social proof */}
        <div className="mt-20">
          <p className="text-gray-500 mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'].map((company) => (
              <div key={company} className="w-24 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}