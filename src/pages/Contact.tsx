
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-opacity"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Contact Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to welcome a royal companion? Get in touch with our elite team today.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-black/50 rounded-xl p-8 border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                <Phone className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-2">WhatsApp Us</h3>
              <p className="text-gray-400 mb-4">Chat with our team on WhatsApp</p>
              <a 
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="elite-button">
                  {CONTACT.phoneDisplay}
                </Button>
              </a>
            </div>


            {/* Email */}
            <div className="bg-black/50 rounded-xl p-8 border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 text-center group hover:transform hover:scale-105">
              <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                <Mail className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-2">Email</h3>
              <p className="text-gray-400 mb-4">Detailed inquiries</p>
              <a 
                href={`mailto:${CONTACT.email}`}
                className="inline-block"
              >
                <Button className="elite-button">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="royal-gradient">Business</span> Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Location & Hours */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">
                    Elite Bully Production<br />
                    Serving clients worldwide<br />
                    Based in the United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 12:00 PM - 5:00 PM</p>
                    <p className="text-gold-400 text-sm mt-2">
                      *Emergency support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Premium American Bully breeding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Health testing & certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Worldwide shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Lifetime support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Custom breeding programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span className="text-gray-300">Training consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked <span className="royal-gradient">Questions</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-black/50 rounded-xl p-6 border border-gold-600/20">
              <h3 className="text-xl font-bold text-gold-400 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept CashApp, PayPal, Zelle, Revolut, and Apple Pay. All payments are processed securely 
                after reservation confirmation. We do not accept payments directly through the website.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-gold-600/20">
              <h3 className="text-xl font-bold text-gold-400 mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-gray-300">
                Yes! We provide safe and secure worldwide shipping. We handle all documentation and 
                requirements for international delivery. Shipping costs vary by location.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-gold-600/20">
              <h3 className="text-xl font-bold text-gold-400 mb-3">
                What health guarantees do you provide?
              </h3>
              <p className="text-gray-300">
                All our dogs come with comprehensive health testing, vaccination records, and a health guarantee. 
                We provide lifetime support and guidance for all our elite family members.
              </p>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-gold-600/20">
              <h3 className="text-xl font-bold text-gold-400 mb-3">
                How do reservations work?
              </h3>
              <p className="text-gray-300">
                Submit a reservation request through our form or contact us directly. We'll confirm availability, 
                discuss details, and secure your spot with a deposit. We'll keep you updated throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 to-gold-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Elite Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact us today and let's find your perfect royal companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/reserve">
              <Button className="elite-button text-lg px-8 py-4">
                Reserve Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
