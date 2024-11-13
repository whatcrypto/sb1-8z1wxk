import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does WhatCrypto help me invest in crypto?',
    answer: 'WhatCrypto provides clear, actionable guidance on cryptocurrency investments. We analyze market conditions and provide straightforward buy/sell signals, along with specific entry points, target prices, and risk management recommendations. Our guidance is designed to be easy to understand and implement, whether you\'re new to crypto or an experienced investor.',
  },
  {
    question: 'Do I need any trading experience?',
    answer: 'No prior trading experience is required. Our platform is designed to guide both beginners and experienced investors. We provide clear explanations, step-by-step guidance, and risk management strategies tailored to your experience level and investment goals.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term commitments required. Your subscription will continue until the end of your current billing period, and you won\'t be charged again after cancellation.',
  },
  {
    question: 'How are the investment recommendations generated?',
    answer: 'Our recommendations are based on comprehensive market analysis, including price action, volume, market sentiment, and fundamental factors. We combine multiple indicators and analysis methods to provide clear, actionable guidance while managing risk.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide comprehensive support including detailed market analysis, clear buy/sell signals, risk management guidance, and educational resources. Our goal is to help you make informed investment decisions with confidence.',
  },
  {
    question: 'How often are recommendations updated?',
    answer: 'Our market analysis and recommendations are updated regularly based on market conditions. You\'ll receive timely alerts for new opportunities and important market developments that affect your investment strategy.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about WhatCrypto
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}