import { client } from "@/lib/sanity";

export async function getProjectList() {
  const query = `
    *[_type == 'project'] | order(_createdAt desc) {
    title,
    projectDescription,
    "currentSlug": slug.current,
    techStack,
    _createdAt,
    _id,
    coverImage
    }
    `;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Sanity Fetch Error: ", error);
    return [];
  }
}
