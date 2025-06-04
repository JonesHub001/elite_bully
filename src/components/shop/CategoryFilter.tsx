
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <section className="py-8 bg-gray-900/50 border-b border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold-600 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gold-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
