import { locales, type Locale, defaultLocale } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  return {
    title: `${locale === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'} - Malaclyde Affiliates`,
  };
}

const deContent = `
<h1>Datenschutzerklärung</h1>
<h2>1. Datenschutz auf einen Blick</h2>
<h3>Allgemeine Hinweise</h3>
<p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
<h3>Datenerfassung auf dieser Website</h3>
<p>Diese Website wird statisch gehostet und verwendet keine Cookies oder Tracking-Dienste von Drittanbietern, mit Ausnahme von Affiliate-Links, die möglicherweise Cookies setzen.</p>
<h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
<h3>Datenschutz</h3>
<p>Der Betreiber dieser Seite nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
<h2>3. Datenerfassung auf dieser Website</h2>
<h3>Affiliate-Links</h3>
<p>Einige Links auf dieser Website sind Affiliate-Links. Wenn Sie auf einen solchen Link klicken und etwas kaufen, erhalten wir eine Provision. Dabei werden keine personenbezogenen Daten an uns übermittelt. Der jeweilige Affiliate-Partner kann jedoch Cookies setzen, um die Transaktion nachvollziehen zu können.</p>
<h3>E-Mail-Adresse</h3>
<p>Wenn Sie uns per E-Mail kontaktieren, wird Ihre E-Mail-Adresse ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.</p>
<h2>4. Ihre Rechte</h2>
<p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.</p>
`;

const enContent = `
<h1>Privacy Policy</h1>
<h2>1. Data Protection at a Glance</h2>
<h3>General Information</h3>
<p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.</p>
<h3>Data Collection on This Website</h3>
<p>This website is statically hosted and does not use cookies or third-party tracking services, with the exception of affiliate links which may set cookies.</p>
<h2>2. General Information and Mandatory Information</h2>
<h3>Data Protection</h3>
<p>The operator of this site takes the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the legal data protection regulations and this privacy policy.</p>
<h2>3. Data Collection on This Website</h2>
<h3>Affiliate Links</h3>
<p>Some links on this website are affiliate links. If you click on such a link and make a purchase, we receive a commission. No personal data is transmitted to us. However, the respective affiliate partner may set cookies to track the transaction.</p>
<h3>Email Address</h3>
<p>If you contact us via email, your email address will only be used to process your inquiry. It will not be passed on to third parties.</p>
<h2>4. Your Rights</h2>
<p>You have the right to receive information about your stored personal data, its origin and recipients, and the purpose of data processing free of charge at any time. You also have the right to correct, block, or delete this data.</p>
`;

export default async function PrivacyPage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link href={`/${locale}`} style={{ color: '#0066cc', textDecoration: 'none', fontSize: '0.9rem' }}>
        ← {locale === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
      </Link>
      <div style={{ lineHeight: '1.8', color: '#333' }} dangerouslySetInnerHTML={{ __html: locale === 'en' ? enContent : deContent }} />
    </main>
  );
}
