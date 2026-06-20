import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (document.documentElement.dataset.theme as Theme) ?? 'light';
  });

  function setTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setThemeState(next);
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const t: Theme = e.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = t;
      setThemeState(t);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return { theme, setTheme };
}
