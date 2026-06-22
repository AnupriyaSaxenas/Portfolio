import { globalReach, regions } from '../../data';
import { Card, Container, Reveal, Section, SectionHeader } from '../ui';

export function GlobalReach() {
  return (
    <Section id="global" labelledBy="global-heading" className="border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="global-heading"
            eyebrow="Global reach"
            heading={globalReach.headline}
            subhead={globalReach.body}
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {regions.map((region, i) => (
            <Reveal key={region.name} delay={i * 80}>
              <Card className="p-7">
                <div className="text-lg font-semibold text-fg mb-2">{region.name}</div>
                <div className="text-sm text-muted leading-relaxed">{region.context}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
