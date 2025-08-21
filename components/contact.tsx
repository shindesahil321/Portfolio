"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-full max-w-[min(100%,38rem)] px-4"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4 text-sm sm:text-base">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sahilshinde3377@gmail.com">
          sahilshinde3377@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col items-center w-full max-w-md mx-auto"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="h-12 sm:h-14 w-full rounded-lg border border-black/10 px-3 sm:px-4 text-sm sm:text-base"
          placeholder="Your email"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
        />
        <textarea
          className="h-40 sm:h-52 w-full my-3 rounded-lg border border-black/10 p-3 sm:p-4 text-sm sm:text-base"
          placeholder="Your message"
          name="message"
          required
          maxLength={1000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[2.5rem] sm:h-[3rem] w-[7rem] sm:w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 text-sm sm:text-base"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}