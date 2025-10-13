import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Pricing() {
  const [callMinutes, setCallMinutes] = useState(5000);
  const [selectedPlan, setSelectedPlan] = useState('business');

  const router = useRouter();

  // Calculate monthly pricing based on call minutes
  const calculatePrice = (minutes) => {
    const basePrice = 350; // Base price for 1000 minutes
    const pricePerMinute = 0.35; // $0.35 per minute
    return Math.round(basePrice + (minutes * pricePerMinute));
  };

  const monthlyPrice = calculatePrice(callMinutes);

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$3,000',
      period: 'one-time',
      description: 'Perfect for small businesses getting started with AI voice agents',
      features: [
        'Self-guided implementation',
        'You own all setup and configuration',
        'Up to 3 months post-launch monitoring',
        'Basic support structure',
        'Up to 2 AI voice agents',
        'Email support during business hours',
        'Basic analytics dashboard',
        'Standard voice quality'
      ],
      excludedFeatures: [
        'Custom AI training',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      price: '$6,000',
      period: 'one-time',
      description: 'Ideal for growing teams that need assisted implementation',
      features: [
        'Assisted implementation by FlyProxAI team',
        'We help configure 1 AI agent',
        'Life of contract monitoring',
        'Monthly check-ins with Customer Success Manager',
        'Monthly webinars and success reports',
        'Up to 5 AI voice agents',
        'Priority email & chat support',
        'Advanced analytics dashboard',
        'Custom voice training',
        'Basic integrations setup'
      ],
      excludedFeatures: [
        'Dedicated account manager',
        'White-glove service',
        'Custom AI model development'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'Contact Sales',
      period: '',
      description: 'Fully managed service for enterprises that need comprehensive solutions',
      features: [
        'Fully managed implementation',
        'FlyProxAI manages up to 10+ AI agents',
        'Daily/weekly check-ins with dedicated team',
        'We own all integrations and data imports',
        'Custom AI model development',
        'Dedicated account manager',
        '24/7 phone, email, and chat support',
        'Enterprise-grade analytics',
        'Unlimited custom integrations',
        'White-globe service',
        'Custom SLAs',
        'On-premise deployment options'
      ],
      excludedFeatures: [],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const implementationTiers = [
    {
      minutes: 1000,
      price: 700
    },
    {
      minutes: 2500,
      price: 1225
    },
    {
      minutes: 5000,
      price: 1750
    },
    {
      minutes: 10000,
      price: 3150
    },
    {
      minutes: 25000,
      price: 6125
    },
    {
      minutes: 50000,
      price: 10500
    }
  ];

  const faqs = [
    {
      question: "What's included in the one-time implementation fee?",
      answer: "The implementation fee covers setup, configuration, training, and launch support. The level of service depends on the plan you choose - from self-guided setup to fully managed implementation."
    },
    {
      question: "How are monthly call minutes billed?",
      answer: "Call minutes are billed monthly based on usage. Unused minutes don't roll over, but you can adjust your plan at any time. Overages are billed at the same rate per minute."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What happens if I exceed my call minutes?",
      answer: "If you exceed your monthly minutes, you'll be billed for the additional usage at your current rate. We'll notify you when you're approaching your limit."
    },
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for enterprise clients with specific needs. Contact our sales team to discuss your requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">FP</span>
              </div>
              <span className="text-2xl font-bold text-white">FlyProx</span>
              <span className="text-2xl font-bold text-yellow-400">AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => router.push('/#products')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Products
              </button>
              <button className="text-yellow-400 font-medium">Pricing</button>
              <button
                onClick={() => router.push('/#resources')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Resources
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 font-semibold">
                Sign In
              </button>
              <button
                onClick={() => router.push('/')}
                className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Scale Your Team Without<span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> the Overhead</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Transparent pricing for AI voice agents that handle your sales and support 24/7. No hidden fees, just results.
          </p>
        </div>
      </section>

      {/* Usage Calculator */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Monthly Call Minutes
          </h2>

          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg text-gray-300">Select Monthly Minutes</span>
                <span className="text-3xl font-bold text-yellow-400">{callMinutes.toLocaleString()}</span>
              </div>

              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={callMinutes}
                onChange={(e) => setCallMinutes(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgb(250, 204, 21) 0%, rgb(250, 204, 21) ${((callMinutes - 1000) / 49000) * 100}%, rgb(55, 65, 81) ${((callMinutes - 1000) / 49000) * 100}%, rgb(55, 65, 81) 100%)`
                }}
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <div className="text-center py-8 border-t border-gray-800">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-white">${monthlyPrice.toLocaleString()}</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">
                {callMinutes >= 50000 ? (
                  <>
                    For volumes exceeding 50k minutes,{' '}
                    <button className="text-yellow-400 hover:text-yellow-300 underline">contact sales</button>
                  </>
                ) : (
                  `Starting at $350 for the first 1,000 minutes`
                )}
              </p>
            </div>
          </div>

          {/* Quick Tiers */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {implementationTiers.map((tier) => (
              <button
                key={tier.minutes}
                onClick={() => setCallMinutes(tier.minutes)}
                className={`p-4 rounded-lg border transition-all ${
                  callMinutes === tier.minutes
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-sm text-gray-400">{tier.minutes.toLocaleString()} min</div>
                <div className="text-lg font-bold text-white">${tier.price}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One-Time Implementation Fee
            </h2>
            <p className="text-xl text-gray-400">
              Choose the implementation plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-yellow-500/10 to-gray-900 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20 transform scale-105'
                    : selectedPlan === plan.id
                    ? 'bg-gray-900 border-2 border-yellow-500'
                    : 'bg-gray-900 border border-gray-800 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.excludedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start opacity-50">
                      <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700'
                      : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Got Questions? Let's Talk AI
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-black rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate the Work that Slows You Down?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of companies using FlyProxAI to accelerate their growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">FP</span>
                </div>
                <span className="text-2xl font-bold text-white">FlyProx</span>
                <span className="text-2xl font-bold text-yellow-400">AI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform your sales and support with intelligent AI voice agents that work 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} FlyProxAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: rgb(250, 204, 21);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: rgb(250, 204, 21);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }
      `}</style>
    </div>
  );
}