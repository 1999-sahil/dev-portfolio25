"use client";

import React from "react";

function ProjectSkeleton() {
  return (
      <div className="flex flex-col items-start animate-pulse rounded-2xl w-full">
        <div className="w-full h-[240px] animate-pulse rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80" />
        <div className="animate-pulse w-[50%] h-[20px] mt-5 rounded-sm bg-neutral-200/80 dark:bg-neutral-800/80" />
        <div className="animate-pulse w-[90%] h-[50px] mt-2 rounded-md bg-neutral-200/80 dark:bg-neutral-800/80" />
      </div>
  );
}

export default ProjectSkeleton;
