import { locales, type Locale, defaultLocale, t } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

const categories = [
  { id: 'ki-tools', icon: '✍️', productCount: 5 },
  { id: 'automatisierung', icon: '⚡', productCount: 3 },
  { id: 'youtube-video', icon: '🎬', productCount: 2 },
  { id: 'design-medien', icon: '🎨', productCount: 2 },
  { id: 'webhosting', icon: '🌐', productCount: 1 },
  { id: 'schlaf-gesundheit', icon: '😴', productCount: 1 },
];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  return {
    title: `${t(locale, 'category.title')} | Malaclyde Affiliates`,
    description: t(locale, 'category.description'),
  };
}

export default async function CategoryOverview({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;

  return (
    <main>
      <h1>{t(locale, 'category.title')}</h1>
      <p className="description">
        {t(locale, 'category.description')}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/${locale}/category/${cat.id}`}
            style={{
              padding: '2rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cat.icon}</div>
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>
              {t(locale, `category.categoryNames.${cat.id}`)}
            </h2>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '0.9rem' }}>
              {t(locale, `category.categoryDescriptions.${cat.id}`)}
            </p>
            <span
              style={{
                color: 'var(--primary)',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {cat.productCount} {t(locale, 'category.productsCount')}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
