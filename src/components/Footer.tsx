'use client';

import Link from 'next/link';
import { type Locale, locales, tFromDict } from '@/lib/i18n-types';

// Pre-load translations for the few footer strings we need
const footerTranslations: Record<string, Record<string, any>> = {
  de: {
    legal: {
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      kiHinweis: 'KI-Hinweis',
    },
    footer: {
      copyright: '{year} Malaclyde. Alle Inhalte können KI-generiert sein.',
      affiliateDisclaimer: 'Affiliate-Links: Dieser Websitebetreiber erhält Provisionen für Käufe über Links auf dieser Seite.',
    },
  },
  en: {
    legal: {
      impressum: 'Legal Notice',
      datenschutz: 'Privacy Policy',
      kiHinweis: 'AI Disclosure',
    },
    footer: {
      copyright: '{year} Malaclyde. Some content may be AI-generated.',
      affiliateDisclaimer: 'Affiliate links: This site earns commissions on purchases made through links on this page.',
    },
  },
};

export default function Footer({ locale: propLocale }: { locale?: string }) {
  // Try to get locale from URL param
  let locale: Locale = 'de';
  
  if (propLocale && locales.includes(propLocale as Locale)) {
    locale = propLocale as Locale;
  }

  const dict = footerTranslations[locale] || footerTranslations.de;
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '2rem',
      textAlign: 'center',
      marginTop: 'auto',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
      }}>
        <Link href={`/${locale}/impressum`} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {tFromDict(dict, 'legal.impressum')}
        </Link>
        <Link href={`/${locale}/privacy`} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {tFromDict(dict, 'legal.datenschutz')}
        </Link>
        <Link href={`/${locale}/ai-disclosure`} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {tFromDict(dict, 'legal.kiHinweis')}
        </Link>
      </nav>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>
        © {tFromDict(dict, 'footer.copyright', { year })}
        <br />
        <span style={{ fontSize: '0.75rem' }}>
          {tFromDict(dict, 'footer.affiliateDisclaimer')}
        </span>
      </p>
    </footer>
  );
}
