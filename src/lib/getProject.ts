import { client } from "@/lib/sanity";

export async function getProject(slug: string) {
  const query = `
    *[_type == 'project' && slug.current == '${slug}'] {
    title,
    projectDescription,
    "currentSlug": slug.current,
    techStack,
    _createdAt,
    coverImage {
      asset->{
        _id,
        url
      }
    },
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
    console.error("Sanity Project Fetch Error: ", error);
    return [];
  }
}
