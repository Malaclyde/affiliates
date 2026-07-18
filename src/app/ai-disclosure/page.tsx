import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Disclosure | Malaclyde Affiliates',
  description: 'Transparency about AI-generated content on affiliates.malaclyde.com',
};

export default function AIDisclosurePage() {
  return (
    <main>
      <h1>AI Disclosure</h1>
      <p className="description">
        Transparency about the use of artificial intelligence on this website, in accordance
        with the EU AI Act Article 50 (effective August 2, 2026)
      </p>

      <h2>Our Commitment to Transparency</h2>
      <p>
        In compliance with the European Union&apos;s Artificial Intelligence Act (EU AI Act),
        specifically Article 50 on transparency obligations for certain AI systems, we are
        committed to being transparent about the use of AI on this website.
      </p>

      <h2>How We Use AI</h2>
      <p>
        <strong>This website may use AI-generated content.</strong> Specifically:
      </p>
      <ul>
        <li>
          <strong>Product descriptions and reviews:</strong> Some product descriptions, summaries,
          and reviews on this website may be generated or substantially modified using artificial
          intelligence tools.
        </li>
        <li>
          <strong>Blog content:</strong> Blog posts and articles may be created with the
          assistance of AI writing tools, which are then reviewed and edited by humans before
          publication.
        </li>
        <li>
          <strong>Website content:</strong> General website copy and marketing text may be
          generated or enhanced using AI tools.
        </li>
      </ul>

      <h2>What This Means</h2>
      <ul>
        <li>
          <strong>AI is a tool, not the author:</strong> All AI-generated content is reviewed,
          fact-checked, and approved by humans before publication. AI assists in creation, but
          humans are responsible for the final content.
        </li>
        <li>
          <strong>Affiliate relationships are real:</strong> All affiliate links and partnerships
          disclosed on this website are genuine commercial relationships, regardless of how the
          surrounding content was created.
        </li>
        <li>
          <strong>No impersonation:</strong> AI is not used to impersonate real people or create
          fake endorsements. All testimonials and reviews reflect genuine experiences.
        </li>
      </ul>

      <h2>AI Tools We May Use</h2>
      <p>We may use various AI tools for content creation, including but not limited to:</p>
      <ul>
        <li>Large Language Models (LLMs) for text generation and editing</li>
        <li>AI-powered writing assistants for grammar, style, and clarity</li>
        <li>Content generation tools for marketing copy and descriptions</li>
      </ul>

      <h2>Your Rights Under the EU AI Act</h2>
      <p>
        The EU AI Act (Regulation (EU) 2024/1689) requires transparency about AI-generated
        content. You have the right to know when content you are viewing has been generated or
        substantially modified by AI. This page serves as that disclosure.
      </p>
      <p>
        For more information about the EU AI Act, visit the official EU website:{' '}
        <a
          href="https://artificialintelligenceact.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://artificialintelligenceact.eu/
        </a>
      </p>

      <h2>Affiliate Disclosure</h2>
      <p>
        As required by law and platform guidelines, all affiliate links on this website are
        marked with <code>rel=&quot;nofollow sponsored&quot;</code> to indicate they are
        paid partnerships. This disclosure applies regardless of whether the surrounding content
        is human-written or AI-assisted.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have questions about our use of AI or this disclosure, please contact us at:{' '}
        <a href="mailto:support@malaclyde.com">support@malaclyde.com</a>
      </p>

      <h2>Updates</h2>
      <p>
        This disclosure was last updated on July 18, 2026. We may update this page as our use
        of AI tools evolves or as new regulations take effect.
      </p>
    </main>
  );
}
