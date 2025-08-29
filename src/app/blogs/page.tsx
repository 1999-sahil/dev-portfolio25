import React from "react";
import { getBlogList } from "@/lib/getBlogList";
import { BlogCard } from "@/lib/interface";
import BlogUi from "@/components/blog-ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Sahil Ahmed",
  description: "Check out my technical blogs and tutorials",
};

export const revalidate = 30;

async function page() {
  const blogList: BlogCard[] = await getBlogList();

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
          Blogs&nbsp;
        </span>
      </h2>

      <p className="mt-4 mb-2 max-w-lg font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Code. Create. Learn. A Collection of blogs to inspire developers and creators.
      </p>
      <p className="mb-4 max-w-lg font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Fresh perspectives, deep insights and practical guides.
      </p>
      
      <div className="flex flex-col gap-5">
        {blogList.map((blog) => (
          <BlogUi
            key={blog._id}
            title={blog.title}
            shortDescription={blog.shortDescription}
            slug={blog.currentSlug}
            _createdAt={blog._createdAt}
            tags={blog.tags || []}
            readTime={blog.readTime}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
