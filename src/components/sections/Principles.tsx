import { principles } from '../../data';
import type { IconName } from '../ui';
import { Card, Container, Icon, Reveal, Section, SectionHeader } from '../ui';

export function Principles() {
  return (
    <Section id="principles" labelledBy="principles-heading" className="border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="principles-heading"
            eyebrow="How I work"
            heading="The cornerstones I build on."
            subhead="Three beliefs that shape how I lead, plan, and ship."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="p-7 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent mb-5">
                  <Icon name={p.icon as IconName} className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-3">{p.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{p.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
