import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experienceData: Experience[] = [
  {
    id: 1,
    type: "experience",
    title: "Frontend Developer",
    company: "Corpola Tech",
    period: "Apr 2023 - Jun 2023",
    description: "Developed a Learning Management system using React JS, Semantic UI and Context that allows users to add their lessons and learner to learn easily. Developed an ecommerce website with admin dashboard using React JS, Semantic UI, Tailwind CSS and Redux. Developed a custom package for ecommerce layout that increased team productivity and code reusability and posted it on NPM. Developed a mobile application with a user-friendly and intuitive UI/UX. Designed and implemented responsive interfaces for seamless application usability across various devices with minimal adjustments.",
    techStack: ["React", "Semantic UI", "Context API", "TailwindCSS", "Redux", "NPM", "React Native"]
  },
  {
    id: 2,
    type: "experience",
    title: "Frontend Developer",
    company: "Freelancer",
    period: "Jul 2024 - Oct 2024",
    description: "Developed a web application using React, Zustand, Tailwind CSS and TypeScript that enabled users to access the company's resources with ease. Collaborated with other front end developers to push and merge code in GitHub for version control management.",
    techStack: ["React", "Zustand", "TailwindCSS", "TypeScript"]
  },
  {
    id: 3,
    type: "experience",
    title: "Frontend Engineer",
    company: "Zeta Labs",
    period: "Sep 2024 - Present",
    description: "Developed a web application using React, React Query, Hero UI, Tailwind CSS and TypeScript that enabled users to access the company's resources with ease. Created the company's portfolio using Next.js, Tailwind CSS and TypeScript along with a simple SMTP mail service. Developed a complex mono platform application using React JS, Tailwind CSS, Shadcn UI and TypeScript along with other backend and frontend engineers. Collaborated with other front end developers and backend developers to maximize brainstorming sessions.",
    techStack: ["React", "React Query", "Hero UI", "TailwindCSS", "TypeScript", "Next.js", "Shadcn UI"]
  },
  // Education Entries
  {
    id: 4,
    type: "education",
    title: "BSc Computer Science and Information Technology",
    company: "Kathmandu Bernhardt College",
    location: "Bafal, KTM",
    period: "2018 - 2023",
    description: "Completed BSc CSIT with in-depth focus on programming, data structures, and project-based learning.",
    techStack: []
  },
  {
    id: 5,
    type: "education",
    title: "+2 High School",
    company: "Kathmandu Bernhardt College",
    location: "Balkhu, KTM",
    period: "2016 - 2018",
    description: "Focused on core science subjects including physics, math, and computer science.",
    techStack: []
  },
  {
    id: 6,
    type: "education",
    title: "SLC",
    company: "Jesse's International Boarding Secondary School",
    location: "Satungal, KTM",
    period: "2004 - 2016",
    description: "School Leaving Certificate with focus on foundational subjects.",
    techStack: []
  }
];

interface Experience {
  id: number;
  type: "experience" | "education";
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  techStack: string[];
}

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Timeline
        </motion.h1>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 transform md:-translate-x-1/2 z-0"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-4 bg-cyan-400 rounded-full"
              animate={{
                boxShadow: ['0 0 5px #00ffff', '0 0 20px #00ffff', '0 0 5px #00ffff'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </motion.div>

          <div className="space-y-8 md:space-y-12 relative z-10">
            {experienceData.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isActive={activeItem === experience.id}
                setActive={setActiveItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isActive: boolean;
  setActive: (id: number | null) => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  index,
  isActive,
  setActive
}) => {
  // For mobile, all items are on the right side
  // For desktop, alternate between left and right
  const isLeft = index % 2 === 0;

  // Determine colors based on type
  const isExperience = experience.type === "experience";
  const primaryColor = isExperience ? "cyan" : "purple";
  const secondaryColor = isExperience ? "blue" : "pink";

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setActive(experience.id)}
      onMouseLeave={() => setActive(null)}
    >
      {/* Timeline dot */}
      <motion.div
        className={`absolute left-6 w-6 h-6 rounded-full bg-${primaryColor}-500 border-4 border-gray-900 transform -translate-x-1/2 z-20 md:left-1/2 ${isActive ? 'scale-125' : ''}`}
        animate={{
          boxShadow: isActive
            ? [`0 0 10px #${isExperience ? '00ffff' : 'd8b4fe'}`, `0 0 20px #${isExperience ? '00ffff' : 'd8b4fe'}`, `0 0 10px #${isExperience ? '00ffff' : 'd8b4fe'}`]
            : `0 0 5px #${isExperience ? '00ffff' : 'd8b4fe'}`,
        }}
        transition={{
          duration: 2,
          repeat: isActive ? Infinity : 0,
          repeatType: 'reverse'
        }}
      />

      {/* Content */}
      <motion.div
        className={`w-[calc(100%-2rem)] md:w-5/12 ml-8 md:ml-0 mt-2 md:mt-0 p-3 md:p-6 rounded-xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 shadow-lg ${isActive ? `border-${primaryColor}-500/50 shadow-${primaryColor}-500/20` : ''} transition-all duration-300`}
        initial={{
          x: isLeft ? -100 : 100,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: isActive ? `0 0 25px rgba(${isExperience ? '0, 255, 255' : '192, 132, 252'}, 0.3)` : `0 0 15px rgba(${isExperience ? '0, 255, 255' : '192, 132, 252'}, 0.1)`
        }}
      >
        {/* Type indicator */}
        <motion.div
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
          style={{
            backgroundColor: isExperience ? 'rgba(6, 182, 212, 0.2)' : 'rgba(192, 132, 252, 0.2)',
            color: isExperience ? '#67e8f9' : '#e9d5ff',
            border: `1px solid ${isExperience ? 'rgba(6, 182, 212, 0.5)' : 'rgba(192, 132, 252, 0.5)'}`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {isExperience ? "Work Experience" : "Education"}
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <motion.h3
            className={`text-lg md:text-xl font-bold text-${primaryColor}-300 mb-1 sm:mb-0 break-words`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {experience.title}
          </motion.h3>
          <motion.span
            className={`text-xs md:text-sm px-2 md:px-3 py-1 rounded-full bg-${primaryColor}-900/50 text-${primaryColor}-300 whitespace-nowrap`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {experience.period}
          </motion.span>
        </div>

        <motion.p
          className={`text-base md:text-lg font-semibold mb-2 text-${secondaryColor}-300 break-words`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {experience.company}
        </motion.p>

        {/* Location for education entries */}
        {experience.location && (
          <motion.div
            className="flex items-center text-gray-300 mb-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="break-words">{experience.location}</span>
          </motion.div>
        )}

        <motion.p
          className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed break-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {experience.description}
        </motion.p>

        {/* Tech stack for experience entries */}
        {experience.techStack.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-1 md:gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {experience.techStack.map((tech, i) => (
              <motion.span
                key={i}
                className={`px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gray-700/50 border border-${primaryColor}-500/30 text-${primaryColor}-200`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `rgba(${isExperience ? '6, 182, 212' : '192, 132, 252'}, 0.2)`,
                  borderColor: `rgba(${isExperience ? '6, 182, 212' : '192, 132, 252'}, 0.5)`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>

      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

export default Timeline;