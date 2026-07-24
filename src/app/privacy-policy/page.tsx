import { PageShell } from '@/components/PageShell';

export default function Page() {
  return (
    <PageShell title="Privacy Policy" description="นโยบายความเป็นส่วนตัว การเก็บข้อมูลลูกค้า และการป้องกันข้อมูลธุรกรรม" items={['Data collection', 'Security', 'User rights']}>
      <div className="grid gap-4">
        <p className="text-white/75">นโยบายความเป็นส่วนตัว การเก็บข้อมูลลูกค้า และการป้องกันข้อมูลธุรกรรม</p>
        <form className="grid gap-3 md:grid-cols-2">
          <input placeholder="ค้นหาหรือกรอกข้อมูล" />
          <button className="btn" type="button">ดำเนินการ</button>
        </form>
      </div>
    </PageShell>
  );
}
