import { skills } from "../data/resume";

export function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 md:py-32 max-w-5xl mx-auto border-t border-[var(--color-border)]"
    >
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-fg)]">
          What I bring to a team.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm uppercase tracking-[0.15em] text-[var(--color-subtle)] font-medium mb-5">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-fg)] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
