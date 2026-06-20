import { useTheme } from '../../hooks/useTheme';
import { Icon } from './Icon';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-full text-muted hover:text-fg hover:bg-accent-soft transition-colors"
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="w-5 h-5" aria-hidden />
    </button>
  );
}
