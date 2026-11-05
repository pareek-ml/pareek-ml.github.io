import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, getSite, postHref } from '../lib/content';

export async function GET(context: APIContext) {
  const site = await getSite();
  const posts = await getPosts();
  return rss({
    title: `${site.name}: writing`,
    description: 'Notes on AI, machine learning, programming, and technology.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: postHref(post),
      categories: post.data.tags,
    })),
  });
}
