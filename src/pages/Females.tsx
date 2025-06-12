
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import micro from '../../public/assets/images/females/micro.jpg'
import pocket from '../../public/assets/images/females/pocket.jpg'
import XXL1 from '../../public/assets/images/females/XXL1.jpg'
import XL1 from '../../public/assets/images/females/XL1.jpg'
import XXL2 from '../../public/assets/images/females/XXL2.jpg'
import XL2 from '../../public/assets/images/females/XL2.jpg';
import bg from '../../public/assets/images/females/pocket.jpg'
const Females = () => {
  const [selectedType, setSelectedType] = useState('All');
  
  const dogTypes = ['All', 'XXL', 'XL', 'Pocket', 'Micro'];
  
  const femaleDogs = [
    {
      id: 1,
      name: "Queen Athena",
      type: "XXL",
      age: "2 years",
      breeding: "Available for breeding",
      image: XXL1,
      description: "Champion bloodline XXL female with exceptional temperament"
    },
    {
      id: 2,
      name: "Royal Luna",
      type: "XL",
      age: "1.5 years",
      breeding: "Available for breeding",
      image: XL1,
      description: "Beautiful XL female with perfect structure and conformation"
    },
    {
      id: 3,
      name: "Princess Bella",
      type: "Pocket",
      age: "3 years",
      breeding: "Currently pregnant",
      image: pocket,
      description: "Compact pocket female with incredible presence and loyalty"
    },
    {
      id: 4,
      name: "Diamond Duchess",
      type: "XXL",
      age: "2.5 years",
      breeding: "Available for breeding",
      image: XXL2,
      description: "Premium XXL female with royal genetics and stunning appearance"
    },
    {
      id: 5,
      name: "Elite Empress",
      type: "XL",
      age: "1 year",
      breeding: "Too young for breeding",
      image: XL2,
      description: "Young XL female with promising bloodline and exceptional potential"
    },
    {
      id: 6,
      name: "Tiny Queen",
      type: "Micro",
      age: "2 years",
      breeding: "Available for breeding",
      image: micro,
      description: "Adorable micro female with big personality and loving nature"
    }
  ];

  const filteredDogs = selectedType === 'All' 
    ? femaleDogs 
    : femaleDogs.filter(dog => dog.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 hero-bg" style={{backgroundImage:`url(${bg})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Our Elite Females</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet our exceptional breeding females - the mothers of champions
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

      {/* Female Dogs Grid */}
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
                  <p className="text-gray-300 mb-2">Status: {dog.breeding}</p>
                  <p className="text-gray-300 mb-4">{dog.description}</p>
                  <Link to="/contact">
                    <Button className="elite-button w-full">
                      Contact for Breeding Info
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDogs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">
                No females available in the {selectedType} category at the moment.
              </p>
              <p className="text-gray-500 mt-2">
                Check back soon for updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 to-gold-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Breeding Programs?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact us to learn about our selective breeding programs and upcoming litters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/upcoming-breeds">
              <Button className="elite-button text-lg px-8 py-4">
                View Upcoming Litters
              </Button>
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black text-lg px-8 py-4">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Females;
