import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { featureTiles } from '@/config/site';
import { supplierApi } from '@/lib/supplier';
import type { Product } from '@/lib/types';

// บังคับให้หน้านี้ดึงข้อมูลตอนรันเว็บจริงเท่านั้น ไม่ต้องดึงตอน Build
export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const data = await supplierApi.products();
    // ตรวจสอบให้แน่ใจว่าเป็น Array ถ้าไม่ใช่ให้ส่งค่าว่างกลับไป
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch products error:", error);
    return [] as Product[];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      {/* ส่วน Hero และ Features (คงเดิม) */}
      <section className="glass grid overflow-hidden rounded-[2rem] p-8 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <span className="rounded-full bg-fuchsia-500/20 px-4 py-2 font-bold">🔥 ร้านขายดีอันดับ 1</span>
          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            ซื้อบัญชีพรีเมียม
            <br />
            ง่ายๆ ได้ทันที <span className="neon">24 ชม.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/75">บริการอัตโนมัติ รวดเร็ว ปลอดภัย 100% พร้อมใช้งานได้ทันทีหลังชำระเงิน</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/products">ช้อปเลยตอนนี้</Button>
            <Button href="/categories" variant="secondary">ดูแพ็กเกจทั้งหมด</Button>
          </div>
        </div>
        <div className="mt-8 grid place-items-center md:mt-0">
          <div className="relative aspect-square w-full max-w-md rounded-[2rem] bg-gradient-to-br from-fuchsia-500/30 via-purple-700/20 to-blue-500/30 p-8 text-center ring-1 ring-white/10">
            <div className="text-8xl">👑</div>
            <h2 className="mt-10 text-3xl font-black">PREMSHOP SUCCESS</h2>
            <p className="mt-4 text-white/70">Netflix • Disney+ • Spotify • YouTube • Prime Video</p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {featureTiles.map((feature) => (
          <Card key={feature.title}>
            <feature.icon className="mb-4 size-8 text-fuchsia-300" />
            <b>{feature.title}</b>
            <p className="mt-2 text-sm text-white/65">{feature.body}</p>
          </Card>
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-black">🔥 สินค้าแนะนำ</h2>
          <Button href="/products" variant="ghost">ดูทั้งหมด →</Button>
        </div>
        {/* เพิ่มการเช็ค Array.isArray อีกชั้นเพื่อความชัวร์ */}
        {Array.isArray(products) && products.length > 0 ? (
          <div className="grid-auto">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Card>
            <b>ไม่พบข้อมูลสินค้าจาก Supplier</b>
            <p className="mt-2 text-white/70">
              โปรดตรวจสอบการตั้งค่า SUPPLIER_API_URL ใน Vercel Environment Variables 
              หรือตรวจสอบว่า API ยังทำงานอยู่
            </p>
          </Card>
        )}
      </section>
    </main>
  );
}
