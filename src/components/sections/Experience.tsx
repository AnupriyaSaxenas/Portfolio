import { experience } from '../../data';
import type { Role } from '../../data';
import { Container, Reveal, Section, SectionHeader } from '../ui';

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="p-7 md:p-9 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow duration-300">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-fg">
          {role.title}
        </h3>
        <span className="text-subtle" aria-hidden="true">·</span>
        <span className="text-lg text-accent font-medium">{role.company}</span>
      </div>
      <div className="text-sm text-subtle tabular-nums mb-4">
        {role.period} · {role.location}
      </div>
      {role.summary && (
        <p className="text-base md:text-lg text-muted leading-relaxed mb-5 max-w-3xl">
          {role.summary}
        </p>
      )}
      <ul className="space-y-2.5 max-w-3xl">
        {role.highlights.map((h, i) => (
          <li key={i} className="text-muted leading-relaxed flex items-baseline gap-3">
            <span className="text-accent shrink-0" aria-hidden="true">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading" className="border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="experience-heading"
            eyebrow="Experience"
            heading="A decade of building, scaling, and leading."
            subhead="Growing high-performing teams, developing leaders, and creating environments where great work happens."
          />
        </Reveal>
        <div className="space-y-5">
          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${role.period}`} delay={i * 80}>
              <RoleCard role={role} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
