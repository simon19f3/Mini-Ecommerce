import { products } from '@/data/products';
import ProductDetails from '@/components/ProductDetails';

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ 
  params 
}: { 
  readonly params: Promise<{ readonly id: string }> 
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <ProductDetails product={product} />
    </div>
  );
}