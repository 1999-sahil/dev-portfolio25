"use client";

import React, { useEffect, useState } from 'react'
import Error from './error';
import { motion } from 'motion/react';

interface ProjectUiProps {
    title: string;
    projectDescription: string;
    slug: string;
    _createdAt: string;
    techStack: string[];
    coverImage: string;
};

function ProjectUi({
    title,
    projectDescription,
    slug,
    _createdAt,
    techStack,
    coverImage
}: ProjectUiProps) {
    const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
    
      useEffect(() => {
        // Simulate async work here
        const timer = setTimeout(() => {
    
          // Mark loading as finished
          setIsLoading(false);
        }, 1000);
    
        // Cleanup timeout on unmount
        return () => clearTimeout(timer);
      }, []);
    
      // Show error UI
      if (error) {
        return <Error />;
      }
  return (
    <div>
        {/** Loading State */}
        {isLoading && (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="">
            loading
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {!isLoading && !error && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={slug}
          className="flex flex-col cursor-pointer"
        >
            data
        </motion.div>
      )}
    </div>
  )
}

export default ProjectUi