'use client';

import Link from 'next/link';
import { type Locale, locales } from '@/lib/i18n-types';

const localeLabels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
};

export default function LanguageSwitcher({ locale: propLocale }: { locale?: string }) {
  let locale: Locale = 'de';
  
  if (propLocale && locales.includes(propLocale as Locale)) {
    locale = propLocale as Locale;
  }

  const otherLocale = locales.find((l) => l !== locale) || 'en';
  const otherLabel = localeLabels[otherLocale];

  return (
    <div style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      zIndex: 1000,
    }}>
      <Link
        href={`/${otherLocale}`}
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: 'rgba(0,0,0,0.08)',
          borderRadius: '0.5rem',
          fontSize: '0.85rem',
          color: 'inherit',
          textDecoration: 'none',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.2s ease',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        🌐 {otherLabel}
      </Link>
    </div>
  );
}
