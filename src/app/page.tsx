import { getAboutMe, getProducts, getBlogPosts } from '@/lib/data';
import ProductTile from '@/components/ProductTile';
import Link from 'next/link';

export default function Home() {
  const aboutMe = getAboutMe();
  const products = getProducts();
  const blogPosts = getBlogPosts().slice(0, 3);

  // Featured products (pick a few high-commission ones)
  const featuredProductIds = ['systeme-io', 'surfer-seo', 'canva', 'hostinger', 'elevenlabs', 'tubebuddy'];
  const featuredProducts = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  // Category links
  const categories = [
    { id: 'ki-tools', name: 'KI-Schreibwerkzeuge', icon: '✍️' },
    { id: 'automatisierung', name: 'Automation & Marketing', icon: '⚡' },
    { id: 'youtube-video', name: 'YouTube & Video', icon: '🎬' },
    { id: 'design-medien', name: 'Design & Medien', icon: '🎨' },
    { id: 'webhosting', name: 'Webhosting & Domains', icon: '🌐' },
    { id: 'schlaf-gesundheit', name: 'Schlaf & Gesundheit', icon: '😴' },
  ];

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
          KI-Tools & Ressourcen für Ihr Business
        </h1>
        <p
          className="description"
          style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}
        >
          Sorgfältig getestete KI-Werkzeuge, die Ihnen Zeit sparen, Ihre Produktivität steigern und
          Ihr Business automatisieren. Alle Empfehlungen basieren auf eigener Erfahrung.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/category"
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
            Tools entdecken →
          </Link>
          <Link
            href="/blog"
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
            Blog lesen
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
          <h2 style={{ margin: 0 }}>Empfohlene Tools</h2>
          <Link href="/category" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
            Alle anzeigen →
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
                  {product.description.slice(0, 120)}...
                </p>
                <div
                  style={{
                    marginTop: '0.75rem',
                    fontSize: '0.85rem',
                    color: 'var(--primary)',
                    fontWeight: 600,
                  }}
                >
                  Jetzt testen →
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Nach Kategorie durchsuchen</h2>
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
              href={`/category/${cat.id}`}
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
              <div style={{ fontWeight: 600 }}>{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Email Newsletter CTA — Linked to /subscribe */}
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
          📥 Kostenloses KI-Workflow-Startpaket
        </h2>
        <p className="description" style={{ maxWidth: '550px', margin: '0 auto 1.5rem auto' }}>
          50 konkrete Action Items für deine erste Woche mit KI — plus wöchentliche Tools,
          Automatisierungstipps und exklusive Angebote direkt ins Postfach. Kein Spam,
          jederzeit abbestellbar.
        </p>
        <Link
          href="/subscribe"
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
          📥 Kostenloses Startpaket anfordern →
        </Link>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
          Mit deiner Anmeldung akzeptierst du unsere{' '}
          <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>
            Datenschutzerklärung
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
          <h2 style={{ margin: 0 }}>Neueste Blog-Beiträge</h2>
          <Link href="/blog" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
            Alle anzeigen →
          </Link>
        </div>

        {blogPosts.length === 0 ? (
          <p className="description">Noch keine Blog-Beiträge verfügbar.</p>
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
                href={`/blog/${post.slug}`}
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
                  Weiterlesen →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
