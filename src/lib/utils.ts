import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(value: number, currency = 'THB') {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency }).format(value);
}
