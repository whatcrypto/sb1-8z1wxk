import { ArrowRight, Bitcoin, DollarSign, Shield, TrendingUp, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolios = [
  {
    name: 'Conservative Portfolio',
    description: 'Focused on stability and long-term growth with minimal volatility',
    icon: Shield,
    allocation: [
      { asset: 'Bitcoin', percentage: 50, icon: Bitcoin },
      { asset: 'Ethereum', percentage: 30, icon: Wallet },
      { asset: 'Stablecoins', percentage: 20, icon: DollarSign },
    ],
    riskLevel: 'Low',
    recommendedFor: 'New investors or those prioritizing capital preservation',
  },
  {
    name: 'Balanced Growth Portfolio',
    description: 'Optimized for growth while maintaining reasonable risk levels',
    icon: TrendingUp,
    allocation: [
      { asset: 'Bitcoin', percentage: 40, icon: Bitcoin },
      { asset: 'Ethereum', percentage: 30, icon: Wallet },
      { asset: 'Top Altcoins', percentage: 25, icon: Wallet },
      { asset: 'Stablecoins', percentage: 5, icon: DollarSign },
    ],
    riskLevel: 'Medium',
    recommendedFor: 'Experienced investors seeking balanced returns',
  },
  {
    name: 'Aggressive Growth Portfolio',
    description: 'Maximizing potential returns with higher risk tolerance',
    icon: TrendingUp,
    allocation: [
      { asset: 'Bitcoin', percentage: 30, icon: Bitcoin },
      { asset: 'Ethereum', percentage: 30, icon: Wallet },
      { asset: 'Growth Altcoins', percentage: 35, icon: Wallet },
      { asset: 'Stablecoins', percentage: 5, icon: DollarSign },
    ],
    riskLevel: 'High',
    recommendedFor: 'Experienced investors comfortable with volatility',
  },
];

export function ModelPortfolios() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Model Portfolios
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the portfolio that matches your investment goals and risk tolerance
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{portfolio.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    portfolio.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    portfolio.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {portfolio.riskLevel} Risk
                  </span>
                </div>
                
                <p className="mt-4 text-gray-600">{portfolio.description}</p>
                
                <div className="mt-8 space-y-4">
                  {portfolio.allocation.map((item) => (
                    <div key={item.asset} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-700">{item.asset}</span>
                      </div>
                      <span className="font-medium text-gray-900">{item.percentage}%</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500">Recommended for:</h4>
                  <p className="mt-2 text-gray-700">{portfolio.recommendedFor}</p>
                </div>
              </div>

              <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start with this Portfolio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}