# Design

## Theme

Dark mode. Near-black body with charcoal surface layers. Gold as the authority color; rose as the action/CTA accent. The dark ground lets gold read as authority without decoration, and keeps the premium register consistent with the brand's positioning.

## Color

All tokens are defined in OKLCH and registered as Tailwind utilities with the `crown-` prefix (e.g. `bg-crown-black`, `text-crown-gold`). Alpha variants are available via Tailwind's opacity modifier (e.g. `text-crown-gold/60`).

### Surface scale

| Token | Tailwind class | Value | Role |
|---|---|---|---|
| `crown-black` | `bg-crown-black` | `oklch(8% 0.005 12)` | Page background |
| `crown-dark` | `bg-crown-dark` | `oklch(11% 0.006 12)` | Primary section surface |
| `crown-dark2` | `bg-crown-dark2` | `oklch(14% 0.006 12)` | Secondary surface / cards |
| `crown-dark3` | `bg-crown-dark3` | `oklch(18% 0.007 12)` | Tertiary surface / nested elements |

### Gold — primary authority color

| Token | Value | Role |
|---|---|---|
| `crown-gold` | `oklch(72% 0.14 82)` | Labels, dividers, accents, active states |
| `crown-gold2` | `oklch(80% 0.15 82)` | Hover lift |
| `crown-gold-dim` | `oklch(55% 0.10 82)` | Dimmed gold |

### Rose — CTA and micro-accents only, never surface

| Token | Value | Role |
|---|---|---|
| `crown-rose` | `oklch(48% 0.20 12)` | Primary CTA buttons |
| `crown-rose2` | `oklch(58% 0.21 12)` | Hover state, icon strokes, role labels |
| `crown-rose-deep` | `oklch(18% 0.07 12)` | Rose-tinted dark surface (split layout panels) |
| `crown-rose-ink` | `oklch(32% 0.13 12)` | Rose-tinted borders and dividers |

### Text scale

| Token | Value | Role |
|---|---|---|
| `crown-white` | `oklch(98% 0.002 0)` | Primary headings, key values |
| `crown-gray1` | `oklch(92% 0.004 0)` | High-emphasis body copy |
| `crown-gray2` | `oklch(76% 0.005 0)` | Standard body, descriptions |
| `crown-gray3` | `oklch(56% 0.005 0)` | Secondary / supporting text |
| `crown-gray4` | `oklch(38% 0.005 0)` | Disabled, placeholders |

### Borders

| Token | Value | Role |
|---|---|---|
| `crown-border` | `oklch(72% 0.14 82 / 0.18)` | Gold-tinted subtle border |
| `crown-border-dim` | `oklch(98% 0 0 / 0.07)` | Neutral near-invisible border |

## Typography

### Font families

Loaded via `next/font/google`. CSS variables injected on `<html>`: `--font-serif` (Playfair Display) and `--font-sans` (Inter). Tailwind aliases: `font-serif` and `font-sans`.

| Family | Stack | Role |
|---|---|---|
| Playfair Display | `var(--font-serif), Georgia, serif` | Display headings, section titles, italic quotes |
| Inter | `var(--font-sans), system-ui, sans-serif` | Body copy, labels, UI text |

No third family. Hierarchy via scale + weight contrast (Playfair Display 700/900 vs Inter 400/500) and italic/upright contrast.

### Scale

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero h1 | `clamp(3.2rem, 7vw, 5.5rem)` | 900 | Playfair Display, letter-spacing `-0.02em` |
| Section h2 | `clamp(1.8rem, 3vw, 2.6rem)` | 700 | Playfair Display |
| CTA h2 | `clamp(1.8rem, 3.5vw, 3rem)` | 700 | Playfair Display |
| Mentor h3 | `1.75rem` | 700 | Playfair Display |
| Label / eyebrow | `0.72rem` | 600 | Inter, `tracking-[0.1em]`, uppercase, gold. Max 2-3 per page. |
| Body | `0.93–0.98rem` | 400 | Inter, `leading-relaxed` (~1.75) |
| Small / meta | `0.78–0.82rem` | 400–600 | Inter |
| Italic intro | `clamp(1.1rem, 1.8vw, 1.35rem)` | 400 italic | Playfair Display, gold, `opacity-85` |

`text-balance` on h1–h3 (`text-wrap-balance` utility); `text-wrap: pretty` on long prose.

## Spacing & Layout

Max content width: `max-w-content` (1200px), `max-w-wide` (1440px). Horizontal padding: `px-7` (28px).

### Section padding rhythm (varied, not uniform)

| Section | Padding |
|---|---|
| Standard | `py-[88px]` |
| Gallery, About, Differentials, Materials | `py-[80px]` |
| Modules, Mentors | `py-[96px]` |
| Videos | `py-[72px]` |

### Border radius

| Tailwind token | Value | Role |
|---|---|---|
| `rounded-sm` | `10px` | Cards, filter buttons, material items |
| `rounded-md` | `18px` | Larger cards (mentor, video), split panels |

### Grid patterns

- **2-col even split**: mentor cards, about section (text + stats)
- **3-col repeat**: modules, differentials, video cards, material items
- **4-col photo grid** with `nth-child(3n+1)` spanning 2 columns for rhythm
- **Asymmetric split**: `320px 1fr` for the "what is it" panel layout
- Responsive: all grids collapse to 1 or 2 columns at ≤700–860px

## Components

### `<SectionHeader>`

Props: `label?` (gold eyebrow, optional), `title`, `subtitle?`, `centered?`, `titleAs?`. Renders: label → `<GoldDivider>` → heading → subtitle paragraph. Bottom margin `mb-14`. Centered via `text-center` + `mx-auto` on subtitle.

### `<GoldDivider>`

36×1.5px bar, `bg-crown-gold/60`, `rounded-sm`. Centered variant via `centered` prop.

### `<RevealWrapper>`

Intersection Observer-based fade-up reveal. Wraps sections and cards. Stagger via `delay` prop (`(index % 4) * 80ms`). Under `prefers-reduced-motion`: fade-only, no translate, `duration-300`.

### Card baseline

`bg-crown-dark2`, `border border-white/5`, `rounded-md`. Hover: `border-crown-gold`. Transition: `duration-[280ms] ease`.

### Filter buttons

Pill (`rounded-full`), transparent, `border border-white/12`, `text-crown-gray2`. Active/hover: `bg-crown-gold text-crown-black border-crown-gold`.

### Mentor tag

Pill. `bg-crown-gold/7 border border-crown-gold/20 text-crown-gold`, `text-[0.72rem] font-semibold`.

### Material badge

Same gold pill as mentor tag but `rounded-full inline-block mt-2`.

### Hero tag

`bg-crown-rose/12 border border-crown-rose/32 text-crown-rose2`. Uppercase, `tracking-[0.15em] text-[0.68rem]`. Dot prefix via `::before`.

### CTA buttons

`btn-rose`: `bg-crown-rose text-white rounded-full px-8 py-3`. Hover: `bg-crown-rose2 -translate-y-0.5` + rose glow shadow.  
`btn-outline`: transparent, `text-white border border-white/22`. Hover: `border-crown-gold text-crown-gold -translate-y-0.5`.

### Module icon

42×42px circle, `bg-crown-rose/12`, rose2 SVG stroke.

### Differential card icon

44×44px, `rounded-sm`, rose border at 28% opacity, rose background at 6%, rose2 SVG stroke. Gold variant on the certification card.

### Play button

52×52px circle, `bg-crown-gold/15 border border-crown-gold/40`, gold fill SVG.

### Deponent avatar

42×42px circle. Gold-to-rose2 `linear-gradient(135deg)` background, Playfair Display initials in dark.

## Motion

Transition speed: `duration-[280ms] ease` (`--t: 0.28s ease` via CSS var) for all interactive state changes.

### Reveal animation

`fadeUp` keyframe: `opacity 0→1`, `translateY(20px→0)`, `0.6s cubic-bezier(0.22,1,0.36,1)`. Triggered by `<RevealWrapper>` via IntersectionObserver. Stagger: `(index % 4) * 80ms`.

Reduced motion: fade-only, no translate, `duration-300`. `scroll-behavior: auto`. Image hover transforms disabled.

### Photo hover

`scale-[1.04]` on gallery images, `duration-400 ease`. Disabled under `prefers-reduced-motion`.

## Header

Sticky, `z-[100]`. `bg-[rgba(10,10,10,0.92)] backdrop-blur-[18px]`. `border-b border-white/4`. Nav links: `text-[0.85rem] font-medium text-crown-gray3 hover:text-crown-white`.

## Z-index scale

| Layer | Value |
|---|---|
| Header (sticky) | 100 |
| Skip link (focus) | 200 |
| Lightbox / modal | 999 |

## Tech context

Next.js 15 (App Router). React 18. Tailwind CSS v3. Fonts via `next/font/google` (no external `<link>`). No component library; all UI is custom. Framer Motion available for advanced animation needs.
