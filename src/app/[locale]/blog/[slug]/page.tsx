import { getBlogPosts } from '@/lib/data';
import { locales, type Locale, defaultLocale, t } from '@/lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const paths: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of posts) {
      paths.push({ locale, slug: post.slug });
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
  const post = getBlogPosts().find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - Malaclyde Affiliates`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const posts = getBlogPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>{t(locale, 'common.notFound')}</h1>
        <p>{t(locale, 'common.notFoundDescription')}</p>
        <Link href={`/${locale}`} style={{ color: '#0066cc' }}>{t(locale, 'common.backToHome')}</Link>
      </main>
    );
  }

  const { getProductById } = await import('@/lib/data');
  const relatedProducts = post.relatedProducts
    .map((id: string) => getProductById(id))
    .filter(Boolean);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link
        href={`/${locale}/blog`}
        style={{ color: '#0066cc', textDecoration: 'none', fontSize: '0.9rem' }}
      >
        {t(locale, 'blog.backToBlog')}
      </Link>

      <article style={{ marginTop: '1.5rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
          {new Date(post.date).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {' · '}
          {post.author}
        </div>

        <h1 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{post.title}</h1>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
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

        <div
          style={{ lineHeight: '1.8', color: '#333' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {relatedProducts.length > 0 && (
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>{t(locale, 'blog.recommendedProducts')}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {t(locale, 'blog.recommendedDescription')}
            </p>
            {relatedProducts.map(
              (product: any) =>
                product && (
                  <div
                    key={product.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem',
                      background: '#fff',
                      borderRadius: '6px',
                      border: '1px solid #e0e0e0',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                    />
                    <div style={{ flex: 1 }}>
                      <strong>{product.name}</strong>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>
                        {product.description?.slice(0, 100)}...
                      </p>
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="sponsored nofollow"
                      style={{
                        padding: '0.5rem 1rem',
                        background: '#0066cc',
                        color: '#fff',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t(locale, 'blog.checkPrice')}
                    </a>
                  </div>
                )
            )}
            <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.75rem' }}>
              <em>{t(locale, 'blog.affiliateDisclaimer')}</em>
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
