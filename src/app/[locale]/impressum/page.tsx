import { locales, type Locale, defaultLocale } from '@/lib/i18n';
import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `${locale === 'en' ? 'Legal Notice' : 'Impressum'} - Malaclyde Affiliates`,
  };
}

const deContent = `
<h1>Impressum</h1>
<p>Angaben gemäß § 5 TMG</p>
<h2>Betreiber der Website</h2>
<p>Malaclyde<br/>
E-Mail: support@malaclyde.com</p>
<h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
<p>Malaclyde<br/>
E-Mail: support@malaclyde.com</p>
<h2>Haftungsausschluss</h2>
<p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
<h2>Affiliate-Offenlegung</h2>
<p>Diese Website enthält Affiliate-Links. Wenn Sie über diese Links Produkte kaufen, erhalten wir eine Provision. Für Sie entstehen dadurch keine zusätzlichen Kosten. Alle Produkte, die wir bewerben, wurden von uns getestet oder recherchiert.</p>
<h2>Urheberrecht</h2>
<p>Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
`;

const enContent = `
<h1>Legal Notice</h1>
<h2>Website Operator</h2>
<p>Malaclyde<br/>
Email: support@malaclyde.com</p>
<h2>Disclaimer</h2>
<p>The content of this website has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.</p>
<h2>Affiliate Disclosure</h2>
<p>This website contains affiliate links. If you purchase products through these links, we may earn a commission at no additional cost to you. All products we promote have been tested or researched by us.</p>
<h2>Copyright</h2>
<p>The content and works created by the operators on these pages are subject to copyright law. Duplication, processing, distribution, and any form of commercialization require the written consent of the respective author or creator.</p>
`;

export default async function ImpressumPage({ params }: Props) {
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
