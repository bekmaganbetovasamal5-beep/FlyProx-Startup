import Head from 'next/head';
import React, { useState } from 'react';

export default function HelpCenter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        urgency: 'normal'
      });
    }, 3000);
  };

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

  const resources = [
    {
      title: "API Documentation",
      description: "Complete API reference for developers",
      icon: "📚",
      link: "#api-docs"
    },
    {
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      icon: "🔗",
      link: "#integrations"
    },
    {
      title: "Best Practices",
      description: "Tips for optimal AI agent performance",
      icon: "💡",
      link: "#best-practices"
    },
    {
      title: "Video Tutorials",
      description: "Watch and learn from our experts",
      icon: "🎥",
      link: "#tutorials"
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - FlyProx AI</title>
        <meta name="description" content="Get help with FlyProx AI voice agents. Find answers to common questions and contact support." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How Can We <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Help You?</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Find answers, get support, and learn how to make the most of FlyProx AI
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors pr-12"
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="block p-6 bg-black rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all group"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </a>
              ))}
            </div>
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

        {/* Contact Form */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Still Need <span className="text-yellow-400">Help?</span>
              </h2>
              <p className="text-xl text-gray-400">
                Our support team is here to assist you
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-8 text-center">
                <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-black rounded-xl p-8 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Urgency</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  >
                    <option value="low">Low - General question</option>
                    <option value="normal">Normal - Technical issue</option>
                    <option value="high">High - Service disruption</option>
                    <option value="critical">Critical - Emergency</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    placeholder="Describe your issue or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018 0 8 8 0 00-8z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-2">support@flyprox.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400 mb-2">+1 (234) 567-890</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400 mb-2">Available 24/7</p>
                <p className="text-sm text-gray-500">For Business & Premium plans</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}