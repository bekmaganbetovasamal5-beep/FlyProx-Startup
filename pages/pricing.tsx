import Head from 'next/head';
import React, { useState } from 'react';

export default function Pricing() {
  const [callMinutes, setCallMinutes] = useState(500);
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Calculate monthly pricing based on call minutes
  const calculatePrice = (minutes) => {
    const pricePerMinute = 0.20; // $0.20 per minute
    return Math.round(minutes * pricePerMinute);
  };

  const monthlyPrice = calculatePrice(callMinutes);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI voice agents',
      features: [
        '495 minutes included ($0.20/min)',
        '20 minutes free trial',
        '1 AI voice agent',
        'Basic analytics dashboard',
        'Email support during business hours',
        'Standard voice quality',
        'Basic integrations',
        '$0.20 per additional minute'
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
      id: 'professional',
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing teams that need more minutes',
      features: [
        '995 minutes included ($0.20/min)',
        '20 minutes free trial',
        '3 AI voice agents',
        'Advanced analytics dashboard',
        'Priority email & chat support',
        'Premium voice quality',
        'All integrations',
        'Custom knowledge base',
        'Call recording',
        '$0.20 per additional minute'
      ],
      excludedFeatures: [
        'Dedicated account manager',
        'Custom voice cloning',
        'Custom AI model development'
      ],
      buttonText: 'Get Started',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Custom solution for large organizations',
      features: [
        'Custom volume pricing',
        'Unlimited AI agents',
        'Custom analytics dashboard',
        '24/7 dedicated support',
        'Custom voice cloning',
        'Advanced integrations',
        'Custom AI training',
        'Call recording & transcription',
        'SLA guarantee',
        'Dedicated account manager',
        'Custom pricing for high volume'
      ],
      excludedFeatures: [],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  const usageTiers = [
    {
      minutes: 495,
      price: 99
    },
    {
      minutes: 995,
      price: 199
    },
    {
      minutes: 1495,
      price: 299
    },
    {
      minutes: 1995,
      price: 399
    },
    {
      minutes: 2495,
      price: 499
    },
    {
      minutes: 2995,
      price: 599
    }
  ];

  const faqs = [
    {
      question: "How does the $0.20/minute pricing work?",
      answer: "Each minute your AI agent spends on calls costs just $0.20. Included minutes in your plan are billed upfront, and any additional usage is billed at the same $0.20 rate."
    },
    {
      question: "What's included in the 20 minutes free trial?",
      answer: "Get 20 minutes absolutely free to test our AI agents. No credit card required, just sign up and start making calls to see how our system works."
    },
    {
      question: "How are monthly call minutes billed?",
      answer: "Included minutes are billed monthly with your plan. Any additional minutes beyond your plan are billed at $0.20 each. You can upgrade your plan anytime to get more included minutes."
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
      question: "Do you offer custom pricing for high volume?",
      answer: "Yes, we offer custom pricing for enterprise clients needing 10,000+ minutes per month. Contact our sales team to discuss volume discounts."
    }
  ];

  return (
    <>
      <Head>
        <title>Pricing - FlyProx AI</title>
        <meta name="description" content="Transparent pricing for AI voice agents. Choose the plan that fits your business needs." />
      </Head>

      {/* Main content - Header/Footer handled by _app.tsx */}

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-16">
              Simple <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">$0.20/minute</span>
            </h2>
            </div>
        </section>

        {/* Usage Calculator */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Calculate Your Monthly Cost
            </h2>

            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-300">Select Monthly Minutes</span>
                  <span className="text-3xl font-bold text-yellow-400">{callMinutes.toLocaleString()}</span>
                </div>

                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={callMinutes}
                  onChange={(e) => setCallMinutes(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, rgb(250, 204, 21) 0%, rgb(250, 204, 21) ${((callMinutes - 100) / 2900) * 100}%, rgb(55, 65, 81) ${((callMinutes - 100) / 2900) * 100}%, rgb(55, 65, 81) 100%)`
                  }}
                />

                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>100</span>
                  <span>3,000+</span>
                </div>
              </div>

              <div className="text-center py-8 border-t border-gray-800">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-white">${monthlyPrice.toLocaleString()}</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">
                  {callMinutes >= 3000 ? (
                    <>
                      For volumes exceeding 3k minutes,{' '}
                      <a href="mailto:sales@flyprox.com" className="text-yellow-400 hover:text-yellow-300 underline">contact sales</a>
                    </>
                  ) : (
                    `Just $0.20 per minute with 20 minutes free trial`
                  )}
                </p>
              </div>
            </div>

            {/* Quick Tiers */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {usageTiers.map((tier) => (
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
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      window.location.href = '/sign-in';
                    }}
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

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black rounded-lg border border-gray-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-900 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-yellow-400 transform transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 border-t border-gray-800">
                      <p className="text-gray-400 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
    </>
  );
}