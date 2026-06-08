import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { profile } from "./data/resume";

function Nav() {
  const items = [
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/75 border-b border-[var(--color-border)]/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold tracking-tight text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors"
        >
          {profile.name.split(" ")[0]}.
        </a>
        <ul className="hidden sm:flex gap-8 text-sm text-[var(--color-muted)]">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-[var(--color-fg)] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
