# Vibe Coding Field Guide

A static, bilingual (English / Persian) **field guide to coding with AI agents** — practical,
experience-driven notes on the editors, models, system tools, and day-to-day tricks of
AI-assisted ("vibe") coding. Built with Next.js, TypeScript, Tailwind CSS v4, and shadcn-style
components, themed with the **Vibe Agentic Glass** design system (deep-space glassmorphism with
neon cyan/violet accents) and a CSS-first motion system.

**🔗 Live demo: [vibe-docs-ai.vercel.app](https://vibe-docs-ai.vercel.app/)**

## Documentation

All docs live in [`docs/`](./docs):

| Doc | What's inside |
| --- | --- |
| **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** | How the app is structured: rendering model, layers, i18n, theming, the static-export contract |
| **[docs/PACKAGES.md](./docs/PACKAGES.md)** | Every third-party dependency, what it does, and why it's here |
| **[docs/COMMANDS.md](./docs/COMMANDS.md)** | All dev, lint, build, and deploy commands |
| **[docs/AGENTS.md](./docs/AGENTS.md)** | Always-on rules and workflows for AI coding agents |
| **[docs/ROADMAP.md](./docs/ROADMAP.md)** | Build plan, progress, and backlog |
| **[docs/requirement.md](./docs/requirement.md)** | The original project requirements |

---

## Tech stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, **static export** — `output: export`) |
| Language       | TypeScript (strict)                                           |
| Styling        | Tailwind CSS v4 + CSS variables                               |
| UI primitives  | shadcn (base-nova style) on `@base-ui/react`                  |
| Icons          | `lucide-react`                                                |
| Fonts          | Hanken Grotesk (Latin) + JetBrains Mono + **Vazirmatn** (Persian), via `next/font` |
| Motion         | CSS-first: scroll reveals, aurora, glow borders — `prefers-reduced-motion` aware |
| i18n           | In-app dictionary + context (`en`, `fa`), RTL-aware           |
| Theming        | Light / dark via a `.dark` class on `<html>`                  |
| Package manager| **pnpm**                                                      |
| Lint / format  | **Biome**                                                     |
| Deployment     | Vercel (serves the static `out/` directory)                   |

## Getting started

Requires Node 20+ and pnpm 11+.

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:3000
pnpm build        # static export → ./out
pnpm lint         # Biome lint + format check
pnpm lint:fix     # auto-fix lint issues
pnpm format       # auto-format
```

## Project structure

```
src/
  app/
    layout.tsx          # Root layout: fonts (Hanken Grotesk + JetBrains Mono + Vazirmatn), Providers, TopNav + Footer, no-flash script
    page.tsx            # Home (hero, tool marquee, topic bento, "the one idea", closer)
    handbook/           # Working with a coding agent: context files, roles vs skills, plan, verify
    editors/            # Editors & agents — Claude Code, Cursor, Copilot, Windsurf, Aider, Zed, Cline…
    models/             # Models for coding — Claude vs DeepSeek vs Gemini, the routing pattern
    toolbox/            # System toolbox — Python, Node, git, ripgrep, jq, gh, Docker, MCP…
    skill-guides/       # Tricks & workflows (worktrees, screenshots, test-first, task mgmt)
    loops/              # Loop engineering deep-dive
    security/           # Running agents safely (lethal trifecta, permission posture)
    resources/          # Curated links — docs, people, tools
    support/            # FAQ (accordions)
    roadmap/            # Roadmap for the guide
    changelog/          # Changelog for the guide
    globals.css         # Design tokens (light + dark) + glass/motion utilities
  components/
    providers.tsx       # Theme + locale context, no-flash script
    site/               # TopNav, Footer, DocShell, primitives, motion (Reveal/SpotlightCard)
    ui/                 # shadcn primitives (Button, …)
  i18n/
    config.ts           # Locale list, direction map
    dictionaries.ts     # All page copy, en + fa (en defines the `Dict` type)
  lib/utils.ts          # `cn()` class merger
```

## How theming works

`globals.css` defines two token sets: `:root` (light) and `.dark` (dark). shadcn semantic
tokens (`--primary`, `--card`, …) are mapped onto the Vibe palette, plus extras
(`--neon-cyan`, `--neon-violet`, `--surface-glass`). The `Providers` component toggles the
`.dark` class on `<html>` and persists the choice in `localStorage`. An inline script in
`<head>` (`noFlashScript`) applies the saved theme **before paint** to avoid a flash.

Use the accent colors through Tailwind utilities: `text-cyan`, `bg-violet/10`,
`border-cyan/30`, etc. Glass surfaces use the `.glass-card` component class.

## How internationalization works

Because the site is a static export, language is switched **client-side** rather than via
routing. All copy lives in `src/i18n/dictionaries.ts` as a typed `en` object (the source of
truth) mirrored by `fa`. Components read it through `useI18n()`:

```tsx
const { dict, locale, toggleLocale, dir } = useI18n()
return <h1>{dict.home.titleLead}</h1>
```

Switching to Persian sets `dir="rtl"` and `lang="fa"` on `<html>`, which also swaps the sans
font to **Vazirmatn** (English keeps Hanken Grotesk) via a `[lang="fa"]` rule in `globals.css`.
Use logical CSS properties (`ps-*`, `pe-*`, `ms-*`, `text-start`) and `rtl:` variants so layouts
mirror correctly. To add a string, add it to `en` first — TypeScript then forces you to
translate it in `fa`.

## Deployment

Live at **[vibe-docs-ai.vercel.app](https://vibe-docs-ai.vercel.app/)**.

The repo is configured for Vercel via `vercel.json` — it deploys as a **static site**
(`framework: null`, build `pnpm build`, output `out/`) so Vercel serves the exported files
directly rather than running the Next.js server builder. Push to a connected Git repository
or run `vercel deploy`. The output is fully static and can also be hosted on any static host
(Netlify, GitHub Pages, S3, …).
