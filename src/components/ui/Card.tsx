import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[1.5rem] border border-fuchsia-400/25 bg-slate-950/60 p-5 shadow-[0_0_45px_rgba(124,58,237,.16)] backdrop-blur-xl', className)} {...props} />;
}
