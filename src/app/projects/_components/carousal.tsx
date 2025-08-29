"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { urlFor } from "@/lib/sanity";
import { ImageType } from "@/lib/interface";

interface CarousalProps {
  images: ImageType[];
}

function Carousal({ images }: CarousalProps) {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <div className="relative w-full max-w-5xl flex items-center overflow-hidden border rounded-lg">
        <AnimatePresence>
          {isFocus && (
            <motion.div
              className="absolute left-2 right-2 flex justify-between z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onHoverStart={() => setIsFocus(true)}
              onHoverEnd={() => setIsFocus(false)}
            >
              <button className="bg-neutral-100 border rounded-full p-1 cursor-pointer">
                <ChevronLeft
                  onClick={onPrevClick}
                  className="size-4 lg:size-6 text-black"
                />
              </button>
              <button className="bg-neutral-100 border rounded-full p-1 cursor-pointer">
                <ChevronRight
                  onClick={onNextClick}
                  className="size-4 lg:size-6 text-black"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
          className="flex gap-4 flex-nowrap bg-transparent"
          onHoverStart={() => setIsFocus(true)}
          onHoverEnd={() => setIsFocus(false)}
        >
          {images.map((image, index) => (
            <motion.img
              key={`project-image-${index}`}
              src={urlFor(image).url()}
              alt={"project-images"}
              animate={{ opacity: index === current ? 1 : 0.3 }}
              className="object-contain aspect-[16/9]"
            />
          ))}
        </motion.div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex gap-3 px-3 py-1.5 bg-neutral-300 rounded-full opacity-80">
            {images.map((_, index) => (
              <button key={`dot-${index}`} onClick={() => setCurrent(index)}>
                <div
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === current ? "bg-white" : "bg-neutral-500"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default Carousal;
