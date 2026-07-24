import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Admin Dashboard" description="แผงควบคุมผู้ดูแลสำหรับ orders, customers, coupons, reviews, transactions, settings, banners, analytics และ logs" items={['Orders', 'Customers', 'Coupons', 'Logs']}>
      <div className="grid gap-4">
        <p className="text-white/75">แผงควบคุมผู้ดูแลสำหรับ orders, customers, coupons, reviews, transactions, settings, banners, analytics และ logs</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
