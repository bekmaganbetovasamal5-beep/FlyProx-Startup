import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      company: 'TechStart Inc.',
      avatar: 'SJ',
      gender: 'female',
      content: 'FlyProx AI has transformed our sales process. We\'ve seen a 300% increase in qualified leads and our conversion rate has never been higher. The AI agents handle initial conversations perfectly, allowing our team to focus on closing deals.',
      rating: 5,
      metrics: {
        value: '300%',
        label: 'Increase in qualified leads'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Sales Director',
      company: 'Growth Corp',
      avatar: 'MC',
      gender: 'male',
      content: 'We were skeptical about AI handling customer interactions, but FlyProx AI exceeded our expectations. The natural conversation flow and ability to understand complex queries is remarkable. Our customers love the instant responses.',
      rating: 5,
      metrics: {
        value: '24/7',
        label: 'Customer support coverage'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'ServicePro',
      avatar: 'ER',
      gender: 'female',
      content: 'Implementation was seamless and the ROI was immediate. We\'ve reduced operational costs by 40% while improving customer satisfaction scores. The analytics dashboard gives us insights we never had before.',
      rating: 5,
      metrics: {
        value: '40%',
        label: 'Reduction in operational costs'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupHub',
      avatar: 'DK',
      gender: 'male',
      content: 'As a startup, we needed to scale our sales efforts without hiring a large team. FlyProx AI was the perfect solution. We can handle hundreds of conversations simultaneously without missing a beat.',
      rating: 5,
      metrics: {
        value: '10x',
        label: 'Faster lead response time'
      }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP of Sales',
      company: 'Enterprise Solutions',
      avatar: 'LT',
      gender: 'female',
      content: 'The custom voice training and integration capabilities set FlyProx AI apart. It truly feels like part of our team. Our sales cycle has shortened by 30% and our team is more productive than ever.',
      rating: 5,
      metrics: {
        value: '30%',
        label: 'Shorter sales cycle'
      }
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Customer Success Lead',
      company: 'GlobalTech',
      avatar: 'JW',
      gender: 'male',
      content: 'Our customer satisfaction scores improved dramatically after implementing FlyProx AI. The AI agents are empathetic, knowledgeable, and available whenever our customers need them. It\'s been a game-changer.',
      rating: 5,
      metrics: {
        value: '95%',
        label: 'Customer satisfaction score'
      }
    },
    {
      id: 7,
      name: 'Alexandra Petrova',
      role: 'Marketing Director',
      company: 'InnovateTech Solutions',
      avatar: 'AP',
      gender: 'female',
      content: 'FlyProx AI has revolutionized our lead generation process. We\'ve seen a 500% increase in qualified leads and our conversion rate has tripled. The AI agents handle initial screening perfectly, allowing our sales team to focus on high-value prospects.',
      rating: 5,
      metrics: {
        value: '500%',
        label: 'Increase in qualified leads'
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customer
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400">
            See what our customers have to say about their experience with FlyProx AI
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 md:p-12 border border-yellow-500/20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={`https://randomuser.me/api/portraits/${testimonials[activeTestimonial].gender === 'female' ? 'women' : 'men'}/${testimonials[activeTestimonial].id}.jpg`}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-4">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539 1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="mb-6">
                  <cite className="text-white font-semibold not-italic">
                    {testimonials[activeTestimonial].name}
                  </cite>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-400">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </span>
                </div>

                {/* Metrics */}
                <div className="bg-gray-800/50 rounded-lg p-4 inline-block">
                  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {testimonials[activeTestimonial].metrics.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonials[activeTestimonial].metrics.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <a
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <a
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <a
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Grid testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1, 7).map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={`https://randomuser.me/api/portraits/${testimonial.gender === 'female' ? 'women' : 'men'}/${testimonial.id}.jpg`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539 1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic">
                "{testimonial.content.substring(0, 150)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Ready to join thousands of satisfied customers?
          </h3>
          <a
            href="/sign-in"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}