import { getBlogPosts } from '@/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Malaclyde Affiliates',
  description: 'Tips, guides, and insights on sleep, health, and wellness from Malaclyde.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Blog</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Tips, guides, and insights on sleep, health, and wellness.
      </p>

      {posts.length === 0 ? (
        <p>Blog posts coming soon!</p>
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
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h2 style={{ fontSize: '1.4rem', marginTop: 0 }}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {post.title}
                </Link>
              </h2>
              <p style={{ color: '#555', lineHeight: '1.6' }}>{post.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
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
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  color: '#0066cc',
                  textDecoration: 'none',
                }}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
