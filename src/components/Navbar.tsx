'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';


export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/products" className="text-xl font-bold">
          Mini E-commerce
        </Link>
        <Link href="/cart" className="flex items-center">
          <ShoppingCart className="mr-2" />
          Cart ({itemCount})
        </Link>
      </div>
    </nav>
  );
}