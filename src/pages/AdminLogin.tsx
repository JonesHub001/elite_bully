import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { hasAdminCredentialsConfigured, setAdminAuthenticated, validateAdminCredentials } from '@/lib/adminAuth';

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from || '/dashboard';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasAdminCredentialsConfigured()) {
      toast({
        title: 'Admin credentials missing',
        description: 'Set VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD in your environment.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    const isValid = validateAdminCredentials(username, password);

    if (!isValid) {
      toast({
        title: 'Invalid credentials',
        description: 'Please check your username and password.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    setAdminAuthenticated();
    toast({
      title: 'Welcome back',
      description: 'You are now signed in to the admin dashboard.',
    });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/60 border border-gold-600/30 rounded-xl p-6 sm:p-8">
            <h1 className="text-3xl font-black text-center mb-2">
              <span className="royal-gradient">Admin Login</span>
            </h1>
            <p className="text-gray-400 text-center mb-6">Sign in to access the approvals dashboard.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white"
                  required
                />
              </div>

              <Button type="submit" className="elite-button w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminLogin;
