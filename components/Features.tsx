import { useState } from 'react';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'AI-Powered Prospecting',
      description: 'Automatically researches companies and decision-makers to create hyper-personalized outreach that gets responses.',
      details: ['Company intelligence', 'Decision-maker identification', 'Personalization at scale', 'Intent scoring']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Intelligent Lead Qualification',
      description: 'AI instantly qualifies prospects based on budget, authority, need, and timeline - booking only high-intent meetings.',
      details: ['BANT qualification', 'Real-time scoring', 'Custom criteria', 'Automatic disqualification']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Dynamic Script Generation',
      description: 'Real-time script adjustment based on prospect responses and conversation context for maximum engagement.',
      details: ['Context-aware conversations', 'Real-time adaptation', 'Industry-specific scripts', 'A/B testing']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Automated Meeting Scheduling',
      description: 'AI directly books meetings in your calendar, eliminating back-and-forth and ensuring high show-up rates.',
      details: ['Calendar integration', 'Smart time zones', 'Automated reminders', 'CRM sync']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Performance Analytics',
      description: 'Track call-to-meeting conversion rates, AI performance, and ROI metrics with detailed dashboards.',
      details: ['Conversion tracking', 'AI performance metrics', 'ROI calculation', 'Custom reports']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '32% More Meetings Guaranteed',
      description: 'Proven to increase booked meetings by 32% or your money back - see measurable results in 30 days.',
      details: ['32% increase guarantee', '30-day results', 'Performance tracking', 'Risk-free trial']
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered Features for
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Outbound Sales Success</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to automate prospecting, qualification, and booking meetings at scale
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeFeature === index ? 'border-2 border-yellow-500 shadow-lg shadow-yellow-500/20' : ''
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg mr-4">
                  <div className="text-yellow-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-12 border border-yellow-500/20">
          <h3 className="text-3xl font-bold mb-4 text-white">
            Ready to transform your sales process?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of companies using AI to accelerate their growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sign-in"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get Started
            </a>
            <a
              href="/sign-in"
              className="px-8 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}