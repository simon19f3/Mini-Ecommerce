import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

export default function CartItem({ item }: { readonly item: CartItemType }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          disabled={item.quantity >= item.stock}
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
}