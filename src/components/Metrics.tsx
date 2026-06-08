import { useEffect, useRef, useState } from "react";
import { metrics } from "../data/resume";

function MetricCard({
  index,
  visible,
  value,
  label,
  context,
}: {
  index: number;
  visible: boolean;
  value: string;
  label: string;
  context: string;
}) {
  return (
    <div
      className={`group relative p-8 md:p-10 border border-[var(--color-border)] bg-[var(--color-card)] rounded-xl transition-all duration-700 ease-out hover:border-[var(--color-accent)]/40 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-fg)] mb-3 tabular-nums">
        {value}
      </div>
      <div className="text-base font-medium text-[var(--color-fg)] mb-1">
        {label}
      </div>
      <div className="text-sm text-[var(--color-muted)] leading-relaxed">
        {context}
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full h-px bg-[var(--color-accent)] absolute top-0 right-0" />
        <div className="h-full w-px bg-[var(--color-accent)] absolute top-0 right-0" />
      </div>
    </div>
  );
}

export function Metrics() {
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
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="impact"
      className="px-6 py-24 md:py-32 max-w-6xl mx-auto"
    >
      <div className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
          Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-fg)] mb-4">
          Numbers that tell the story.
        </h2>
        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
          Outcomes from leading distributed teams, scaling cloud-native products,
          and shipping work that customers actually use.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {metrics.map((m, i) => (
          <MetricCard
            key={m.label}
            index={i}
            visible={visible}
            value={m.value}
            label={m.label}
            context={m.context}
          />
        ))}
      </div>
    </section>
  );
}
