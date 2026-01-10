import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaFilter,
} from "react-icons/fa";
import myWorkData from "../../data/Mywork-data.js";

const categories = ["All", ...new Set(myWorkData.map(item => item.category))];

const Mywork = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? myWorkData
      : myWorkData.filter(
          project => project.category === activeCategory
        );

  return (
    <section
      id="work"
      className="relative py-24 sm:py-28
                 bg-gradient-to-b from-gray-100 via-white to-gray-50
                 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5
                      bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)]
                      bg-[size:40px_40px]" />

      {/* Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Completed <span className="text-indigo-600">Projetcs</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Selected projects demonstrating secure systems, scalable architecture,
            and modern UI engineering.
          </p>
        </motion.div>

        {/* ================= FILTERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`flex items-center gap-2 px-5 py-2 rounded-full
                text-sm font-semibold transition-all focus:outline-none
                focus-visible:ring-2 focus-visible:ring-indigo-500
                ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700"
                }`}
            >
              <FaFilter className="text-xs opacity-80" />
              {category}
            </button>
          ))}
        </motion.div>

        {/* ================= PROJECTS GRID ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {filteredProjects.map(project => (
              <motion.article
                key={project.id}
                layout
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden
                           bg-white dark:bg-gray-900
                           border border-gray-200/50 dark:border-gray-800
                           shadow-lg hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover
                               transition-transform duration-500
                               group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t
                                  from-black/70 via-black/20 to-transparent
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity" />

                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-5
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-indigo-600 text-white
                                   hover:bg-indigo-700 focus-visible:ring-2
                                   focus-visible:ring-white transition"
                        aria-label="View live project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-900 text-white
                                   hover:bg-black focus-visible:ring-2
                                   focus-visible:ring-white transition"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block mb-3 text-xs font-semibold px-3 py-1 rounded-full
                                   bg-gray-100 text-gray-800 border border-gray-200
                                   dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full
                                   bg-gray-100 dark:bg-gray-800
                                   text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Empty State Safety */}
            {filteredProjects.length === 0 && (
              <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                No projects found for this category.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Mywork;
