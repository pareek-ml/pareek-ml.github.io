import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';
import { load } from 'js-yaml';

/**
 * YAML data files keep their entries under `items:` so the CMS can edit them as a list.
 * Each entry records its position, because collections otherwise come back sorted by id.
 */
const items = (text: string) =>
  (load(text) as { items: Record<string, unknown>[] }).items.map((item, order) => ({ ...item, order }));

const metric = z.object({ value: z.string(), label: z.string() });

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) => {
    // A figure with no image is a TODO: it stays out of the page until an image is added.
    const figure = z
      .object({ image: image().optional(), alt: z.string().optional(), caption: z.string() })
      .refine((f) => !f.image || (f.alt && !f.caption.startsWith('TODO')), {
        error: 'A figure with an image needs alt text and a finished caption.',
      });
    return z.object({
      title: z.string(),
      // A few words naming the project, for places too small for the full title.
      short: z.string().optional(),
      client: z.string(),
      sector: z.string(),
      tags: z.array(z.string()).default([]),
      summary: z.string(),
      metrics: z.array(metric).default([]),
      order: z.number(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      exhibit: figure.optional(),
      architecture: figure.optional(),
    });
  },
});

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    external_url: z.url().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({ status: z.string() }),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml', { parser: items }),
  schema: z.object({
    order: z.number(),
    employer: z.string(),
    role: z.string(),
    location: z.string(),
    dates: z.string(),
    url: z.url().optional(),
    impact: z.string(),
    // The number that leads the card on the homepage.
    highlight: metric.optional(),
    details: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.yaml', { parser: items }),
  schema: z.object({
    order: z.number(),
    degree: z.string(),
    institution: z.string(),
    dates: z.string(),
    notes: z.array(z.string()).default([]),
  }),
});

const capabilities = defineCollection({
  loader: file('src/content/capabilities.yaml', { parser: items }),
  schema: z.object({ order: z.number(), title: z.string(), summary: z.string().optional(), lines: z.array(z.string()) }),
});

const approach = defineCollection({
  loader: file('src/content/approach.yaml', { parser: items }),
  schema: z.object({ order: z.number(), title: z.string(), outcome: z.string() }),
});

/** Each homepage section has a short label and an action title: a full sentence that makes the section's point. */
const sectionHead = z.object({ kicker: z.string(), title: z.string() });

const site = defineCollection({
  loader: file('src/content/site.yaml', {
    parser: (text) => [{ id: 'site', ...(load(text) as Record<string, unknown>) }],
  }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    eyebrow: z.string(),
    headline: z.string(),
    subheadline: z.string(),
    description: z.string(),
    location: z.string(),
    // Each figure can point to its evidence: `work` names a case study by its filename without .md; otherwise `href` links
    // anywhere and `note` says where the number comes from.
    proof_metrics: z
      .array(metric.extend({ work: z.string().optional(), href: z.string().optional(), note: z.string().optional() }))
      .length(3),
    sections: z.object({
      work: sectionHead,
      approach: sectionHead,
      experience: sectionHead,
      capabilities: sectionHead,
      writing: sectionHead,
      contact: z.object({ title: z.string(), lede: z.string() }),
    }),
    email: z.email(),
    socials: z.array(z.object({ label: z.string(), url: z.url() })),
    cv: z.string(),
  }),
});

/** The tools behind "What I bring", grouped by area. */
const toolkit = defineCollection({
  loader: file('src/content/toolkit.yaml', { parser: items }),
  schema: z.object({ order: z.number(), area: z.string(), tools: z.array(z.string()) }),
});

export const collections = { work, writing, about, experience, education, capabilities, toolkit, approach, site };
