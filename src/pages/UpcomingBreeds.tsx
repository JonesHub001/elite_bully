import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Crown, Star } from 'lucide-react';
import p1 from '../../public/assets/images/parents/p1.jpg';
import p2 from '../../public/assets/images/parents/p2.jpg';
import bg from '../../public/assets/images/puppies/pupbg.jpg';
import { CONTACT } from '@/lib/contact';
const UpcomingBreeds = () => {
  const upcomingLitters = [
    {
      id: 1,
      sire: "Champion Zeus",
      dam: "Royal Athena",
      type: "XXL",
      expectedDate: "March 2024",
      expectedPrice: "$7,000 - $9,000",
      slotsAvailable: 3,
      description: "Exceptional XXL bloodlines combining power and elegance",
      image: p1
    },
    {
      id: 2,
      sire: "Elite Maximus",
      dam: "Diamond Queen",
      type: "XL",
      expectedDate: "April 2024",
      expectedPrice: "$5,500 - $7,500",
      slotsAvailable: 5,
      description: "Perfect XL structure with champion genetics",
      image: p2
    },
    {
      id: 3,
      sire: "Pocket King",
      dam: "Tiny Princess",
      type: "Pocket",
      expectedDate: "May 2024",
      expectedPrice: "$3,000 - $7,000",
      slotsAvailable: 2,
      description: "Compact pocket bullies with incredible presence",
      image: "https://images.unsplash.com/photo-1534361960057-19889df7a21b?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      sire: "Micro Legend",
      dam: "Sweet Pea",
      type: "Micro",
      expectedDate: "June 2024",
      expectedPrice: "$3,500 - $5,000",
      slotsAvailable: 4,
      description: "Adorable micro bullies with big personalities",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop"
    },
    {
      id: 5,
      sire: "Thunder Beast",
      dam: "Storm Queen",
      type: "Pitbull",
      expectedDate: "July 2024",
      expectedPrice: "$2,500 - $4,500",
      slotsAvailable: 6,
      description: "Classic pitbull genetics with modern refinement",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-2"
          style={{
            backgroundImage: `url(${bg})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Upcoming Breeds</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your spot for our upcoming royal litters. Limited reservations available.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gold-600/10 border-y border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Star className="h-6 w-6 text-gold-400" />
            <p className="text-gold-400 font-semibold">
              Limited slots available - Reserve early to secure your royal companion
            </p>
            <Star className="h-6 w-6 text-gold-400" />
          </div>
        </div>
      </section>

      {/* Upcoming Litters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {upcomingLitters.map((litter) => (
              <div 
                key={litter.id}
                className="bg-black/50 rounded-xl overflow-hidden border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={litter.image} 
                        alt={`${litter.sire} x ${litter.dam}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="bg-gold-600 text-black px-4 py-2 rounded-full text-sm font-bold">
                        {litter.type}
                      </span>
                      <div className="flex items-center space-x-2 text-gold-400">
                        <Calendar className="h-5 w-5" />
                        <span className="font-semibold">{litter.expectedDate}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-gold-400 mb-2">
                        {litter.sire} × {litter.dam}
                      </h3>
                      <p className="text-gray-300 text-lg">{litter.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Expected Price Range</h4>
                        <p className="text-2xl font-bold text-gold-400">{litter.expectedPrice}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Slots Available</h4>
                        <p className="text-2xl font-bold text-white">
                          {litter.slotsAvailable} 
                          <span className="text-lg text-gray-400 ml-2">remaining</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/reserve" className="flex-1">
                        <Button className="elite-button w-full">
                          <Crown className="h-5 w-5 mr-2" />
                          Reserve Your Spot
                        </Button>
                      </Link>
                      <a 
                        href={CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black w-full">
                          Ask on WhatsApp
                        </Button>
                      </a>
                    </div>

                    {litter.slotsAvailable <= 2 && (
                      <div className="bg-red-600/20 border border-red-600/50 rounded-lg p-4">
                        <p className="text-red-400 font-semibold">
                          ⚠️ Only {litter.slotsAvailable} slots remaining - Reserve now!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Process */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <span className="royal-gradient">Reservations</span> Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-2">Submit Request</h3>
              <p className="text-gray-400">Fill out our reservation form with your preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-2">Confirmation</h3>
              <p className="text-gray-400">We'll contact you to confirm availability and details</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-2">Secure Payment</h3>
              <p className="text-gray-400">Reserve with deposit through our secure payment methods</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


export default UpcomingBreeds;

