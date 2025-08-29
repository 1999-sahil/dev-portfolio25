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
import { ImageType } from "@/lib/interface";

interface BlogDetailProps {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  readTime: number;
  _createdAt: string;
  content: TypedObject[];
  coverImage: ImageType;
  tags: string[];
}

function BlogDetail({
  _id,
  title,
  slug,
  shortDescription,
  readTime,
  _createdAt,
  content,
  coverImage,
  tags,
}: BlogDetailProps) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-8 px-4 lg:px-8 w-full">
        <Link
          className="flex items-center gap-2 mb-2 w-fit text-brand font-poppins text-xs bg-accent text-primary/80 hover:text-primary rounded-md px-2 py-1"
          href="/blogs"
        >
          <ArrowLeftIcon className="size-4" />
          Blog
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
          <p>{readTime} minute read</p>
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
      <div className="flex items-start justify-between">
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
            className="relative w-full aspect-[3/2] overflow-auto rounded-lg border"
          >
            <Image
              src={urlFor(coverImage).url()}
              alt={slug}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover m-0"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </motion.div>
          <div className="w-full flex flex-col gap-6 mt-10">
            <PortableText value={content} components={portableTextRenderer} />
          </div>
        </motion.div>
        <div className="hidden lg:flex flex-col w-1/4 gap-8">
                <div className="flex flex-wrap gap-1 text-[10px] font-inter font-medium">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="border rounded-full px-2 py-0.5 border-accent-foreground/10 bg-accent dark:bg-accent/10 text-accent-foreground/90 dark:text-accent-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
          <TableOfContents />
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
