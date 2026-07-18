import { getBlogPosts, getProducts } from '@/lib/data';
import { locales, type Locale, defaultLocale, t } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

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
    title: `${t(locale, 'blog.title')} - Malaclyde Affiliates`,
    description: t(locale, 'blog.description'),
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const posts = getBlogPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>{t(locale, 'blog.title')}</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        {t(locale, 'blog.description')}
      </p>

      {posts.length === 0 ? (
        <p>{t(locale, 'blog.noPosts')}</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '1.5rem',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
                {new Date(post.date).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h2 style={{ fontSize: '1.4rem', marginTop: 0 }}>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#555', lineHeight: '1.6' }}>{post.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      background: '#f0f0f0',
                      borderRadius: '4px',
                      color: '#666',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  color: '#0066cc',
                  textDecoration: 'none',
                }}
              >
                {t(locale, 'blog.readMore')}
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
