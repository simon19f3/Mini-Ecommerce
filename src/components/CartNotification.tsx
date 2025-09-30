'use client';

import { useCart } from '@/context/CartContext';

export default function CartNotification() {
  const { notification } = useCart();

  if (!notification.visible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-800 text-gray-100 px-4 py-2 rounded-md shadow-lg animate-notification">
      {notification.message}
    </div>
  );
}