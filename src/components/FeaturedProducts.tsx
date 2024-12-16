import React from 'react';
import { Heart, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import SearchInput from './ui/SearchInput';
import ProductCard from './ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Radiators',
    model: 'ZMW 652',
    image: 'https://images.unsplash.com/photo-1635784063754-0f5498a3a617?auto=format&fit=crop&q=80',
    sales: '500+ Sales'
  },
  {
    id: 2,
    name: 'Headlights',
    model: 'ZMW 742',
    image: 'https://images.unsplash.com/photo-1600706432502-77a0e2e32771?auto=format&fit=crop&q=80',
    sales: '500+ Sales'
  },
  {
    id: 3,
    name: 'Chrome Trim',
    model: 'ZMW 643',
    image: 'https://images.unsplash.com/photo-1600705722908-bab2e7fef916?auto=format&fit=crop&q=80',
    sales: '500+ Sales'
  },
  {
    id: 4,
    name: 'Chrome Trim',
    model: 'ZMW 643',
    image: 'https://images.unsplash.com/photo-1600705722908-bab2e7fef916?auto=format&fit=crop&q=80',
    sales: '500+ Sales'
  }
];

const FeaturedProducts = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <SearchInput placeholder="Search product or services" />
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;