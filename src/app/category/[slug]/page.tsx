import type { Metadata } from 'next';
import { getProducts } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categories = [
  {
    id: 'ki-tools',
    name: 'KI-Schreibwerkzeuge',
    nameSingular: 'KI-Schreibwerkzeug',
    description: 'Die besten KI-Tools für Content-Erstellung, Marketing und Verkaufsautomatisierung',
    productIds: ['jasper-ai', 'writesonic', 'copy-ai', 'notion-ai', 'surfer-seo', 'github-copilot'],
  },
  {
    id: 'automatisierung',
    name: 'Automation & Marketing',
    nameSingular: 'Automation & Marketing',
    description: 'Tools für E-Mail-Automatisierung, Sales Funnels und Workflows',
    productIds: ['convertkit', 'systeme-io', 'semrush', 'zapier'],
  },
  {
    id: 'youtube-video',
    name: 'YouTube & Video',
    nameSingular: 'YouTube & Video',
    description: 'Optimieren Sie Ihren YouTube-Kanal und erstellen Sie Videos mit KI',
    productIds: ['tubebuddy', 'pictory-ai'],
  },
  {
    id: 'design-medien',
    name: 'Design & Medien',
    nameSingular: 'Design & Medien',
    description: 'KI-basierte Design-Tools für professionelle Grafiken, Videos und Audio-Inhalte',
    productIds: ['canva', 'elevenlabs'],
  },
  {
    id: 'webhosting',
    name: 'Webhosting & Domains',
    nameSingular: 'Webhosting & Domains',
    description: 'Zuverlässiges Webhosting und Domain-Registrierung für Ihr Online-Business',
    productIds: ['hostinger'],
  },
  {
    id: 'schlaf-gesundheit',
    name: 'Schlaf & Gesundheit',
    nameSingular: 'Schlaf & Gesundheit',
    description: 'Natürliche Produkte für besseren Schlaf und mehr Wohlbefinden',
    productIds: ['4greatsleep'],
  },
];

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.id }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) return { title: 'Kategorie nicht gefunden' };
  return {
    title: `${category.name} | Malaclyde Affiliates`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.id === slug);
  if (!category) notFound();

  const products = getProducts();
  const catProducts = category.productIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <main>
      <Link
        href="/category"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          color: 'var(--primary)',
          fontSize: '0.9rem',
        }}
      >
        ← Alle Kategorien
      </Link>

      <h1>{category.name}</h1>
      <p className="description">{category.description}</p>

      {catProducts.length === 0 ? (
        <p>In dieser Kategorie sind noch keine Produkte verfügbar.</p>
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
                  Zum Angebot →
                </div>
              </a>
            );
          })}
        </div>
      )}
    </main>
  );
}
