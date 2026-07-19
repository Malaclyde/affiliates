import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen | Malaclyde Affiliates',
  description:
    'Antworten auf die häufigsten Fragen zu KI-Tools, Affiliate-Marketing, unseren Produkten und wie du Zeit sparst mit Automatisierung.',
};

const faqs = [
  {
    q: 'Was ist Affiliate-Marketing und wie funktioniert es hier?',
    a: 'Affiliate-Marketing bedeutet, dass wir Provisionen erhalten, wenn du über unsere Links Produkte kaufst. Für dich ändert sich am Preis nichts. Wir empfehlen nur Tools, die wir selbst getestet haben und wirklich nutzen. Jeder Affiliate-Link ist mit "sponsored nofollow" gekennzeichnet.',
  },
  {
    q: 'Sind eure KI-Tool-Empfehlungen unabhängig?',
    a: 'Ja. Jedes Tool auf affiliates.malaclyde.com wurde von uns mindestens 30 Tage lang getestet. Wir dokumentieren sowohl Stärken als auch Schwächen. Unsere Reviews sind ehrlich — wenn ein Tool für bestimmte Anwendungsfälle nicht geeignet ist, sagen wir das.',
  },
  {
    q: 'Brauche ich technische Vorkenntnisse für KI-Automatisierung?',
    a: 'Nein. Die meisten Tools auf unserer Seite haben kostenlose Testversionen und sind für Anfänger konzipiert. Unser Leitfaden "AI Automation for Beginners" führt dich Schritt für Schritt durch die ersten Workflows — ohne eine Zeile Code.',
  },
  {
    q: 'Welches KI-Tool soll ich als Anfänger zuerst ausprobieren?',
    a: 'Starte mit ChatGPT oder Claude (beide kostenlos). Danach empfehlen wir Canva für Design (kostenlos) und Buffer für Social-Media-Planung (kostenlos). Sobald du dich wohlfühlst, kannst du auf spezialisierte Tools wie Jasper AI oder Systeme.io upgraden.',
  },
  {
    q: 'Wie viel kosten die Gumroad-Produkte?',
    a: 'Unsere digitalen Produkte auf Gumroad kosten zwischen €4,99 und €19,99. Das gesamte Sortiment hat einen Wert von über €100. Der Bestseller ist der "AI Automation for Beginners Guide" für €9,99.',
  },
  {
    q: 'Kann ich die digitale Produkte zurückgeben?',
    a: 'Gumroad bietet ein 30-tägiges Rückgaberecht für digitale Produkte. Sollte ein Problem auftreten, kontaktiere uns einfach per E-Mail.',
  },
  {
    q: 'Wie oft kommt der Newsletter?',
    a: 'Der Newsletter erscheint wöchentlich mit den besten KI-Tools, Automatisierungstipps und exklusiven Rabattcodes. Kein Spam — jederzeit abbestellbar.',
  },
  {
    q: 'Sind die Blog-Artikel von KI geschrieben?',
    a: 'Ja, viele unserer Inhalte werden mit Unterstützung von Künstlicher Intelligenz erstellt (gekennzeichnet gemäß EU AI Act Art. 50). Jeder Artikel wird jedoch von uns geprüft, bevor er veröffentlicht wird.',
  },
  {
    q: 'Welche Zahlungsmethoden werden akzeptiert?',
    a: 'Für Affiliate-Produkte gelten die Zahlungsmethoden des jeweiligen Anbieters. Gumroad akzeptiert Kreditkarten, PayPal und Apple Pay. Digistore24 bietet zusätzlich Lastschrift und Überweisung.',
  },
  {
    q: 'Wie kann ich euch kontaktieren?',
    a: 'Schreibe eine E-Mail an affiliates@malaclyde.com. Wir antworten in der Regel innerhalb von 24 Stunden.',
  },
];

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section style={{ textAlign: 'center', padding: '3rem 2rem 1rem 2rem' }}>
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.75rem 0' }}>
          Häufig gestellte Fragen
        </h1>
        <p className="description" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Alles, was du über KI-Tools, Affiliate-Marketing und unsere Produkte wissen musst.
        </p>
      </section>

      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '1rem 1rem 3rem 1rem' }}>
        {faqs.map((faq, i) => (
          <details
            key={i}
            style={{
              marginBottom: '0.75rem',
              padding: '1rem 1.25rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '0.75rem',
              cursor: 'pointer',
            }}
          >
            <summary style={{ fontWeight: 600, fontSize: '1rem', outline: 'none' }}>
              {faq.q}
            </summary>
            <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
              {faq.a}
            </p>
          </details>
        ))}
      </section>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="description">
          Noch Fragen?{' '}
          <a href="mailto:affiliates@malaclyde.com" style={{ color: 'var(--primary)' }}>
            affiliates@malaclyde.com
          </a>
        </p>
        <Link href="/" style={{ color: 'var(--primary)', fontSize: '0.9rem', display: 'inline-block', marginTop: '1rem' }}>
          &larr; Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
