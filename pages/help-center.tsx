import Head from 'next/head';

export default function HelpCenter() {

  const faqCategories = [
    {
      name: "Getting Started",
      icon: "🚀",
      questions: [
        {
          q: "How do I set up my first AI voice agent?",
          a: "Setting up your first AI agent is simple. Sign up for an account, choose your implementation plan (Basic, Business, or Premium), and our team will guide you through the setup process."
        },
        {
          q: "What information do I need to provide?",
          a: "You'll need your business information, call scripts or conversation flows, integration requirements (CRM, phone systems), and preferred voice characteristics."
        },
        {
          q: "How long does implementation take?",
          a: "Basic setup can be done in 1-2 weeks. Business plans typically take 2-4 weeks, and Premium plans vary based on complexity."
        },
        {
          q: "Do I need technical knowledge?",
          a: "No technical knowledge required for Basic and Business plans. Our team handles all technical setup. Premium plans include comprehensive support."
        },
        {
          q: "Can I customize the AI voice?",
          a: "Yes! All plans include some level of voice customization. Business and Premium plans include custom voice training for your brand."
        }
      ]
    },
    {
      name: "Billing & Pricing",
      icon: "💳",
      questions: [
        {
          q: "How does the monthly billing work?",
          a: "You're billed monthly based on your call minute usage. The implementation fee is a one-time charge for setup and configuration."
        },
        {
          q: "Can I change my plan anytime?",
          a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
        },
        {
          q: "What happens if I exceed my minutes?",
          a: "If you exceed your monthly minutes, you'll be billed for the additional usage at your current rate. We'll notify you when you're approaching your limit."
        },
        {
          q: "Is there a free trial available?",
          a: "We offer a 14-day free trial for Business plans. Contact our sales team to start your trial."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise accounts."
        }
      ]
    },
    {
      name: "Technical Support",
      icon: "🔧",
      questions: [
        {
          q: "What integrations do you support?",
          a: "We support major CRM systems (Salesforce, HubSpot), phone systems (Twilio, Vonage), and custom API integrations for Enterprise customers."
        },
        {
          q: "How reliable are the AI agents?",
          a: "Our AI agents have 99.9% uptime with automatic failover. We monitor performance 24/7 and provide real-time alerts for any issues."
        },
        {
          q: "Can I customize the AI responses?",
          a: "Yes, all plans include some level of customization. Business and Premium plans include custom AI training and conversation flow design."
        },
        {
          q: "What languages are supported?",
          a: "We support 100+ languages including English, Spanish, French, German, Chinese, Japanese, and many more."
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We use bank-level encryption and are fully compliant with GDPR, HIPAA, and SOC 2 standards."
        }
      ]
    },
    {
      name: "Features & Usage",
      icon: "⚡",
      questions: [
        {
          q: "How many calls can AI agents handle simultaneously?",
          a: "There's no limit to concurrent calls. Our AI agents can handle unlimited simultaneous conversations based on your plan's minute allowance."
        },
        {
          q: "Can AI agents handle complex conversations?",
          a: "Yes, our AI can understand context, handle multi-turn conversations, and manage complex customer queries with human-like empathy."
        },
        {
          q: "Can I monitor AI agent performance?",
          a: "All plans include a dashboard to monitor performance, call recordings (where compliant), sentiment analysis, and conversation analytics."
        },
        {
          q: "Can AI agents make outbound calls?",
          a: "Yes, Business and Premium plans support outbound calling for follow-ups, appointment reminders, and proactive customer outreach."
        },
        {
          q: "What happens during system updates?",
          a: "Updates are seamless with zero downtime. Your AI agents continue operating normally during maintenance and updates."
        }
      ]
    }
  ];

  
  return (
    <>
      <Head>
        <title>Help Center - FlyProx AI</title>
        <meta name="description" content="Get help with FlyProx AI voice agents. Find answers to common questions and contact support." />
      </Head>

      {/* Main content will be wrapped by Header/Footer from _app.tsx */}
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Help You?</span>
            </h1>
  
            </div>
        </section>

        
        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details key={faqIndex} className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none p-3 bg-black rounded-lg hover:bg-gray-800 transition-colors">
                          <span className="text-gray-300 text-sm font-medium">{faq.q}</span>
                          <svg className="w-4 h-4 text-yellow-400 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="mt-2 px-3 text-gray-400 text-sm">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info - Simplified to Email Only */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 mb-2">support@flyprox.com</p>
            </div>
          </div>
        </section>
    </>
  );
}