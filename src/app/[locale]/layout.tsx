import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Locale, locales, defaultLocale } from '@/lib/i18n-types';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  return {
    title: 'Malaclyde Affiliates',
    description: lang === 'en'
      ? 'Carefully tested AI tools, automation solutions, and productivity resources.'
      : 'Sorgfältig getestete KI-Tools, Automatisierungslösungen und Produktivitätsressourcen.',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;

  return (
    <>
      {children}
      <LanguageSwitcher locale={validLocale} />
      <Footer locale={validLocale} />
    </>
  );
}
