import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Terms" description="เงื่อนไขการใช้งาน การรับประกัน การคืนเงิน และข้อกำหนด marketplace" items={['Marketplace rules', 'Refund policy', 'Acceptable use']}>
      <div className="grid gap-4">
        <p className="text-white/75">เงื่อนไขการใช้งาน การรับประกัน การคืนเงิน และข้อกำหนด marketplace</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
