import React from "react";
import { getBlogList } from "@/lib/getBlogList";
import { BlogCard } from "@/lib/interface";

async function page() {
  const blogList: BlogCard[] = await getBlogList();

  return <div>
    <h2>Blog Page</h2>
  </div>;
}

export default page;
