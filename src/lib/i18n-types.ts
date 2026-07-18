// Client-safe i18n types and helpers — no fs imports

export type Locale = 'de' | 'en';

export const defaultLocale: Locale = 'de';
export const locales: Locale[] = ['de', 'en'];

/**
 * Pure translation lookup function — takes a pre-loaded translations object.
 * Safe to use in both server and client components.
 */
export function tFromDict(
  translations: Record<string, any>,
  key: string,
  params?: Record<string, string | number>
): string {
  const keys = key.split('.');
  let value: any = translations;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  if (typeof value !== 'string') return key;
  if (params) {
    return value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
  }
  return value;
}

export function isGermanPost(post: { title: string; tags?: string[] }): boolean {
  const germanLetters = /[äöüßÄÖÜ]/;
  if (germanLetters.test(post.title)) return true;
  if (post.tags && post.tags.some((tag: string) => /[äöüß]/i.test(tag))) return false;
  return false;
}
