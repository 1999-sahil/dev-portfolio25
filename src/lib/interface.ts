export interface BlogCard {
  title: string;
  slug: string;
  shortDescription: string;
  tags: string[];
  readTime: number;
  createdAt: string;
}

export interface Blog {
  title: string;
  slug: string;
  shortDescription: string;
  tags: string[];
  readTime: number;
  createdAt: string;
  coverImage: string | any;
  content: string | any;
}
