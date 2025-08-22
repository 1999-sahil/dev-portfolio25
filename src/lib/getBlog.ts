import { client } from "@/lib/sanity";

export async function getBlog(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
    title,
    shortDescription,
    "currentSlug": slug.current,
    tags,
    _createdAt,
    readTime,
    coverImage,
    content
    }[0]
  `;

  try {
    const blog = await client.fetch(query, { slug });
    return blog || null;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}
