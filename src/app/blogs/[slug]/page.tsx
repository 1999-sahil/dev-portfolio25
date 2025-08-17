import React from "react";
import { getBlog } from "@/lib/getBlog";
import { Blog } from "@/lib/interface";

async function page({ params }: { params: { slug: string } }) {
  const blog: Blog = await getBlog(params.slug);
  return <div>{params.slug}</div>;
}

export default page;
