import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalDate = z.preprocess((val) => {
  if (val === null || val === undefined) return undefined;
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (!trimmed || trimmed.toLowerCase() === 'invalid date') return undefined;
  }
  const parsed = val instanceof Date ? val : new Date(val as string | number);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}, z.date().optional());

const emptyStringToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((val) => (typeof val === 'string' && val.trim() === '' ? undefined : val), schema);

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().max(300),
    publishedAt: z.coerce.date(),
    updatedAt: optionalDate,
    draft: z.boolean().default(false),
    topics: z.array(z.string()).default([]),
    ogImage: emptyStringToUndefined(z.string().optional()),
    ogImageAlt: emptyStringToUndefined(z.string().optional()),
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
