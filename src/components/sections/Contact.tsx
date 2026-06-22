import { contact, socials } from '../../data';
import { Container, Icon, Reveal, Section } from '../ui';

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-heading" className="bg-card border-b border-border">
      <Container>
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
            Get in touch
          </p>
          <h2 id="contact-heading" className="text-3xl md:text-5xl font-semibold tracking-tight text-fg mb-6 max-w-3xl">
            Let's build something worth shipping.
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-4">
            {contact.hiringCta}
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-12">
            Whether it's scaling a team, untangling a complex system, or shipping a product customers love — I'd love to hear what you're working on.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-fit">
          {socials.map((s, i) => (
            <Reveal key={s.platform} delay={i * 100}>
              <a
                href={s.href}
                target={s.platform === 'Email' ? undefined : '_blank'}
                rel={s.platform === 'Email' ? undefined : 'noopener noreferrer'}
                className="group p-6 bg-card rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon
                    name={s.platform === 'Email' ? 'mail' : 'linkedin'}
                    className="w-5 h-5"
                    aria-hidden
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm text-subtle">{s.label}</span>
                    {s.platform !== 'Email' && (
                      <>
                        <Icon name="external" className="w-3 h-3 text-subtle shrink-0" aria-hidden />
                        <span className="sr-only">(opens in new tab)</span>
                      </>
                    )}
                  </div>
                  <div className="text-fg font-medium group-hover:text-accent transition-colors whitespace-nowrap text-sm">
                    {s.handle}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
