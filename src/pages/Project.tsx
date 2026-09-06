import { useState } from "react";
import { projectData } from "@/data/project";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = [
  "All",
  ...Array.from(new Set(projectData.map((p) => p.category))),
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-sm font-medium text-[#999] dark:text-[#666] uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111] dark:text-[#FAFAFA] tracking-tight mb-4">
            Selected Work
          </h1>
          <p className="text-base md:text-lg text-[#666] dark:text-[#888] max-w-2xl">
            A curated collection of projects I've designed and built.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#111] dark:bg-[#FAFAFA] text-white dark:text-[#111]"
                  : "bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666] dark:text-[#888] hover:bg-[#E5E5E5] dark:hover:bg-[#222]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group border-t border-[#E5E5E5] dark:border-[#222] py-8 px-6 md:px-8 rounded-xl hover:bg-[#F9F9F9] dark:hover:bg-[#111] transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-[#999] dark:text-[#555]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666] dark:text-[#888]">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#111] dark:text-[#FAFAFA] group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#666] dark:text-[#999] max-w-xl mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666] dark:text-[#999]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-[#E5E5E5] dark:border-[#333] text-[#666] dark:text-[#888] hover:bg-[#111] dark:hover:bg-[#FAFAFA] hover:text-white dark:hover:text-[#111] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Bottom border */}
            <div className="border-t border-[#E5E5E5] dark:border-[#222]" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsPage;
