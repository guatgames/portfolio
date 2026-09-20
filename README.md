# Guatgames — Maximalist Portfolio

A maximalist, single-page portfolio built with **Astro 5 + MDX + Tailwind CSS**, featuring:

- 🌐 **Bilingual (EN/ES)** — client-side language toggle with no page reload
- 🌗 **Light/Dark/System** theme toggle
- ✨ **Motion everywhere** — scroll reveals, text scramble, parallax, magnetic buttons, animated mesh gradients
- 📝 **Content collections** — add projects, blog posts, and technologies as simple MDX/JSON files
- 📬 **Contact form** — Netlify Forms ready with client-side validation
- 🖥️ **Blog section** — `/blog` listing with tag filters + `/blog/[slug]` articles

## Quick start

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # preview the build
```

## Project structure

```
src/
├── components/
│   ├── layout/       Header, Footer
│   ├── sections/     Hero, About, Projects, Technologies, Blog, Contact
│   └── ui/           LanguageToggle, ThemeToggle, ProjectCard, BlogCard, TechCard, ...
├── content/          ⚡ Content collections (edit these to update the site)
│   ├── config.ts     Collection schemas
│   ├── projects/     *.mdx project entries
│   ├── blog/         *.md(x) blog posts
│   ├── technologies/ technologies.json  (array of skills)
│   └── siteConfig/   site-config.json    (site metadata)
├── i18n/             en.json / es.json  (translation dictionaries)
├── layouts/          Layout.astro (theme + locale bootstrap, i18n data embed)
├── pages/            index.astro (single page), blog/ (listing + post detail)
├── scripts/          i18n.ts + theme.ts client runtimes
└── styles/           global.css (design tokens, keyframes, utility classes)
```

## Adding a project

Create `src/content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
description: "One-line summary shown on cards."
longDescription: "Longer description shown in the project modal/body."
technologies: ["Astro", "React", "Tailwind CSS"]
github: "https://github.com/guatgames/my-project"
demo: "https://my-project.dev"       # optional
image: "/images/projects/my-project.jpg"  # optional
featured: true                       # show in Featured section
order: 1
role: "Full-stack Developer"         # optional
startDate: "2026-01"                 # optional
endDate: "2026-03"                   # optional
teamSize: 2                          # optional
---

# My Project

Write as much body content as you like below the frontmatter — it's rendered
inside the project's detail view.
```

## Adding a blog post

Create `src/content/blog/my-post.md`:

```mdx
---
title: "My Post Title"
description: "Short summary displayed on cards and in SEO."
date: 2026-09-01
tags: ["astro", "design"]
coverImage: "/images/blog/cover.jpg"  # optional
draft: false                          # set true to hide
readingTime: 5                        # optional, minutes
---

Your post content in Markdown / MDX.
```

## Adding a technology

Edit the `technologies` array in `src/content/technologies/technologies.json`:

```json
{
  "id": "astro",
  "name": "Astro",
  "category": "framework",   // framework | library | language | tool | platform | database | other
  "icon": "🚀",
  "color": "#FF5D01",
  "url": "https://astro.build"   // optional
}
```

Each technology renders as a card showing only its **icon and name** (no
proficiency meter). The `color` value is used to tint card accents.

**Core skills** in the About section work the same way — plain name chips,
no progress bars. Each `<SkillBar name="..." color="..." />` in
`src/components/sections/About.astro` renders an icon-free chip with a colored dot.

## Translations (i18n)

The site is a single page — language switching happens entirely on the client
via `src/scripts/i18n.ts`. The dictionaries live in `src/i18n/en.json` and
`src/i18n/es.json` and are embedded in the page as a JSON blob.

To make any element translate when the toggle is pressed, add one of:

```html
<!-- Swap text content -->
<p data-i18n="hero.greeting">Hi, I'm</p>

<!-- Swap an attribute (placeholder, aria-label, title...) -->
<input data-i18n-attr="placeholder:contact.form.emailPlaceholder" />

<!-- Values support {placeholders}: {name}, {year}... → use I18N.t('footer.copyright', { year: 2026, name: 'Guatgames' }) -->
```

Nested JSON keys use dot notation (`hero.stats.years` → `"hero": { "stats": { "years": "..." } }`).

After toggling, the runtime dispatches a `language-changed` event — you can
listen for it to update components that manage their own text.

## Theme

`src/scripts/theme.ts` handles light/dark/system, persists to `localStorage`,
applies the `dark` class to `<html>` without flashing, and reacts to OS theme
changes while in system mode.

## Forms

The contact form posts to Netlify Forms (via a hidden `form-name` field). To use
a different backend, replace the `fetch('/')` call in
`src/components/ui/ContactForm.astro` with your endpoint.

## Deploying

Static output — deploy `dist/` to Netlify, Vercel, or any static host.

## Customization

- Design tokens, fonts, colors, shadows, and keyframes: `tailwind.config.mjs`
- Global styles, buttons, cards, badges: `src/styles/global.css`
- Site metadata + social links: `src/content/siteConfig/site-config.json`
- SEO defaults + OG config: `src/i18n/en.json` and `src/i18n/es.json` (`seo` section)
- Personal details (name, email, socials) are baked into the sections — update
  them to match yours.