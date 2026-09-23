/// <reference types="astro/client" />

/**
 * Global client-side theme runtime.
 * Applies `theme` (light | dark | system) to <html>, persists to localStorage,
 * and syncs with any toggle components via custom events.
 */

type Theme = 'light' | 'dark' | 'system';
type Resolved = 'light' | 'dark';

interface ThemeGlobal {
  getTheme(): Theme;
  getResolved(): Resolved;
  setTheme(theme: Theme): void;
  toggle(): void;
}

interface Window {
  THEME?: ThemeGlobal;
}

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setFavicon(dark: boolean): void {
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/jpeg"]');
  if (favicon) favicon.setAttribute('href', dark ? '/images/favico-dark.jpeg' : '/images/favico.jpeg');
}

function resolve(theme: Theme): Resolved {
  if (theme === 'system') return systemPrefersDark() ? 'dark' : 'light';
  return theme;
}

const VALID: Theme[] = ['light', 'dark', 'system'];

function createTheme(): ThemeGlobal {
  let current: Theme = 'system';

  function apply(): void {
    const resolved = resolve(current);
    const root = document.documentElement;
    root.classList.toggle('dark', resolved === 'dark');
    root.setAttribute('data-theme', current);
    root.style.colorScheme = resolved;
    setFavicon(resolved === 'dark');
    localStorage.setItem('theme', current);
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: current, resolved } }));
  }

  function detect(): Theme {
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved && VALID.includes(saved) ? saved : 'system';
  }

  // Listen for requests from toggle components (e.g. Astro inline scripts)
  window.addEventListener('theme-change', (e: Event) => {
    const detail = (e as CustomEvent).detail as { theme?: Theme };
    if (detail && detail.theme && VALID.includes(detail.theme)) {
      current = detail.theme;
      apply();
    }
  });

  // Listen for system preference changes while in system mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (current === 'system') apply();
  });

  current = detect();
  apply();

  return {
    getTheme: () => current,
    getResolved: () => resolve(current),
    setTheme(theme: Theme) {
      if (!VALID.includes(theme)) return;
      current = theme;
      apply();
    },
    toggle() {
      const order: Theme[] = ['light', 'dark', 'system'];
      const idx = order.indexOf(current);
      current = order[(idx + 1) % order.length];
      apply();
    },
  };
}

window.THEME = createTheme();