# Portfolio Rebuild — Implementation Plan

## Context

The current portfolio (Vite 8 + React 19 + TS + Tailwind 4) is a single light-theme SPA with five sections (Hero, Metrics, Experience, Skills, Contact). It has duplicated `IntersectionObserver` logic, copy-pasted section chrome, raw color literals via `bg-[var(--color-card)]` arbitrary syntax, placeholder contact details, a footer wrongly nested inside the Contact `<section>`, and **no dark theme**.

The goal is a staff-engineer-quality **rebuild** that matches the structure/aesthetic of the reference profile (kevincychen.com/profile) — a linear, single-page profile with a portrait hero, prose overview, principles, skills, impact, experience, global reach, and a get-in-touch CTA — while being optimized for **performance, reusability, easy content edits, responsiveness, accessibility (WCAG AA), and light + dark theming**. All content is drafted from the user's resume (`AnupriyaSaxena-Resume.docx`, mirrored in `src/data/resume.ts`).

Keep the existing stack — it's the right tool. No router/SSR (a tiny static SPA doesn't need them).

## Model preference

Default to **Sonnet 4.6** for all implementation work on this project. Switch to Opus only if a task needs capability Sonnet lacks (complex architectural reasoning, hard debugging), and **ask before switching**. The user toggles models with `/model` — Claude cannot switch its own model mid-turn.

## Scope (confirmed)

- **Rebuild fresh** — discard the prior uncommitted WIP edits and re-implement the pastel direction properly via tokens.
- **Dark mode: in scope** — light + dark with a manual `data-theme` toggle (§2).
- **Core rebuild this pass** — §§1–7 below. **Resume PDF and Vitest tests are deferred to a follow-up** (see "Deferred").

## Confirmed inputs

- **Contact:** personal email `aspriyamail@gmail.com` + LinkedIn `https://www.linkedin.com/in/anupriyasaxena/`. **No GitHub.**
- **Hero:** real headshot. Use an optimized `<Avatar>`; reference `public/headshot.jpg` (placeholder until the real file is dropped in).
- **Resume button:** a "View Resume" action wired for a `public/resume.pdf` (the PDF itself is generated in the deferred pass).
- **Optional sections:** include **all four** — Professional overview, How I work / principles, Global reach, Hiring CTA.

## Approach

### 1. Folder structure (final `src/`)
```
public/
  fonts/inter-variable.woff2     # self-hosted (replaces Google Fonts <link>)
  headshot.jpg                   # user-provided portrait (square)
  resume.pdf                     # generated ≤2-page resume (deferred)
  favicon.svg                    # existing
index.html                       # + no-FOUC inline script, color-scheme meta, self-host font
src/
  main.tsx
  App.tsx                        # thin composition root: skip link, header, main, footer
  styles/index.css               # tailwind import, tokens, @custom-variant dark, @theme inline, keyframes
  lib/cn.ts                      # className joiner
  hooks/useTheme.ts  useInView.ts
  components/
    ui/      Container, Section, SectionHeader, Card, Button, Tag, Icon,
             Avatar, Blobs, Reveal, ThemeToggle, SkipLink
    sections/ SiteNav, Hero, Overview, Principles, Skills, Metrics,
             Experience, GlobalReach, Contact, SiteFooter
  data/      types.ts profile.ts overview.ts principles.ts skills.ts
             metrics.ts experience.ts global.ts contact.ts nav.ts index.ts
```

### 2. Theming — Tailwind 4 light/dark (the linchpin)
In `src/styles/index.css`:
- `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));` — switch dark from media-query to a `data-theme` **attribute** strategy (manual toggle, system pref as initial default).
- **Two token tiers:** primitive palette (raw hex pastel values + dark-side values) → **semantic tokens** (`--color-bg`, `--color-surface`, `--color-fg`, `--color-muted`, `--color-subtle`, `--color-border`, `--color-accent`, `--color-accent-soft`, `--shadow-soft/lift`) defined for `:root`/`[data-theme="light"]` and overridden under `[data-theme="dark"]`.
- `@theme inline { --color-bg: var(--color-bg); ... }` — **`inline` is essential**: it makes Tailwind emit `var(...)`-referencing utilities (`bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `border-border`, `bg-accent`, `shadow-soft`) that re-resolve on theme switch, instead of freezing build-time values. This also removes the verbose arbitrary-value syntax everywhere.
- **`useTheme` hook:** `"light"|"dark"`, reads initial from `document.documentElement.dataset.theme`, `setTheme` writes `<html data-theme>` + `localStorage.theme`, tracks `matchMedia` only while no explicit user choice is stored.
- **No-FOUC:** render-blocking inline script in `index.html <head>` (before stylesheet) sets `data-theme` from `localStorage`/`prefers-color-scheme`. Add `<meta name="color-scheme" content="light dark">` and media-aware `theme-color`.
- `ThemeToggle`: real `<button>`, `aria-pressed`, dynamic `aria-label`, sun/moon `Icon` (`aria-hidden`), focus-visible ring.

### 3. Reusable primitives (kill duplication)
- `Section` + `Container` + `SectionHeader` replace the repeated `px-6 py-24 ... max-w-*` + eyebrow/heading/subhead blocks; `SectionHeader` generates a heading id and `Section` wires `aria-labelledby`.
- `useInView` hook + `Reveal` wrapper replace the duplicated observers in `Metrics.tsx`/`Experience.tsx`; `Reveal` honors `prefers-reduced-motion` (renders visible immediately) and takes a `delay` for staggered cascades.
- `Card`, `Button`/`LinkButton` (polymorphic, `primary`/`secondary`), `Tag`, `Icon` (string-literal `IconName` union so data can reference icons without importing components), `Avatar` (explicit width/height → no CLS, `fetchpriority="high"` for the above-fold hero), `Blobs` (extracted decorative cluster, `aria-hidden`, reduced-motion aware).

### 4. Data model (data-driven, strongly typed, easy edits)
Split `resume.ts` into the `data/` folder above with a barrel `index.ts`. Keep all types in `types.ts`. Additions:
- `Profile` gains `overview: string[]`, `photo {src,alt,width,height}`, `resumePdf`.
- New: `Principle {title, description, icon}`, `GlobalReach {headline, body, regions}`, `Social {platform,label,href,handle}`.
- **Fix placeholders** → real email + LinkedIn; drop GitHub.
- New content drafted from resume: `overview.ts` (from SUMMARY), `principles.ts` (3 cornerstones, e.g. healthy high-trust teams / consistent execution & tech-debt discipline / AI-assisted delivery), `global.ts` (Canada · US · Taiwan distributed leadership), Hiring CTA copy in the Contact/dedicated section.

### 5. Section composition & order (App.tsx)
`SkipLink` → `<header>` (`SiteNav` with anchor links + `ThemeToggle`) → `<main id="main">`: Hero → Overview → Principles → Skills → Metrics → Experience → GlobalReach → Contact (with Hiring CTA) → `</main>` → `<footer>` (`SiteFooter`, extracted out of Contact). Exactly one `<h1>` (Hero name); each `Section` has an `<h2>`; role/principle titles are `<h3>`.

### 6. Performance
Self-host Inter variable woff2 (`font-display: swap`, preload) — removes Google Fonts third-party/render-block. Single bundle (no `React.lazy` for ~KB of components). Compositor-only reveal animations (opacity/translate). `Avatar` reserves space (no CLS). Keep `prefers-reduced-motion` guards on blobs + reveals.

### 7. Accessibility (WCAG AA)
Landmarks (`header`/`main`/`footer`), skip link, one `h1` + heading hierarchy, `aria-labelledby` per section, global `:focus-visible` outline using accent, decorative SVGs `aria-hidden`, meaningful icons labelled, external links `rel="noopener noreferrer"` + SR-only "(opens in new tab)". **Contrast fix:** the current `--color-subtle` on light bg is ~2.3:1 (fails) — darken it / restrict to large text; audit accent-on-surface and both themes with a contrast checker.

### 8. Quality net (this pass)
Keep `tsc -b` + ESLint as the primary net; add a `typecheck` script. No new test framework this pass.

## Deferred to a follow-up pass

- **Resume PDF (≤2 pages):** print-optimized view from the same `data/`, exported to `public/resume.pdf`, linked from the "View Resume" button. The Hero/Contact CTAs are built this pass so the PDF slots in cleanly later (button + `resumePdf` field on `Profile`, even if the file isn't present yet).
- **Vitest + RTL + jsdom smoke tests:** `useTheme` toggles/persists `data-theme`; `useInView` reveals immediately under reduced-motion; `App` renders all landmarks + exactly one `<h1>`. Plus `test`/`test:run` scripts and optional CI.

## Verification (this pass)
1. `npm run dev` — visually confirm all sections render and match the reference's linear profile structure, responsive at mobile/tablet/desktop breakpoints.
2. Toggle theme — verify instant light↔dark with **no flash on reload** (hard refresh in both stored states); verify system-preference default in a fresh profile.
3. `npm run build && npm run preview` — confirm production build succeeds; run **Lighthouse** (Performance / Accessibility / Best Practices) and confirm no CLS from the portrait.
4. Keyboard-only pass: skip link works, all links/CTAs/toggle reachable with visible focus; verify contrast in both themes with a checker.
5. `npm run typecheck` and `npm run lint` pass.
6. Headshot is at `public/headshot.png` (user-provided, already in place).
