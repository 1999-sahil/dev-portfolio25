import type { TypedObject } from "@portabletext/types";

export interface BlogCard {
  title: string;
  _id: string;
  currentSlug: string;
  shortDescription: string;
  tags: string[];
  readTime: number;
  _createdAt: string;
}

export interface Blog {
  title: string;
  _id: string;
  currentSlug: string;
  shortDescription: string;
  tags: string[];
  readTime: number;
  _createdAt: string;
  coverImage: string | any;
  content: TypedObject[];
}
