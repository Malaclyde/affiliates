import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Malaclyde Affiliates',
  description:
    'Sorgfältig getestete KI-Tools, Automatisierungslösungen und Produktivitätsressourcen. Alle Empfehlungen basieren auf eigener Erfahrung.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={jetbrainsMono.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
