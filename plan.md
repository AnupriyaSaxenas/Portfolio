# Portfolio Rebuild — Implementation Plan

## Context

Rebuilt the portfolio from scratch as a Vite 8 + React 19 + TypeScript + Tailwind 4 static SPA. The site is deployed to GitHub Pages at **https://anupriyasaxenas.github.io/Portfolio/**.

## Model preference

Default to **Sonnet 4.6** for all work on this project. Switch to Opus only if a task needs capability Sonnet lacks, and **ask before switching**.

## Stack

- Vite 8 + React 19 + TypeScript + Tailwind 4
- `@fontsource-variable/inter` — self-hosted Inter Variable font
- Tailwind 4 `@custom-variant dark` with `data-theme` attribute strategy
- `@theme inline` for CSS-variable-based semantic token utilities
- No router, no SSR — static SPA

## Engineering standards

All code in this project should be written to staff-engineer quality. That means every change must satisfy these bars without being reminded:

### Accessibility (WCAG 2.1 AA)
- Semantic HTML first — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` over generic `<div>`
- Every interactive element reachable and operable by keyboard alone
- Focus rings always visible (never `outline: none` without a custom replacement)
- `SkipLink` present so keyboard/screen-reader users can bypass the nav
- `aria-label` / `aria-labelledby` on landmark regions and icon-only controls
- `aria-pressed`, `aria-current`, `aria-hidden` used correctly — no cargo-culting
- Color contrast ≥ 4.5 : 1 for normal text, ≥ 3 : 1 for large text, against both light and dark themes
- Images have meaningful `alt` text; decorative images use `alt=""`
- Motion: all animations respect `prefers-reduced-motion: reduce` — disable or reduce keyframe animations

### Responsiveness
- Mobile-first — base styles target small screens, breakpoints add complexity upward
- Layouts tested mentally at 375 px, 768 px, 1024 px, 1440 px
- No horizontal overflow — no fixed pixel widths wider than the viewport
- Touch targets ≥ 44 × 44 px
- Typography scales with viewport — use responsive text size utilities (`text-sm md:text-base` etc.)

### Theming
- Use only semantic tokens (`text-fg`, `bg-card`, `border-border`, etc.) — never hardcode hex or Tailwind primitive colors in components
- New UI elements must look correct in both light and dark themes before the change is considered done
- Shadow and ring values via CSS variables so they flip correctly in dark mode

### Code quality
- TypeScript strict — no `any`, no non-null assertions without a comment explaining why
- Props typed explicitly; avoid over-broad `React.FC` generics
- Components are small and single-purpose; shared primitives live in `components/ui/`
- Data is static and typed — lives in `data/`, imported into sections; no inline magic strings
- No dead code, no commented-out experiments left behind

## Theming

- Two-tier token system: primitive palette → semantic tokens in `:root` / `[data-theme="dark"]`
- Semantic utilities: `bg-bg`, `bg-card`, `text-fg`, `text-muted`, `text-accent`, `border-border`, etc.
- Manual toggle via `useTheme` hook + `ThemeToggle` button (sun/moon icons, `aria-pressed`)
- No-FOUC inline script in `index.html` sets `data-theme` before stylesheet loads
- Light bg: `#f7f7fb` (lavender), dark bg: `#0e0c1a`

## Architecture

```
src/
  main.tsx
  App.tsx                   # sticky header, main, footer (commented out)
  styles/index.css           # tokens, @custom-variant, keyframes, smooth scroll
  lib/cn.ts
  hooks/
    useTheme.ts
    useInView.ts             # IntersectionObserver + useLayoutEffect for in-viewport reveal
    useActiveSection.ts      # nav active state via passive scroll + getBoundingClientRect
  components/
    ui/      Container, Section, SectionHeader, Card, Button/LinkButton,
             Tag, Icon, Avatar, Blobs, Reveal, ThemeToggle, SkipLink
    sections/ SiteNav, Hero, Overview, Principles, Metrics, Experience,
              Skills, GlobalReach, Testimonials, Contact, SiteFooter
  data/      types.ts profile.ts overview.ts principles.ts skills.ts
             metrics.ts experience.ts global.ts contact.ts nav.ts
             testimonials.ts index.ts
```

## Section order (App.tsx)

SkipLink → sticky `<header>` (SiteNav) → `<main>`: Hero → Overview → Principles → Metrics → Experience → Skills → GlobalReach → Testimonials → Contact → `</main>` → `{/* SiteFooter commented out */}`

## Key decisions & UX

- **Alternating backgrounds:** `bg-card` (white) on Overview / Metrics / Skills / Testimonials / Contact; default `bg-bg` (lavender) on Principles / Experience / GlobalReach. Each white section has `border-b border-border` for a clean edge.
- **`min-h-screen` on all sections** — prevents the next section's heading from peeking into the viewport.
- **Sticky header** on `<header>` element (not the inner `<nav>`) so the hamburger dropdown pushes content down rather than overlaying it.
- **Nav:** pill nav at `lg+`, hamburger + dropdown below `lg`. 8 items: About, How I Work, Impact, Experience, Skills, Global Reach, Testimonials, Contact.
- **Smooth scroll** via `html { scroll-behavior: smooth }` in CSS.
- **Hero avatar:** responsive sizes (w-32 → w-80 across breakpoints), gradient ring, `fetchPriority="high"`.
- **Opaque nav** — `bg-bg` solid, no backdrop blur (user preferred no translucency).
- **Footer** — commented out in App.tsx, import also commented. Easy to restore.
- **Contact cards** — `w-fit` grid, `whitespace-nowrap` on handles, external link icon inline next to label (not `ml-auto` floated).
- **Testimonials carousel** — single-card view with prev/next arrow buttons and pill dot nav. Cards fade in on slide change via `.testimonial-fade` keyframe. 6 real quotes from TrendAI colleagues (managers, peers, reports). Anonymous attribution: role + company only, no names.
- **`useActiveSection` refactored** — replaced IntersectionObserver approach with a passive scroll listener using `getBoundingClientRect()`. Tracks whichever section's top has passed `NAV_HEIGHT` (120 px), which is more reliable across section sizes.

## Content

- **Company:** TrendAI (rebranded from Trend Micro)
- **Contact:** `aspriyamail@gmail.com` + `linkedin.com/in/anupriyasaxena`
- **Headshot:** `public/headshot.png` — path uses `import.meta.env.BASE_URL` for GitHub Pages compatibility
- **Deloitte location:** India
- **Overview:** deduplicated — no longer repeats metrics or experience summary verbatim
- **Skills → Education & Certifications:** B.E. Information Technology (Maharshi Dayanand University), Professional Scrum Master I (PSM I) — AWS cert removed (expired Oct 2025)

## Deployment

- GitHub repo: `https://github.com/AnupriyaSaxenas/Portfolio`
- GitHub Pages URL: `https://anupriyasaxenas.github.io/Portfolio/`
- `vite.config.ts` has `base: '/Portfolio/'`
- Auto-deploys via `.github/workflows/deploy.yml` on every push to `main`
- Personal GitHub account — independent of employer

## Deferred

- Resume PDF (≤2 pages) — `public/resume.pdf`, linked from "View Resume" button
- Vitest + RTL smoke tests
