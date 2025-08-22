import { client } from "@/lib/sanity";

export async function getProject(slug: string) {
  const query = `
    *[_type == 'project' && slug.current == '${slug}'] {
    title,
    projectDescription,
    "currentSlug": slug.current,
    techStack,
    _createdAt,
    coverImage,
      liveUrl,
      gitRepoUrl,
      features,
      images,
    content
    }[0]
    `;

  try {
    const project = await client.fetch(query, { slug });
    return project || null;
  } catch (error) {
    console.error("Sanity Fetch Error: ", error);
    return [];
  }
}
