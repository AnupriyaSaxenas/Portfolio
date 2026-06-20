import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary';

const base =
  'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow-lift)]',
  secondary:
    'bg-card border border-border text-fg hover:border-accent/40 shadow-[var(--shadow-soft)]',
};

export function LinkButton({
  href,
  variant = 'primary',
  className,
  children,
  target,
  rel,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
}

export function Button({
  variant = 'primary',
  className,
  children,
  onClick,
  type = 'button',
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
