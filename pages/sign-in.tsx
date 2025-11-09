import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SignIn() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [conversionInterest, setConversionInterest] = useState('');
  const [revenueRange, setRevenueRange] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToMarketing, setAgreeToMarketing] = useState(false);
  const [willingToPay, setWillingToPay] = useState('');
  const [wouldBuyAt1200, setWouldBuyAt1200] = useState('');
  const [fairPriceFor1000Calls, setFairPriceFor1000Calls] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Save all form data to localStorage for easy access
  const saveFormData = () => {
    const formData = {
      timestamp: new Date().toISOString(),
      firstName,
      email,
      companySize,
      willingToPay,
      wouldBuyAt1200,
      fairPriceFor1000Calls,
      agreeToTerms,
      agreeToMarketing,
      userAgent: navigator.userAgent,
      page: 'sign-in'
    };

    localStorage.setItem('flyproxFormData', JSON.stringify(formData));

    // Also save to a separate array for multiple entries
    const existingData = JSON.parse(localStorage.getItem('flyproxSubmissions') || '[]');
    existingData.push(formData);
    localStorage.setItem('flyproxSubmissions', JSON.stringify(existingData));

    console.log('✅ Form data saved:', formData);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validation
    if (!firstName || !email || !companySize) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      setIsLoading(false);
      return;
    }

    // Save all form data before submission
    console.log('💾 Saving form data...');
    saveFormData();
    console.log('✅ Form data saved successfully');

    // Simulate registration/sign in
    setTimeout(() => {
      try {
        console.log('🚀 Starting redirect process...');

        // Save authentication data first
        localStorage.setItem('authToken', 'demo-token');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', firstName);
        console.log('✅ Authentication data saved');

        // Clear loading state
        setIsLoading(false);
        console.log('✅ Loading state cleared');

        // Redirect to thank you page as the LAST step
        console.log('🔄 Redirecting to /thank-you/');
        window.location.href = '/thank-you/';
      } catch (error) {
        console.error('❌ Error during redirect:', error);
        setError('An error occurred during redirect. Please try again.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Sign In - FlyProx AI</title>
        <meta name="description" content="Sign in to your FlyProx AI account" />
      </Head>

      <div className="min-h-screen flex items-start justify-center pt-24" style={{ backgroundColor: '#0a0c10' }}>
        {/* Background gradient effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
        </div>

        {/* Sign In Card */}
        <div className="relative z-10 w-full max-w-lg mx-auto px-4">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">FP</span>
                </div>
                <span className="text-2xl font-bold text-white">FlyProx</span>
                <span className="text-2xl font-bold text-yellow-400">AI</span>
              </div>
            </div>

            {/* Sign In Title */}
            <h2 className="text-3xl font-bold text-center text-white mb-2">
               Welcome
            </h2>
            <p className="text-center text-gray-400 mb-6">
              Enter your details to access your account
            </p>

            
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name Field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="John"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                />
              </div>

  
              {/* Company Size Field */}
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Size <span className="text-red-400">*</span>
                </label>
                <select
                  id="companySize"
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              {/* Pricing Survey Questions */}
              <div className="space-y-4 pt-4 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">Pricing Survey</h3>

                {/* Question 1: Willingness to Pay */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    How much are you willing to pay for a service that increases booked meetings by 32%?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: '$0-500/month', label: '$0-500/month' },
                      { value: '$500-1,000/month', label: '$500-1,000/month' },
                      { value: '$1,000-2,500/month', label: '$1,000-2,500/month' },
                      { value: '$2,500-5,000/month', label: '$2,500-5,000/month' },
                      { value: '$5,000+/month', label: '$5,000+/month' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="willingToPay"
                          value={option.value}
                          checked={willingToPay === option.value}
                          onChange={(e) => setWillingToPay(e.target.value)}
                          className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 2: Purchase Decision at $1,200 */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    If FlyProx AI cost $1,200/month and made 500 calls with 32% conversion, would you buy?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'yes-buy-now', label: 'Yes, I would buy now' },
                      { value: 'yes-with-trial', label: 'Yes, but I need a trial version' },
                      { value: 'maybe-depends', label: 'Maybe, depends on results' },
                      { value: 'too-expensive', label: 'Too expensive' },
                      { value: 'not-interested', label: 'Not interested' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="wouldBuyAt1200"
                          value={option.value}
                          checked={wouldBuyAt1200 === option.value}
                          onChange={(e) => setWouldBuyAt1200(e.target.value)}
                          className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 3: Fair Price for 1000 Calls */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    What price seems fair for 1000 AI calls with full analytics?
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: '$200-500', label: '$200-500' },
                      { value: '$500-1,000', label: '$500-1,000' },
                      { value: '$1,000-2,000', label: '$1,000-2,000' },
                      { value: '$2,000+', label: '$2,000+' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          name="fairPriceFor1000Calls"
                          value={option.value}
                          checked={fairPriceFor1000Calls === option.value}
                          onChange={(e) => setFairPriceFor1000Calls(e.target.value)}
                          className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                        <span className="ml-2 text-sm text-gray-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terms and Marketing Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    I agree to the <a href="#" className="text-yellow-400 hover:text-yellow-300">Terms of Service</a> and <a href="#" className="text-yellow-400 hover:text-yellow-300">Privacy Policy</a> <span className="text-red-400">*</span>
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={agreeToMarketing}
                    onChange={(e) => setAgreeToMarketing(e.target.checked)}
                    className="mt-1 h-4 w-4 bg-gray-700 border-gray-600 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-300">
                    I agree to receive marketing communications from FlyProx
                  </span>
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-lg font-semibold text-black transition-all duration-300 transform hover:scale-105 mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018 0 8 8 0 00-8z" />
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  'Start'
                )}
              </button>
            </form>

          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </>
  );
}