import type { Metadata } from 'next';
import { getProducts } from '@/lib/data';
import { locales, type Locale, defaultLocale, t } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categories = [
  { id: 'ki-tools', productIds: ['jasper-ai', 'writesonic', 'copy-ai', 'notion-ai', 'surfer-seo'] },
  { id: 'automatisierung', productIds: ['convertkit', 'systeme-io', 'semrush'] },
  { id: 'youtube-video', productIds: ['tubebuddy', 'pictory-ai'] },
  { id: 'design-medien', productIds: ['canva', 'elevenlabs'] },
  { id: 'webhosting', productIds: ['hostinger'] },
  { id: 'schlaf-gesundheit', productIds: ['4greatsleep'] },
];

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const cat of categories) {
      paths.push({ locale, slug: cat.id });
    }
  }
  return paths;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const category = categories.find((c) => c.id === slug);
  if (!category) return { title: t(locale, 'common.notFound') };
  return {
    title: `${t(locale, `category.categoryNames.${category.id}`)} | Malaclyde Affiliates`,
    description: t(locale, `category.categoryDescriptions.${category.id}`),
  };
}

export default async function CategorySlugPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const category = categories.find((c) => c.id === slug);
  if (!category) notFound();

  const products = getProducts();
  const catProducts = category.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <main>
      <Link
        href={`/${locale}/category`}
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          color: 'var(--primary)',
          fontSize: '0.9rem',
        }}
      >
        {t(locale, 'category.backToCategories')}
      </Link>

      <h1>{t(locale, `category.categoryNames.${category.id}`)}</h1>
      <p className="description">{t(locale, `category.categoryDescriptions.${category.id}`)}</p>

      {catProducts.length === 0 ? (
        <p>{t(locale, 'category.noProducts')}</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          {catProducts.map((product) => {
            if (!product) return null;
            return (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="sponsored nofollow"
                style={{
                  padding: '1.5rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '1rem',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {product.thumbnail && (
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'contain',
                      marginBottom: '1rem',
                      borderRadius: '0.5rem',
                    }}
                  />
                )}
                <div style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {product.name}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, flex: 1 }}>
                  {product.description.length > 150
                    ? product.description?.slice(0, 150) + '...'
                    : product.description}
                </p>
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--primary)',
                    color: '#fff',
                    borderRadius: '0.5rem',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  {t(locale, 'category.productCta')}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </main>
  );
}
