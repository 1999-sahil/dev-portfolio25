import { mobileVars } from "@/variants/mobileMenuVar";
import { motion } from "motion/react";
import Link from "next/link";

interface MobileNavigationProps {
  href: string;
  title: string;
}

function MobileNavigation({ title, href }: MobileNavigationProps) {
  return (
    <motion.div variants={mobileVars} className="">
      <Link href={href}>
        <h2 className="text-3xl font-inter font-medium">{title}</h2>
      </Link>
    </motion.div>
  );
}

export default MobileNavigation;
