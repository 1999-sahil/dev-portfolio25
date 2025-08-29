import React from "react";
import type { Metadata } from "next";
import ProjectUi from "@/components/project-ui";
import { getProjectList } from "@/lib/getProjectList";
import { ProjectCard } from "@/lib/interface";
import ProjectSkeleton from "@/components/project-skeleton";
import Link from "next/link";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Sahil Ahmed",
  description: "Check out my work and portfolio",
};

export const revalidate = 30;

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
        Showcasing my journey through code - a collection of projects built with
        passion and precision.
      </p>
      <Link href="" className="flex items-center gap-1 mb-8 font-inter text-xs bg-primary hover:bg-primary/90 text-primary-foreground w-fit px-3 py-1 rounded-sm font-medium">
      <Github className="size-3.5" />
        Github
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-0 w-full">
        {projectList.length === 0 ? (
          Array.from({ length: 9 }).map((_, index) => <ProjectSkeleton key={index} />)
        ) : (
          projectList
            .map((project: ProjectCard) => (
              <ProjectUi
                key={project._id}
                title={project.title}
                projectDescription={project.projectDescription}
                slug={project.currentSlug}
                _createdAt={project._createdAt}
                techStack={project.techStack || []}
                coverImage={project.coverImage}
              />
            ))
        )}
      </div>
    </div>
  );
}

export default page;
