import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Register" description="สร้างบัญชีลูกค้าใหม่พร้อม validation และ hash password ก่อนบันทึกลง PostgreSQL" items={['Create customer account', 'Accept terms', 'Start shopping']}>
      <div className="grid gap-4">
        <p className="text-white/75">สร้างบัญชีลูกค้าใหม่พร้อม validation และ hash password ก่อนบันทึกลง PostgreSQL</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
