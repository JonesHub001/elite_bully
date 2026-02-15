import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Crown, Shield, DollarSign } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { CONTACT } from '@/lib/contact';

const isMissingSupabaseTableError = (error: { code?: string; message?: string; details?: string } | null) => {
  if (!error) return false;

  const combinedErrorText = `${error.message ?? ''} ${error.details ?? ''}`.toLowerCase();
  return error.code === 'PGRST205' || combinedErrorText.includes('reservation_requests');
};

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    dogType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      dogType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('reservation_requests')
        .insert({
          full_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          dog_type: formData.dogType,
          message: formData.message || null
        });

      if (error) {
        if (isMissingSupabaseTableError(error)) {
          console.error('Reservation table is missing or not accessible:', error);
          toast({
            title: "Database setup required",
            description: "Reservation table is not available yet. Please run the Supabase migration and try again.",
            variant: "destructive"
          });
        } else {
          console.error('Error submitting reservation:', error);
          toast({
            title: "Error",
            description: "There was an error submitting your reservation. Please try again.",
            variant: "destructive"
          });
        }
        return;
      }

      toast({
        title: "Reservation Request Submitted!",
        description: "We'll contact you within 24 hours to discuss your royal companion.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        dogType: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534361960057-19889df7a21b?w=1920&h=1080&fit=crop')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Crown className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-gold-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="royal-gradient">Reserve Your</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Elite Companion
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Submit your reservation request and join the elite family of American Bully owners worldwide.
          </p>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gold-900/20 to-gold-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/50 rounded-xl p-6 sm:p-8 lg:p-10 border border-gold-600/30">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="h-12 w-12 text-gold-400" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              <span className="royal-gradient">Reservation Payment</span>
            </h2>
            
            <div className="space-y-6 text-center">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                To secure your elite companion, an upfront reservation payment is required.
              </p>
              
              <div className="bg-gold-600/10 border border-gold-600/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gold-400 mb-4">Payment Details</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="text-lg">
                    <span className="font-semibold text-white">Reservation Fee:</span> $1,000 - $2,000
                  </p>
                  <p className="text-sm">
                    The exact amount depends on the specific dog and bloodline selected.
                  </p>
                  <p className="text-sm">
                    This payment secures your reservation and is applied toward the total price.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <p className="text-gold-400 font-semibold text-sm">CashApp</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <p className="text-gold-400 font-semibold text-sm">PayPal</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <p className="text-gold-400 font-semibold text-sm">Zelle</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <p className="text-gold-400 font-semibold text-sm">Revolut</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                  <p className="text-gold-400 font-semibold text-sm">Apple Pay</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Payment instructions will be provided after your reservation request is confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="bg-black/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-gold-600/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gold-400 mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-10 sm:h-12"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-10 sm:h-12"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 h-10 sm:h-12"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="bg-black/50 rounded-xl p-4 sm:p-6 lg:p-8 border border-gold-600/20">
              <h3 className="text-xl sm:text-2xl font-bold text-gold-400 mb-4 sm:mb-6">Dog Preferences</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="dogType" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Dog Type *
                  </label>
                  <Select value={formData.dogType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white h-10 sm:h-12">
                      <SelectValue placeholder="Select dog type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="XXL">XXL American Bully</SelectItem>
                      <SelectItem value="XL">XL American Bully</SelectItem>
                      <SelectItem value="Pocket">Pocket American Bully</SelectItem>
                      <SelectItem value="Micro">Micro American Bully</SelectItem>
                      <SelectItem value="Pitbull">American Pitbull</SelectItem>
                      <SelectItem value="Undecided">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Tell us about your preferences, experience, or any specific requirements..."
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gold-600/10 border border-gold-600/30 rounded-xl p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gold-400 font-semibold mb-2 text-sm sm:text-base">Payment Information</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    We do not accept direct payments on this website. Once your reservation is confirmed, 
                    we accept payments through CashApp, PayPal, Zelle, Revolut, or Apple Pay. 
                    All transactions are secure and verified.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="elite-button w-full text-base sm:text-lg py-4 sm:py-6"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-black mr-3"></div>
                  Submitting Request...
                </>
              ) : (
                <>
                  <Crown className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Submit Reservation Request
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Prefer to Contact Us Directly?
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <a 
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="elite-button w-full text-base sm:text-lg py-4 sm:py-6">
                WhatsApp Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReservationForm;
