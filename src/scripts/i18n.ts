/// <reference types="astro/client" />

/**
 * Global client-side i18n runtime.
 * Reads translation dictionaries embedded in `#i18n-data` and swaps
 * `[data-i18n]` / `[data-i18n-attr]` elements when the locale changes.
 */

interface LocaleData {
  [key: string]: string | LocaleData;
}

type Locale = 'en' | 'es';

interface I18NGlobal {
  locale: Locale;
  t(key: string, params?: Record<string, string | number>): string;
  setLocale(locale: Locale): void;
  getFlat(): Record<string, string>;
}

interface Window {
  I18N?: I18NGlobal;
  __I18N_DATA__?: Record<Locale, LocaleData>;
}

function flatten(data: LocaleData, prefix = ''): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of Object.keys(data)) {
    const value = data[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(out, flatten(value, newKey));
    } else if (value !== undefined && value !== null) {
      out[newKey] = String(value);
    }
  }
  return out;
}

function resolveParams(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) => {
    return params[name] !== undefined ? String(params[name]) : match;
  });
}

function createI18N(): I18NGlobal {
  const locales: Locale[] = ['en', 'es'];

  function getDictionary(locale: Locale): LocaleData {
    const data = (window.__I18N_DATA__ || { en: {}, es: {} }) as Record<Locale, LocaleData>;
    return data[locale] || {};
  }

  // Flatten the active locale's dictionary. Always re-read from
  // window.__I18N_DATA__ so later updates (e.g. syncDictionaries) apply.
  let flat = flatten(getDictionary('en'));

  function detectLocale(): Locale {
    const saved = localStorage.getItem('locale') as Locale | null;
    const browser = (navigator.language || 'en').toLowerCase();
    const detected: Locale = browser.startsWith('es') ? 'es' : 'en';
    return saved && locales.includes(saved) ? saved : detected;
  }

  function apply(): void {
    document.documentElement.setAttribute('data-locale', currentLocale);
    document.documentElement.lang = currentLocale;
    document.documentElement.setAttribute('lang', currentLocale);

    // Swap element text content
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const value = flat[key];
      if (value !== undefined) el.textContent = value;
    });

    // Swap attributes (syntax: "attr:key,attr:key") e.g. data-i18n-attr="aria-label:navigation.toggleMenu"
    document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':');
        if (!attr || !key) return;
        const value = flat[key];
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });

    document.dispatchEvent(new CustomEvent('language-changed', { detail: { locale: currentLocale } }));
  }

  let currentLocale: Locale = detectLocale();

  return {
    get locale() {
      return currentLocale;
    },
    getFlat: () => flat,
    t(key, params) {
      const value = flat[key];
      if (value === undefined) return key;
      return resolveParams(value, params);
    },
    setLocale(locale: Locale) {
      if (!locales.includes(locale)) return;
      currentLocale = locale;
      localStorage.setItem('locale', locale);
      flat = flatten(getDictionary(locale));
      apply();
    },
  };
}

/**
 * Reads the translation dictionaries from the server-rendered `#i18n-data`
 * block and registers them on `window.__I18N_DATA__` so every runtime lookup
 * sees the actual dictionaries.
 */
function syncDictionaries(): void {
  const node = document.getElementById('i18n-data');
  if (!node || !node.textContent) return;
  try {
    const data = JSON.parse(node.textContent) as Record<Locale, LocaleData>;
    window.__I18N_DATA__ = data;
  } catch (e) {
    console.error('Failed to parse i18n data block', e);
  }
}

// Make sure dictionaries are available before wiring up the runtime,
// otherwise the first apply() would resolve every key to undefined.
syncDictionaries();

// Initialize once
const i18n = createI18N();
window.I18N = i18n;
i18n.setLocale(i18n.locale);