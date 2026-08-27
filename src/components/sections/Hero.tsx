import { profile } from '../../data';
import { Avatar, Blobs, LinkButton } from '../ui';

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen px-6 pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-44 md:pb-32 border-b border-border">
      <Blobs />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          <div className="flex-1">
            <p
              className="fade-up inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full bg-card border border-border text-muted shadow-[var(--shadow-soft)] mb-8"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              {profile.title} · {profile.currentFocus}
            </p>
            <h1
              className="fade-up text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-fg mb-8"
              style={{ animationDelay: '0.15s' }}
            >
              {profile.name}
            </h1>
            <p
              className="fade-up text-xl md:text-2xl leading-relaxed text-muted max-w-xl"
              style={{ animationDelay: '0.3s' }}
            >
              {profile.tagline}
            </p>
            <div
              className="fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '0.45s' }}
            >
              <LinkButton href="#contact">Get in touch</LinkButton>
              {/* <LinkButton
                href={`mailto:${contact.email}`}
                variant="secondary"
              >
                Email me
              </LinkButton> */}
            </div>
          </div>
          <div
            className="fade-up-scale shrink-0 flex justify-center md:justify-end"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Gradient ring: 3px padding + gradient background creates the border effect */}
            <div
              className="rounded-full p-[3px] shadow-[var(--shadow-lift)]"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-soft) 60%, var(--color-border))',
              }}
            >
              <div className="rounded-full overflow-hidden w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" style={{ background: 'var(--color-bg)' }}>
                <Avatar
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  initials="AS"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
