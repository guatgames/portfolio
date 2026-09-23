---
name: Guatgames Portfolio
description: Neon arcade gallery portfolio for a creative developer & designer.
colors:
  arcade-orange: "#ec7d1a"
  arcade-cyan: "#00f5d4"
  arcade-magenta: "#ff006e"
  arcade-lime: "#ccff00"
  surface-paper: "#ffffff"
  surface-paper-alt: "#fafafa"
  surface-night: "#0a0a0a"
  surface-night-alt: "#121212"
  ink: "#171717"
  ink-muted: "#525252"
  line-light: "#e5e5e5"
typography:
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(4rem, 12vw, 10rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.05em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  md: "8px"
  xl: "16px"
  full: "9999px"
spacing:
  space-3xs: "2px"
  space-2xs: "4px"
  space-xs: "6px"
  space-sm: "8px"
  space-md: "16px"
  space-lg: "24px"
  space-xl: "32px"
  space-2xl: "48px"
  space-3xl: "64px"
  space-4xl: "96px"
  space-5xl: "128px"
  space-6xl: "192px"
components:
  button-primary:
    backgroundColor: "{colors.arcade-orange}"
    textColor: "{colors.surface-paper}"
    rounded: "{rounded.md}"
    padding: "24px 24px"
  button-accent:
    backgroundColor: "transparent"
    textColor: "{colors.arcade-orange}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.arcade-cyan}"
    textColor: "{colors.surface-night}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "rgba(255,255,255,0.8)"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  card-glass:
    backgroundColor: "rgba(255,255,255,0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  input:
    backgroundColor: "{colors.surface-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---
# Design System: Guatgames Portfolio

## Overview

**Creative North Star: "The Neon Arcade Gallery"**

The site is a gallery wall under arcade lighting: near-black or paper surfaces behind it, a faint grid scratched into the floor, glassy panels floating over blurred pools of orange, cyan, magenta, and lime light, and one enormous Space Grotesk headline acting as the marquee. The visitor walks a single scroll — hero, about, projects, technologies, blog, contact — and each section is a new cabinet on the wall, but the whole room runs on the same power supply.

The system is deliberately maximal but physics-light. Nothing is heavy, nothing sits with hard grey shadows; surfaces are translucent and lit, motion is everywhere (scroll reveals, text scramble, parallax float, animated mesh gradients), and noise texture rides faintly over backgrounds. Dark mode is the marquee with the house lights off; light mode is the same room at noon. The owner is a creative developer and designer selling both halves, and the design is the proof of both.

**Key Characteristics:**
- Translucent glass cards with backdrop blur floating over accent-tinted glow blobs.
- A three-color accent trio (orange #ec7d1a, cyan #00f5d4, magenta #ff006e) with lime #ccff00 and orange #ff6b00 as occasional fourths.
- Giant Space Grotesk display type with tight line-height (0.9) and wide tracking.
- Gradient text as the brand signature: orange → cyan → magenta at 200% size, animated.
- Continuous motion: mesh-morph gradient shapes, float, pulse-soft, text reveal, scroll-initiated stagger.
- Hard grid pattern at ~5% opacity and noise at 2-5% opacity as ambient texture.

## Colors

The palette is a carnival trio on two neutral stages: paper (light) and night (dark). Every prominent accent moment uses at least two members of the trio together, usually as a 135° gradient. Neutrals carry the reading surfaces; the trio carries the emotion.

### Primary
- **Arcade Orange** (#ec7d1a): The flagship accent. Fills primary buttons, the name badge dot, brand-500 text/rings, the availability pulse, and every gradient's warm start. In dark mode it lifts slightly to #f19e3d for contrast.
- **Copper Mix** (#b84410 / brand-700): Orange at weight — hovers and pressed button states.
- **Ember Line** (#de5f10 / brand-600): Button hover background between orange and copper.

### Secondary
- **Arcade Cyan** (#00f5d4): The neon gas. Bright, cold, complementary to orange. Appears in section-title gradients, syntax highlighting, accent badges, glow shadows, and tech tints. Reads electric on dark; on paper it wants a translucent tint rather than raw.

### Tertiary
- **Arcade Magenta** (#ff006e): The loud third. Completes the signature gradient and pops floating hero cards, glow shadows, and mesh blobs. On paper, use translucent (#ff6b9d in dark text/accents) for readability.

### Additional Accents
- **Arcade Lime** (#ccff00) and **Hot Orange** (#ff6b00): Occasional fourth and fifth colors for the floating hero blobs, social dots, and hero syntax highlight — decoration, never text roles.

### Neutral
- **Paper** (#ffffff) and **Paper Alt** (#fafafa): Light-mode surfaces. Cards use paper/80 (80% translucent white).
- **Night** (#0a0a0a), **Night Alt** (#121212), **Night Elevated** (#1a1a1a): Dark-mode equivalent stages. Cards use neutral-900/80.
- **Ink** (#171717) / **PNL-100** (#fafafa): Primary text in light / dark.
- **Muted Ink** (#525252) / (#a3a3a3): Secondary text.
- **Faint** (#a3a3a3) / (#737373): Tertiary text, placeholders, captions.
- **Line Light** (#e5e5e5) / **Line Dark** (#262626): Hairline borders, used at 50% opacity on glass surfaces.

### Named Rules
**The Carnival Trio Rule.** Any prominently colored composition must show at least two members of the orange/cyan/magenta trio together — never a solo accent carrying a headline moment. The signature gradient (orange → cyan → magenta) is the canonical instance.

**The Rare Raw Rule.** Raw hex accent colors appear only in translucency (blobs, glows, tints, text-on-dark). Solid accent fills are reserved for small elements: primary buttons, dots, chips, small icons.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (monospace), used for code, captions, "portfolio.astro" chrome

**Character:** A chunky contemporary grotesk screams above a soft neutral humanist. Space Grotesk carries heavy weights at huge sizes with tight 0.9 line-height and -0.03em tracking — the marquee. DM Sans does quiet, readable, airy body work at 1.7 line-height. JetBrains Mono drops in as the "terminal" voice for the hero code card and file-label chrome.

### Hierarchy
- **Display XL** (800, clamp(4rem, 12vw, 10rem), line-height 0.9, -0.03em): Hero name. Maximum gravity; the entire page's focal event.
- **Display MD/LG** (700, clamp(2.5rem–6rem), 1.1): Section titles; always rendered as the trio gradient text with a slow 8s gradient shift.
- **Display SM** (700, clamp(1.75rem, 4vw, 2.5rem), 1.2): Hero stat numbers.
- **Headline** (700, clamp(1.125rem–3rem), 1.2–1.4): Card titles, form headings.
- **Body** (400, 1rem–1.125rem, 1.7): Paragraphs, card descriptions, long-form.
- **Body SM** (400, 0.875rem, 1.6): Metadata, code lines, small text.
- **Caption** (500, 0.75rem, 1.5, +0.05em, uppercase where labelled): Badges, scroll hints, file labels.

### Named Rules
**The Marquee Rule.** There is exactly one display-XL headline per viewport. It owns the hero; nowhere else gets the full marquee treatment.

## Layout

A single-column scroll surface with alternating full-bleed sections. The container caps at **max-w-7xl** (80rem) with horizontal padding **px-4 → sm:px-6 → lg:px-8 → xl:px-12**. Section vertical rhythm: **py-3xl (4rem) → lg:py-4xl (6rem) → xl:py-5xl (8rem)**.

Two-column splits behave responsively: hero and key grids collapse to single column below `lg` (1024px). Cards grids are 1-up → 2-up → 3-up across breakpoints. The hero uses a centered single-column layout that opens to a 12-column-style two-column grid at `lg`, with the content column text-left and the visual column holding an aspect-square composition of one main glass card with three absolutely-positioned floating cards.

Density is comfortable: spacing tokens run on a 2px→192px scale with generous gaps (gap-6 = 24px between cards, gap-space-2xl = 48px between grid children in hero).

## Elevation & Depth

**The system is glass + glow, not shadow.** Depth is built from translucency, backdrop blur, and colored glow — hard grey drop shadows are absent from cards. Cards are frosted panels (`backdrop-blur-xl`) floating over blurred accent blobs; "lift" is communicated through colored glow (`shadow-glow-*`), a -translate-y-2 hover, and border tint shifts to brand.

**The Flat-By-Default Rule.** Nothing casts a hard ambient shadow at rest. Colored glow appears only as hover/emphasis response or on dedicated glow accents (logo on dark, primary button).

### Shadow Vocabulary
- **Glass Glow** (`0 0 20px rgb(236 125 26 / 0.4)`): Primary accent glow — hover state on primary elements, brand accents.
- **Cyan Glow** (`0 0 20px rgb(0 245 212 / 0.4)`): Reserved for cyan accents (secondary interactions, tech highlights).
- **Magenta Glow** (`0 0 20px rgb(255 0 110 / 0.4)`): Reserved for magenta accents (floating hero cards, tertiary moments).
- **Standard Elevation** (Tailwind shadow-lg/xl): Permitted only on the header after scroll and on solid-color buttons to separate them from glass surfaces.

## Shapes

**Corner language: soft-but-present.** Interactive and content surfaces use **8px radius** (buttons, inputs, tags, nav-underline hairlines): tactile, friendly. Surfaces that hold a composition step up to **16px** (cards, modals, form panels). Small identity elements go fully round: **9999px** pills for badges, availability chips, social dots, avatars. The floating mesh-gradient decorative shapes morph their border-radius over 12s (organic blob illusion), never crisp geometry.

Borders are hairlines at 50%-opacity white on dark, 50%-opacity neutral-200 on light — they glow, not frame. Decorative chips inside the hero card (object-circles, icon tiles) use **12px radius**.

### Named Rules
**The Glass Border Rule.** Surfaces are frosted; borders are at most 50% opacity hairlines. Any border that turns solid inside a content surface is a bug.

## Components

### Buttons
- **Shape:** 8px radius, medium weight, px-6 py-3, inline-flex with a 5×5 svg icon on the right that nudges +translate-x-1 on hover.
- **Primary:** Solid Arcade Orange background (#ec7d1a) with white text, hover to Ember (#de5f10), active to Copper (#b84410), plus orange glow shadow on hover.
- **Secondary:** Paper/Night chip — neutral-100/neutral-800 background, neutral border, text follows theme. Used for "Source code" actions.
- **Ghost:** Transparent, muted text, hover to neutral.
- **Accent:** 2px Arcade Orange border on transparent, orange text; on hover fills with orange and flips text to white. Used for "Get in Touch".
- **Icon:** 12px radius square, neutral-100/neutral-800, muted icon.
- **Disabled:** opacity-50, cursor-not-allowed.

### Cards / Containers
- **Corner Style:** 16px radius.
- **Background:** White/80 or neutral-900/80 translucent, `backdrop-blur-xl`.
- **Border:** Hairline (neutral-200/50 or neutral-800/50). On hover the border tints to brand-500/30.
- **Shadow Strategy:** None at rest; hover adds glow + `-translate-y-2` (see Elevation).
- **Internal Padding:** p-6 default; hero/contact panels p-8 → lg:p-10.
- **Variants:** `.card` base; `.card-hover` (lift + glow on hover); `.glass` (white/10 or neutral-900/10 with blur-2xl, white/20 border — used on dark hero visuals).

### Inputs / Fields
- **Style:** 8px radius, px-4 py-3, white/neutral-900 background, neutral hairline border, placeholder in Faint.
- **Focus:** Brand-500 border + 2px brand-500/20 ring, outline removed.
- **Error:** `border-red-500` plus a text-body-sm red message with `mt-2`.
- **Legend:** `.label` block captions (0.875rem, medium, Muted Ink, mb-2).
- **Status:** success = emerald-500/10 panel with emerald text + border; error = red counterpart.

### Chips
- **Badge:** Pills (9999px), px-3 py-1, caption size uppercase-spacing by role; primary = brand-100/brand-900-30 background with brand-700/brand-300 text ("Featured"); accent = cyan.
- **Tag (technology):** 8px radius, neutral-100/neutral-800 background, muted text, caption weight.

### Navigation
- **Header:** Fixed, translucent (white/80, night/95 after scroll), backdrop-blur-2xl, hairline bottom border. Height h-16 → lg:h-20.
- **Links:** muted text, 0.875rem medium; the signature underline is a **brand-orange 0.5px hairline** that grows from center on hover (`w-0 → w-3/4`, ease-out-expo). Active/hover underline is the brand statement; text flips to full-contrast on hover.
- **Mobile:** burger → full-screen overlay menu (MobileMenu), links then language + theme toggles.
- **Logo:** A single gradient-text "G" in Space Grotesk (heading-lg). The gradient (orange→cyan→magenta, animated) is the brand's permanent tattoo — never flat.

### Signature Component — Gradient Text
Section titles, the logo "G", and the hero name line "Angel Alfaro" render as `linear-gradient(135deg, arcade-orange, arcade-cyan, arcade-magenta)` clipped to text, background-size 200%, animated with `gradientShift` (8s ease-in-out infinite). This is the single most binding mark of the identity.

## Do's and Don'ts

### Do:
- **Do** use the trio gradient (orange → cyan → magenta) for every section title and the logo.
- **Do** keep cards frosted (translucent + backdrop-blur) over accent-tinted glow blobs.
- **Do** animate motion in: reveals, floats, pulse-soft, text-reveal, mesh morph — motion is the identity.
- **Do** respect prefers-reduced-motion: collapse animation, float, parallax, and scrolling to instant/linear.
- **Do** keep the hero to one display-XL headline and small stat numbers below it.
- **Do** use JetBrains Mono for everything that reads "code" or "chrome".

### Don't:
- **Don't** use flat opaque cards or hard grey drop shadows for content surfaces.
- **Don't** let any single accent color carry a headline moment alone (Carnival Trio Rule).
- **Don't** apply the marquee treatment (display-XL) to more than one element per viewport.
- **Don't** make borders more than 50% opacity inside surfaces (Glass Border Rule).
- **Don't** remove the grid/noise ambient texture from backgrounds that have it.
- **Don't** replace the gradient "G" with a flat-colored wordmark.