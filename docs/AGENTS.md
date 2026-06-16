# AGENTS.md — Working on the Vibe Coding Field Guide with an AI agent

This file is the **always-on rule set** for AI coding agents (Claude, Cursor, etc.)
working in this repository. The rules below are invariant constraints; multi-step tasks
are described as workflows at the end.

## What this project is

A **static** (`output: "export"`), **bilingual** (English + Persian/RTL), **multi-theme**
(light + dark) Next.js **field guide to coding with AI agents** — practical, experience-driven
content on editors, models, system tools, and day-to-day tricks. Dark-first glassmorphism
("Vibe Agentic Glass") with a CSS-first motion system. See [README.md](../README.md) for the
full stack and structure.

## Always-on rules

### Tooling

- Use **pnpm** for every package operation (`pnpm install`, `pnpm add -D x`). Never use
  `npm`/`yarn`; do not commit a `package-lock.json`.
- Use **Biome** for lint/format: `pnpm lint` (check) and `pnpm lint:fix`. There is no
  ESLint or Prettier here.
- Keep `next.config.ts` on `output: "export"`. Anything that needs a Node server at
  runtime (Route Handlers, `next/image` optimization, middleware, ISR, dynamic params
  without `generateStaticParams`) is **forbidden** — it breaks the static export.

### Code conventions

- TypeScript strict. No `any`; prefer precise types. The `Dict` type is derived from the
  `en` dictionary — let it drive correctness.
- Path alias `@/*` → `src/*`. Use explicit imports; no wildcard `export *`.
- Keep files small and feature-focused (< ~300 lines). One page per route folder.
- Merge class names with `cn()` from `@/lib/utils`. Don't hand-concatenate class strings.
- Reuse the shared primitives in `src/components/site/primitives.tsx` (`Container`,
  `Eyebrow`, `GlassCard`, `Chip`, `CodeBlock`, `SectionHeading`) and the motion components
  in `motion.tsx` (`Reveal`, `SpotlightCard`) rather than re-inventing layout. (`DocShell`
  exists for sidebar doc layouts but is currently unused.)

### Styling / design system

- Colors come from CSS variables in `src/app/globals.css`. Use the semantic Tailwind
  utilities (`bg-card`, `text-muted-foreground`, `border-border`) and the accent helpers
  `text-cyan` / `text-violet` / `bg-cyan/10`. **Never hard-code hex colors** in components.
- Both themes must remain legible. When adding UI, verify it in light **and** dark — every
  token has a value in `:root` and `.dark`.
- Glass surfaces use the `.glass-card` class; ambient hero backgrounds use `.vibe-backdrop`.

### Internationalization (critical)

- All user-visible text must come from `src/i18n/dictionaries.ts` via `useI18n()`. **Never
  hard-code English strings in a component.**
- Add new copy to `en` first, then mirror the exact shape in `fa`. The build fails if `fa`
  drifts from the `Dict` type.
- Be RTL-safe: use logical properties (`ps-`, `pe-`, `ms-`, `me-`, `text-start`,
  `border-s`) and `rtl:` variants (e.g. `rtl:rotate-180` on directional arrows). Avoid
  hard `left`/`right`.
- Components that read `useI18n()` must be Client Components (`"use client"`).

### Motion

- Reuse the motion system in `src/components/site/motion.tsx` (`Reveal`, `SpotlightCard`) and
  the CSS utilities in `globals.css` (`.aurora`, `.grain`, `.glow-border`, `.marquee`,
  `.rise-in`). Don't reinvent scroll reveals or pointer effects.
- Animate **only** `transform` and `opacity`. All motion sits behind `prefers-reduced-motion`
  (a global reset neutralizes it). Don't animate the hero heading — it's the LCP element.
- Content keeps the honest, experience-driven voice — no invented stats, fake products, or
  marketing fluff. `/loops` is the quality bar.

## Verifying your work

Before declaring a task done:

```bash
pnpm lint     # must pass
pnpm build    # must succeed (static export to ./out)
```

Then sanity-check the changed page in both themes and both languages (`pnpm dev`, use the
globe and sun/moon toggles in the top nav).

## Common workflows (skills)

**Add a new page**

1. Create `src/app/<route>/page.tsx` as a `"use client"` component.
2. Add its copy under a new key in `en` (and translate in `fa`) in `dictionaries.ts`.
3. Build the UI from the shared primitives and motion components, following the hero +
   sections pattern the existing pages use (e.g. `editors`, `models`, `toolbox`).
4. Add the route to the nav (`src/components/site/top-nav.tsx`) and/or footer columns.
5. Run `pnpm lint && pnpm build`.

**Add a new string to an existing page**

1. Add the key to the relevant section of `en` in `dictionaries.ts`.
2. TypeScript will error on `fa` — add the Persian translation.
3. Reference it via `dict.<section>.<key>`.

**Change a brand/accent color**

1. Edit the variable in both `:root` and `.dark` in `globals.css`.
2. Do not touch component files — they consume tokens, not literals.
