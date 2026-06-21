import { useState } from 'react';
import { testimonials } from '../../data';
import { Card, Container, Reveal, Section, SectionHeader } from '../ui';

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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

        <div className="max-w-2xl mx-auto">
          <div key={current} className="testimonial-fade">
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

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border bg-card shadow-[var(--shadow-soft)] flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:shadow-[var(--shadow-lift)] transition-all duration-200"
            >
              <ArrowLeft />
            </button>

            <div className="flex gap-2" role="group" aria-label="Testimonial position">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2.5 bg-accent'
                      : 'w-2.5 h-2.5 bg-border hover:bg-muted/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-border bg-card shadow-[var(--shadow-soft)] flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:shadow-[var(--shadow-lift)] transition-all duration-200"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
