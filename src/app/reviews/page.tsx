import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Reviews" description="รีวิวจากลูกค้าจริงหลังซื้อสินค้าและตรวจสอบคำสั่งซื้อ" items={['Verified reviews', 'Rating summary', 'Write review']}>
      <div className="grid gap-4">
        <p className="text-white/75">รีวิวจากลูกค้าจริงหลังซื้อสินค้าและตรวจสอบคำสั่งซื้อ</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
