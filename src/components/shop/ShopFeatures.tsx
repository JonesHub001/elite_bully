
import { ShoppingCart, Star } from 'lucide-react';

const ShopFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-900/20 to-gold-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-400">Free shipping on orders over $75</p>
          </div>
          <div className="p-6">
            <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-400">Only the finest products for elite bullies</p>
          </div>
          <div className="p-6">
            <div className="bg-gold-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-400">2-3 business days nationwide shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopFeatures;
