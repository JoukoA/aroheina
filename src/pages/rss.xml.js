import rss from '@astrojs/rss';
import { SITE, topicLabel } from '../config';
import { getPosts } from '../utils/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.excerpt,
      pubDate: p.data.publishedAt,
      link: `/posts/${p.id}/`,
      categories: p.data.topics.map(topicLabel),
    })),
    customData: `<language>en</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    stylesheet: false,
  });
}
