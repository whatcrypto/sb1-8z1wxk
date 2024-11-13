import { ArrowRight, BarChart3, Bell, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'We Monitor Markets',
    description: 'Our system analyzes markets to find the best opportunities for you.',
    icon: BarChart3,
    details: 'Using advanced market analysis, we track price movements, volume, and market sentiment to identify potential opportunities.',
  },
  {
    title: 'You Get Clear Signals',
    description: 'Receive specific buy and sell recommendations.',
    icon: Bell,
    details: 'Get straightforward notifications about when to enter or exit positions, complete with target prices and stop-loss levels.',
  },
  {
    title: 'We Guide You',
    description: 'Step-by-step guidance on when to buy, sell, and how much to invest.',
    icon: Users,
    details: 'Follow our clear instructions on position sizing, entry points, and exit strategies tailored to your risk tolerance.',
  },
  {
    title: 'You Stay Protected',
    description: 'Every recommendation includes risk management.',
    icon: Shield,
    details: 'Each trade comes with specific risk management guidelines to help protect your capital and maximize potential returns.',
  },
];

export function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            How WhatCrypto Works
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to successful crypto investing starts here
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pb-12">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-14 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex items-start group">
                  <span className="flex h-12 items-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 group-hover:bg-blue-700">
                      <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                    <p className="mt-2 text-lg text-gray-500">{step.description}</p>
                    <div className="mt-4 bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-gray-600">{step.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}