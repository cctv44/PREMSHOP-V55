import axios, { AxiosError, type AxiosRequestConfig } from 'axios';
import { env, supplierConfigured } from './env';
import type { Category, OrderPayload, Product } from './types';

type CacheEntry<T> = { expires: number; value: T };
type SupplierOrderResponse = { supplierOrderId: string; delivery: string; account: string };

const cache = new Map<string, CacheEntry<unknown>>();
const cacheTtlMs = 60_000;

const client = axios.create({
  baseURL: env.SUPPLIER_API_URL,
  timeout: 8_000,
  headers: {
    'x-api-key': env.SUPPLIER_API_KEY ?? '',
    'x-api-secret': env.SUPPLIER_API_SECRET ?? '',
  },
});

async function supplierRequest<T>(key: string, path: string, options: AxiosRequestConfig = {}) {
  if (!supplierConfigured) {
    throw new Error('Supplier API environment variables are not configured.');
  }

  const cached = cache.get(key) as CacheEntry<T> | undefined;
  if (cached && cached.expires > Date.now()) {
    return cached.value;
  }

  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await client.request<T>({ url: path, ...options });
      cache.set(key, { expires: Date.now() + cacheTtlMs, value: response.data });
      return response.data;
    } catch (error) {
      lastError = error;
      const axiosError = error as AxiosError;
      console.error('Supplier API request failed', {
        attempt,
        path,
        status: axiosError.response?.status,
        message: axiosError.message,
      });
      await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
    }
  }

  throw lastError;
}

export const supplierApi = {
  categories: () => supplierRequest<Category[]>('categories', '/categories'),
  products: (query = '') => supplierRequest<Product[]>(`products:${query}`, '/products', { params: query ? { q: query } : undefined }),
  product: (id: string) => supplierRequest<Product>(`product:${id}`, `/products/${id}`),
  createOrder: (payload: OrderPayload) =>
    supplierRequest<SupplierOrderResponse>(`order:${crypto.randomUUID()}`, '/orders', {
      method: 'POST',
      data: payload,
    }),
};
