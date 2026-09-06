import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            mass: 0.5,
          },
        },
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="relative bg-white border border-[#E5E5E5] rounded-xl shadow-sm hover:shadow-md p-6 w-full max-w-md mx-auto h-70 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Title */}
      <motion.h3
        className={`z-10 relative text-[#111] font-semibold text-lg mb-3 transition-all duration-300 ${
          hovered ? "text-left" : "text-center"
        }`}
      >
        {title}
      </motion.h3>

      {/* Main content - reveal on hover */}
      <motion.div
        className={`z-10 relative transition-opacity duration-300 flex-grow flex flex-col ${
          hovered ? "opacity-100 mt-2" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-sm text-[#666] mb-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              className="bg-[#F5F5F5] text-[#666] text-xs px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: hovered ? 0.15 + idx * 0.05 : 0,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ delay: 0.3 }}
            className="mt-auto"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] text-sm inline-block font-medium hover:text-[#1D4ED8] transition-colors"
            >
              View Project →
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
