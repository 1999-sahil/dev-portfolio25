"use client";

import { motion } from "motion/react";
import { workExperience } from "@/constant/workData";
import Image from "next/image";
import { AnimatedTooltip } from "./tooltip";

function Work() {
  return (
    <div className="mt-4 px-4 py-6">
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
          Career&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Journey&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          and&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Timeline&nbsp;
        </span>
      </h2>
      <p className="my-4 font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Worked with a reputated organizations
      </p>
      <div className="mt-6">
        <div className="flex flex-col gap-6">
          {workExperience.slice(0, 3).map((work, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1 text-sm font-poppins">
                  <span className="font-semibold text-primary">
                    {work.companyName}
                  </span>
                  <span className="text-primary/80">
                    {work.jobTitle} - {work.jobType}
                  </span>
                  <span className="text-primary/50">{work.duration}</span>
                </div>
                <div className="p-1 hidden lg:flex items-center justify-center w-[60px] h-[60px] overflow-hidden rounded">
                  <Image
                    src={work.companyLogo}
                    alt={work.companyName}
                    loading="lazy"
                    width={60}
                    height={60}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="font-inter text-xs lg:text-sm text-primary/50 w-[85%] max-w-xl">
                {work.description}
              </p>

              <div className="flex flex-row items-start justify-start w-full">
                <AnimatedTooltip items={work.techStack ?? []} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
