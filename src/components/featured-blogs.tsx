import Link from "next/link";
import { getBlogList } from "@/lib/getBlogList";
import { BlogCard } from "@/lib/interface";
import BlogUi from "./blog-ui";

export default async function FeaturedBlogs() {
  const blogList: BlogCard[] = await getBlogList();

  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark border-b-2 mt-4 px-4 py-6 border-neutral-200/50 dark:border-neutral-950">
      {/* Heading */}
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
            Tech&nbsp;
          </span>
          <span
            className="inline-block"
            style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
          >
            Talk&nbsp;
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
            Tutorials&nbsp;
          </span>
        </h2>
        <Link
          href="/blogs"
          className="text-xs font-poppins font-normal text-[#333] dark:text-neutral-300 hover:text-[#111] dark:hover:text-white hover:underline cursor-pointer flex items-center gap-2"
        >
          View All
        </Link>
      </div>

      <p className="my-4 font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Sharing Knowledge as I learn
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
