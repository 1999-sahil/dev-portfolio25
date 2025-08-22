"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Error from "./error";
import { Dot } from "lucide-react";
import Link from "next/link";

interface BlogUiProps {
  title: string;
  shortDescription: string;
  slug: string;
  _createdAt: string;
  tags: string[];
  readTime: number;
}

function BlogUi({
  title,
  shortDescription,
  slug,
  _createdAt,
  tags,
  readTime,
}: BlogUiProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async work here
    const timer = setTimeout(() => {

      // Mark loading as finished
      setIsLoading(false);
    }, 1000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  // Show error UI
  if (error) {
    return <Error />;
  }

  return (
    <div>
      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col gap-8 lg:gap-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex flex-col lg:flex-row lg:justify-between gap-1">
                <h2 className="w-[70%] lg:w-[60%] h-[16px] bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                <span className="w-[80px] lg:w-[120px] h-[12px] bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              </div>
              <div className="w-[80%] lg:w-[70%] h-[40px] lg:h-[60px] bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
              <div className="w-[70%] lg:w-[80%] h-[20px] bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      )}

      {/* Blogs */}
      {!isLoading && !error && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={slug}
          className="flex flex-col cursor-pointer"
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between">
            <Link href={`/blogs/${slug}`} className="font-inter font-semibold text-base tracking-tight text-primary hover:underline">
              {title}
            </Link>
            <span className="flex flex-row items-center gap-1">
                <p className="text-primary/70 text-xs lg:text-sm font-inter">
              {new Date(_createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <Dot className="size-6 lg:hidden" />
            <p className="text-xs font-sans lg:hidden text-accent-foreground/90">{readTime} min read</p>
            </span>
          </div>
          <p className="text-xs font-sans hidden lg:flex mt-1 text-accent-foreground w-fit">
            {readTime} min read
          </p>
          <p className="text-sm font-sans my-2 text-primary/60 w-[95%] max-w-xl tracking-tight">
            {shortDescription.split(" ").slice(0, 30).join(" ")}...
          </p>
          <div className="flex flex-wrap gap-1 lg:gap-2 mt-2 w-[95%] max-w-lg">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-inter text-accent-foreground/50 bg-accent dark:bg-accent/40 px-1 py-[2px] rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default BlogUi;
