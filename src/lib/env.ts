import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  SUPPLIER_API_URL: z.string().url().optional(),
  SUPPLIER_API_KEY: z.string().optional(),
  SUPPLIER_API_SECRET: z.string().optional(),
});

export const env = schema.parse(process.env);
export const supplierConfigured = Boolean(env.SUPPLIER_API_URL && env.SUPPLIER_API_KEY && env.SUPPLIER_API_SECRET);
export const googleConfigured = Boolean(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
