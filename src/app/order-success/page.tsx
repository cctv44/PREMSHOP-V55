import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Order Success" description="แสดงผลคำสั่งซื้อ เลข supplier order และข้อมูลบัญชีที่จัดส่งหลังชำระเงินสำเร็จ" items={['ดูข้อมูลบัญชี', 'ดาวน์โหลดใบเสร็จ', 'ติดตามสถานะ']}>
      <div className="grid gap-4">
        <p className="text-white/75">แสดงผลคำสั่งซื้อ เลข supplier order และข้อมูลบัญชีที่จัดส่งหลังชำระเงินสำเร็จ</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
