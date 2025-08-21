"use client";

import Image from "next/image";
import React from "react";
import ProfilePic from "../public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FlipWords } from "./ui/flip-words";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);

  const words = ["Full Stack Developer", "Software Engineer", "NextJS Developer"];

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96 px-4 sm:px-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 sm:h-32 sm:w-32 object-cover shadow-xl rounded-full border-[0.35rem] border-white dark:border-gray-800"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium !leading-[1.5] max-w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Sahil.</span> I&apos;m a{" "}
        <span className="font-bold"><FlipWords className="!text-black dark:!text-white text-lg sm:text-xl md:text-2xl lg:text-3xl" duration={2000} words={words} /></span> {""}
        I enjoy building <span className="italic">websites</span>. My focus is{" "}
        <span className="underline">Next.js</span>. FullStack developer skilled in Next.js, React, Tailwind CSS, TypeScript, ShadCN, MongoDB, PostgreSQL, Prisma and Firebase. Strong portfolio in these technologies.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[1.3rem] px-2 text-base sm:text-lg font-medium flex-wrap"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-gray-200 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group relative overflow-hidden bg-white dark:bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-100"
          href="/Shinde_Sahil CV.pdf"
          download
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-200/0 via-gray-200/40 to-gray-200/0 dark:from-white/0 dark:via-white/10 dark:to-white/0 opacity-60" />
          <span className="relative font-medium">Download CV</span>
          <HiDownload className="relative opacity-80" />
        </a>

        <a
          href="https://www.linkedin.com/in/sahil-shinde-a37090259/"
          target="_blank"
          className="group bg-white dark:bg-gray-900 p-4 text-gray-700 dark:text-gray-200 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 active:scale-105 transition cursor-pointer border border-black/10 dark:border-white/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/shindesahil321"
          target="_blank"
          className="group bg-white dark:bg-gray-900 p-4 text-gray-700 dark:text-gray-200 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 active:scale-105 transition cursor-pointer border border-black/10 dark:border-white/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
