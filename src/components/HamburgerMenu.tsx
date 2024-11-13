import { useAuth } from '@memberstack/react';
import { Menu, X, Wallet, LogOut, LayoutDashboard, BookOpen, Target, PieChart, HelpCircle, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Features', path: '/features', icon: Target },
  { name: 'How It Works', path: '/how-it-works', icon: BookOpen },
  { name: 'Model Portfolios', path: '/model-portfolios', icon: PieChart },
  { name: 'FAQ', path: '/faq', icon: HelpCircle },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, signOut, user } = useAuth();
  const location = useLocation();

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white shadow-lg hover:bg-gray-50 transition-colors"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform overflow-y-auto">
            <div className="p-6 space-y-6">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2"
              >
                <Wallet className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">WhatCrypto</span>
              </Link>

              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      isActivePath(item.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">{user?.email}</div>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-3 py-2 text-center rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-3 py-2 text-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}