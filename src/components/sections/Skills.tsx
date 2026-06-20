import { skills } from '../../data';
import { Card, Container, Reveal, Section, SectionHeader, Tag } from '../ui';

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-heading" className="bg-card border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="skills-heading"
            eyebrow="Skills"
            heading="What I bring to a team."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <Card className="p-7 h-full">
                <h3 className="text-sm uppercase tracking-[0.15em] text-accent font-semibold mb-5">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
