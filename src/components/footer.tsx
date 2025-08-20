"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t flex items-center justify-between px-4 py-2">
      <h2 className="flex items-center gap-1 font-inter text-xs lg:text-sm font-medium text-accent-foreground/50">
        Built with <Heart className="size-3.5" /> love by Sahil Ahmed
      </h2>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/1999-sahil"
          className="text-accent-foreground/70 hover:text-black dark:hover:text-white"
        >
          <Github className="size-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sahil-ahmed-86222718a/"
          className="text-accent-foreground/70 hover:text-black dark:hover:text-white"
        >
          <Linkedin className="size-4" />
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilahmed466@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent-foreground/70 hover:text-black dark:hover:text-white"
        >
          <Mail className="size-4" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
