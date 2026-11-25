import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Astro uses this as the URL id when present
    excerpt: z.string().max(300),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    topics: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    ogImageAlt: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string().optional(),
          year: z.union([z.string(), z.number()]).optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { posts };
