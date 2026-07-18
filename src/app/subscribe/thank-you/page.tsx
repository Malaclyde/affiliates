import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download: KI-Workflow-Startpaket | Malaclyde Affiliates',
  description:
    'Dein KI-Workflow-Startpaket steht bereit. 50 Action Items für deine erste Woche mit KI-Automatisierung.',
};

export default function ThankYouPage() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
      <h1 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>
        Danke für deine Anmeldung!
      </h1>
      <p
        className="description"
        style={{
          fontSize: '1.1rem',
          maxWidth: '550px',
          margin: '0 auto 2rem auto',
          lineHeight: 1.6,
        }}
      >
        Dein KI-Workflow-Startpaket ist bereit zum Download. Speichere es dir
        gleich ab — du brauchst es in den nächsten 7 Tagen.
      </p>

      <a
        href="/ki-workflow-startpaket.pdf"
        download
        style={{
          display: 'inline-block',
          padding: '1rem 2.5rem',
          background: 'var(--primary, #0066cc)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: 700,
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
        }}
      >
        📥 PDF jetzt herunterladen
      </a>

      <section
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1rem',
        }}
      >
        <h2 style={{ fontSize: '1.3rem', margin: '0 0 1rem 0' }}>
          Was du als Nächstes bekommst
        </h2>
        <div style={{ textAlign: 'left', lineHeight: 1.8 }}>
          <p>📰 <strong>Wöchentlicher KI-Newsletter</strong> — Die besten Tools, Tipps und exklusive Rabatte</p>
          <p>🔗 <strong>Affiliate-Deals</strong> — Sonderaktionen und Rabattcodes für KI-Tools</p>
          <p>📚 <strong>Ressourcen-Updates</strong> — Neue Guides, Templates und Vergleiche</p>
        </div>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <Link
          href="/"
          style={{ color: 'var(--primary)', fontSize: '0.9rem' }}
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
