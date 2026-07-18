import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alle Kategorien | Malaclyde Affiliates',
  description:
    'Entdecken Sie die besten KI-Tools nach Kategorie — Schreibwerkzeuge, Automatisierung, YouTube-Optimierung und mehr.',
};

const categories = [
  {
    id: 'ki-tools',
    name: 'KI-Schreibwerkzeuge',
    description: 'Die besten KI-Tools für Content-Erstellung, Marketing und Verkaufsautomatisierung',
    productCount: 5,
    icon: '✍️',
  },
  {
    id: 'automatisierung',
    name: 'Automation & Marketing',
    description: 'Tools für E-Mail-Automatisierung, Sales Funnels und Workflows',
    productCount: 3,
    icon: '⚡',
  },
  {
    id: 'youtube-video',
    name: 'YouTube & Video',
    description: 'Optimieren Sie Ihren YouTube-Kanal und erstellen Sie Videos mit KI',
    productCount: 2,
    icon: '🎬',
  },
  {
    id: 'schlaf-gesundheit',
    name: 'Schlaf & Gesundheit',
    description: 'Natürliche Produkte für besseren Schlaf und mehr Wohlbefinden',
    productCount: 1,
    icon: '😴',
  },
];

export default function CategoryOverview() {
  return (
    <main>
      <h1>Alle Kategorien</h1>
      <p className="description">
        Finden Sie das perfekte Tool für Ihre Bedürfnisse. Alle Produkte wurden persönlich getestet
        und empfohlen.
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
            href={`/category/${cat.id}`}
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
            <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>{cat.name}</h2>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 1rem 0', fontSize: '0.9rem' }}>
              {cat.description}
            </p>
            <span
              style={{
                color: 'var(--primary)',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              {cat.productCount} Produkte anzeigen →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
