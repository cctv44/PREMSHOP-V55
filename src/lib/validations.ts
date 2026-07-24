import { z } from 'zod';
export const registerSchema=z.object({name:z.string().min(2),email:z.string().email(),password:z.string().min(8)});
export const checkoutSchema=z.object({productId:z.string().min(1),quantity:z.coerce.number().int().positive(),paymentMethod:z.enum(['promptpay','truemoney','bank_transfer','credit_card']),coupon:z.string().optional()});
export const purchaseSchema = z.object({ productId: z.string().min(1) });
export const topupSchema = z.object({ amount: z.number().positive() });
