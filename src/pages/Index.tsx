import { Link } from 'react-router-dom';
import { Crown, Star, Shield, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
// Importing images
import home from '../../public/assets/images/home.jpg';
const Index = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Bloodlines",
      description: "Premium genetics from champion lineages worldwide"
    },
    {
      icon: Shield,
      title: "Health Guaranteed",
      description: "Comprehensive health testing and lifetime support"
    },
    {
      icon: Star,
      title: "Elite Quality",
      description: "XL, XXL, Pocket, and Micro varieties available"
    },
    {
      icon: Award,
      title: "Worldwide Delivery",
      description: "Safe and secure shipping to your location"
    }
  ];

  const topDogs = [
    {
      name: "King Maximus",
      type: "XXL Male",
      price: "$8,000",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop"
    },
    {
      name: "Royal Luna",
      type: "XL Female",
      price: "$6,500",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop"
    },
    {
      name: "Elite Thunder",
      type: "Pocket Male",
      price: "$5,000",
      image: "https://images.unsplash.com/photo-1534361960057-19889df7a21b?w=400&h=400&fit=crop"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534361960057-19889df7a21b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1529927066849-79b791a69825?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 hero-bg" style={{backgroundImage: `url(${home})`}}></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/cf61067b-c97b-447b-b834-3e767676f562.png" 
              alt="Elite Bully Production" 
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mx-auto mb-4 sm:mb-6"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 animate-slide-up">
            <span className="royal-gradient">BORN ROYAL</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 animate-slide-up">
            BRED <span className="text-gold-400">ELITE</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Premium American Bully breeder specializing in XL, XXL, Pocket, and Micro varieties. 
            Delivering royal bloodlines worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in">
            <Link to="/available-dogs" className="w-full sm:w-auto">
              <Button className="elite-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                View Available Dogs
              </Button>
            </Link>
            <a 
              href="tel:+1234567890"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Call to Reserve
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="royal-gradient">Elite Bully Production</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              We don't just breed dogs - we create royal companions with unmatched quality and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 bg-black/50 rounded-xl border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-gold-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gold-400 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dogs Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Featured <span className="royal-gradient">Elite Dogs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Meet our current royal champions available for reservation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {topDogs.map((dog, index) => (
              <div 
                key={index}
                className="bg-black/50 rounded-xl overflow-hidden border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gold-400 mb-2">{dog.name}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">{dog.type}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{dog.price}</span>
                    <Link to="/reserve" className="w-full sm:w-auto">
                      <Button className="elite-button w-full sm:w-auto text-sm sm:text-base px-4 py-2">
                        Reserve Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/available-dogs">
              <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                View All Available Dogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="royal-gradient">Elite Gallery</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Showcase of our magnificent American Bullies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Elite Bully ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/available-dogs">
              <Button className="elite-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                View All Available Dogs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
