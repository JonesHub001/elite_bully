
import Cart from '@/components/Cart';

const ShopHeader = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 hero-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1920&h=1080&fit=crop')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              <span className="royal-gradient">Elite Bully Shop</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Premium accessories and supplies for your elite American Bully
            </p>
          </div>
          <Cart />
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
