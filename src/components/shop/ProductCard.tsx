
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-black/50 rounded-xl overflow-hidden border border-gold-600/20 hover:border-gold-400/40 transition-all duration-300 hover:transform hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gold-400 mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
            <span className="text-sm text-gray-300 ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500 ml-2 bg-gold-600/20 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">{product.price}</span>
          <Button 
            size="sm" 
            className="bg-gold-600 hover:bg-gold-700 text-black"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
