"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin, FaCode } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si"

const profiles = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/shindesahil321" },
  { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/sahilshinde3377" },
  { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/user/sahilshiiiru" },
  
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/ShindeSahil15" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/sahil-shinde-a37090259" },
]

export default function ProfileLinks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">My Profiles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-black/10 dark:border-white/10"
              >
                <profile.icon className="text-4xl mb-2 text-gray-700 dark:text-gray-200" />
                 <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{profile.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
