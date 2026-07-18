import { locales, type Locale, defaultLocale } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  return {
    title: locale === 'en' ? 'Thank You! | Malaclyde Affiliates' : 'Danke! | Malaclyde Affiliates',
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const isEn = locale === 'en';

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
      <h1>{isEn ? 'Thank You!' : 'Danke!'}</h1>
      <p className="description" style={{ fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2rem' }}>
        {isEn
          ? 'Your AI Workflow Starter Pack is on its way to your inbox! Check your email (and spam folder, just in case).'
          : 'Dein KI-Workflow-Startpaket ist unterwegs zu deinem Postfach! Bitte überprüfe auch deinen Spam-Ordner.'}
      </p>

      <div style={{ padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '1rem', marginBottom: '2rem' }}>
        <h3>{isEn ? "While You Wait" : 'Während du wartest'}</h3>
        <p className="description" style={{ marginBottom: '1.5rem' }}>
          {isEn
            ? 'Explore our recommended AI tools to get ahead:'
            : 'Entdecke unsere empfohlenen KI-Tools, um einen Vorsprung zu gewinnen:'}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/category`} className="button" style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: '#fff', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
            {isEn ? 'Browse Tools →' : 'Tools entdecken →'}
          </Link>
          <Link href={`/${locale}/blog`} className="button" style={{ padding: '0.75rem 1.5rem', background: 'transparent', color: 'var(--text)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem', fontWeight: 500, fontSize: '0.9rem' }}>
            {isEn ? 'Read Blog →' : 'Blog lesen →'}
          </Link>
        </div>
      </div>

      <Link href={`/${locale}`} style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
        ← {isEn ? 'Back to Home' : 'Zurück zur Startseite'}
      </Link>
    </main>
  );
}
