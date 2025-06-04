import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Johnson",
      location: "Los Angeles, CA",
      dogName: "Zeus",
      dogType: "XXL",
      rating: 5,
      text: "Elite Bully Production delivered exactly what they promised. Zeus is an absolute beast with the perfect temperament. The bloodlines are incredible and the professionalism is unmatched.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      location: "Miami, FL",
      dogName: "Princess",
      dogType: "Pocket",
      rating: 5,
      text: "From the first contact to delivery, everything was seamless. Princess has the most amazing structure and personality. Worth every penny and more!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b820?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "David Thompson",
      location: "Houston, TX",
      dogName: "Titan",
      dogType: "XL",
      rating: 5,
      text: "I've been around bullies for 10+ years and Elite Bully Production sets the standard. Titan is everything I wanted and more. True elite quality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Jennifer Lee",
      location: "Phoenix, AZ",
      dogName: "Diamond",
      dogType: "XXL Female",
      rating: 5,
      text: "The care and attention to detail is remarkable. Diamond arrived healthy, well-socialized, and with all paperwork. Outstanding breeder!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Robert Garcia",
      location: "Atlanta, GA",
      dogName: "Storm",
      dogType: "XL Male",
      rating: 5,
      text: "Third dog from Elite Bully Production and they never disappoint. Storm has the perfect balance of size, structure, and temperament.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Wang",
      location: "Seattle, WA",
      dogName: "Luna",
      dogType: "Micro",
      rating: 5,
      text: "Luna may be small but she has the biggest personality! Elite Bully Production's micro bullies are absolutely perfect companions.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Tony Rodriguez",
      location: "Chicago, IL",
      dogName: "Beast",
      thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      videoUrl: "#"
    },
    {
      id: 2,
      name: "Amanda Brooks",
      location: "Denver, CO",
      dogName: "Royal",
      thumbnail: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
      videoUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="royal-gradient">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied elite family members across the world
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gold-600/10 border-y border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">5.0</div>
              <div className="text-gray-300 flex items-center justify-center">
                <span className="mr-2">Average Rating</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">15+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our <span className="royal-gradient">Elite Family</span> Says
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-black/50 rounded-xl p-6 border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gold-400 font-semibold">
                    {testimonial.dogName} - {testimonial.dogType}
                  </span>
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-gold-400/30 absolute -top-2 -left-1" />
                  <p className="text-gray-300 italic pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="royal-gradient">Video</span> Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id}
                className="bg-black/50 rounded-xl overflow-hidden border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={`${video.name} testimonial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                    <div className="bg-gold-600 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-white text-lg">{video.name}</h4>
                  <p className="text-gray-400">{video.location}</p>
                  <p className="text-gold-400 text-sm mt-1">Owner of {video.dogName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Elite Family?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Become the next success story with your royal companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/available-dogs">
              <button className="elite-button text-lg px-8 py-4">
                View Available Dogs
              </button>
            </a>
            <a href="/reserve">
              <button className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
                Reserve Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
