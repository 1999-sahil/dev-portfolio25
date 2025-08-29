import type { TypedObject } from "@portabletext/types";

export type ImageType =
  | {
      asset?: {
        _ref?: string;
        _type?: string;
        url?: string;
      };
    }
  | string;

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
  coverImage: ImageType;
  content: TypedObject[];
}

export interface ProjectCard {
  title: string;
  _id: string;
  currentSlug: string;
  projectDescription: string;
  techStack: string[];
  _createdAt: string;
  coverImage: ImageType;
}

export interface Project {
  title: string;
  _id: string;
  currentSlug: string;
  projectDescription: string;
  techStack: string[];
  _createdAt: string;
  coverImage: ImageType;
  content: TypedObject[];
  liveUrl: string;
  gitRepoUrl: string;
  images: string[];
  features: string[];
}
