
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
}

const ProductGrid = ({ products, onAddToCart, selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">
              No products available in the {selectedCategory} category at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Check back soon for new items!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
