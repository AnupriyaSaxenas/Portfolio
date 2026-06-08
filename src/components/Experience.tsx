import { useEffect, useRef, useState } from "react";
import { experience } from "../data/resume";

function Role({
  index,
  visible,
  role,
}: {
  index: number;
  visible: boolean;
  role: (typeof experience)[number];
}) {
  return (
    <div
      className={`relative pl-10 md:pl-14 pb-14 last:pb-0 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]" />
      <div className="absolute left-[5px] top-2 bottom-0 w-px bg-[var(--color-border)] last:hidden" />

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--color-fg)]">
          {role.title}
        </h3>
        <span className="text-[var(--color-subtle)]">·</span>
        <span className="text-lg text-[var(--color-accent)] font-medium">
          {role.company}
        </span>
      </div>
      <div className="text-sm text-[var(--color-subtle)] tabular-nums mb-4">
        {role.period} · {role.location}
      </div>
      {role.summary && (
        <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed mb-5 max-w-3xl">
          {role.summary}
        </p>
      )}
      <ul className="space-y-2.5 max-w-3xl">
        {role.highlights.map((h, i) => (
          <li
            key={i}
            className="text-[var(--color-muted)] leading-relaxed flex gap-3"
          >
            <span className="text-[var(--color-accent)] mt-1.5 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="px-6 py-24 md:py-32 max-w-5xl mx-auto"
    >
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-fg)] mb-4">
          A decade of building, scaling, and leading.
        </h2>
        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
          From frontend engineering to managing distributed teams across three continents.
        </p>
      </div>
      <div>
        {experience.map((role, i) => (
          <Role key={`${role.company}-${role.period}`} index={i} visible={visible} role={role} />
        ))}
      </div>
    </section>
  );
}
