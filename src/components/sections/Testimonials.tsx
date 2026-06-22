import { useState } from 'react';
import { testimonials } from '../../data';
import { Card, Container, Reveal, Section, SectionHeader } from '../ui';

const arrowClass =
  'w-14 self-stretch flex items-center justify-center rounded-xl text-muted hover:text-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const t = testimonials[current];

  return (
    <Section id="testimonials" labelledBy="testimonials-heading" className="bg-card border-b border-border">
      <Container>
        <Reveal>
          <SectionHeader
            id="testimonials-heading"
            eyebrow="Testimonials"
            heading="What collaborators say."
            subhead="Feedback from peers, managers, and direct reports across TrendAI."
          />
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {/* Arrow buttons stretch only to card height — dots are outside this row */}
          <div className="flex items-stretch gap-2">
            <button onClick={prev} aria-label="Previous testimonial" className={arrowClass}>
              <ChevronLeft />
            </button>

            <div key={current} className="flex-1 min-w-0 testimonial-fade">
              <Card className="p-8 md:p-10">
                <p className="text-base text-muted leading-relaxed mb-8">
                  <span className="text-3xl leading-none text-accent select-none">&ldquo;&nbsp;</span>
                  {t.quote}
                  <span className="text-3xl leading-none text-accent select-none">&nbsp;&rdquo;</span>
                </p>
                <div className="border-t border-border pt-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-fg">{t.role}</div>
                    <div className="text-xs text-subtle mt-0.5">{t.company}</div>
                  </div>
                  <div className="text-xs text-subtle tabular-nums">{current + 1} / {total}</div>
                </div>
              </Card>
            </div>

            <button onClick={next} aria-label="Next testimonial" className={arrowClass}>
              <ChevronRight />
            </button>
          </div>

          {/* Dot nav sits outside the arrow row so arrows don't stretch to include it */}
          <div className="flex justify-center gap-2 mt-6" role="group" aria-label="Testimonial position">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                className={`rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  i === current
                    ? 'w-6 h-2.5 bg-accent'
                    : 'w-2.5 h-2.5 bg-border hover:bg-muted/40'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
