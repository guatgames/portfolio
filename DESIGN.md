---
name: Guatgames Portfolio
description: A cool-gray editorial proof sheet for a creative developer and designer.
colors:
  paper: "#f7f8f9"
  paper-alt: "#eef0f2"
  paper-deep: "#e5e8eb"
  ink: "#171b1e"
  ink-secondary: "#4b545b"
  ink-tertiary: "#626c74"
  rule: "#7c858c"
  rule-strong: "#626c74"
  slate: "#8e979e"
  graphite: "#7e878e"
  silver: "#c7cdd2"
  smoke: "#9099a0"
  steel: "#757e85"
  ash: "#9aa2a9"
  night: "#0d0f11"
  night-alt: "#131619"
  night-elevated: "#191d20"
  night-ink: "#f2f4f5"
  night-ink-secondary: "#aab3ba"
  night-rule: "#68727a"
  lightbox-void: "#0a0a0a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lead:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.08em"
  stat-label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  meta:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
  ledger:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.75
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
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
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"
    width: "40px"
    height: "40px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 0"
  card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"
    padding: "3px 7px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  reader-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Guatgames Portfolio

## Overview

**Creative North Star: "The Editorial Proof Sheet"**

The portfolio is one continuous proof sheet: paper-white or near-black ground, strong dark rules, square corners, and typography doing all the structural work. The name and the work are the evidence. Nothing floats, glows, or blurs; precision is the craft being sold, so spacing, alignment, and measured type carry the identity.

The page reads as a ruled index of proof: masthead, about, projects, technologies, writing, contact. Each section uses the same left-aligned header, the same dark grey rules, and the same flat surfaces. Light is a cool paper ground; dark is the same system on near-black. Motion is sparse and exponential, never decorative weather.

**Key Characteristics:**
- Strictly greyscale interface; no signal hue, gradient text, or colored glow. Only media and technology marks carry color.
- Archivo for masthead and headings, Source Sans 3 for reading, JetBrains Mono for code and metadata.
- Emphasized 2px structural rules, 1px internal rules, flat transparent surfaces, square corners, tabular numerals.
- A three-column stat index and a flat code ledger instead of floating cards.
- Project/blog imagery and video in full color; technology marks in their own brand hue.

## Colors

Every interface value is a cool neutral; roles divide by value, not hue. The dark ground mirrors the light one rather than switching temperature. Project/blog imagery and technology marks are content and keep their own color.

### Primary
- **Paper** (#f7f8f9): The default page ground. The light theme's field.
- **Ink** (#171b1e): Primary text, solid buttons, and the strong rule above section titles.
- **Night** (#0d0f11): The dark theme ground; a near-black that stays cool.
- **Night Ink** (#f2f4f5): Primary text on the night ground.

### Secondary
- **Ink Secondary** (#4b545b): Body copy on paper and secondary labels.
- **Ink Tertiary** (#626c74): Metadata, placeholders, captions, and ledger punctuation on paper; clears 4.5:1.
- **Night Ink Secondary** (#aab3ba): Body copy and secondary labels on night.
- **Night Tertiary** (#7e878e): Metadata and captions on night; clears 4.5:1.

### The Rules
- **Rule** (#7c858c): Primary structural border on paper at 3.53:1 — cards, sections, headers, and secondary controls. Used at 2px for containers and 1px for internal separators.
- **Rule Strong** (#626c74): Input underlines and emphasized rules on paper at 5.04:1.
- **Night Rule** (#68727a): Primary structural border on night at 3.91:1; **Night Rule Strong** (#8e979e) at 6.47:1 for inputs. Both read without relying on hue.

### Neutral
- **Paper Alt** (#eef0f2) and **Paper Deep** (#e5e8eb): Inline code, quiet fills, and tertiary tonal steps.
- **Night Alt** (#131619) and **Night Elevated** (#191d20): Tonal steps on the dark ground.
- **Slate** (#8e979e), **Graphite** (#7e878e), **Silver** (#c7cdd2), **Smoke** (#9099a0), **Steel** (#757e85), **Ash** (#9aa2a9): Legacy accent aliases kept as neutral values for compatibility; the shipped interface draws from the visible rule and ink tokens instead. They carry no hue meaning.
- **Lightbox Void** (#0a0a0a) and **Silver** (#c7cdd2): The media viewer's dark field and its 2px focus ring.

### Named Rules
**The Strong Rule.** Structure comes from visible dark grey rules and alignment, never from glow, blur, or colored borders. Containers carry 2px; internal separators carry 1px.

**The Greyscale Interface Rule.** Every component, glyph, and state uses neutral greys. Technology marks and project/blog media keep their original color because they are the evidence, not decoration.

## Typography

**Display Font:** Archivo (system-ui fallback)
**Body Font:** Source Sans 3 (system-ui fallback)
**Label/Mono Font:** JetBrains Mono (monospace fallback)

**Character:** Archivo is compressed by width and weight into a masthead voice; Source Sans 3 stays quiet and readable; JetBrains Mono makes code and measurement feel measured rather than decorative.

### Hierarchy
- **Display** (800, clamp(3.5rem, 9vw, 6rem), 0.88): The hero name only; tracking stops at -0.04em.
- **Section** (800, clamp(2.25rem, 5vw, 3.75rem), 0.98): Section titles under a strong rule.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.1): Reader and major card headings.
- **Title** (700, clamp(1.25rem, 2.5vw, 1.75rem), 1.25): Entry titles.
- **Stat** (700, clamp(1.75rem, 3vw, 2.5rem), 1): Tabular counters in the index row.
- **Body** (400, 1rem, 1.65): Long-form copy, capped at 65–75ch.
- **Body Lead** (400, 1.0625rem, 1.6): Section subtitles and reader descriptions.
- **Caption** (400, 0.75rem, 1.5): Small supporting text with 0.08em tracking.
- **Meta** (500, 0.6875rem, 1.5): Uppercase mono labels at 0.12em tracking.
- **Ledger** (400, 0.75rem, 1.75): The code specimen.

### Named Rules
**The Tight-But-Legible Rule.** Display tracking never goes past -0.04em; body copy never passes 75ch. Emphasis comes from weight and scale, not color.

## Layout

The container is capped at 84rem with 1.25rem inline padding at phone width, 2rem from 640px, and 3rem from 1024px. Sections carry a 2px top rule and 5rem vertical padding, growing to 7.5rem from 1024px. Headers are left aligned, capped at 62ch, with 3.5rem below them.

The first viewport is a two-column editorial spread: a 1.55fr masthead and a 0.85fr ruled code ledger, separated by a 2px left rule at desktop and stacked on mobile. Media galleries, readers, and contact keep their original behavior but sit on the same ruled ground.

## Elevation & Depth

Flat by default. No card, panel, or reader uses a resting shadow, and the old glass and glow utilities are neutralized. Depth is conveyed by the 2px structural rule, the 1px internal rule, whitespace, and value steps between paper, paper-alt, and paper-deep (or their night equivalents).

### Shadow Vocabulary
- **None** (`box-shadow: none`): The resting state for every surface. Focus is a 2px outline in current ink, offset 3px.

### Named Rules
**The Flat Sheet Rule.** A surface is a sheet on the ground, not a floating object. If it needs separation, use a rule or spacing.

## Shapes

Corners are square (0px) everywhere in the shipped components. Strong dark ruled borders replace pills and rounded cards. The media viewer and readers use the same square, ruled sheet as the page; no backdrop blur, no gradient, no clip-path disguise.

### Named Rules
**The Square Rule.** A radius would make an entry feel like a card. Keep the corner square and let the rule define the edge.

## Components

### Buttons
- **Shape:** Square corners (0).
- **Primary:** Ink background (#171b1e / #f2f4f5 in dark) with paper text, 12px 20px padding.
- **Secondary:** Transparent with an ink border; hover fills with the ink inverse.
- **Icon:** 40px square, 2px rule, transparent ground; the glyph inherits secondary ink and focus-visible gets a 2px ink outline.
- **Text actions:** Underlined 1px text links in the hero, with a 4px underline offset and opacity-only hover.

### Chips / Tags
- **Style:** Transparent, 1px rule, ink-secondary mono text, 3px 7px padding, square corners.
- **State:** Section eyebrows remain in the DOM for i18n but are hidden; visible tags mark featured work and technology counts only.

### Cards / Containers
- **Corner Style:** Square (0).
- **Background:** Transparent on the page ground; readers and the lightbox use the flat paper/night surface.
- **Border:** 2px `Rule` / `Night Rule`; hover shifts the border to primary ink with no lift or shadow.
- **Internal Padding:** 24px to 48px depending on section.

### Inputs / Fields
- **Style:** Transparent field with a 2px bottom rule in `Rule Strong`; no radius, no fill, no shadow.
- **Focus:** Bottom rule shifts to primary ink; placeholder uses `Ink Tertiary` at 5.04:1 on paper.
- **State:** Disabled and error states keep the same rule language and change only the text or border value.

### Navigation
- **Style:** Header is transparent with a 2px bottom rule; links use Source Sans 3 at 0.875rem in ink-secondary, brightening to primary ink on hover.
- **Mobile:** The menu is a flat sheet on the page ground with ruled rows, not a floating overlay.

### Signature Component: Code Ledger
- **Style:** A ruled header (`v1.0`) and a JetBrains Mono code specimen in three ink values.
- **Behavior:** A small mouse parallax offsets the ledger; reduced-motion users get the static sheet.

## Do's and Don'ts

### Do:
- **Do** align entries to the 84rem container and its 1.25/2/3rem gutters.
- **Do** use 2px rules in `Rule` (#7c858c) or `Night Rule` (#68727a) for structure, and 1px internal rules for fine separators.
- **Do** keep display tracking at -0.04em or looser and body measure within 65–75ch.
- **Do** ship project/blog photography and video in full color; the work's own hue is part of the proof.
- **Do** keep every interface glyph grey, and leave technology marks their official brand color.
- **Do** use tabular numerals for counters, dates, and carousel positions.

### Don't:
- **Don't** reintroduce gradient text, glass blur, colored glow, or noise/mesh decoration; the user replaced them.
- **Don't** add a kicker or eyebrow above a heading; the heading carries its own weight.
- **Don't** use rounded pills or floating metric cards for the hero index.
- **Don't** let small text fall below 4.5:1; `Ink Tertiary` and `Night Tertiary` are the lightest allowed small-text values.
- **Don't** invent credentials, metrics, or testimonials; the proof sheet only shows existing facts.
