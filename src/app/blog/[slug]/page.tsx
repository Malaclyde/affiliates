import { getBlogPosts, getBlogPostBySlug, getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedProducts = post.relatedProducts
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link
        href="/blog"
        style={{ color: '#0066cc', textDecoration: 'none', fontSize: '0.9rem' }}
      >
        ← Back to Blog
      </Link>

      <article style={{ marginTop: '1.5rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {' · '}
          {post.author}
        </div>

        <h1 style={{ fontSize: '2rem', marginTop: '0.5rem' }}>{post.title}</h1>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {post.tags.map((tag) => (
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
            <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>Recommended Products</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Based on this article, you might find these helpful:
            </p>
            {relatedProducts.map(
              (product) =>
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
                        {product.description.slice(0, 100)}...
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
                      Check Price
                    </a>
                  </div>
                )
            )}
            <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.75rem' }}>
              <em>This post contains affiliate links. We may earn a commission if you purchase through these links, at no extra cost to you.</em>
            </p>
          </div>
        )}
      </article>
    </main>
  );
}
