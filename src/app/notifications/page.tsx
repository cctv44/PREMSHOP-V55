import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Notifications" description="ศูนย์แจ้งเตือนคำสั่งซื้อ โปรโมชัน และประกาศระบบ" items={['Order updates', 'Promotions', 'Security alerts']}>
      <div className="grid gap-4">
        <p className="text-white/75">ศูนย์แจ้งเตือนคำสั่งซื้อ โปรโมชัน และประกาศระบบ</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
