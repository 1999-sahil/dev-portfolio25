import { client } from "@/lib/sanity";

export async function getBlogList() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
    shortDescription,
    "currentSlug": slug.current,
    tags,
    _createdAt,
    _id,
    readTime
    }
  `;

  try {
    const blogs = await client.fetch(query);
    return blogs;
  } catch (error) {
    console.error("Sanity BlogList Fetch Error:", error);
    return [];
  }
}
