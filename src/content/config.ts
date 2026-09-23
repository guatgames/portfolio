import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      technologies: z.array(z.string()),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      image: z.string().optional(),
      // Muted looped reel shown in the card while in view (image doubles as poster).
      video: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      role: z.string().optional(),
      teamSize: z.number().optional(),
    })
    .superRefine((data, ctx) => {
      // Every project needs at least one piece of media (image or video).
      if (!data.image && !data.video) {
        ctx.addIssue({
          code: 'custom',
          path: ['image'],
          message: 'Projects must have at least one of `image` or `video`.',
        });
      }
    }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Date-only values like "2026-08-25" parse as UTC midnight; normalize to a
    // local-calendar Date so the day the author wrote survives any timezone.
    date: z.coerce.date().transform((d) => new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    // Optional muted looped reel for posts (coverImage doubles as its poster).
    video: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const technologies = defineCollection({
  type: 'data',
  schema: z.array(z.object({
    id: z.string(),
    name: z.string(),
    category: z.enum(['framework', 'library', 'language', 'tool', 'platform', 'database', 'other']),
    color: z.string().optional(),
    proficiency: z.number().min(1).max(5).optional(),
    url: z.string().url().optional(),
  })),
});

const siteConfig = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    email: z.string().email(),
    social: z.object({
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      mastodon: z.string().url().optional(),
      devto: z.string().url().optional(),
    }),
    location: z.string().optional(),
    availability: z.enum(['available', 'busy', 'unavailable']).optional(),
  }),
});

export const collections = { projects, blog, technologies, siteConfig };