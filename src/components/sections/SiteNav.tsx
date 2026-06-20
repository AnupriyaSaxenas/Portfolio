import { useState } from 'react';
import { navItems, profile } from '../../data';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ThemeToggle } from '../ui/ThemeToggle';

const SECTION_IDS = navItems.map((item) => item.href.slice(1)) as readonly string[];

export function SiteNav() {
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Site navigation"
      className="bg-bg border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold tracking-tight text-fg hover:text-accent transition-colors"
        >
          {profile.name.split(' ')[0]}.
        </a>

        {/* Desktop nav — only shown at lg+ */}
        <ul className="hidden lg:flex gap-1 text-sm">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? 'text-accent bg-accent-soft font-medium'
                      : 'text-muted hover:text-fg hover:bg-accent-soft'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Hamburger — hidden at lg+ */}
          <button
            className="lg:hidden p-2 rounded-lg text-muted hover:text-fg hover:bg-accent-soft transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-border/50 bg-bg/95 backdrop-blur-md">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm transition-colors ${
                      isActive
                        ? 'text-accent bg-accent-soft font-medium'
                        : 'text-muted hover:text-fg hover:bg-accent-soft'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
