import { cn } from '../../lib/cn';

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'px-3 py-1.5 text-sm rounded-full bg-accent-soft text-fg hover:bg-accent hover:text-white transition-colors cursor-default',
        className
      )}
    >
      {children}
    </span>
  );
}
