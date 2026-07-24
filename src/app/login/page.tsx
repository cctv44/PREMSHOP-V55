import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Login" description="เข้าสู่ระบบด้วยอีเมลหรือ Google ผ่าน NextAuth JWT session" items={['Email login', 'Google login', 'Forgot password']}>
      <div className="grid gap-4">
        <p className="text-white/75">เข้าสู่ระบบด้วยอีเมลหรือ Google ผ่าน NextAuth JWT session</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
