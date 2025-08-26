import { Metadata } from "next";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Sahil Ahmed",
  description: "Learn more About me",
};

function page() {
  return (
    <motion.div
      className="mt-4 px-4"
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
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
          About&nbsp;
        </span>
        <span
          className="inline-block"
          style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}
        >
          Me&nbsp;
        </span>
      </h2>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Turning vision into reality with code and design. With a passion for
        learning I am dedicated to delivering high-quality results and
        contribute meaningful contribution to dev community.
      </p>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        I specialize in crafting responsive web applications using modern
        technologies like React.js, Next.js, Tailwind CSS, Node.js, MongoDB,
        MySQL, and more. Whether it’s developing interactive user interfaces,
        integrating APIs, or optimizing performance, I’m driven by the challenge
        of turning ideas into polished, production-ready products.
      </p>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Over my journey, I’ve:
      </p>
      <ul className="list-disc pl-4 lg:pl-5 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        <li>
          Built feature-rich projects combining frontend finesse with backend
          logic.
        </li>
        <li>
          Designed and implemented UI/UX workflows that improve usability and
          accessibility.
        </li>
        <li>
          Integrated REST APIs, Firebase, and databases to create seamless,
          data-driven applications.
        </li>
        <li>Deployed scalable applications on Vercel, Netlify, and AWS.</li>
      </ul>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        I believe great software is more than just code — it’s about user
        experience, performance, and maintainability. My approach blends
        technical precision with creative problem-solving, ensuring every
        project I deliver is both robust and delightful to use.
      </p>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        If you’re looking for a developer who can bring your vision to life with
        clean code, thoughtful design, and a bit of creative magic — let’s build
        something amazing together.
      </p>
      <p className="my-4 max-w-xl w-[90%] font-poppins text-sm font-normal text-neutral-500 dark:text-neutral-400">
        Connect with me:
      </p>
      <div className="flex items-center gap-3 mt-4">
        <Link href="https://github.com/1999-sahil">
          <Github className="size-5 text-primary/80 hover:text-primary" />
        </Link>
        <Link href="https://www.linkedin.com/in/sahil-ahmed-86222718a/">
          <Linkedin className="size-5 text-primary/80 hover:text-primary" />
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilahmed466@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <Mail className="size-5 text-primary/80 hover:text-primary" />
        </a>
      </div>
    </motion.div>
  );
}

export default page;
