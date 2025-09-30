import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';

export default async function ProductsPage({
  searchParams,
}: {
  readonly searchParams: Promise<{ readonly [key: string]: string | undefined }>;
}) {
  // Await the searchParams promise
  const params = await searchParams;
  const { search, category } = params;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <SearchBar />
        <CategoryFilter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}