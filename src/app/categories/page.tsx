import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Categories" description="เรียกหมวดหมู่จาก Supplier API และใช้เป็นตัวกรองสินค้าโดยไม่บันทึกสินค้าในฐานข้อมูลถาวร" items={['Streaming', 'Music', 'Productivity', 'Gaming']}>
      <div className="grid gap-4">
        <p className="text-white/75">เรียกหมวดหมู่จาก Supplier API และใช้เป็นตัวกรองสินค้าโดยไม่บันทึกสินค้าในฐานข้อมูลถาวร</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
