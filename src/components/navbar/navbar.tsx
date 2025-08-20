"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Logo from "../logo";
import { ModeToggle } from "../mode-toggle";
import { AlignRight, Github, Linkedin, X } from "lucide-react";
import { menuVars } from "@/variants/navbarVar";
import { containerVars } from "@/variants/containerVar";
import MobileNavigation from "./mobileNav";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const isSmallScreen = useMediaQuery("(max-width: 720px)");

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Project", href: "/projects" },
    { title: "Blog", href: "/blogs" },
  ];

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header className="fixed inset-x-0 top-0 left-0 w-full z-50">
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-navbar)" : "none",
          width: scrolled ? (isSmallScreen ? "100%" : "65%") : "100%",
          y: scrolled ? (isSmallScreen ? 0 : 8) : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        className={`
          flex items-center justify-between px-3 py-1 w-full max-w-5xl mx-auto border-b lg:border-none
          ${scrolled ? (isSmallScreen ? "" : "rounded-full") : ""}
          ${scrolled ? "bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm" : "bg-neutral-50 dark:bg-[#0e100f]"}
        `}
      >
        <Logo />
        <div
          className={`hidden md:flex items-center justify-end gap-5 p-2 w-fit`}
        >
          <div className="flex items-center space-x-8 pl-2">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="text-neutral-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
              >
                <h2 className="text-sm font-medium font-inter">{link.title}</h2>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
        </div>

        {/** Mobile CTA */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <AlignRight />
        </div>
      </motion.nav>

      {/** Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen origin-top bg-white dark:bg-black text-black dark:text-white p-5"
          >
            <div className="flex flex-col h-full">
              {/** top */}
              <div className="flex justify-between items-center">
                <Logo />
                <p className="cursor-pointer" onClick={toggleMenu}>
                  <X />
                </p>
              </div>

              {/** links */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full pt-10 justify-between"
              >
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <div className="overflow-hidden" key={link.title}>
                      <MobileNavigation title={link.title} href={link.href} />
                    </div>
                  ))}

                  <div className="w-full flex flex-col gap-5 mt-5 items-center justify-center">
                    <div className="flex items-center justify-between w-full rounded-lg px-4 py-2 bg-neutral-200/50 dark:bg-neutral-900/50">
                      <h2 className="text-sm font-inter text-zinc-800 dark:text-neutral-500">
                        Appearance
                      </h2>
                      <ModeToggle />
                    </div>
                    <div className="flex items-center gap-4 text-[#333] dark:text-neutral-400">
                      <Github className="size-5 hover:text-black dark:hover:text-white" />
                      <Linkedin className="size-5 hover:text-black dark:hover:text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
