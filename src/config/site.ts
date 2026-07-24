import { Bell, CreditCard, Gift, Heart, History, LayoutDashboard, Lock, Settings, ShieldCheck, ShoppingBag, Star, UserRound } from 'lucide-react';

export const navItems = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/products', label: 'สินค้า' },
  { href: '/categories', label: 'หมวดหมู่' },
  { href: '/reviews', label: 'รีวิว' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'ติดต่อเรา' },
];

export const featureTiles = [
  { title: 'ส่งไว 1 นาที', body: 'ระบบอัตโนมัติส่งข้อมูลทันทีหลังชำระเงินสำเร็จ', icon: Gift },
  { title: 'ปลอดภัย 100%', body: 'เข้ารหัสข้อมูล สำรอง log และตรวจสอบธุรกรรมทุกคำสั่งซื้อ', icon: ShieldCheck },
  { title: 'ชำระเงินง่าย', body: 'รองรับ PromptPay, TrueMoney, โอนธนาคาร และบัตรเครดิต', icon: CreditCard },
  { title: 'โปรโมชันทุกวัน', body: 'คูปองและ Flash Sale สำหรับแพ็กเกจยอดนิยม', icon: Star },
];

export const dashboardLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/purchase-history', label: 'Purchase History', icon: History },
  { href: '/wishlist', label: 'Wishlist', icon: Heart },
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/profile', label: 'Profile', icon: UserRound },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/admin', label: 'Admin', icon: Lock },
  { href: '/products', label: 'Products', icon: ShoppingBag },
];
