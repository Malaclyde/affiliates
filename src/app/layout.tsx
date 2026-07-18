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
    <html lang="en" className={jetbrainsMono.className}>
      <body>
        {children}
        <footer style={{ marginTop: '3rem', padding: '1.5rem 0', borderTop: '1px solid #333', fontSize: '0.85em', color: '#888' }}>
          <nav style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/impressum" style={{ color: '#888' }}>Impressum</Link>
            <Link href="/privacy" style={{ color: '#888' }}>Datenschutz / Privacy</Link>
            <Link href="/ai-disclosure" style={{ color: '#888' }}>AI-Hinweis / AI Disclosure</Link>
          </nav>
        </footer>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
