export default function Problems() {
  const problems = [
    {
      title: "Low Call Conversion Rates",
      description: "Your reps make 100+ calls daily, but only 1-2% convert to meetings. Burnout and declining motivation are inevitable with these results."
    },
    {
      title: "Poor Personalization",
      description: "Cold calls without research and client analysis lead to immediate rejections. Reps waste time on unqualified leads instead of focusing on hot prospects."
    },
    {
      title: "Scaling Complexity",
      description: "Quality drops as your team grows. Training new reps takes months, and lack of analytics prevents performance optimization and quality control."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Challenges That Slow Down</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Your Sales Growth
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Most B2B sales teams face the same critical challenges
            that stand in the way of increased revenue and scalable growth
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Problem Icon */}
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>

              {/* Problem Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {problem.title}
              </h3>

              {/* Problem Description */}
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            FlyProx AI solves all these challenges with intelligent automation
            that delivers consistent results without the burnout
          </p>
          <a
            href="/sign-in"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}