import React from "react";
import ProjectUi from "@/components/project-ui";
import { getProjectList } from "@/lib/getProjectList";
import { ProjectCard } from "@/lib/interface";

async function page() {
  const projectList: ProjectCard[] = await getProjectList();

  return (
    <div className="px-4 py-6">
      {/* Heading */}
      <h2 className="relative mt-4 w-fit max-w-lg text-sm font-poppins font-normal text-neutral-800 md:text-base dark:text-neutral-300">
        <div
          className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800"
          style={{ opacity: 1 }}
        >
          <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        </div>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          My&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Projects&nbsp;
        </span>
      </h2>

      <p className="mt-4 mb-2 max-w-lg font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Experimenting with ideas, shaping them into powerful applications.
      </p>
      <p className="mb-4 max-w-lg font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Showcasing my journey through code - a collection of projects built with passion and precision.
      </p>
      
      <div className="flex flex-col gap-5">
        {projectList.map((project) => (
          <ProjectUi
            key={project._id}
            title={project.title}
            projectDescription={project.projectDescription}
            slug={project.currentSlug}
            _createdAt={project._createdAt}
            techStack={project.techStack || []}
            coverImage={project.coverImage}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
