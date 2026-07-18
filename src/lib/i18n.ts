// Server-only i18n — uses fs to load translations from disk
import fs from 'fs';
import path from 'path';
import { type Locale, locales, defaultLocale, tFromDict } from './i18n-types';

const localesDir = path.join(process.cwd(), '_pages', 'locales');

const cache: Record<string, Record<string, any>> = {};

function loadLocale(locale: Locale): Record<string, any> {
  if (cache[locale]) return cache[locale];
  const filePath = path.join(localesDir, `${locale}.json`);
  if (!fs.existsSync(filePath)) return {};
  cache[locale] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return cache[locale];
}

export function getTranslations(locale: Locale): Record<string, any> {
  return loadLocale(locale);
}

/**
 * t() — loads translations from disk and looks up a key.
 * Only call from server components.
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const translations = loadLocale(locale);
  return tFromDict(translations, key, params);
}

export { type Locale, locales, defaultLocale } from './i18n-types';
