'use client';

import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="mt-4 text-right">
        <p className="text-xl">Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}