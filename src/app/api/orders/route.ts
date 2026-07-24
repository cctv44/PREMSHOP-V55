import { NextRequest, NextResponse } from 'next/server';
import { checkoutSchema } from '@/lib/validations';
import { prisma } from '@/lib/prisma';
import { supplierApi } from '@/lib/supplier';
import { auth } from '@/auth';

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const parsed = checkoutSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { productId } = parsed.data;
  const userEmail = session.user.email;

  return await prisma.$transaction(async (tx) => {
    const product = await tx.product.findUnique({ where: { id: productId } });
    const user = await tx.user.findUnique({ where: { email: userEmail } });

    if (!product || !user) throw new Error('Product or User not found');
    if (Number(user.balance) < Number(product.price)) throw new Error('Insufficient balance');
    if (product.stock <= 0) throw new Error('Out of stock');

    // Call supplier API if needed (keeping original logic structure)
    const supplierOrder = await supplierApi.createOrder(parsed.data);

    await tx.user.update({
      where: { id: user.id },
      data: { balance: { decrement: product.price } },
    });

    await tx.product.update({
      where: { id: product.id },
      data: { stock: { decrement: 1 } },
    });

    const purchase = await tx.purchase.create({
      data: {
        userId: user.id,
        productId: product.id,
        credentials: supplierOrder.account || `AUTO-GEN-${Math.random().toString(36).substring(7).toUpperCase()}`,
      },
    });

    await tx.auditLog.create({
      data: { 
        userId: user.id, 
        action: 'PURCHASE_VIA_ORDER', 
        details: { 
          productId: product.id, 
          price: product.price,
          supplierOrderId: supplierOrder.supplierOrderId 
        } 
      }
    });

    return NextResponse.json({ purchase, supplierOrder });
  });
}
