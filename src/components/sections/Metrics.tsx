import { metrics } from '../../data';
import { Container, Reveal, SectionHeader } from '../ui';
import { useInView } from '../../hooks/useInView';

export function Metrics() {
  const { ref, inView } = useInView<HTMLElement>(0.15);

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="py-24 md:py-32 min-h-screen bg-card border-b border-border"
      ref={ref}
    >
      <Container wide>
        <Reveal>
          <SectionHeader
            id="impact-heading"
            eyebrow="Impact"
            heading="Numbers that tell the story."
            subhead="Outcomes from leading distributed teams, scaling cloud-native products, and shipping work that customers actually use."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-8 md:p-10 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-700 ease-out ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-accent mb-3 tabular-nums">
                {m.value}
              </div>
              <div className="text-base font-medium text-fg mb-1">{m.label}</div>
              <div className="text-sm text-muted leading-relaxed">{m.context}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
