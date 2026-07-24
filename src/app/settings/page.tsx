import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Settings" description="ตั้งค่าความปลอดภัย ธีม ภาษา และการแจ้งเตือน" items={['Dark mode', 'Password', 'Notification preferences']}>
      <div className="grid gap-4">
        <p className="text-white/75">ตั้งค่าความปลอดภัย ธีม ภาษา และการแจ้งเตือน</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
