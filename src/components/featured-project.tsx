"use client";

import Link from "next/link";
import { getProjectList } from "@/lib/getProjectList";
import { ProjectCard } from "@/lib/interface";
import ProjectUi from "./project-ui";

async function FeaturedProject() {
  const projectList: ProjectCard[] = await getProjectList();

  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark border-y-2 mt-4 px-4 py-6 border-neutral-200/50 dark:border-neutral-950">
      <div className="flex items-center justify-between">
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
            Featured&nbsp;
          </span>
          <span
            className="inline-block"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            Projects&nbsp;
          </span>
        </h2>
        <Link
          href="/projects"
          className="text-xs font-poppins font-normal text-[#333] dark:text-neutral-300 hover:text-[#111] dark:hover:text-white hover:underline cursor-pointer flex items-center gap-2"
        >
          View All
        </Link>
      </div>
      <p className="my-4 font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        I love building things. Some of the side projects I'm currently worked
        on:
      </p>
      {/** Projects */}
      <div>
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
export default FeaturedProject;
