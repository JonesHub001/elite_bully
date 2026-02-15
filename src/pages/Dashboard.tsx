import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type ReservationRow = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  dog_type: string;
  status: string;
  created_at: string;
};

type NewsletterRow = {
  id: string;
  email: string;
  active: boolean;
  approval_status: string;
  subscribed_at: string;
};

const Dashboard = () => {
  const [reservations, setReservations] = useState<ReservationRow[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = async () => {
    setIsRefreshing(true);

    const [reservationsResult, subscribersResult] = await Promise.all([
      supabase
        .from('reservation_requests')
        .select('id, full_name, email, phone, dog_type, status, created_at')
        .order('created_at', { ascending: false }),
      supabase
        .from('newsletter_subscriptions')
        .select('id, email, active, approval_status, subscribed_at')
        .order('subscribed_at', { ascending: false }),
    ]);

    if (reservationsResult.error) {
      console.error('Failed to load reservations:', reservationsResult.error);
      toast({
        title: 'Error loading reservations',
        description: reservationsResult.error.message,
        variant: 'destructive',
      });
    } else {
      setReservations(reservationsResult.data ?? []);
    }

    if (subscribersResult.error) {
      console.error('Failed to load subscribers:', subscribersResult.error);
      toast({
        title: 'Error loading newsletter subscribers',
        description: 'If approval_status is missing, run latest Supabase migration first.',
        variant: 'destructive',
      });
    } else {
      setSubscribers(subscribersResult.data ?? []);
    }

    setIsLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const approveReservation = async (id: string) => {
    const { error } = await supabase
      .from('reservation_requests')
      .update({ status: 'approved' })
      .eq('id', id);

    if (error) {
      toast({ title: 'Approval failed', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Reservation approved', description: 'Status updated successfully.' });
    loadData();
  };

  const approveSubscriber = async (id: string) => {
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .update({ approval_status: 'approved', active: true })
      .eq('id', id);

    if (error) {
      toast({ title: 'Approval failed', description: error.message, variant: 'destructive' });
      return;
    }

    toast({ title: 'Subscriber approved', description: 'Subscriber status updated.' });
    loadData();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-12 sm:py-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black">
                <span className="royal-gradient">Admin Dashboard</span>
              </h1>
              <p className="text-gray-400 mt-2">Review and approve reservations and newsletter subscribers.</p>
            </div>
            <Button onClick={loadData} disabled={isRefreshing} className="elite-button w-full sm:w-auto">
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>

          {isLoading ? (
            <p className="text-gray-300">Loading dashboard data...</p>
          ) : (
            <div className="space-y-10">
              <div className="bg-black/50 border border-gold-600/30 rounded-xl p-4 sm:p-6">
                <h2 className="text-2xl font-bold text-gold-400 mb-4">Reservation Requests ({reservations.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-gray-700 text-gray-300">
                        <th className="py-2 pr-4">Name</th>
                        <th className="py-2 pr-4">Email</th>
                        <th className="py-2 pr-4">Phone</th>
                        <th className="py-2 pr-4">Dog Type</th>
                        <th className="py-2 pr-4">Status</th>
                        <th className="py-2 pr-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations.map((item) => (
                        <tr key={item.id} className="border-b border-gray-800 text-gray-200">
                          <td className="py-3 pr-4">{item.full_name}</td>
                          <td className="py-3 pr-4">{item.email}</td>
                          <td className="py-3 pr-4">{item.phone}</td>
                          <td className="py-3 pr-4">{item.dog_type}</td>
                          <td className="py-3 pr-4 capitalize">{item.status}</td>
                          <td className="py-3 pr-4">
                            <Button
                              onClick={() => approveReservation(item.id)}
                              disabled={item.status === 'approved'}
                              className="elite-button"
                            >
                              {item.status === 'approved' ? 'Approved' : 'Approve'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-black/50 border border-gold-600/30 rounded-xl p-4 sm:p-6">
                <h2 className="text-2xl font-bold text-gold-400 mb-4">Newsletter Subscribers ({subscribers.length})</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-gray-700 text-gray-300">
                        <th className="py-2 pr-4">Email</th>
                        <th className="py-2 pr-4">Active</th>
                        <th className="py-2 pr-4">Approval Status</th>
                        <th className="py-2 pr-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscribers.map((item) => (
                        <tr key={item.id} className="border-b border-gray-800 text-gray-200">
                          <td className="py-3 pr-4">{item.email}</td>
                          <td className="py-3 pr-4">{item.active ? 'Yes' : 'No'}</td>
                          <td className="py-3 pr-4 capitalize">{item.approval_status}</td>
                          <td className="py-3 pr-4">
                            <Button
                              onClick={() => approveSubscriber(item.id)}
                              disabled={item.approval_status === 'approved'}
                              className="elite-button"
                            >
                              {item.approval_status === 'approved' ? 'Approved' : 'Approve'}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
