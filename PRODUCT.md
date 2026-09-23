# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 (static output) + MDX + React (framer-motion) + Tailwind CSS. Single-page portfolio (index) plus a blog section (`/blog`, `/blog/[slug]`).

## Users

- **Primary: recruiters and employers** evaluating Angel Alfaro for creative-developer / design-engineer roles (confirmed).
- Secondary: freelance clients and the developer community reached via the blog.
- The visitor is usually evaluating craft quickly: they scan work samples, skills, and about, then decide whether to reach out.

## Product Purpose

A personal portfolio that proves Angel Alfaro's craft as a Creative Developer & Designer and converts evaluation into contact. Success = a recruiter/client reviewing the work decides the quality is worth pursuing, and reaches out via the contact form or email.

## Positioning

A crossover creative-developer-and-designer portfolio, not a standard dev resume page. The maximalist, motion-rich, bilingual presentation is itself evidence of the skills being sold. A stock developer-template portfolio could not truthfully copy this identity.

## Operating Context

- Current focus: freelance/contract work (confirmed); site must keep contact/availability signals prominent for that while still supporting recruitment.
- Blog serves as a credibility channel supporting the portfolio, not a standalone content destination (confirmed).
- Browsed on desktop and mobile; theme is light/dark/system; language toggle (EN/ES) switches without reload.
- Site URL is guatgames.dev; deployed as static output.

## Capabilities and Constraints

- Static Astro build; no backend. Contact form posts to Netlify Forms (`form-name` hidden field), replaceable via the fetch call in `ContactForm.astro`.
- Client-side i18n via embedded JSON dictionaries (`src/i18n/en.json`, `src/i18n/es.json`) and `data-i18n` / `data-i18n-attr` attributes; no per-language URL routing/SEO.
- Content collections power projects (`*.mdx`), blog (`*.md(x)`), technologies (`technologies.json`), and site config (name, socials, availability, email).
- Tailwind design tokens in `tailwind.config.mjs`; global component CSS in `src/styles/global.css`.
- `site` is `https://guatgames.dev`, `trailingSlash: always`, assets under `dist/assets`.
- Contact details are baked into sections must be kept accurate (name, email, socials).

## Brand Commitments

- Name: Angel Alfaro; brand/username: Guatgames.
- Title: "Creative Developer & Designer".
- Identity is explicitly maximalist and motion-heavy (per README and design tokens); bilingual EN/ES; light/dark/system theming are established commitments to preserve.
- Availability copy: "Now open for freelance projects"; offered response time 24-48h.

## Evidence on Hand

- Three real project entries: `portfolio-2026`, `neocommerce`, `openpay-cli` (`src/content/projects/*.mdx`).
- Two real blog posts: maximalist design, bilingual Astro (`src/content/blog/*.md`).
- Real site config: email `adalfaroochoa@gmail.com`, GitHub/LinkedIn/Twitter under `guatgames`, location Guatemala (`src/content/siteConfig/site-config.json`).
- Technologies list with categories/colors (`src/content/technologies/technologies.json`).
- No testimonials, resume file, or case-study metrics are present and none should be fabricated.

## Product Principles

- The portfolio's own design is the chief evidence of craft; never let presentation outpace accuracy of content.
- The work (projects) carries proof; About and blog support it; contact is the conversion point.
- Bilingual EN/ES is a real feature that should read as intentional, not bolted-on.
- Motion and maximalist detail serve attention and feeling, but must never hurt readability, performance, or accessibility.
- Content is content-owned: site owner extends the site by editing content collections, not components.

## Accessibility & Inclusion

- Code already implements prefers-reduced-motion handling, skip-to-content/navigation, focus-visible rings, aria labels (via i18n), and alt-text plumbing. Keep these as a floor for any change.
- No additional accessibility standard or user group was confirmed beyond this.