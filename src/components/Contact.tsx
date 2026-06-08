import { contact, profile } from "../data/resume";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
    { label: "LinkedIn", href: contact.linkedin, value: "linkedin.com/in/your-handle" },
    { label: "GitHub", href: contact.github, value: "github.com/your-handle" },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-24 md:py-32 max-w-5xl mx-auto border-t border-[var(--color-border)]"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
        Get in touch
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-fg)] mb-6 max-w-3xl">
        Let's build something worth shipping.
      </h2>
      <p className="text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl mb-12">
        Whether it's scaling a team, untangling a complex system, or shipping a
        product customers love — I'd love to hear what you're working on.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "Email" ? undefined : "_blank"}
            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
            className="group p-6 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="text-sm text-[var(--color-subtle)] mb-2">
              {link.label}
            </div>
            <div className="text-[var(--color-fg)] font-medium group-hover:text-[var(--color-accent)] transition-colors break-all">
              {link.value}
            </div>
          </a>
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-[var(--color-subtle)]">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React · Vite · Tailwind</span>
      </footer>
    </section>
  );
}
