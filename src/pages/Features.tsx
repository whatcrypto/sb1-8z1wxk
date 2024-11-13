import { ArrowRight, Shield, Signal, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Clear Buy/Sell Signals',
    description: 'Get straightforward signals for when to buy or sell, based on market analysis.',
    icon: Signal,
    details: [
      'Real-time market analysis',
      'Clear entry and exit points',
      'Risk-adjusted position sizing',
      'Stop-loss recommendations'
    ]
  },
  {
    name: 'Smart Alerts',
    description: 'Receive timely notifications about market opportunities and risks.',
    icon: TrendingUp,
    details: [
      'Price target alerts',
      'Market trend notifications',
      'Risk warning signals',
      'Portfolio rebalancing reminders'
    ]
  },
  {
    name: 'Risk Protection',
    description: 'Stay protected with our proven risk management strategies.',
    icon: Shield,
    details: [
      'Position size calculator',
      'Risk/reward analysis',
      'Portfolio diversification guides',
      'Market volatility alerts'
    ]
  }
];

export function Features() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Clear Guidance for Every Step
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Discover how our features help you make informed crypto investment decisions
          </p>
        </div>

        <div className="mt-20">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`relative ${
                index !== features.length - 1 ? 'mb-24' : ''
              }`}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className={index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                      {feature.name}
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                      {feature.description}
                    </p>

                    <dl className="mt-10 space-y-10">
                      {feature.details.map((item) => (
                        <div key={item} className="relative">
                          <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                              <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                              {item}
                            </p>
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Start Using These Features
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}