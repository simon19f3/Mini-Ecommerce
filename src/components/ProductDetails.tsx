'use client';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart, cart } = useCart();

  // Check if the product is in the cart
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col md:flex-row animate-fade-in transform transition-all duration-500 hover:scale-[1.02]">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="mb-4 md:mr-4 transform transition-all duration-300 hover:scale-105 animate-slide-in"
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-100">{product.name}</h1>
        <p className="text-xl text-gray-200">${product.price.toFixed(2)}</p>
        <p className="text-gray-300">Stock: {product.stock}</p>
        <p className="text-gray-300">{product.description}</p>
        {!isInCart && (
          <p className="text-gray-200 bg-gray-800 px-4 py-2 rounded-md mt-2 mb-2 animate-fade-in">
            This item is not in your cart. Add it now!
          </p>
        )}
        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 transform transition-all duration-300 hover:bg-green-600 hover:scale-105 animate-bounce-in disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}