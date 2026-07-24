import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentProps<'button'> & {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary: 'bg-gradient-to-r from-fuchsia-500 via-violet-600 to-sky-500 text-white shadow-[0_0_28px_rgba(168,85,247,.35)]',
  secondary: 'border border-fuchsia-400/30 bg-white/5 text-white hover:bg-fuchsia-500/15',
  ghost: 'text-white/75 hover:bg-white/10 hover:text-white',
};

export function Button({ href, children, className, variant = 'primary', ...props }: ButtonProps) {
  const classes = cn('inline-flex items-center justify-center rounded-2xl px-5 py-3 font-extrabold transition', variants[variant], className);

  if (href) {
    return <Link className={classes} href={href}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
