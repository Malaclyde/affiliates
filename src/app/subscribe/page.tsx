import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kostenloses KI-Startpaket | Malaclyde Affiliates',
  description:
    'Lade dir das kostenlose KI-Workflow-Startpaket herunter: 50 konkrete Action Items für deine erste Woche mit KI-Automatisierung. Inklusive Checkliste, Prompt-Vorlagen und Tool-Guide.',
};

export default function SubscribePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 2rem 2rem 2rem',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(0,102,204,0.15)',
            color: 'var(--primary)',
            padding: '0.4rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}
        >
          🎁 Kostenloser Download
        </div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
          KI-Workflow-Startpaket
        </h1>
        <p
          className="description"
          style={{
            fontSize: '1.2rem',
            maxWidth: '650px',
            margin: '0 auto 1rem auto',
            lineHeight: 1.6,
          }}
        >
          50 konkrete Action Items, um in <strong>nur 7 Tagen</strong> deine ersten KI-Workflows
          aufzusetzen. Kein Code, keine Vorkenntnisse — nur abhaken und Zeit sparen.
        </p>
      </section>

      {/* Value Props */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        {[
          { icon: '✅', title: 'Tag-für-Tag-Plan', desc: '7 Tage, je 10-20 Minuten. Keine Überforderung, nur konsistenter Fortschritt.' },
          { icon: '📝', title: '50 konkrete Aufgaben', desc: 'Jede Aufgabe ist ein Checkbox-Item. Ankreuzen, erledigen, weitermachen.' },
          { icon: '🔧', title: 'Tool-Empfehlungen', desc: 'Nur getestete, kostenlose Tools — ChatGPT, Canva, Buffer, Zapier & mehr.' },
          { icon: '📈', title: 'Sofortige Zeitersparnis', desc: 'Die ersten Automatisierungen sparen dir ab Tag 1 Zeit. Messbar, echt, praktisch.' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: '1.5rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{item.title}</h3>
            <p className="description" style={{ margin: 0, fontSize: '0.9rem' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Lead Magnet Preview */}
      <section
        style={{
          padding: '2.5rem 2rem',
          background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(0,102,204,0.1) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        <h2 style={{ textAlign: 'center', margin: '0 0 1.5rem 0' }}>Was dich erwartet</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { day: 'Tag 1', title: 'Grundlagen', items: 'KI-Tool auswählen, ersten Prompt testen, Top-3-Wiederholaufgaben identifizieren' },
            { day: 'Tag 2', title: 'Content', items: 'Social-Media-Planer, 5 Beitragsideen, Canva-KI, Content-Kalender' },
            { day: 'Tag 3', title: 'E-Mail', items: 'Newsletter-Tool, Willkommens-E-Mail, 5 Betreffzeilen, Follow-up-Sequenz' },
            { day: 'Tag 4', title: 'Automation', items: 'Zapier/Make, erste Automation, Batch-Planung, Lead-Benachrichtigung' },
            { day: 'Tag 5', title: 'Analyse', items: 'Tracking, SEO-Keywords, Konkurrenzanalyse, Review-Routine' },
            { day: 'Tag 6', title: 'Feintuning', items: 'Prompt-Bibliothek, Markenstimme, automatisierte Reports' },
            { day: 'Tag 7', title: 'Review', items: 'Wochenrückblick, Zeitersparnis berechnen, nächste Woche planen' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '0.75rem',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                {item.day}
              </div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</div>
              <p className="description" style={{ margin: 0, fontSize: '0.85rem' }}>
                {item.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signup Form */}
      <section
        id="subscribe-form"
        style={{
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(0,102,204,0.15) 0%, var(--glass-bg) 100%)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem 0' }}>
          📥 Jetzt kostenlos herunterladen
        </h2>
        <p className="description" style={{ maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          Trag dich ein und du bekommst das KI-Workflow-Startpaket sofort per E-Mail — plus
          wöchentliche KI-Tipps und exklusive Angebote. Kein Spam, jederzeit abbestellbar.
        </p>

        <form
          action="https://formsubmit.co/affiliates@malaclyde.com"
          method="POST"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://affiliates.malaclyde.com/subscribe/thank-you" />
          <input type="hidden" name="_subject" value="Neue Anmeldung affiliates.malaclyde.com!" />
          <input
            type="text" name="name" placeholder="Dein Vorname" required
            style={{ padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
          />
          <input
            type="email" name="email" placeholder="Deine E-Mail-Adresse" required
            style={{ padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }}
          />
          <button
            type="submit"
            style={{ padding: '0.85rem 1.5rem', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', width: '100%' }}
          >
            📥 Kostenloses Startpaket anfordern
          </button>
        </form>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
          Mit deiner Anmeldung akzeptierst du unsere{' '}
          <Link href="/privacy" style={{ color: 'var(--text-muted)' }}>
            Datenschutzerklärung
          </Link>
          . Du erhältst danach wöchentliche E-Mails von Malaclyde.
        </p>
      </section>

      {/* What You Get Next */}
      <section
        style={{
          padding: '2rem',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        <h2 style={{ textAlign: 'center', margin: '0 0 1.5rem 0' }}>Nach deiner Anmeldung</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {[
            { icon: '📥', title: 'Sofort: Startpaket per E-Mail', desc: 'Das PDF mit 50 Action Items landet direkt in deinem Postfach.' },
            { icon: '📰', title: 'Wöchentlich: KI-Newsletter', desc: 'Jede Woche die besten Tools, Tipps und exklusive Rabatte.' },
            { icon: '🔗', title: 'Zugang zu allen Ressourcen', desc: 'Tool-Vergleiche, Templates, Guides — alles auf affiliates.malaclyde.com.' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{item.title}</h3>
              <p className="description" style={{ margin: 0, fontSize: '0.85rem' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href="/" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
