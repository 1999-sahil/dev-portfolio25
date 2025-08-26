"use client";

import React, { useEffect, useState } from "react";
import Error from "./error";
import { motion } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface ProjectUiProps {
  title: string;
  projectDescription: string;
  slug: string;
  _createdAt: string;
  techStack: string[];
  coverImage: string;
}

function ProjectUi({
  title,
  projectDescription,
  slug,
  _createdAt,
  techStack,
  coverImage,
}: ProjectUiProps) {
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
    <Link href={`/projects/${slug}`} className="w-full">
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        whileHover={{
          boxShadow: "var(--shadow-card)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        key={slug}
        className="group group relative mb-4 rounded-2xl cursor-pointer"
      >
        {coverImage ? (
          <div className="w-full h-full rounded-xl border p-[2px] bg-accent">
            <Image
              src={urlFor(coverImage).url()}
              alt={title}
              loading="lazy"
              unoptimized
              width={500}
              height={500}
              className="w-full h-full rounded-xl transition duration-200 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="w-full h-[300px] md:h-[200px] rounded-xl animate-pulse transition bg-neutral-200/60 dark:bg-neutral-800" />
        )}
        <div className="flex flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
          <div>
            <h2 className="mt-2 font-medium tracking-tight text-primary">
              {title}
            </h2>
            <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
              {(() => {
                const words = projectDescription?.split(" ") || [];
                return words.length > 18
                  ? words.slice(0, 18).join(" ") + "..."
                  : projectDescription;
              })()}
            </p>
          </div>

          {Array.isArray(techStack) && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {techStack.map((stack, idx) => (
                <span
                  key={idx}
                  className="font-inter border border-accent/90 px-1 py-0.5 rounded-sm text-[10px] font-medium bg-accent/70 text-accent-foreground/60"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectUi;
