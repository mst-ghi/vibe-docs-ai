# Third-party packages

Every external dependency in VibeDocs AI, what it does, and why it's here. Versions are the
ranges declared in `package.json`; run `pnpm list` for the exact resolved tree. Commands for
managing these live in [COMMANDS.md](./COMMANDS.md); how they fit together is in
[ARCHITECTURE.md](./ARCHITECTURE.md).

Package manager: **pnpm** (`packageManager: pnpm@11.5.0`). Do not use npm or yarn — see
[AGENTS.md](./AGENTS.md).

## Runtime dependencies

| Package                     | Version   | Role                                                                                   |
| --------------------------- | --------- | -------------------------------------------------------------------------------------- |
| `next`                      | `16.2.9`  | Framework + App Router + static export (`output: "export"`). The whole build pipeline. |
| `react`                     | `19.2.4`  | UI runtime.                                                                            |
| `react-dom`                 | `19.2.4`  | React's DOM renderer / hydration for the exported pages.                              |
| `@base-ui/react`            | `^1.5.0`  | Headless, accessible UI primitives. shadcn's base-nova style is built on it (Button). |
| `shadcn`                    | `^4.11.0` | Component registry/CLI + the `shadcn/tailwind.css` base layer imported in `globals.css`.|
| `lucide-react`              | `^1.17.0` | Icon set used across every page (note: this fork drops brand icons — see below).       |
| `class-variance-authority`  | `^0.7.1`  | Typed component variants (`cva`) — powers `buttonVariants` in `ui/button.tsx`.         |
| `clsx`                      | `^2.1.1`  | Conditional className construction; used inside `cn()`.                                 |
| `tailwind-merge`            | `^3.6.0`  | De-duplicates conflicting Tailwind classes; the other half of `cn()` in `lib/utils.ts`.|
| `tw-animate-css`            | `^1.4.0`  | Animation utilities for Tailwind v4, imported in `globals.css`.                        |

## Dev dependencies

| Package                  | Version  | Role                                                                       |
| ------------------------ | -------- | ------------------------------------------------------------------------- |
| `@biomejs/biome`         | `^2.2.0` | Linter + formatter (replaces ESLint/Prettier). Configured in `biome.json`.|
| `tailwindcss`            | `^4`     | Utility CSS engine (v4, CSS-first config via `@theme` in `globals.css`).  |
| `@tailwindcss/postcss`   | `^4`     | PostCSS plugin that runs Tailwind v4 during the build.                    |
| `typescript`             | `^5`     | Type checking; `tsconfig.json` is strict.                                 |
| `@types/node`            | `^20`    | Node type definitions for config files.                                  |
| `@types/react`           | `^19`    | React type definitions.                                                  |
| `@types/react-dom`       | `^19`    | React DOM type definitions.                                              |

## How `cn()` ties three of these together

`src/lib/utils.ts` composes `clsx` (resolve conditionals) and `tailwind-merge` (drop
conflicting utilities) into one helper used everywhere:

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

`class-variance-authority` sits on top, defining variant→class maps (e.g. button
`variant`/`size`) that are then merged with `cn()`.

## Notable constraints & gotchas

- **`lucide-react@1.17.0` has no brand icons.** `Github`, etc. don't exist in this fork. The
  footer uses `GitBranch` as a stand-in. Verify an icon exists before importing it:
  `node -e "console.log('Repeat' in require('lucide-react'))"`.
- **Tailwind v4 is CSS-first.** There is no `tailwind.config.js`; theme tokens are declared
  with `@theme` / CSS variables in `src/app/globals.css`. Biome is configured to skip `.css`
  files because it doesn't parse Tailwind at-rules.
- **No runtime data libraries.** Because the site is a static export, there is intentionally
  no data-fetching/state library (React Query, Redux, etc.). App state is the single React
  context in `components/providers.tsx`.
- **No i18n library.** Localization is a typed dictionary + context (see ARCHITECTURE §4), not
  `next-intl`/`i18next`, to keep the export dependency-free and route-free.

## Adding or updating a dependency

```bash
pnpm add <pkg>            # runtime dependency
pnpm add -D <pkg>         # dev dependency
pnpm up <pkg>             # update within the declared range
pnpm up --latest <pkg>    # bump to the newest version
```

After any change, confirm the static build still holds: `pnpm lint && pnpm build`. Keep the
table above in sync when you add or remove a package.
