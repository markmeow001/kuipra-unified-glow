import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS } from './data/categories';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['en', 'zh']),
    // Same translationKey across the en/zh pair drives hreflang + the
    // language switch link on each article.
    translationKey: z.string(),
    category: z.enum(CATEGORY_SLUGS),
    keywords: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // 2-3 sentence direct answer to the title's question, rendered above the
    // fold and easy for AI answer engines to quote.
    quickAnswer: z.string().optional(),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
