import { Mail, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have questions? We're here to help you succeed in your crypto journey
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <Mail className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-900">Email Support</h3>
            <p className="mt-2 text-gray-600">
              Get in touch with our support team for any questions or assistance
            </p>
            <a
              href="mailto:support@whatcrypto.com"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              support@whatcrypto.com
              <Send className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-medium text-gray-900">Help Center</h3>
            <p className="mt-2 text-gray-600">
              Browse our comprehensive guides and documentation
            </p>
            <Link
              to="/faq"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Visit Help Center
              <Send className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}