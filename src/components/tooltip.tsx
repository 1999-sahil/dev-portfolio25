"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

interface TooltipItem {
  id: number;
  name: string;
  image: string;
}

export const AnimatedTooltip = ({ items }: { items: TooltipItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );

  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  useEffect(() => {
  return () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
}, [])

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-6 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-sm bg-[#111] dark:bg-accent-foreground px-2 py-1 text-xs shadow-xl"
              >
                <div className="relative z-30 text-xs font-inter font-medium text-white dark:text-black">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            onMouseMove={handleMouseMove}
            loading="lazy"
            src={item.image}
            alt={item.name}
            className="relative m-1 h-8 w-8 rounded-full border-2 border-neutral-200 dark:border-neutral-800 bg-neutral-200/50 dark:bg-neutral-900 object-cover object-top p-1 transition duration-500 group-hover:z-30 group-hover:scale-105 group-hover:bg-white dark:group-hover:bg-[#111]"
          />
        </div>
      ))}
    </>
  );
};