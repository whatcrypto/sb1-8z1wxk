import { useAuth } from '@memberstack/react';
import { CreditCard, DollarSign, TrendingUp, Users } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Total Balance',
      value: '$12,345.67',
      icon: DollarSign,
      change: '+14.5%',
      changeType: 'increase',
    },
    {
      name: 'Active Trades',
      value: '23',
      icon: TrendingUp,
      change: '+7.4%',
      changeType: 'increase',
    },
    {
      name: 'Portfolio Value',
      value: '$34,567.89',
      icon: CreditCard,
      change: '+2.3%',
      changeType: 'increase',
    },
    {
      name: 'Referrals',
      value: '12',
      icon: Users,
      change: '+5.1%',
      changeType: 'increase',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome back, {user?.email}
          </h1>
          
          <div className="mt-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <item.icon
                          className="h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            {item.name}
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                              {item.value}
                            </div>
                            <div
                              className={`ml-2 flex items-baseline text-sm font-semibold ${
                                item.changeType === 'increase'
                                  ? 'text-green-600'
                                  : 'text-red-600'
                              }`}
                            >
                              {item.change}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Recent Activity
                </h3>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Date
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Buy BTC
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  $2,500.00
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  2024-03-15
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}