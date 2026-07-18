import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '2rem',
      textAlign: 'center',
      marginTop: 'auto',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '1rem',
      }}>
        <Link href="/impressum" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Impressum
        </Link>
        <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Datenschutz
        </Link>
        <Link href="/ai-disclosure" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          KI-Hinweis
        </Link>
      </nav>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>
        © {new Date().getFullYear()} Malaclyde. Alle Inhalte können KI-generiert sein.
        <br />
        <span style={{ fontSize: '0.75rem' }}>
          Affiliate-Links: Dieser Websitebetreiber erhält Provisionen für Käufe über Links auf dieser Seite.
        </span>
      </p>
    </footer>
  );
}
