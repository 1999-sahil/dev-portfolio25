import { client } from "@/lib/sanity";

export async function getBlogList() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
    shortDescription,
    "currentSlug": slug.current,
    tags,
    createdAt,
    readTime
    }
  `;

  const data = await client.fetch(query);
  return data;
}
