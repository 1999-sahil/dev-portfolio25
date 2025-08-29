"use client";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Check, Copy } from "lucide-react";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
};

interface CodeBlockValue {
  _type: "code";
  code: string;
  language?: string;
}

interface ImageBlockValue {
  _type: "image";
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}


// Reusable PortableText component configuration
export const portableTextRenderer: PortableTextComponents = {
  types: {
    // Handle Sanity "code" blocks
    code: ({ value }: { value: CodeBlockValue }) => (
      <CodeBlock code={value.code} language={value.language || "javascript"} />
    ),

    // Handle Sanity "image" blocks
    image: ({ value }: { value: ImageBlockValue }) => (
      <div className="my-4 flex justify-center rounded-lg">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || "Blog Image"}
          width={800}
          height={400}
          className="rounded-lg border p-1 bg-accent"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold font-inter">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold font-inter">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold font-inter">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium font-inter">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-medium font-inter">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-normal font-inter">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="text-sm font-inter text-primary/90 dark:text-primary/80 leading-relaxed">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-foreground pl-4 font-inter italic my-4 text-accent">
        {children}
      </blockquote>
    ),
    hr({ children }) {
      return <hr className="bg-accent my-10">{children}</hr>;
    }
  },

  // 🟢 Style unordered & ordered lists
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-4 text-sm font-inter leading-relaxed text-primary/90 dark:text-primary/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal text-sm ml-4 font-inter leading-relaxed text-primary/90 dark:text-primary/70">
        {children}
      </ol>
    ),
  },

  // 🟢 Style list items separately if needed
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-1 marker:text-accent-foreground/80 text-sm mb-2 font-inter">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="pl-1 marker:text-accent-foreground/80 text-sm mb-2 font-inter">
        {children}
      </li>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white underline"
      >
        {children}
      </a>
    ),
     // 🟢 Inline code (NEW)
    code: ({ children }) => (
      <code className="bg-accent dark:bg-accent/50 px-1 py-0.5 border border-accent text-black dark:text-white rounded-sm text-xs font-mono font-normal">
        {children}
      </code>
    ),
    strong({ children }) {
      return <strong className="text-primary/90 font-inter">{children}</strong>
    }
  },
};

function CodeBlock({
  code,
  language = "javascript",
  className = "",
  showLineNumbers = true,
}: CodeBlockProps) {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      // Prefer async clipboard API
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = code;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // swallow errors silently or toast if you have a system
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`group relative ${className}`}>
      {/* Copy button */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        className="
          absolute right-4 top-4 z-10 inline-flex items-center gap-1 cursor-pointer
          transition
        "
      >
        {copied ? <Check className="size-3.5 text-green-500" /> : <Copy className="size-3.5 text-primary/70" />}
      </button>

      {/* Highlighted code */}
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        customStyle={{
          borderRadius: 8,
          border: theme === "dark" ? "#666666" : "#898989",
          padding: "24px 6px 12px 6px",
          fontSize: 13,
          margin: 0,
          background: theme === "dark" ? "#1f1f1f" : "#e0e0e0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}