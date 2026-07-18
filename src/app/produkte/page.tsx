import { getAboutMe, getProducts } from '@/lib/data';
import Link from 'next/link';

const GUMROAD_BASE = 'https://malaclyde.gumroad.com/l';

const gumroadProducts = [
  { id: 'ai-automation-beginners-guide', name: 'AI Automation for Beginners Guide', price: '€14.99', url: 'dwswf', lang: 'EN' },
  { id: 'ki-kleinunternehmer-praxisguide', name: 'KI für Kleinunternehmer: Der Praxisguide', price: '€19.99', url: '', lang: 'DE' },
  { id: 'chatgpt-power-prompts', name: 'ChatGPT Power Prompts: 50 Templates', price: '€12.99', url: '', lang: 'EN' },
  { id: 'ai-image-prompt-book', name: 'AI Image Generation Prompt Book', price: '€14.99', url: '', lang: 'EN' },
  { id: 'ki-social-media-guide', name: 'KI für Social Media: Content-Planung', price: '€14.99', url: '', lang: 'DE' },
  { id: 'ki-prompt-engineering', name: 'KI-Prompt-Engineering: Der Schnellstart', price: '€12.99', url: '', lang: 'DE' },
  { id: 'prompt-engineering-cheat-sheet', name: 'AI Prompt Engineering Cheat Sheet', price: '€9.99', url: '', lang: 'EN' },
  { id: 'ki-agent-arbeitsvorlagen', name: 'KI-Agent Arbeitsvorlagen: Notion Templates', price: '€17.99', url: '', lang: 'DE' },
  { id: 'ai-business-checklist', name: 'AI Business Quick-Start Checklist', price: '€4.99', url: '', lang: 'EN' },
  { id: 'automation-templates-pack', name: 'AI Workflow Automation Templates Pack', price: '€19.99', url: '', lang: 'EN' },
];

export default function ProduktePage() {
  const deProducts = gumroadProducts.filter(p => p.lang === 'DE');
  const enProducts = gumroadProducts.filter(p => p.lang === 'EN');
  const totalValue = gumroadProducts.reduce((sum, p) => sum + parseFloat(p.price.replace('€', '')), 0);

  return (
    <main>
      <section style={{
        textAlign: 'center', padding: '4rem 2rem', marginBottom: '2rem',
        background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(0,200,100,0.1) 100%)',
        border: '1px solid var(--glass-border)', borderRadius: '1.5rem',
      }}>
        <h1 style={{ fontSize: '2.2rem', margin: '0 0 0.75rem 0' }}>
          📚 KI-Ratgeber & Digitale Produkte
        </h1>
        <p className="description" style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '1.05rem' }}>
          Praxisorientierte PDF-Guides, Prompt-Sammlungen und Vorlagen — erstellt mit KI und geprüft von Menschen.
          Ideal für Kleinunternehmer, Freelancer und alle, die KI produktiv einsetzen wollen.
        </p>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {gumroadProducts.length} Produkte · Gesamtwert <strong>€{totalValue.toFixed(2)}</strong> · DE & EN
        </div>
      </section>

      {/* Bundle Highlight */}
      <section style={{
        padding: '2rem', marginBottom: '2rem',
        background: 'linear-gradient(135deg, rgba(255,200,0,0.1) 0%, rgba(255,150,0,0.05) 100%)',
        border: '1px solid var(--glass-border)', borderRadius: '1rem',
      }}>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>🏆 Ultimate AI Bundle — Alle 10 Produkte</h2>
        <p className="description" style={{ margin: '0 0 1rem 0' }}>
          Alle 10 Ratgeber, Cheat Sheets und Vorlagen in einem Paket. Einzeln €{totalValue.toFixed(2)} —
          <strong style={{ color: 'var(--primary)' }}> im Bundle ab €89,99</strong>
        </p>
        <Link href={GUMROAD_BASE} className="button" style={{
          display: 'inline-block', padding: '0.75rem 2rem',
          background: 'var(--primary)', color: '#fff',
          borderRadius: '0.5rem', fontWeight: 600,
        }}>
          Bundle entdecken →
        </Link>
      </section>

      {/* German Products */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>🇩🇪 Deutschsprachige Produkte</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {deProducts.map(p => (
            <div key={p.id} style={{
              padding: '1.5rem', background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)', borderRadius: '1rem',
            }}>
              <div style={{ fontWeight: 600, marginBottom: '0.4rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>PDF · DE</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{p.price}</div>
              {p.url ? (
                <a href={`${GUMROAD_BASE}/${p.url}`} target="_blank" rel="nofollow" style={{
                  display: 'inline-block', padding: '0.5rem 1.25rem',
                  background: 'var(--primary)', color: '#fff',
                  borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.85rem',
                  textDecoration: 'none',
                }}>Jetzt kaufen</a>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Bald auf Gumroad verfügbar
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* English Products */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>🇬🇧 English Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {enProducts.map(p => (
            <div key={p.id} style={{
              padding: '1.5rem', background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)', borderRadius: '1rem',
            }}>
              <div style={{ fontWeight: 600, marginBottom: '0.4rem' }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>PDF · EN</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{p.price}</div>
              {p.url ? (
                <a href={`${GUMROAD_BASE}/${p.url}`} target="_blank" rel="nofollow" style={{
                  display: 'inline-block', padding: '0.5rem 1.25rem',
                  background: 'var(--primary)', color: '#fff',
                  borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.85rem',
                  textDecoration: 'none',
                }}>Buy now</a>
              ) : (
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Coming soon on Gumroad
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Info section */}
      <section style={{
        padding: '2rem', background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)', borderRadius: '1rem',
        fontSize: '0.85rem', color: 'var(--text-muted)',
      }}>
        <p style={{ margin: 0 }}>
          <strong>📖 Über diese Produkte:</strong> Alle Ratgeber wurden mit KI-Unterstützung erstellt 
          und von einem Menschen geprüft (EU AI Act Art. 50 konform). Vertrieb erfolgt über Gumroad 
          (Zahlungsabwicklung und sofortiger Download). Bei Fragen: affiliates@malaclyde.com
        </p>
      </section>
    </main>
  );
}
