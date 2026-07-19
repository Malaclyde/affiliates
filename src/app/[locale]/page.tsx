import { getProducts, getBlogPosts } from '@/lib/data';
import { locales, type Locale, defaultLocale, t } from '@/lib/i18n';
import ProductTile from '@/components/ProductTile';
import Link from 'next/link';

const categories = [
  { id: 'ki-tools', icon: '✍️' },
  { id: 'automatisierung', icon: '⚡' },
  { id: 'youtube-video', icon: '🎬' },
  { id: 'design-medien', icon: '🎨' },
  { id: 'webhosting', icon: '🌐' },
  { id: 'schlaf-gesundheit', icon: '😴' },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;

  const products = getProducts();
  const blogPosts = getBlogPosts().slice(0, 3);

  // Featured products (pick a few high-commission ones)
  const featuredProductIds = ['systeme-io', 'surfer-seo', 'canva', 'hostinger', 'elevenlabs', 'tubebuddy'];
  const featuredProducts = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(0,102,204,0.1) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1.5rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>
          {t(locale, 'home.heroTitle')}
        </h1>
        <p
          className="description"
          style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}
        >
          {t(locale, 'home.heroSubtitle')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href={`/${locale}/category`}
            className="button"
            style={{
              padding: '0.85rem 2rem',
              background: 'var(--primary)',
              color: '#fff',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          >
            {t(locale, 'home.heroCta')}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="button"
            style={{
              padding: '0.85rem 2rem',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--glass-border)',
              borderRadius: '0.5rem',
              fontWeight: 500,
              fontSize: '1rem',
            }}
          >
            {t(locale, 'home.heroBlog')}
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ marginBottom: '3rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <h2 style={{ margin: 0 }}>{t(locale, 'home.featuredTitle')}</h2>
          <Link href={`/${locale}/category`} style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
            {t(locale, 'home.featuredAll')}
          </Link>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {featuredProducts.map((product) => {
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
                      height: '80px',
                      objectFit: 'contain',
                      marginBottom: '1rem',
                    }}
                  />
                )}
                <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {product.name}
                </div>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {product.description?.slice(0, 120)}...
                </p>
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.85rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                  }}
                >
                  {t(locale, 'home.productCta')}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>{t(locale, 'home.categoriesTitle')}</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${locale}/category/${cat.id}`}
              style={{
                padding: '1.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                textDecoration: 'none',
                color: 'inherit',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.icon}</div>
              <div style={{ fontWeight: 600 }}>{t(locale, `category.categoryNames.${cat.id}`)}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        style={{
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0,102,204,0.15) 0%, var(--glass-bg) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1.5rem',
          marginBottom: '3rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem 0' }}>
          {t(locale, 'home.newsletterTitle')}
        </h2>
        <p className="description" style={{ maxWidth: '550px', margin: '0 auto 1.5rem auto' }}>
          {t(locale, 'home.newsletterSubtitle')}
        </p>
        <Link
          href={`/${locale}/subscribe`}
          style={{
            display: 'inline-block',
            padding: '0.85rem 2rem',
            background: 'var(--primary)',
            color: '#fff',
            borderRadius: '0.5rem',
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
          }}
        >
          {t(locale, 'home.newsletterCta')}
        </Link>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
          {t(locale, 'home.newsletterPrivacy')}{' '}
          <Link href={`/${locale}/privacy`} style={{ color: 'var(--text-muted)' }}>
            {t(locale, 'home.privacyLink')}
          </Link>
          .
        </p>
      </section>

      {/* Latest Blog Posts */}
      <section style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <h2 style={{ margin: 0 }}>{t(locale, 'home.latestPosts')}</h2>
          <Link href={`/${locale}/blog`} style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
            {t(locale, 'home.latestAll')}
          </Link>
        </div>

        {blogPosts.length === 0 ? (
          <p className="description">{t(locale, 'home.noPosts')}</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                style={{
                  padding: '1.5rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '1rem',
                  backdropFilter: 'blur(10px)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {post.date}
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{post.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                  {post.description.slice(0, 120)}
                </p>
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.85rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                  }}
                >
                  {t(locale, 'home.readMore')}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
