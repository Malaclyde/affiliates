import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Malaclyde Affiliates',
  description: 'Malaclyde\'s Affiliate Links and Products',
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={jetbrainsMono.className}>
      <body>
        {children}
        <footer style={{
          marginTop: '4rem',
          padding: '2rem 0',
          borderTop: '1px solid #333',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: '#888'
        }}>
          <nav style={{ marginBottom: '1rem' }}>
            <Link href="/impressum" style={{ margin: '0 1rem', color: '#888' }}>Impressum</Link>
            <Link href="/privacy" style={{ margin: '0 1rem', color: '#888' }}>Datenschutz</Link>
            <Link href="/ai-disclosure" style={{ margin: '0 1rem', color: '#888' }}>KI-Hinweis</Link>
          </nav>
          <p>&copy; {new Date().getFullYear()} Malaclyde Affiliates. Alle Rechte vorbehalten.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
            Affiliate-Links: <code>rel=&quot;nofollow sponsored&quot;</code> | KI-generierte Inhalte gemäß EU AI Act Art. 50
          </p>
        </footer>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
