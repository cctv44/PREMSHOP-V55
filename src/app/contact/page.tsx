import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Contact" description="ติดต่อทีมซัพพอร์ต 24 ชั่วโมงสำหรับคำสั่งซื้อหรือปัญหาการใช้งาน" items={['Live support', 'Email', 'Order inquiry']}>
      <div className="grid gap-4">
        <p className="text-white/75">ติดต่อทีมซัพพอร์ต 24 ชั่วโมงสำหรับคำสั่งซื้อหรือปัญหาการใช้งาน</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
