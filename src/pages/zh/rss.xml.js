import rss from '@astrojs/rss';
import { getPosts, postPath } from '../../lib/blog';

export async function GET(context) {
  const posts = await getPosts('zh');
  return rss({
    title: 'Kuipra 專欄',
    description:
      '品牌策略、案例拆解與溫哥華在地行銷洞察——來自 Kuipra Communications。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: [post.data.category],
    })),
    customData: '<language>zh-hant</language>',
  });
}
