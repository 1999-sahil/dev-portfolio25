"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    // Select all headings inside the blog content container
    const headingElements = document.querySelectorAll(
      ".blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6"
    );

    const headingList: Heading[] = Array.from(headingElements).map((heading) => {
      const id = heading.id || heading.textContent?.replace(/\s+/g, "-").toLowerCase() || "";
      if (!heading.id) heading.setAttribute("id", id);

      return {
        id,
        text: heading.textContent || "",
        level: Number(heading.tagName.replace("H", "")),
      };
    });

    setHeadings(headingList);
  }, []);

  return (
    <aside className="w-64 sticky top-20 h-fit">
      <h2 className="font-normal font-inter text-sm text-primary dark:text-white mb-4">On this page</h2>
      <ul className="space-y-2.5 text-xs font-inter mb-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`ml-${(heading.level - 1) * 4} mr-8 w-fit text-start`}
          >
            <a
              href={`#${heading.id}`}
              className="text-primary/80 hover:text-primary"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="font-normal font-inter text-sm text-primary dark:text-white mb-4">Share this article</h2>
      <div className="flex items-center gap-3">
        <Link href="" className="text-primary/60 hover:text-primary">
          <Linkedin className="size-5" />
        </Link>
         <Link href="" className="text-primary/60 hover:text-primary">
          <Instagram className="size-5" />
        </Link>
         <Link href="" className="text-primary/60 hover:text-primary">
          <Facebook className="size-5" />
        </Link>
      </div>
    </aside>
  );
}
