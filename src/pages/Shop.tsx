
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShopHeader from '@/components/shop/ShopHeader';
import CategoryFilter from '@/components/shop/CategoryFilter';
import ProductGrid from '@/components/shop/ProductGrid';
import ShopFeatures from '@/components/shop/ShopFeatures';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ShopHeader />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductGrid 
        products={products}
        onAddToCart={handleAddToCart}
        selectedCategory={selectedCategory}
      />
      <ShopFeatures />
      <Footer />
    </div>
  );
};

export default Shop;
