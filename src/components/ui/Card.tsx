import { cn } from '../../lib/cn';

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-card rounded-2xl shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)]',
        className
      )}
    >
      {children}
    </div>
  );
}
