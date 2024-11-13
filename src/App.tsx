import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { AuthGuard } from './components/AuthGuard';
import { HamburgerMenu } from './components/HamburgerMenu';
import { Landing } from './pages/Landing';
import { Features } from './pages/Features';
import { HowItWorks } from './pages/HowItWorks';
import { ModelPortfolios } from './pages/ModelPortfolios';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <HamburgerMenu />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/model-portfolios" element={<ModelPortfolios />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}