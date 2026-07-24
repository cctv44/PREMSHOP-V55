import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Cart" description="ตรวจสอบรายการสินค้าในตะกร้าก่อนเข้าสู่ checkout และใช้ข้อมูล productId จาก Supplier API เท่านั้น" items={['แก้ไขจำนวน', 'ใช้คูปอง', 'ไปชำระเงิน']}>
      <div className="grid gap-4">
        <p className="text-white/75">ตรวจสอบรายการสินค้าในตะกร้าก่อนเข้าสู่ checkout และใช้ข้อมูล productId จาก Supplier API เท่านั้น</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
