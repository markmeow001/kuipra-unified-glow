import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Route slug = collection id without the language folder prefix. */
export function postSlug(post: Post): string {
  return post.id.replace(/^(en|zh)\//, '');
}

export function postPath(post: Post): string {
  const slug = postSlug(post);
  return post.data.lang === 'zh' ? `/zh/blog/${slug}/` : `/blog/${slug}/`;
}

export async function getPosts(lang: 'en' | 'zh'): Promise<Post[]> {
  // Future-dated posts are excluded at build time; a daily scheduled
  // rebuild (GitHub Actions → Vercel deploy hook) publishes them when
  // their pubDate arrives.
  const now = Date.now();
  const posts = await getCollection(
    'blog',
    (p) =>
      p.data.lang === lang && !p.data.draft && p.data.pubDate.valueOf() <= now,
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** The same article in the other language, if it exists. */
export async function getTranslation(post: Post): Promise<Post | undefined> {
  const otherLang = post.data.lang === 'en' ? 'zh' : 'en';
  const matches = await getCollection(
    'blog',
    (p) =>
      p.data.lang === otherLang &&
      p.data.translationKey === post.data.translationKey &&
      !p.data.draft,
  );
  return matches[0];
}

export function formatDate(date: Date, lang: 'en' | 'zh'): string {
  return date.toLocaleDateString(lang === 'zh' ? 'zh-Hant' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
