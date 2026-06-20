import { cn } from '../../lib/cn';

export function Container({
  children,
  className,
  wide,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={cn(wide ? 'max-w-6xl' : 'max-w-5xl', 'mx-auto px-6', className)}>
      {children}
    </div>
  );
}
