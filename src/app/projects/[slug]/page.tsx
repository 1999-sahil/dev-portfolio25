import { getProject } from "@/lib/getProject";
import { Project } from "@/lib/interface";
import ProjectDetail from "../_components/projectDetail";

interface ProjectProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 30;

export default async function page({ params }: ProjectProps) {
  const { slug } = await params;
  const project: Project = await getProject(slug);

  return (
    <div className="w-full h-full min-h-screen">
      <ProjectDetail
        _id={project._id}
        title={project.title}
        projectDescription={project.projectDescription}
        _createdAt={project._createdAt}
        content={project.content}
        coverImage={project.coverImage}
        techStack={project.techStack}
        slug={project.currentSlug}
        liveUrl={project.liveUrl}
        gitRepoUrl={project.gitRepoUrl}
        images={project.images || []}
        features={project.features || []}
      />
    </div>
  );
}
