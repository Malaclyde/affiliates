/**
 * Post-build script: generates sitemap.xml from _pages data.
 * Run via: node scripts/generate-sitemap.js
 * Called after "next build" via "postbuild" in package.json
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://affiliates.malaclyde.com';
const pagesDir = path.join(__dirname, '..', '_pages');
const blogDir = path.join(pagesDir, 'blog');
const outDir = path.join(__dirname, '..', 'out');

const LOCALES = ['de', 'en'];
const DEFAULT_LOCALE = 'de';

function generateSitemap() {
  const urls = [];

  // Static routes with locale prefixes
  const routes = [
    { path: '', priority: 1.0, changefreq: 'weekly' },
    { path: 'blog', priority: 0.8, changefreq: 'weekly' },
    { path: 'category', priority: 0.8, changefreq: 'weekly' },
    { path: 'category/ki-tools', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/automatisierung', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/youtube-video', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/design-medien', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/webhosting', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/schlaf-gesundheit', priority: 0.7, changefreq: 'weekly' },
    { path: 'impressum', priority: 0.3, changefreq: 'monthly' },
    { path: 'privacy', priority: 0.3, changefreq: 'monthly' },
    { path: 'ai-disclosure', priority: 0.3, changefreq: 'monthly' },
    { path: 'subscribe', priority: 0.5, changefreq: 'monthly' },
    { path: 'subscribe/thank-you', priority: 0.3, changefreq: 'monthly' },
  ];

  // Add locale-prefixed routes
  for (const locale of LOCALES) {
    for (const route of routes) {
      const loc = route.path
        ? `${SITE_URL}/${locale}/${route.path}`
        : `${SITE_URL}/${locale}`;
      urls.push({
        loc,
        lastmod: '2026-07-18',
        changefreq: route.changefreq,
        priority: route.priority,
      });
    }
  }

  // Also add default (non-prefixed) root-level routes for backward compat
  for (const route of routes) {
    if (route.path) {
      urls.push({
        loc: `${SITE_URL}/${route.path}`,
        lastmod: '2026-07-18',
        changefreq: route.changefreq,
        priority: route.priority,
      });
    } else {
      urls.push({
        loc: SITE_URL,
        lastmod: '2026-07-18',
        changefreq: route.changefreq,
        priority: route.priority,
      });
    }
  }

  // Add blog posts with locale prefixes
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      try {
        const post = JSON.parse(fs.readFileSync(path.join(blogDir, file), 'utf8'));
        for (const locale of LOCALES) {
          urls.push({
            loc: `${SITE_URL}/${locale}/blog/${post.slug}`,
            lastmod: post.date || '2026-07-18',
            changefreq: 'monthly',
            priority: 0.6,
          });
        }
        // Also keep the non-prefixed blog URL
        urls.push({
          loc: `${SITE_URL}/blog/${post.slug}`,
          lastmod: post.date || '2026-07-18',
          changefreq: 'monthly',
          priority: 0.6,
        });
      } catch (e) {
        // Skip invalid JSON
      }
    }
  }

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const url of urls) {
    xml += `  <url>\n`;
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;

  // Write to both public/ (source) and out/ (build output)
  const outPath = path.join(outDir, 'sitemap.xml');
  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(outPath, xml);
  fs.writeFileSync(publicPath, xml);
  console.log(`Sitemap generated: ${urls.length} URLs`);
}

generateSitemap();
