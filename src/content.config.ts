import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The markdown lives in this repo (synced from the sayri product repo with
// `npm run sync:docs`) so the Cloudflare Pages build works without cloning
// the product repo next to this one.
const docs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/docs",
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { docs };
