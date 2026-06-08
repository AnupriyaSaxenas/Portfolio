import { profile } from "../data/resume";

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-24 md:pt-44 md:pb-32 max-w-5xl mx-auto">
      <p
        className="fade-up text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-6"
        style={{ animationDelay: "0.05s" }}
      >
        {profile.location} · {profile.title}
      </p>
      <h1
        className="fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-[var(--color-fg)] mb-8"
        style={{ animationDelay: "0.15s" }}
      >
        {profile.name}
      </h1>
      <p
        className="fade-up text-xl md:text-2xl leading-relaxed text-[var(--color-muted)] max-w-3xl"
        style={{ animationDelay: "0.3s" }}
      >
        {profile.tagline}
      </p>
      <div
        className="fade-up mt-12 flex items-center gap-3 text-sm text-[var(--color-subtle)]"
        style={{ animationDelay: "0.45s" }}
      >
        <span className="inline-block w-8 h-px bg-[var(--color-border)]" />
        <span>Scroll for the story →</span>
      </div>
    </section>
  );
}
