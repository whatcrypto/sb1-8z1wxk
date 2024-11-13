import { ArrowRight, ChevronDown, ChevronRight, ChevronUp, CreditCard, DollarSign, Shield, Signal, TrendingUp, Users, Wallet, Bitcoin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      text: "Finally, a crypto platform that speaks my language! No confusing charts or technical jargon - just clear guidance on what to buy and when.",
      name: "Michael R.",
      role: "New Crypto Investor"
    },
    {
      text: "The model portfolios are fantastic. I've been following the Balanced Growth strategy and it's performed better than my own picks.",
      name: "David L.",
      role: "Part-time Trader"
    },
    {
      text: "The risk management guidance has been invaluable. It's helped me avoid common mistakes and protect my investments.",
      name: "James K.",
      role: "Retail Investor"
    }
  ];

  const faqs = [
    {
      question: "How does WhatCrypto help me invest in crypto?",
      answer: "We provide clear, actionable buy and sell recommendations for cryptocurrencies, along with specific entry points, targets, and stop-loss levels. Our guidance is written in plain English, making it easy for beginners to understand and follow."
    },
    {
      question: "Do I need any trading experience?",
      answer: "No prior trading experience is required. Our platform is designed to guide both beginners and experienced investors with clear explanations and step-by-step guidance."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your current billing period."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Know What Crypto to Buy,</span>
              <span className="block text-blue-600">When to Buy, and When to Sell</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Simple, clear guidance for your crypto investment journey. No complex charts or confusing terms - just straightforward recommendations you can trust.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Clear Guidance for Every Step
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple, actionable insights that help you make better investment decisions
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <Signal className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Clear Buy/Sell Signals</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Get straightforward recommendations based on market conditions and risk levels
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Smart Alerts</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Receive timely notifications about market opportunities and risks
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Risk Protection</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Stay protected with our proven risk management strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Our Members Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands of successful crypto investors
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm px-6 py-8 hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg">
                <button
                  className="w-full px-4 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-5">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Start Your Crypto Journey?
            </h2>
            <div className="mt-8 flex justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}