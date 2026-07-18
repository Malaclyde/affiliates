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
    title: `${locale === 'en' ? 'AI Disclosure' : 'KI-Hinweis'} - Malaclyde Affiliates`,
  };
}

const deContent = `
<h1>KI-Hinweis</h1>
<h2>Transparenz über KI-generierte Inhalte</h2>
<p>Wir glauben an vollständige Transparenz gegenüber unseren Besuchern. Daher informieren wir Sie hiermit, dass:</p>
<ul>
<li>Einige der Inhalte auf dieser Website können mit Hilfe von KI-Tools erstellt oder optimiert worden sein.</li>
<li>Alle Produktbewertungen basieren auf tatsächlichen Tests und Recherchen.</li>
<li>KI-gestützte Texte werden vor der Veröffentlichung von Menschen geprüft und redigiert.</li>
<li>Unsere Affiliate-Empfehlungen werden durch KI-Recherche unterstützt, aber die endgültige Bewertung erfolgt durch uns.</li>
</ul>
<h2>Warum nutzen wir KI?</h2>
<p>Als eine Website, die KI-Tools bewirbt und testet, ist es nur konsequent, diese Tools auch für unsere eigene Content-Erstellung zu nutzen. Dies ermöglicht uns:</p>
<ul>
<li>Mehr hochwertige Inhalte in kürzerer Zeit zu produzieren</li>
<li>Verschiedene Schreibstile und Perspektiven zu testen</li>
<li>Unsere Leser durch praktische Beispiele zu informieren</li>
</ul>
<p>Stand: Juli 2026</p>
`;

const enContent = `
<h1>AI Disclosure</h1>
<h2>Transparency About AI-Generated Content</h2>
<p>We believe in complete transparency with our visitors. We hereby inform you that:</p>
<ul>
<li>Some content on this website may have been created or optimized with the help of AI tools.</li>
<li>All product reviews are based on actual testing and research.</li>
<li>AI-assisted texts are reviewed and edited by humans before publication.</li>
<li>Our affiliate recommendations are supported by AI research, but the final evaluation is made by us.</li>
</ul>
<h2>Why Do We Use AI?</h2>
<p>As a website that promotes and tests AI tools, it is only consistent to use these tools for our own content creation. This enables us to:</p>
<ul>
<li>Produce more high-quality content in less time</li>
<li>Test different writing styles and perspectives</li>
<li>Inform our readers through practical examples</li>
</ul>
<p>Last updated: July 2026</p>
`;

export default async function AiDisclosurePage({ params }: Props) {
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
