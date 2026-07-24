import { ProductCard } from '@/components/ProductCard';
import { prisma } from '@/lib/prisma';
import type { Product } from '@/lib/types';

export default async function Products() {
  const productsFromDb = await prisma.product.findMany({
    include: { category: true }
  });

  // Map Prisma Product to the expected Product type
  const products: Product[] = productsFromDb.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category.name,
    description: p.description ?? '',
    price: Number(p.price),
    currency: 'THB',
    stock: p.stock,
    available: p.stock > 0,
    delivery: 'Instant',
    image: p.category.icon ?? undefined,
  }));

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black">สินค้าทั้งหมด</h1>
      <div className="grid-auto mt-10">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
