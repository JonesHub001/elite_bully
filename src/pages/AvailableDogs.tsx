import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bg from '../../public/assets/images/puppies/pupbg.jpg';
import FAME from '../../public/assets/images/puppies/FAME.jpg';
import ISA from '../../public/assets/images/puppies/ISA.jpg';
import JANE from '../../public/assets/images/puppies/JANE.jpg';
import KATE from '../../public/assets/images/puppies/KATE.jpg';
import LENA from '../../public/assets/images/puppies/LENA.jpg';
import ROXY from '../../public/assets/images/puppies/ROXY.jpg';
import TRU from '../../public/assets/images/puppies/TRU.jpg';
import AXEL from '../../public/assets/images/puppies/AXEL.jpg';
import JODI from '../../public/assets/images/puppies/JODI.jpg';
import MUNCHKIN from '../../public/assets/images/puppies/MUNCHKIN.jpg';
import LUCA from '../../public/assets/images/puppies/LUCA.jpg';
import LIT from '../../public/assets/images/puppies/LIT.jpg';
import UNO from '../../public/assets/images/puppies/UNO.jpg';
import LUNA from '../../public/assets/images/puppies/LUNA.jpg';
import LOLA from '../../public/assets/images/puppies/LOLA.jpg';
import JAX from '../../public/assets/images/puppies/JAX.jpg';
import RAYA from '../../public/assets/images/puppies/RAYA.jpg'
import LOVEY from '../../public/assets/images/puppies/LOVEY.jpg'
import DIANA from '../../public/assets/images/puppies/DIANA.jpg'
const AvailableDogs = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 8000]); // [min, max]

  const dogTypes = ['All', 'XXL', 'XL', 'Pocket', 'Micro', 'Pitbull'];

  const availableDogs = [
    {
      id: 1,
      name: "AXEL",
      type: "XL",
      age: "11 weeks",
      price: "$5,000",
      image: AXEL,
      description: "Exceptional XL male with champion bloodlines"
    },
    {
      id: 2,
      name: "Royal Luna",
      type: "XL",
      age: "10 weeks",
      price: "$6,500",
      image: LUNA,
      description: "Beautiful XL female with perfect structure and blue eyes"
    },
    {
      id:16,
      name: "DIANA",
      type: "XXL",
      age: "11 weeks",
      price: "$7,500",
      image: DIANA,
      description: "Stunning  Dual chocolate Female with incredible structure"

    },
    {
      id: 3,
      name: "JAX",
      type: "XL",
      age: "9 weeks",
      price: "$5,900",
      image: JAX,
      description: "Compact XL Tri merle male with incredible presence"
    },
    {
      id: 4,
      name: " Princess LOLA",
      type: "micro",
      age: "8 weeks",
      price: "$2,500",
      image:LOLA,
      description: "Premium chocolate micro female with royal genetics"
    },
    {
      id: 5,
      name: "FAME",
      type: "XXL",
      age: "12 weeks",
      price: "$6,000",
      image: FAME,
      description: "Powerful XL chocolate tri merle female with intimidating presence"
    },
    {
      id: 6,
      name: "KATE",
      type: "XXL",
      age: "9 weeks",
      price: "$6,500",
      image: KATE,
      description: "Adorable XL American bully with big personality"
    },   
    {
      id: 7,
      name: "ISA",
      type: "XL",
      age: "6 weeks",
      price: "$4,500",
      image: ISA,
      description: "Impressive XL female with strong build and great temperament"
    },
    {
      id: 9,
      name: "LUCA",
      type: "Pocket",
      age: "5 weeks",
      price: "$2,500",
      image: LUCA,
      description: "Stunning dual tri merle male with thick bone and good structure"
    },
    {
      id: 17,
      name: "LIT",
      type: "Pocket",
      age: "5 weeks",
      price: "$2,500",
      image: LIT,
      description: "Incredible dual chocolate tri merle female with thick bone and good structure"
    },  
    {
      id: 18,
      name: "UNO",
      type: "Pocket",
      age: "5 weeks",
      price: "$2,500",
      image: UNO,
      description: "Incredible dual chocolate tri merle male with thick bone and good structure"
    },
    {
      id: 8,
      name: "JANE",
      type: "XL",
      age: "11 weeks",
      price: "$4,000",
      image: JANE,
      description: "Stunning dual chocolate tri merle female with incredible presence"
    },
 
    {
      id: 10,
      name: "LENA",
      type: "XL",
      age: "8 weeks",
      price: "$4,500",
      image: LENA,
      description: "Beautiful dual chocolate tri merle female with incredible presence"
    },
    {
      id: 11,
      name: "ROXY",
      type: "XL",
      age: "6 weeks",
      price: "$3,900",
      image: ROXY,
      description: "Stunning dual chocolate merle female with incredible presence"
    },
    {
      id: 12,
      name: "TRU",
      type: "XL",
      age: "6 weeks",
      price: "$3,500",
      image: TRU,
      description: "Lilac blue eyes female with incredible presence"
    },
   
    {
      id: 14,
      name: "MUNCHKIN",
      type: "Pocket",
      age: "6 weeks",
      price: "$2,500",
      image: MUNCHKIN,
      description: "Gorgeous  tri merle Male chocolate with incredible presence"
    },
     {
      id: 13,
      name: "JODI",
      type: "Pocket",
      age: "5 weeks",
      price: "$3,500",
      image: JODI,
      description: "Gorgeous dual lilac female with perfect structure"
    },
    {
      id: 15,
      name: "LOVEY",
      type: "XL",
      age: "6 weeks",
      price: "$4,500",
      image: LOVEY,
      description: "Gorgeous lilac tri chocolate with incredible presence"
    }


  ];

  // Helper to parse price string like "$4,500" to number
  const parsePrice = (priceStr) => Number(priceStr.replace(/[^0-9.-]+/g, ""));

  // Find min and max prices for slider bounds
  const allPrices = availableDogs.map(dog => parsePrice(dog.price));
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  // Filter by type and price
  const filteredDogs = availableDogs.filter(dog => {
    const price = parsePrice(dog.price);
    const inType = selectedType === 'All' || dog.type === selectedType;
    const inPrice = price >= priceRange[0] && price <= priceRange[1];
    return inType && inPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-100 to-black overflow-hidden">
        <div className="absolute inset-0 hero-bg" style={{backgroundImage: `url(${bg})`}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Available Puppies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Browse our current selection of elite American Bullies ready for their forever homes
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900/50 border-b border-gold-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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
          {/* Price Range Filter */}
          <div className="flex flex-col items-center gap-2">
            <label className="text-gray-300 font-semibold">
              Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </label>
            <div className="flex gap-4 w-full max-w-xs">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={e => {
                  const val = Number(e.target.value);
                  setPriceRange([val > priceRange[1] ? priceRange[1] : val, priceRange[1]]);
                }}
                className="w-full accent-gold-600"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={e => {
                  const val = Number(e.target.value);
                  setPriceRange([priceRange[0], val < priceRange[0] ? priceRange[0] : val]);
                }}
                className="w-full accent-gold-600"
              />
            </div>
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
