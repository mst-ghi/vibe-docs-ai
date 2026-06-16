# Architecture

How VibeDocs AI is put together and why. This is the structural map; for day-to-day
commands see [COMMANDS.md](./COMMANDS.md), for the dependency rationale see
[PACKAGES.md](./PACKAGES.md), and for agent rules see [AGENTS.md](./AGENTS.md).

## 1. The big picture

VibeDocs AI is a **statically exported** Next.js App Router site. There is no server at
runtime: `next build` emits plain HTML/CSS/JS into `out/`, which any static host (Vercel,
Netlify, S3, …) serves directly.

Three cross-cutting concerns shape every decision:

- **Static-first** — nothing may require a Node runtime (no Route Handlers, no `next/image`
  optimization, no middleware, no ISR). See §6.
- **Bilingual, client-switched** — English and Persian (RTL) are toggled in the browser, not
  via routing, so the export stays a single set of pages. See §4.
- **Dual-theme** — light and dark are driven by CSS variables and a `.dark` class on
  `<html>`. See §5.

```
Browser
  └─ <html class="dark" lang="en" dir="ltr">      ← theme class + locale dir
       └─ <Providers>  (client context: theme + locale + dictionary)
            ├─ <TopNav>           shared, reads useI18n()
            ├─ <main>{page}</main> route page (client component)
            └─ <Footer>           shared, reads useI18n()
```

## 2. Rendering & routing model

- **App Router, one folder per route.** Each page is `src/app/<route>/page.tsx`. Routes:
  `/` (home), `/handbook`, `/editors`, `/models`, `/toolbox`, `/skill-guides`, `/loops`,
  `/security`, `/resources`, `/support`, `/roadmap`, `/changelog`. The top nav surfaces the
  first six topics; `roadmap` and `changelog` live in the footer.
- **Pages are Client Components** (`"use client"`). They have to be, because all copy comes
  from the locale context (§4) and theme/locale toggles are interactive. The static export
  still pre-renders each page's default-locale (English) HTML at build time; the client then
  hydrates and can switch language/theme without a navigation.
- **`trailingSlash: true`** so every route emits `out/<route>/index.html`, which static
  hosts serve without rewrites.

## 3. Layered structure

```
src/
  app/                  Route layer — one page.tsx per URL, plus the root layout
    layout.tsx          Fonts, <Providers>, TopNav + main + Footer, no-flash script
    globals.css         Design tokens (light + dark) + glass/utility classes
    <route>/page.tsx    A page, composed from primitives + dictionary copy
  components/
    providers.tsx       Theme + locale React context (the app's only state container)
    site/               Composition layer — app-specific building blocks
      top-nav.tsx       Header: nav links, language + theme toggles, mobile menu
      footer.tsx        Footer columns + social
      motion.tsx        Reveal (scroll-in) + SpotlightCard, via IntersectionObserver
      doc-shell.tsx     Sidebar doc layout primitive (available, currently unused)
      primitives.tsx    Container, Eyebrow, GlassCard, Chip, CodeBlock, SectionHeading
    ui/                 Primitive layer — shadcn components (Button) on @base-ui/react
  i18n/
    config.ts           Locale list, direction map, helpers
    dictionaries.ts     All copy as a typed `en` object + `fa` mirror (the content model)
  lib/utils.ts          cn() class merger
```

The dependency direction is strictly one-way: `app/` → `components/site` → `components/ui`
and everything may import `i18n/` and `lib/`. Primitives never import pages.

## 4. Internationalization

The content model lives entirely in `src/i18n/dictionaries.ts`:

- `en` is authored first and **its shape defines the `Dict` type** (`export type Dict = typeof en`).
- `fa` is annotated `const fa: Dict`, so TypeScript fails the build if a key is missing or
  mis-shaped. This is the guardrail that keeps translations complete.
- `dictionaries: Record<Locale, Dict>` is the lookup table.

At runtime, `Providers` holds the active `locale` in React state and exposes
`{ dict, locale, dir, setLocale, toggleLocale }` via `useI18n()`. Switching locale:

1. updates state (re-rendering every consumer with the other dictionary), and
2. sets `lang` and `dir` on `<html>` (Persian → `rtl`), persisting the choice in
   `localStorage`.

Because direction is a document-level attribute, layouts use **logical CSS** (`ps-*`, `pe-*`,
`ms-*`, `text-start`, `border-s`) and `rtl:` variants instead of physical left/right, so the
whole UI mirrors for Persian for free.

## 5. Theming

`globals.css` defines two token sets — `:root` (light) and `.dark` (dark) — for the
**Vibe Agentic Glass** system (deep-space glassmorphism, neon cyan/violet accents). shadcn's
semantic tokens (`--primary`, `--card`, `--border`, …) are mapped onto the palette, plus
extras (`--neon-cyan`, `--neon-violet`, `--surface-glass`). Components consume tokens through
Tailwind utilities (`bg-card`, `text-cyan`) and never hard-code hex.

`Providers` toggles the `.dark` class on `<html>` and persists it. To avoid a flash of the
wrong theme, `noFlashScript` — a tiny inline script injected in `<head>` — reads the persisted
theme/locale and applies the class + `dir` **before first paint**.

**Fonts.** Loaded via `next/font`: Hanken Grotesk (`--font-sans`) and JetBrains Mono
(`--font-mono`) for Latin, plus **Vazirmatn** (`--font-vazir`) for Persian. A
`[lang="fa"] { --font-sans: var(--font-vazir) }` rule in `globals.css` swaps the sans face when
the locale is Persian; Vazirmatn is also a per-glyph fallback so stray Persian renders correctly
in English layouts. Code blocks stay monospace.

**Motion.** A CSS-first system in `globals.css` (`.reveal`, `.aurora`, `.grain`, `.glow-border`,
`.marquee`, `.rise-in`) driven by tiny client helpers in `motion.tsx`. It animates only
`transform`/`opacity`, is gated behind a global `prefers-reduced-motion` reset, ships a
`<noscript>` fallback so reveal content is visible without JS, and avoids animating the LCP hero
heading.

## 6. The static-export contract

`next.config.ts` sets `output: "export"` and `images.unoptimized: true`. The consequences,
which every change must respect:

| Allowed                                   | Forbidden (breaks the export)              |
| ----------------------------------------- | ------------------------------------------ |
| Client interactivity, `localStorage`      | Route Handlers / API routes                |
| Static assets in `public/`                | `next/image` optimization (use unoptimized)|
| Build-time data baked into pages          | Middleware, ISR, server actions            |
| `generateStaticParams` for dynamic routes | Dynamic params without `generateStaticParams` |

Anything needing a backend (search, newsletter submit) is presentational here and would be
wired to an **external** endpoint — see the backlog in [ROADMAP.md](./ROADMAP.md).

## 7. Data flow of a single page render

1. `layout.tsx` mounts `<Providers>`, which seeds theme/locale from `localStorage` (matching
   what `noFlashScript` already applied).
2. The page calls `useI18n()` and reads its slice, e.g. `const t = dict.loops`.
3. It composes `primitives` + `ui` components, passing `t.*` strings as content.
4. A language or theme toggle updates context/`<html>`; React re-renders with the new
   dictionary or the CSS variables flip — no route change, no refetch.

## 8. Where to make common changes

| Goal                          | Touch                                                        |
| ----------------------------- | ----------------------------------------------------------- |
| Add/edit page copy            | `src/i18n/dictionaries.ts` (`en` then `fa`)                 |
| Add a page                    | `src/app/<route>/page.tsx` + nav/sidebar links + dictionary |
| Change a brand/accent color   | `:root` **and** `.dark` in `src/app/globals.css`            |
| Add a shared UI piece         | `src/components/site/` (or `ui/` for a primitive)           |
| Adjust the sidebar doc layout | `src/components/site/doc-shell.tsx`                          |
