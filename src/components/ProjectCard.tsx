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
            whileHover="hover"
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
                hover: {
                    y: -6,
                    scale: 1.02,
                    boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.5,
                    },
                },
            }}
            className="relative bg-zinc-800 border border-zinc-700 rounded-2xl shadow-md p-6 w-full max-w-md mx-auto text-white h-70 flex flex-col overflow-hidden"
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-400/10 pointer-events-none rounded-2xl" />

            {/* Title: Animate position */}
            <motion.h2
                className={`z-10 relative text-white font-semibold text-xl mb-2 transition-all duration-500 ${hovered
                    ? "text-left"
                    : "absolute left-0 right-0 text-center top-1/2 translate-y-[-50%]"
                    }`}
            >
                {title}
            </motion.h2>

            {/* Main content - reveal on hover */}
            <motion.div
                className={`z-10 relative transition-opacity duration-500 flex-grow flex flex-col ${hovered ? "opacity-100 mt-4" : "opacity-0 pointer-events-none"
                    }`}
            >
                <p className="text-sm text-zinc-300 mb-3">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, idx) => (
                        <motion.span
                            key={idx}
                            className="bg-zinc-700 text-xs text-white px-3 py-1 rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                                delay: hovered ? 0.2 + idx * 0.05 : 0,
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Always at the bottom */}
                {link && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                        transition={{ delay: 0.4 }}
                        className="mt-auto pt-2 group"
                    >
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 text-sm inline-block relative"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Project →
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
