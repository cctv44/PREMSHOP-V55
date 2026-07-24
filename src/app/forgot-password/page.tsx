import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Forgot Password" description="เริ่มกระบวนการรีเซ็ตรหัสผ่านผ่านอีเมลที่ลงทะเบียนไว้" items={['Verify email', 'Send reset link', 'Set new password']}>
      <div className="grid gap-4">
        <p className="text-white/75">เริ่มกระบวนการรีเซ็ตรหัสผ่านผ่านอีเมลที่ลงทะเบียนไว้</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
