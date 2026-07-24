import Link from 'next/link';
import { Crown, Search, ShoppingCart, User } from 'lucide-react';
import { navItems } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black">
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_25px_rgba(217,70,239,.45)]">
            <Crown />
          </span>
          PREM<span className="neon">SHOP</span>
        </Link>
        <nav className="hidden flex-1 justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link className="rounded-xl px-4 py-2 text-sm font-semibold text-white/80 hover:bg-purple-500/20 hover:text-white" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/products" aria-label="Search products"><Search /></Link>
        <Link href="/cart" aria-label="Cart"><ShoppingCart /></Link>
        <Link href="/profile" aria-label="Profile"><User /></Link>
      </div>
    </header>
  );
}
