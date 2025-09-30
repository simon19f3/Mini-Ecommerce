import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import CartNotification from '@/components/CartNotification';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini E-commerce',
  description: 'Product Catalog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="container mx-auto p-4">
            {children}
            <CartNotification />
          </main>
        </CartProvider>
      </body>
    </html>
  );
}