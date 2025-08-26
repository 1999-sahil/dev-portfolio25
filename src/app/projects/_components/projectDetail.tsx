"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { portableTextRenderer } from "@/components/portableTextRenderer";
import TableOfContents from "@/components/toc";
import Link from "next/link";
import { ArrowLeftIcon, Dot } from "lucide-react";
import Carousal from "./carousal";

interface ProjectDetailProps {
  _id: string;
  title: string;
  slug: string;
  projectDescription: string;
  _createdAt: string;
  content: TypedObject[];
  coverImage: string;
  techStack: string[];
  liveUrl: string;
  gitRepoUrl: string;
  images: string[];
  features: string[];
}

function ProjectDetail({
  _id,
  title,
  slug,
  projectDescription,
  _createdAt,
  content,
  coverImage,
  techStack,
  liveUrl,
  gitRepoUrl,
  images,
  features,
}: ProjectDetailProps) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-8 px-4 lg:px-8 w-full">
        <Link
          className="flex items-center gap-2 mb-2 w-fit text-brand font-poppins text-xs bg-accent text-primary/80 hover:text-primary rounded-md px-2 py-1"
          href="/blogs"
        >
          <ArrowLeftIcon className="size-4" />
          Project
        </Link>
        <h1 className="text-2xl sm:text-4xl font-poppins text-primary font-medium">
          {title}
        </h1>
        <div className="text-light flex items-center space-x-1 text-xs font-poppins text-primary/80">
          <p>
            {new Date(_createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <Dot className="size-8" />
          <p>Fullstack</p>
        </div>
        <div className="flex justify-between">
          <div className="flex-1 flex flex-col gap-3 pt-2 md:flex-row md:gap-0 lg:gap-3">
            <div className="mr-4 w-max">
              <a
                target="_blank"
                className="cursor-pointer"
                href="https://www.github.com"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10">
                    <Image
                      src="/profile.png"
                      alt="Sahil Ahmed avatar"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg="1"
                      className="border-default rounded-full border w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground mb-0 text-xs font-inter font-medium">
                      Sahil Ahmed
                    </span>
                    <span className="text-foreground/80 mb-0 text-[10px] font-poppins">
                      Software Engineer, SDE
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between pr-8">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={_id}
          className="px-4 lg:px-8 blog-content flex flex-col items-start w-full h-full max-w-2xl"
        >
          <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="relative w-full aspect-[3/2] overflow-auto rounded-lg border bg-transparent"
          >
            {coverImage ? (
              <Image
                src={urlFor(coverImage).url()}
                alt={slug}
                fill
                loading="lazy"
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain m-0"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            ) : (
              <div className="w-full h-full bg-neutral-200/60 dark:bg-neutral-800/70 animate-pulse transition"></div>
            )}
          </motion.div>
          <div className="space-x-3 mt-6">
            <Link
              href={liveUrl}
              className="text-sm font-inter border rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1"
            >
              Live Demo
            </Link>
            <Link
              href={gitRepoUrl}
              className="text-sm font-inter border border-accent-foreground/10 rounded-sm bg-primary-foreground text-primary hover:border-accent-foreground/20 px-3 py-1"
            >
              View Code
            </Link>
          </div>
          <p className="text-sm my-6 font-inter leading-relaxed text-primary/90 dark:text-primary/80">
            {projectDescription}
          </p>
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-semibold font-inter text-accent-foreground">Features of the Project</h1>
            <ul className="list-disc ml-4 text-sm font-inter leading-relaxed text-primary/90 dark:text-primary/80">
            {features.map((feature, index) => (
              <li key={`features-${index}`} className="pl-1 marker:text-accent-foreground/80 text-sm mb-2 font-inter">{feature}</li>
            ))}
          </ul>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-semibold font-inter text-accent-foreground">Project Walkthrough</h1>
            <Carousal images={images} />
          </div>
          <div className="w-full flex flex-col gap-6 mt-8">
            <PortableText value={content} components={portableTextRenderer} />
          </div>
        </motion.div>
        <div className="hidden lg:flex flex-col w-1/4 gap-4">
          <div className="flex flex-wrap gap-1 text-[10px] font-inter font-medium">
            {techStack.map((stack, index) => (
              <span
                key={`tech-${index}`}
                className="border rounded-full px-2 py-0.5 border-accent-foreground/10 bg-accent dark:bg-accent/10 text-accent-foreground/90 dark:text-accent-foreground/60"
              >
                {stack}
              </span>
            ))}
          </div>
          <TableOfContents />
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
