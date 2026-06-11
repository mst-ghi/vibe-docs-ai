---
name: Vibe Agentic Glass
colors:
  surface: '#0d1513'
  surface-dim: '#0d1513'
  surface-bright: '#323b39'
  surface-container-lowest: '#08100e'
  surface-container-low: '#151d1b'
  surface-container: '#19211f'
  surface-container-high: '#232c2a'
  surface-container-highest: '#2e3634'
  on-surface: '#dbe4e1'
  on-surface-variant: '#b9cac5'
  inverse-surface: '#dbe4e1'
  inverse-on-surface: '#2a3230'
  outline: '#849490'
  outline-variant: '#3a4a46'
  surface-tint: '#00dfc7'
  primary: '#e5fff8'
  on-primary: '#003730'
  primary-container: '#23f7dd'
  on-primary-container: '#006d61'
  inverse-primary: '#006b5e'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#fff8ef'
  on-tertiary: '#3b2f00'
  tertiary-container: '#ffda53'
  on-tertiary-container: '#745f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#31fde3'
  primary-fixed-dim: '#00dfc7'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffe17a'
  tertiary-fixed-dim: '#e7c43e'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#0d1513'
  on-background: '#dbe4e1'
  surface-variant: '#2e3634'
  background-deep: '#000000'
  surface-glass: rgba(255, 255, 255, 0.03)
  neon-cyan: '#23F7DD'
  neon-violet: '#A855F7'
  terminal-gray: '#A3A3A3'
  error-red: '#FF4D4D'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for the "Vibe Coding" era—a paradigm where development is fluid, agentic, and highly visual. The brand personality is **futuristic, elite, and high-performance**. It targets developers who operate at the edge of AI-assisted engineering, evoking a sense of mastery over complex "black box" systems.

The visual style is a fusion of **Glassmorphism** and **Corporate Modernism**, heavily inspired by the MultiversX aesthetic. It utilizes a deep-space black foundation to allow holographic 3D elements and neon accents to pop. The interface feels less like a static document and more like a high-end command deck or a tactical HUD.

**Key visual pillars:**
- **Holographic Depth:** Semi-transparent surfaces with backdrop blurs.
- **Neon Precision:** Thin, vibrant strokes of cyan and violet to denote active states and "intelligence."
- **Monospace Accents:** Strategic use of mono fonts to ground the system in its technical roots.
- **Organic Geometry:** Spheres, toroids, and orbital 3D shapes to represent the non-linear nature of AI reasoning.

## Colors

The palette is anchored in **Absolute Black (#000000)** to maximize the luminosity of accent colors and ensure high-contrast readability in developer environments.

- **Primary (Neon Cyan):** Used for primary actions, success states, and indicating "active" AI agent processes.
- **Secondary (Neon Violet):** Used for advanced features, documentation links, and secondary hierarchy elements.
- **Neutral:** A spectrum of grays (derived from #A3A3A3) used for "inactive" code text and secondary metadata.

Color application should be sparse but impactful. Use gradients only for high-level 3D elements or primary buttons to maintain a "holographic" feel without sacrificing accessibility.

## Typography

This design system uses a dual-font strategy to balance legibility with "hacker" aesthetics. 

- **Hanken Grotesk** is the primary typeface for all headings and body copy. It is clean, sharp, and modern, providing the "Corporate Tech" foundation.
- **JetBrains Mono** is used for code blocks, UI labels, and technical metadata. It reinforces the "agentic" and "vibe coding" narrative.

For headings, use tight letter-spacing to create a high-end editorial feel. All code-based labels should be uppercase with generous tracking to appear like a terminal HUD.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain the precision of holographic elements, while transitioning to a **Fluid Grid** for mobile devices.

- **Grid:** A 12-column system is used for desktop (1440px viewport), with elements typically spanning 4, 6, or 12 columns.
- **Rhythm:** An 8px base unit (1rem = 16px) governs all padding and margins.
- **Density:** The design favors "Airy Technicality"—wide margins and significant vertical spacing between sections to prevent the dark UI from feeling claustrophobic.
- **Breakpoints:**
  - **Mobile:** < 768px (Single column, 16px margins).
  - **Tablet:** 768px - 1024px (8 columns, 32px margins).
  - **Desktop:** > 1024px (12 columns, 64px margins).

## Elevation & Depth

Visual hierarchy in this design system is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional shadows.

1. **Base Layer:** Pure Black (#000000).
2. **Surface Layer:** Dark Gray (#121212) or semi-transparent glass with a 20px backdrop blur.
3. **Accent Layer:** Thin 1px borders using `neon-cyan` at 20% opacity to define card boundaries.
4. **Active Elevation:** A soft, diffused outer glow (not a shadow) using the primary or secondary color to indicate focused or high-priority elements.

Floating 3D holographic assets (spheres, cubes) should appear "unbound" by the grid, often overlapping containers to create a sense of three-dimensional space.

## Shapes

The shape language is **Rounded**, balancing the sharp precision of the typography with a soft, "premium" tactile feel.

- **Cards & Containers:** Use `rounded-lg` (16px) to create a sophisticated frame for glassmorphic content.
- **Inputs & Buttons:** Use `rounded-md` (8px) for a more technical, tool-like appearance.
- **Chips & Tags:** Use `rounded-xl` (24px) or full pill-shapes to distinguish them from functional UI buttons.
- **Borders:** All borders should be 1px wide. Avoid thick strokes unless used for "Brutalist" emphasis in specific code-heavy callouts.

## Components

### Buttons
- **Primary:** Neon Cyan background, black text. No shadow, but a soft glow on hover.
- **Secondary:** Ghost style with a 1px Neon Violet border. Text in white.
- **Actionable Icons:** Monospace labels paired with thin-stroke icons.

### Cards (Glassmorphic)
- Background: `rgba(255, 255, 255, 0.03)` with a `backdrop-filter: blur(20px)`.
- Border: 1px solid `rgba(255, 255, 255, 0.1)`.
- On hover, the border color shifts to the primary neon cyan at 40% opacity.

### Input Fields
- Dark background (#0A0A0A) with a bottom-only border of 1px Gray.
- On focus, the border transitions to a full-perimeter 1px Neon Cyan stroke with a faint inner glow.
- Monospaced font for input text.

### Code Blocks
- Deep black background with a 1px gray border. 
- Syntax highlighting should use the Neon palette: Cyan for functions, Violet for keywords, and Gray for comments.
- Copy-to-clipboard buttons appear as glassmorphic floating icons in the top-right corner.

### AI Agent Chips
- Small, pill-shaped tags with a pulsing neon dot to indicate "live" AI presence or automated status.