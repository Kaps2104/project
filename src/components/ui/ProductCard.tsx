import React from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  model: string;
  image: string;
  sales: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex-none w-64">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
            <Heart className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.model}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">{product.sales}</span>
            <button className="text-red-600 text-sm font-medium">Visit Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;