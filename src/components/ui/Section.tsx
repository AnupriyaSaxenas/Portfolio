import { cn } from '../../lib/cn';

export function Section({
  id,
  labelledBy,
  children,
  className,
}: {
  id: string;
  labelledBy?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('py-24 md:py-32 min-h-screen', className)}
    >
      {children}
    </section>
  );
}
