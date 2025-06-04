
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive"
          });
        } else {
          console.error('Newsletter subscription error:', error);
          toast({
            title: "Error",
            description: "There was an error subscribing to the newsletter. Please try again.",
            variant: "destructive"
          });
        }
        return;
      }

      toast({
        title: "Welcome to the Elite Family!",
        description: "You'll be the first to know about new litters and exclusive updates.",
      });
      setEmail('');
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gold-900/20 to-gold-800/20 border border-gold-600/30 rounded-xl p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-gold-600 p-3 rounded-full">
          <Mail className="h-6 w-6 text-black" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gold-400 mb-2">
        Stay in the Royal Circle
      </h3>
      
      <p className="text-gray-300 mb-6">
        Be the first to know when new elite litters are available. 
        Join our exclusive newsletter for priority access.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your royal email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black/50 border-gold-600/50 text-white placeholder:text-gray-400 flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="elite-button whitespace-nowrap"
        >
          {isLoading ? 'Joining...' : 'Join Elite'}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 mt-4">
        No spam, just elite updates. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsletterSignup;
