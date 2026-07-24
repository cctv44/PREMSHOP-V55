import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Profile" description="จัดการข้อมูลส่วนตัว เบอร์โทร และรูปโปรไฟล์" items={['Edit profile', 'Update phone', 'Avatar']}>
      <div className="grid gap-4">
        <p className="text-white/75">จัดการข้อมูลส่วนตัว เบอร์โทร และรูปโปรไฟล์</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
