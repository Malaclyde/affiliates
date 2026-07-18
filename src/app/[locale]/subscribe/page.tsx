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
    title: locale === 'en' ? 'Free AI Workflow Starter Pack | Malaclyde Affiliates' : 'Kostenloses KI-Startpaket | Malaclyde Affiliates',
    description: locale === 'en'
      ? 'Download the free AI Workflow Starter Pack: 50 action items for your first week with AI automation. Includes checklist, prompt templates, and tool guide.'
      : 'Lade dir das kostenlose KI-Workflow-Startpaket herunter: 50 konkrete Action Items für deine erste Woche mit KI-Automatisierung.',
  };
}

const deDays = [
  { day: 'Tag 1', title: 'Grundlagen', items: 'KI-Tool auswählen, ersten Prompt testen, Top-3-Wiederholaufgaben identifizieren' },
  { day: 'Tag 2', title: 'Content', items: 'Social-Media-Planer, 5 Beitragsideen, Canva-KI, Content-Kalender' },
  { day: 'Tag 3', title: 'E-Mail', items: 'Newsletter-Tool, Willkommens-E-Mail, 5 Betreffzeilen, Follow-up-Sequenz' },
  { day: 'Tag 4', title: 'Automation', items: 'Zapier/Make, erste Automation, Batch-Planung, Lead-Benachrichtigung' },
  { day: 'Tag 5', title: 'Analyse', items: 'Tracking, SEO-Keywords, Konkurrenzanalyse, Review-Routine' },
  { day: 'Tag 6', title: 'Feintuning', items: 'Prompt-Bibliothek, Markenstimme, automatisierte Reports' },
  { day: 'Tag 7', title: 'Review', items: 'Wochenrückblick, Zeitersparnis berechnen, nächste Woche planen' },
];

const enDays = [
  { day: 'Day 1', title: 'Basics', items: 'Choose AI tool, test first prompt, identify top-3 repeat tasks' },
  { day: 'Day 2', title: 'Content', items: 'Social media planner, 5 post ideas, Canva AI, content calendar' },
  { day: 'Day 3', title: 'Email', items: 'Newsletter tool, welcome email, 5 subject lines, follow-up sequence' },
  { day: 'Day 4', title: 'Automation', items: 'Zapier/Make, first automation, batch scheduling, lead notification' },
  { day: 'Day 5', title: 'Analytics', items: 'Tracking, SEO keywords, competitor analysis, review routine' },
  { day: 'Day 6', title: 'Fine-tuning', items: 'Prompt library, brand voice, automated reports' },
  { day: 'Day 7', title: 'Review', items: 'Weekly review, calculate time saved, plan next week' },
];

export default async function SubscribePage({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : defaultLocale) as Locale;
  const isEn = locale === 'en';

  const features = isEn ? [
    { icon: '✅', title: 'Day-by-Day Plan', desc: '7 days, 10-20 minutes each. No overwhelm, just consistent progress.' },
    { icon: '📝', title: '50 Concrete Tasks', desc: 'Every task is a checkbox item. Check it off, move on, save time.' },
    { icon: '🔧', title: 'Tool Recommendations', desc: 'Only tested, free tools — ChatGPT, Canva, Buffer, Zapier & more.' },
    { icon: '📈', title: 'Immediate Time Savings', desc: 'First automations save you time from day 1. Measurable, real, practical.' },
  ] : [
    { icon: '✅', title: 'Tag-für-Tag-Plan', desc: '7 Tage, je 10-20 Minuten. Keine Überforderung, nur konsistenter Fortschritt.' },
    { icon: '📝', title: '50 konkrete Aufgaben', desc: 'Jede Aufgabe ist ein Checkbox-Item. Ankreuzen, erledigen, weitermachen.' },
    { icon: '🔧', title: 'Tool-Empfehlungen', desc: 'Nur getestete, kostenlose Tools — ChatGPT, Canva, Buffer, Zapier & mehr.' },
    { icon: '📈', title: 'Sofortige Zeitersparnis', desc: 'Die ersten Automatisierungen sparen dir ab Tag 1 Zeit. Messbar, echt, praktisch.' },
  ];

  const afterSignup = isEn ? [
    { icon: '📥', title: 'Instant: Starter Pack via Email', desc: 'The PDF with 50 action items lands directly in your inbox.' },
    { icon: '📰', title: 'Weekly: AI Newsletter', desc: 'Best tools, tips, and exclusive discounts sent weekly.' },
    { icon: '🔗', title: 'Access to All Resources', desc: 'Tool comparisons, templates, guides — all on affiliates.malaclyde.com.' },
  ] : [
    { icon: '📥', title: 'Sofort: Startpaket per E-Mail', desc: 'Das PDF mit 50 Action Items landet direkt in deinem Postfach.' },
    { icon: '📰', title: 'Wöchentlich: KI-Newsletter', desc: 'Jede Woche die besten Tools, Tipps und exklusive Rabatte.' },
    { icon: '🔗', title: 'Zugang zu allen Ressourcen', desc: 'Tool-Vergleiche, Templates, Guides — alles auf affiliates.malaclyde.com.' },
  ];

  const days = isEn ? enDays : deDays;

  return (
    <main>
      <section style={{ textAlign: 'center', padding: '4rem 2rem 2rem 2rem', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,102,204,0.15)', color: 'var(--primary)',
          padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
        }}>
          🎁 {isEn ? 'Free Download' : 'Kostenloser Download'}
        </div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
          {isEn ? 'AI Workflow Starter Pack' : 'KI-Workflow-Startpaket'}
        </h1>
        <p className="description" style={{ fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto 1rem auto', lineHeight: 1.6 }}>
          {isEn ? (
            <>50 concrete action items to set up your first AI workflows in <strong>just 7 days</strong>. No code, no prior knowledge — just check and save time.</>
          ) : (
            <>50 konkrete Action Items, um in <strong>nur 7 Tagen</strong> deine ersten KI-Workflows aufzusetzen. Kein Code, keine Vorkenntnisse — nur abhaken und Zeit sparen.</>
          )}
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {features.map((item, i) => (
          <div key={i} style={{ padding: '1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '1rem', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{item.title}</h3>
            <p className="description" style={{ margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: '2.5rem 2rem', background: 'linear-gradient(135deg, var(--glass-bg) 0%, rgba(0,102,204,0.1) 100%)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem', marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 1.5rem 0' }}>{isEn ? 'What to Expect' : 'Was dich erwartet'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {days.map((item, i) => (
            <div key={i} style={{ padding: '1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{item.day}</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{item.title}</div>
              <p className="description" style={{ margin: 0, fontSize: '0.85rem' }}>{item.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="subscribe-form" style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, rgba(0,102,204,0.15) 0%, var(--glass-bg) 100%)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem 0' }}>
          📥 {isEn ? 'Download Free Now' : 'Jetzt kostenlos herunterladen'}
        </h2>
        <p className="description" style={{ maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          {isEn
            ? 'Enter your email and get the AI Workflow Starter Pack instantly — plus weekly AI tips and exclusive offers. No spam, unsubscribe anytime.'
            : 'Trag dich ein und du bekommst das KI-Workflow-Startpaket sofort per E-Mail — plus wöchentliche KI-Tipps und exklusive Angebote. Kein Spam, jederzeit abbestellbar.'}
        </p>

        <form action="https://formsubmit.co/affiliates@malaclyde.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '400px', margin: '0 auto' }}>
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`https://affiliates.malaclyde.com/${locale}/subscribe/thank-you`} />
          <input type="hidden" name="_subject" value={isEn ? 'New newsletter signup from affiliates.malaclyde.com!' : 'Neue Newsletter-Anmeldung von affiliates.malaclyde.com!'} />

          <input type="text" name="name" placeholder={isEn ? 'Your first name' : 'Dein Vorname'} required style={{ padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }} />
          <input type="email" name="email" placeholder={isEn ? 'Your email address' : 'Deine E-Mail-Adresse'} required style={{ padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text)', fontSize: '0.95rem', width: '100%', boxSizing: 'border-box' }} />
          <button type="submit" style={{ padding: '0.85rem 1.5rem', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', width: '100%' }}>
            📥 {isEn ? 'Get Free Starter Pack' : 'Kostenloses Startpaket anfordern'}
          </button>
        </form>

        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
          {isEn ? 'By subscribing you accept our ' : 'Mit deiner Anmeldung akzeptierst du unsere '}
          <Link href={`/${locale}/privacy`} style={{ color: 'var(--text-muted)' }}>
            {isEn ? 'Privacy Policy' : 'Datenschutzerklärung'}
          </Link>
          .{isEn ? ' You will receive weekly emails from Malaclyde.' : ' Du erhältst danach wöchentliche E-Mails von Malaclyde.'}
        </p>
      </section>

      <section style={{ padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem', marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 1.5rem 0' }}>{isEn ? "After You Sign Up" : 'Nach deiner Anmeldung'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {afterSignup.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{item.title}</h3>
              <p className="description" style={{ margin: 0, fontSize: '0.85rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href={`/${locale}`} style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>
          ← {isEn ? 'Back to Home' : 'Zurück zur Startseite'}
        </Link>
      </div>
    </main>
  );
}
