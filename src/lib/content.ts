import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

const published = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getOrdered<T extends 'experience' | 'education' | 'capabilities' | 'approach'>(name: T) {
  const entries = await getCollection(name);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getSite() {
  const entry = await getEntry('site', 'site');
  if (!entry) throw new Error('src/content/site.yaml is missing');
  return entry.data;
}

export async function getWork() {
  const entries = await getCollection('work', published);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts() {
  const entries = await getCollection('writing', published);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** A post with no body lives only at its external URL and gets no page here. */
export const hasPage = (post: CollectionEntry<'writing'>) => Boolean(post.body?.trim());

export const postHref = (post: CollectionEntry<'writing'>) =>
  hasPage(post) ? `/writing/${post.id}/` : (post.data.external_url ?? '/writing/');

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
