import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Checkout" description="เลือกช่องทางชำระเงิน ยืนยันยอด และสร้างคำสั่งซื้อกับ Supplier API หลังตรวจสอบการชำระเงิน" items={['PromptPay QR', 'TrueMoney', 'Bank transfer', 'Credit card']}>
      <div className="grid gap-4">
        <p className="text-white/75">เลือกช่องทางชำระเงิน ยืนยันยอด และสร้างคำสั่งซื้อกับ Supplier API หลังตรวจสอบการชำระเงิน</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
