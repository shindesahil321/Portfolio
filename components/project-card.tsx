import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';
import type { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];  // Updated to accept readonly arrays
  imageUrl: StaticImageData;
  linkToProject: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  linkToProject,
}: ProjectCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 w-full"
    >
      <section className="bg-white max-w-full md:max-w-[42rem] border border-gray-200 rounded-lg overflow-hidden relative hover:shadow-lg transition duration-300 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col">
            <h3 className="text-lg md:text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600 leading-relaxed dark:text-gray-300">
              {description}
            </p>
            <div className="mt-3 md:mt-4 flex flex-wrap gap-1 md:gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={linkToProject}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-6 inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 font-medium text-sm md:text-base"
            >
              View Project
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
            </a>
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-0">
            <Image
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              className="w-full h-auto md:absolute md:top-4 md:right-4 md:w-[calc(50%-2rem)] md:h-auto rounded-lg shadow-xl
                transition duration-300
                group-hover:scale-[1.02]
                group-hover:-translate-x-1
                group-hover:translate-y-1
                group-hover:-rotate-1"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

