import type { APIContext } from 'astro';
import { getPosts, getWork, hasPage } from '../lib/content';

export async function GET(context: APIContext) {
  const work = await getWork();
  const posts = (await getPosts()).filter(hasPage);
  const paths = [
    '/',
    '/work/',
    '/writing/',
    '/about/',
    ...work.map((entry) => `/work/${entry.id}/`),
    ...posts.map((post) => `/writing/${post.id}/`),
  ];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, context.site)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
