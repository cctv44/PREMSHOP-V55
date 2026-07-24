import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { Card } from '@/components/ui/Card';

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user?.email) return <p>Please login</p>;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { purchases: { include: { product: true } } },
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl font-black">คลังสินค้าของคุณ</h1>
      <p className="mt-4 text-xl">เครดิตคงเหลือ: {Number(user?.balance).toLocaleString()} THB</p>
      
      <div className="mt-10 grid gap-6">
        {user?.purchases.map((p) => (
          <Card key={p.id} className="p-6">
            <h3 className="text-xl font-bold">{p.product.name}</h3>
            <p className="mt-2 text-cyan-200">ข้อมูลสินค้า: <span className="font-mono bg-black/50 p-1 rounded">{p.credentials}</span></p>
            <p className="text-sm text-white/60">ซื้อเมื่อ: {p.purchasedAt.toLocaleDateString()}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
