import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Wishlist" description="รายการสินค้าที่สนใจโดยเก็บเฉพาะ supplierProductId เพื่อไม่ทำซ้ำข้อมูลสินค้า" items={['Move to cart', 'Price watch', 'Remove item']}>
      <div className="grid gap-4">
        <p className="text-white/75">รายการสินค้าที่สนใจโดยเก็บเฉพาะ supplierProductId เพื่อไม่ทำซ้ำข้อมูลสินค้า</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
