import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="FAQ" description="คำถามที่พบบ่อยเกี่ยวกับสินค้า การชำระเงิน การจัดส่ง และความปลอดภัย" items={['Payment help', 'Delivery help', 'Account warranty']}>
      <div className="grid gap-4">
        <p className="text-white/75">คำถามที่พบบ่อยเกี่ยวกับสินค้า การชำระเงิน การจัดส่ง และความปลอดภัย</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
