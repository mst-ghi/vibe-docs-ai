---
name: Nocturne Glass
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#6bd8cb'
  on-tertiary: '#003732'
  tertiary-container: '#29a195'
  on-tertiary-container: '#00302b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style

This design system shifts away from aggressive cyberpunk aesthetics toward a refined, late-night professional environment. The personality is focused, sophisticated, and immersive. It targets high-end technical users and creative directors who require a focused workspace that minimizes eye strain while maintaining a distinct visual edge.

The design style is **Sophisticated Glassmorphism**. It utilizes deep, desaturated backgrounds paired with translucent obsidian layers. Instead of high-intensity light emissions, the UI relies on subtle refraction, muted jewel-tone accents, and precise typography to convey hierarchy. The emotional response should be one of "calm authority"—a digital sanctuary that feels premium, quiet, and technologically advanced without being loud.

## Colors

The palette transition replaces neon cyan and hot violet with **Deep Indigo** and **Muted Amethyst**. These jewel tones are used sparingly to prevent visual fatigue.

- **Primary (Indigo):** Used for primary actions and active states. It is desaturated to feel integrated into the dark environment.
- **Secondary (Amethyst):** Used for secondary accents and data visualization highlights.
- **Tertiary (Deep Teal):** A grounding color for success states or alternative markers, providing a cool contrast to the purples.
- **Surface Palette:** A range of deep slate and obsidian tones (#020617 to #1E293B) forms the base, ensuring high legibility for text without the harshness of pure black.
- **Accent Logic:** Glow effects are reduced to a 10% opacity "bloom" strictly reserved for active states or critical notifications.

## Typography

The typography strategy balances technical precision with high readability. 

**Geist** is used for headlines to provide a clean, slightly condensed technical feel that mirrors the professional tone. **Inter** handles the bulk of body content to ensure maximum legibility across all densities. **JetBrains Mono** is utilized for labels, metadata, and status indicators, reinforcing the "grounded technology" aspect of the design system.

Text contrast is maintained through subtle shifts in gray scales (Slate 200 to Slate 400) rather than relying on colored text, which preserves the sophisticated atmosphere.

## Layout & Spacing

This design system employs a **Fluid Grid** with fixed maximum constraints to ensure the glass surfaces have enough room to "breathe."

- **Grid Model:** A 12-column grid on desktop, scaling to 4 columns on mobile.
- **Rhythm:** An 8px base unit drives all spatial relationships. Vertical rhythm is strictly enforced to maintain the professional, structured feel.
- **Density:** We favor generous internal padding (24px+) within glass containers to emphasize the translucency and background blur effects.
- **Responsive Behavior:** On mobile, glass layers lose their external margins to maximize screen real estate, while maintaining a 16px internal safe area.

## Elevation & Depth

Elevation is communicated through **Refractive Tiers** rather than traditional heavy shadows.

- **Layer 0 (Background):** Deepest desaturated slate with a subtle radial gradient.
- **Layer 1 (Glass Surfaces):** Background blur (20px to 40px) with a semi-transparent fill (8% opacity). Borders are 1px solid white at 10% opacity to create a "etched" look.
- **Layer 2 (Popovers/Modals):** Increased background blur (60px) and a slightly brighter border (20% opacity). A very soft, wide-spread dark shadow (30% opacity, 40px blur) is used to separate the modal from the underlying glass.
- **Depth Markers:** Jewel-tone gradients are only used as extremely subtle "rim lights" on the top edges of primary containers, never as a full-surface glow.

## Shapes

The shape language uses **Standardized Roundedness** to soften the technical nature of the UI. Elements use a 0.5rem (8px) base radius. Large containers and cards scale up to 1.5rem (24px) to emphasize the "glass slab" aesthetic. This creates a balance between the precision of the typography and the approachability of the interface.

## Components

### Buttons
Primary buttons use a solid, desaturated Indigo fill with white text. Secondary buttons are "ghost" style with a 1px border and no glow. The hover state introduces a subtle inner-bevel highlight rather than an external bloom.

### Input Fields
Inputs are dark, recessed surfaces with a 1px bottom border. On focus, the border transitions to a muted teal, and the background blur slightly increases.

### Cards & Containers
Cards utilize the glassmorphic stack: a background blur, a faint white inner stroke, and no external shadow. Content inside is grouped with 16px or 24px gaps.

### Chips & Tags
Chips use the JetBrains Mono label font. They are rendered as pill shapes with a low-contrast background (15% opacity of the accent color) to keep them secondary to the primary actions.

### Progress & Status
Status indicators use small, solid jewel-tone dots. They should never pulse or glow unless the state is "Critical." High-priority alerts use a muted amber (#D97706) instead of bright red to maintain the professional palette.