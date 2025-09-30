'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';

const uniqueCategories = [...new Set(products.map((p) => p.category))];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || '';

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value) {
      params.set('category', e.target.value);
    } else {
      params.delete('category');
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <select
      value={category}
      onChange={handleCategoryChange}
      className="border border-gray-600 bg-gray-800 text-gray-100 rounded-md p-2 mb-4 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transform transition-all duration-300 hover:bg-gray-700 hover:scale-105 animate-fade-in w-full sm:w-auto"
    >
      <option value="" className="bg-gray-800 text-gray-100">
        All Categories
      </option>
      {uniqueCategories.map((cat) => (
        <option key={cat} value={cat} className="bg-gray-800 text-gray-100">
          {cat}
        </option>
      ))}
    </select>
  );
}