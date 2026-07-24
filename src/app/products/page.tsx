import { ProductCard } from '@/components/ProductCard';
import { prisma } from '@/lib/prisma';
import type { Product } from '@/lib/types';

// สำคัญมาก: บังคับให้หน้าเว็บดึงข้อมูลใหม่ทุกครั้ง (Dynamic) 
// เพื่อไม่ให้ Vercel พยายามเชื่อมต่อ Database ตอน Build ซึ่งมักจะทำให้เกิด Error
export const dynamic = 'force-dynamic';

export default async function Products() {
  // ดึงข้อมูลสินค้าจาก Database (Supabase) ผ่าน Prisma
  const productsFromDb = await prisma.product.findMany({
    include: { 
      category: true 
    },
    orderBy: {
      createdAt: 'desc' // เรียงจากใหม่ไปเก่า
    }
  });

  // แปลงข้อมูลจาก Prisma ให้ตรงกับรูปแบบที่ ProductCard ต้องการ (Interface Product)
  const products: Product[] = productsFromDb.map((p) => ({
    id: p.id,
    name: p.name,
    category: p.category?.name || 'ทั่วไป',
    description: p.description ?? '',
    price: Number(p.price),
    currency: 'THB',
    stock: p.stock,
    available: p.stock > 0,
    delivery: 'Instant',
    image: p.category?.icon ?? undefined,
  }));

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black">สินค้าทั้งหมด</h1>
          <p className="text-white/60 mt-2">เลือกซื้อไอดีพรีเมียมคุณภาพดี ราคาประหยัด</p>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid-auto mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center glass p-10 rounded-3xl">
          <h2 className="text-2xl font-bold">ยังไม่มีสินค้าในระบบ</h2>
          <p className="text-white/60 mt-2">โปรดเพิ่มสินค้าในฐานข้อมูลหรือรัน seed ข้อมูล</p>
        </div>
      )}
    </main>
  );
}
