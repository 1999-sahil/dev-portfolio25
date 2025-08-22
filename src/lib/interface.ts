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

export interface ProjectCard {
  title: string;
  _id: string;
  currentSlug: string;
  projectDescription: string;
  techStack: string[];
  _createdAt: string;
  coverImage: string | any;
}

export interface Project {
  title: string;
  _id: string;
  currentSlug: string;
  projectDescription: string;
  techStack: string[];
  _createdAt: string;
  coverImage: string | any;
  content: TypedObject[];
  liveUrl: string;
  gitRepoUrl: string;
  images: string[];
}