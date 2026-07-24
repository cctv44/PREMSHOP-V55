export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  stock: number;
  available: boolean;
  delivery: string;
  image?: string;
  rating?: number;
  badge?: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
  count?: number;
};

export type OrderPayload = {
  productId: string;
  quantity: number;
  coupon?: string;
  paymentMethod: 'promptpay' | 'truemoney' | 'bank_transfer' | 'credit_card';
};
