import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { formatMoney } from '@/lib/utils';
import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400" />
      <div className="mb-4 flex items-start justify-between">
        <div className="grid size-16 place-items-center rounded-2xl bg-black/50 text-3xl ring-1 ring-white/10">
          {product.image ?? product.name[0]}
        </div>
        {product.badge && <span className="rounded-full bg-pink-500 px-2 py-1 text-xs font-bold">{product.badge}</span>}
      </div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="mt-1 min-h-12 text-sm text-cyan-100/80">{product.description}</p>
      <div className="mt-3 flex items-center gap-1 text-sm text-white/80">
        <Star className="size-4 fill-yellow-400 text-yellow-400" />
        {product.rating ?? 4.9} • {product.available ? `${product.stock} in stock` : 'Unavailable'}
      </div>
      <p className="mt-4 text-2xl font-black">{formatMoney(product.price, product.currency)}</p>
      <div className="mt-4 flex gap-2">
        <Button className="flex-1 gap-2" href={`/products/${product.id}`}><ShoppingBag className="size-4" />ซื้อเลย</Button>
        <button className="rounded-xl border border-purple-400/40 p-3 transition hover:bg-purple-500/20" aria-label="Add to wishlist"><Heart /></button>
      </div>
    </Card>
  );
}
