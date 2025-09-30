'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-between 
                  bg-gray-800 shadow-lg 
                  transform transition-all duration-300 ease-in-out 
                  ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className={`rounded-md transition-transform duration-300 ease-in-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
      <div className="text-center flex-grow">
        <h2 className="text-xl font-bold text-gray-100 mb-2">{product.name}</h2>
        <p className="text-gray-300 text-lg mb-1">${product.price.toFixed(2)}</p>
        <p className={`text-sm ${product.stock === 0 ? 'text-red-400' : 'text-gray-400'} mb-4`}>
          Stock: {product.stock === 0 ? 'Out of Stock' : product.stock}
        </p>
      </div>
      <div className="flex space-x-3 mt-4 w-full justify-center">
        <Link href={`/products/${product.id}`} passHref>
          <span
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-base font-medium 
                       hover:bg-blue-700 transition-all duration-300 ease-in-out 
                       transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Details
          </span>
        </Link>
        <button
          onClick={() => addToCart(product)}
          className={`px-5 py-2 rounded-lg text-base font-medium 
                      transition-all duration-300 ease-in-out 
                      transform hover:scale-105 active:scale-95 
                      ${
                        product.stock === 0
                          ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-70'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}