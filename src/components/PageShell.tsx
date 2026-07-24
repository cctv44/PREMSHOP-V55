import { Card } from '@/components/ui/Card';

type PageShellProps = {
  title: string;
  eyebrow?: string;
  description: string;
  items?: string[];
  children?: React.ReactNode;
};

export function PageShell({ title, eyebrow = 'PREMSHOP', description, items = [], children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <span className="text-sm font-bold uppercase tracking-[.35em] text-fuchsia-300">{eyebrow}</span>
      <h1 className="mt-3 text-4xl font-black md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-white/70">{description}</p>
      <section className="mt-8 grid gap-5 md:grid-cols-[1.3fr_.7fr]">
        <Card>{children ?? <p className="text-white/75">พื้นที่นี้พร้อมเชื่อมต่อข้อมูล production ผ่าน Prisma, NextAuth และ Supplier API</p>}</Card>
        <Card>
          <h2 className="text-xl font-black">Quick actions</h2>
          <ul className="mt-4 grid gap-3 text-white/70">
            {items.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </Card>
      </section>
    </main>
  );
}
