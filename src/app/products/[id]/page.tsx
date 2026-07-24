import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ShoppingBag } from 'lucide-react';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true }
  });

  if (!product) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="glass p-8 rounded-3xl">
        <span className="text-sm font-bold text-fuchsia-400">{product.category.name}</span>
        <h1 className="text-5xl font-black mt-2">{product.name}</h1>
        <p className="mt-6 text-xl text-cyan-100/80 leading-relaxed">{product.description}</p>
        <p className="mt-8 text-4xl font-black">{Number(product.price).toLocaleString()} THB</p>
        
        <form action="/api/purchase" method="POST" className="mt-10">
          <input type="hidden" name="productId" value={product.id} />
          <Button className="w-full text-lg py-6" type="submit">
            <ShoppingBag className="size-5" /> ซื้อสินค้าทันที
          </Button>
        </form>
      </div>
    </main>
  );
}
