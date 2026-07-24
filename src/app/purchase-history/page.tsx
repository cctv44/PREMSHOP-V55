import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Purchase History" description="ประวัติการซื้อพร้อมสถานะการจัดส่งและข้อมูลธุรกรรม" items={['Filter by date', 'View receipt', 'Reopen order']}>
      <div className="grid gap-4">
        <p className="text-white/75">ประวัติการซื้อพร้อมสถานะการจัดส่งและข้อมูลธุรกรรม</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
