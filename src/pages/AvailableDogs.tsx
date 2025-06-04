import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AvailableDogs = () => {
  const [selectedType, setSelectedType] = useState('All');
  
  const dogTypes = ['All', 'XXL', 'XL', 'Pocket', 'Micro', 'Pitbull'];
  
  const availableDogs = [
    {
      id: 1,
      name: "King Maximus",
      type: "XXL",
      age: "8 months",
      price: "$8,000",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop",
      description: "Exceptional XXL male with champion bloodlines"
    },
    {
      id: 2,
      name: "Royal Luna",
      type: "XL",
      age: "6 months",
      price: "$6,500",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&h=500&fit=crop",
      description: "Beautiful XL female with perfect structure"
    },
    {
      id: 3,
      name: "Elite Thunder",
      type: "Pocket",
      age: "4 months",
      price: "$5,000",
      image: "https://images.unsplash.com/photo-1534361960057-19889df7a21b?w=500&h=500&fit=crop",
      description: "Compact pocket male with incredible presence"
    },
    {
      id: 4,
      name: "Diamond Princess",
      type: "XXL",
      age: "7 months",
      price: "$7,500",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=500&fit=crop",
      description: "Premium XXL female with royal genetics"
    },
    {
      id: 5,
      name: "Shadow Beast",
      type: "XL",
      age: "5 months",
      price: "$6,000",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=500&h=500&fit=crop",
      description: "Powerful XL male with intimidating presence"
    },
    {
      id: 6,
      name: "Tiny Titan",
      type: "Micro",
      age: "3 months",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop",
      description: "Adorable micro bully with big personality"
    }
  ];

  const filteredDogs = selectedType === 'All' 
    ? availableDogs 
    : availableDogs.filter(dog => dog.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1920&h=1080&fit=crop')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Available Dogs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse our current selection of elite American Bullies ready for their forever homes
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900/50 border-b border-gold-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {dogTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-gold-600 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gold-400'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dogs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDogs.map((dog) => (
              <div 
                key={dog.id}
                className="bg-black/50 rounded-xl overflow-hidden border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gold-400">{dog.name}</h3>
                    <span className="bg-gold-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {dog.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">Age: {dog.age}</p>
                  <p className="text-gray-300 mb-4">{dog.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-white">{dog.price}</span>
                    <Link to="/reserve">
                      <Button className="elite-button">
                        Contact to Reserve
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">
                No dogs available in the {selectedType} category at the moment.
              </p>
              <p className="text-gray-500 mt-2">
                Check back soon or contact us for upcoming litters!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 to-gold-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact us about upcoming litters and custom breeding programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upcoming-breeds">
              <Button className="elite-button text-lg px-8 py-4">
                View Upcoming Breeds
              </Button>
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-lg px-8 py-4">
                Message Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvailableDogs;
