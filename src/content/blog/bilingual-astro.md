---
title: "Building a Bilingual Site with Astro: i18n Without the Headache"
description: "How to implement client-side language switching in Astro with zero page reloads, using React context and JSON translation files."
date: 2026-08-25
tags: ["astro", "i18n", "react"]
draft: false
readingTime: 8
---

# Building a Bilingual Site with Astro

Internationalization doesn't have to be complicated. In this guide, I'll show you how to implement smooth client-side language switching in Astro.

## The Approach

Instead of using Astro's built-in routing-based i18n (which creates separate pages per locale), we can use a React context provider that swaps translation JSON files instantly on the client side.

### Why Client-Side?

- Zero page reloads when switching languages
- Perfect for single-page portfolios
- Simpler URL structure
- Works great with view transitions

### Implementation

The key is a `LanguageContext` that:

1. Loads translation JSON modules dynamically
2. Flattens nested keys into dot notation
3. Provides a `t()` function for lookups
4. Persists the locale choice to `localStorage`

## Real World Results

This portfolio uses exactly this pattern. Switch languages and watch everything update instantly — no flicker, no reload.