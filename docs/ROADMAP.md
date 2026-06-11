# VibeDocs AI — Project Roadmap

This is the single source of truth for project progress. Agents and contributors should
check items off here as work lands, so the current state is knowable without scanning the
whole tree. (See the in-app product roadmap at `/roadmap`, which is content; this file is
the build plan.)

Status legend: ✅ done · 🚧 in progress · ⬜ planned

---

## Phase 0 — Foundation ✅

- ✅ Next.js 16 + TypeScript scaffold
- ✅ Tailwind CSS v4 + shadcn (base-nova) primitives
- ✅ Switch package manager to **pnpm**
- ✅ Replace ESLint with **Biome** (`biome.json`, lint/format scripts)
- ✅ Static export configured (`output: "export"`, `images.unoptimized`)
- ✅ Vercel config (`vercel.json`)

## Phase 1 — Design system & theming ✅

- ✅ Port **Vibe Agentic Glass** tokens into `globals.css` (light + dark)
- ✅ Map shadcn semantic tokens onto the palette + neon accent helpers
- ✅ Glass / backdrop utility classes (`.glass-card`, `.vibe-backdrop`)
- ✅ Theme provider with light/dark toggle + no-flash inline script
- ✅ Hanken Grotesk + JetBrains Mono via `next/font`

## Phase 2 — Internationalization ✅

- ✅ Locale config (`en`, `fa`) with direction map
- ✅ Typed bilingual dictionary (`en` is the source of truth, `fa` mirrors it)
- ✅ `useI18n()` context, client-side language switch, RTL handling
- ✅ Language toggle in the top nav

## Phase 3 — Pages ✅

- ✅ Home (hero, core-principles bento, ecosystem, newsletter)
- ✅ Handbook (doc layout: philosophy, roles-vs-skills, implementation, maps)
- ✅ Skill Guides (workflow steps, terminal, live activity)
- ✅ Loops / Loop Engineering (definition, 5 building blocks, lineage, anatomy, guardrails) — sourced from Addy Osmani's "Loop Engineering" and Matt Van Horn's "WTF Is a Loop?"
- ✅ Roadmap (phased timeline + CTA)
- ✅ Security (sandbox layers, encryption)
- ✅ Resources / Developer Hub (SDKs, API, learn, community)
- ✅ Support & FAQ (searchable accordions)
- ✅ Changelog (versioned timeline)
- ✅ Shared TopNav + Footer + DocShell sidebar

## Phase 4 — Documentation ✅

- ✅ `README.md` for developers
- ✅ `AGENTS.md` for AI agents (always-on rules + workflows)
- ✅ `ROADMAP.md` (this file)

## Phase 5 — Deployment ⬜

- ⬜ Connect repository to Vercel and deploy
- ⬜ Verify static `out/` renders on the Vercel CDN
- ⬜ Configure production domain

## Backlog / future ideas ⬜

- ⬜ Real client-side search (e.g. an index over handbook content) — the search inputs are
  currently presentational
- ⬜ Functional newsletter/contact submission (needs an external form endpoint, since the
  app is statically exported)
- ⬜ More locales beyond `en`/`fa`
- ⬜ MDX-driven handbook so long-form content lives in content files, not the dictionary
- ⬜ Per-page `<meta>`/OpenGraph and a sitemap
- ⬜ Persist nav search → command palette (⌘K)
