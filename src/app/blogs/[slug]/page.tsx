import React from "react";
import { getBlog } from "@/lib/getBlog";
import { Blog } from "@/lib/interface";
import BlogDetail from "../_components/blogDetail";

interface BlogProps {
  params: Promise<{ slug: string }>; // 👈 Make params a Promise now
}

async function page({ params }: BlogProps) {
  const { slug } = await params;
  const blog: Blog = await getBlog(slug);

  return (
    <div className="w-full h-full min-h-sreen">
      <BlogDetail
        title={blog.title}
        slug={blog.currentSlug}
        shortDescription={blog.shortDescription}
        readTime={blog.readTime}
        _createdAt={blog._createdAt}
        content={blog.content}
        coverImage={blog.coverImage}
        tags={blog.tags}
        _id={blog._id}
      />
    </div>
  );
}

export default page;
