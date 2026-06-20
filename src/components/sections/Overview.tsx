import { overview } from '../../data';
import { Container, Reveal, Section, SectionHeader } from '../ui';

export function Overview() {
  return (
    <Section id="overview" labelledBy="overview-heading" className="bg-card border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="overview-heading"
            eyebrow="About"
            heading="A decade of building, scaling, and leading."
          />
        </Reveal>
        <div className="max-w-3xl space-y-6">
          {overview.map((para, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-lg text-muted leading-relaxed">{para}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
