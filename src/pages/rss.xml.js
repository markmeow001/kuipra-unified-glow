import rss from '@astrojs/rss';
import { getPosts, postPath } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: 'The Kuipra Journal',
    description:
      'Brand strategy, campaign breakdowns, and Vancouver marketing insights from Kuipra Communications.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: [post.data.category],
    })),
    customData: '<language>en-ca</language>',
  });
}
