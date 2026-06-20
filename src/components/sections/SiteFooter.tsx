import { profile } from '../../data';

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-subtle">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React · Vite · Tailwind</span>
      </div>
    </footer>
  );
}
