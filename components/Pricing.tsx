import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: isAnnual ? 79 : 99,
      features: [
        '500 minutes/month',
        '1 AI voice agent',
        'Basic analytics',
        'Email support',
        '1 language',
        'Standard voice',
        'Basic integrations',
      ],
      notIncluded: ['Custom training', 'API access', 'Priority support'],
      popular: false,
      cta: 'Sign In',
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams needing advanced features',
      price: isAnnual ? 199 : 249,
      features: [
        '2,000 minutes/month',
        '5 AI voice agents',
        'Advanced analytics',
        'Priority support',
        '10+ languages',
        'Premium voices',
        'All integrations',
        'Custom knowledge base',
        'Call recording',
      ],
      notIncluded: ['Dedicated account manager', 'Custom training'],
      popular: true,
      cta: 'Sign In',
    },
    {
      name: 'Enterprise',
      description: 'Custom solution for large organizations',
      price: 'Custom',
      features: [
        'Unlimited minutes',
        'Unlimited AI agents',
        'Custom analytics',
        '24/7 dedicated support',
        '50+ languages',
        'Custom voice cloning',
        'Advanced integrations',
        'Custom training',
        'Call recording & transcription',
        'SLA guarantee',
        'Dedicated account manager',
        'On-premise option',
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the perfect plan for your business needs
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-800 transition-colors"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 text-sm text-yellow-400">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-yellow-500/10 to-gray-900 border-2 border-yellow-500 shadow-lg shadow-yellow-500/20'
                  : 'bg-gray-900 border border-gray-800'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                {typeof plan.price === 'number' && (
                  <span className="text-gray-400 ml-2">/month</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li key={idx} className="flex items-start opacity-50">
                    <svg className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                onClick={() => plan.cta !== 'Contact Sales' && router.push('/sign-in')}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105'
                    : 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          </div>
      </div>
    </section>
  );
}