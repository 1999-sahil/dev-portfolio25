import { client } from "@/lib/sanity";


export async function getBlog(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
    title,
    shortDescription,
    "currentSlug": slug.current,
    tags,
    createdAt,
    readTime,
    coverImage,
    content
    }[0]
  `;

  const data = await client.fetch(query);
  return data;
}
