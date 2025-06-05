
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Available Puppies', path: '/available-dogs' },
    { name: 'Females', path: '/females' },
    { name: 'Upcoming Breeds', path: '/upcoming-breeds' },
    { name: 'Shop', path: '/shop' },
    { name: 'Reserve Now', path: '/reserve' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gold-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <img 
              src="/lovable-uploads/cf61067b-c97b-447b-b834-3e767676f562.png" 
              alt="Elite Bully Production" 
              className="h-12 sm:h-16 lg:h-20 w-auto "
            />
            <div className="text-gold-400 font-bold text-sm sm:text-base lg:text-xl hidden xs:block">
              <span className="hidden sm:inline">Elite Bully Production</span>
              <span className="sm:hidden">Elite Bully</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'text-gold-400 border-b-2 border-gold-400'
                      : 'text-gray-300 hover:text-gold-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gold-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-400"
            >
              {isOpen ? <X className="h-8 w-8 sm:h-10 sm:w-10" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gold-600/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200 rounded-md ${
                  location.pathname === item.path
                    ? 'text-gold-400 bg-gray-800'
                    : 'text-gray-300 hover:text-gold-400 hover:bg-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
