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

function generateSitemap() {
  const urls = [];

  // Default priority/changefreq for different route patterns
  const routes = [
    { path: '', priority: 1.0, changefreq: 'weekly' },
    { path: 'blog', priority: 0.8, changefreq: 'weekly' },
    { path: 'category', priority: 0.8, changefreq: 'weekly' },
    { path: 'category/ki-tools', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/automatisierung', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/youtube-video', priority: 0.7, changefreq: 'weekly' },
    { path: 'category/schlaf-gesundheit', priority: 0.7, changefreq: 'weekly' },
    { path: 'impressum', priority: 0.3, changefreq: 'monthly' },
    { path: 'privacy', priority: 0.3, changefreq: 'monthly' },
    { path: 'ai-disclosure', priority: 0.3, changefreq: 'monthly' },
  ];

  // Add static routes
  for (const route of routes) {
    urls.push({
      loc: route.path ? `${SITE_URL}/${route.path}` : SITE_URL,
      lastmod: '2026-07-18',
      changefreq: route.changefreq,
      priority: route.priority,
    });
  }

  // Add blog posts
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      try {
        const post = JSON.parse(fs.readFileSync(path.join(blogDir, file), 'utf8'));
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
