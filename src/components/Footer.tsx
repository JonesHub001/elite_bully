
import { Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const paymentMethods = [
    { name: 'CashApp', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Zelle', icon: '🏦' },
    { name: 'Revolut', icon: '💱' },
    { name: 'Apple Pay', icon: '📱' }
  ];

  return (
    <footer className="bg-black border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/cf61067b-c97b-447b-b834-3e767676f562.png" 
              alt="Elite Bully Production" 
              className="h-12 sm:h-14 lg:h-16 w-auto"
            />
            <h3 className="text-lg sm:text-xl font-bold royal-gradient">
              Elite Bully Production
            </h3>
            <p className="text-gray-400 text-sm">
              Born Royal. Bred Elite.
            </p>
            <p className="text-gray-400 text-sm">
              Premium American Bully breeder specializing in XL, XXL, Pocket, and Micro Bullies worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-gold-400">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+19297041742" 
                className="flex items-center space-x-3 text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Call Us</span>
              </a>
               <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Facebook</span>
              </a> 
              <a 
                href="mailto:topelitebullies@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-gold-400">Accepted Payments</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
              {paymentMethods.map((method) => (
                <div 
                  key={method.name}
                  className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-gray-700"
                >
                  <span className="text-base sm:text-lg">{method.icon}</span>
                  <span className="text-xs sm:text-sm text-gray-300">{method.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 sm:mt-4">
              We do not accept direct payments on this website. All payments are processed securely through verified channels after reservation confirmation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Elite Bully Production. All rights reserved. | Delivering elite American Bullies worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
