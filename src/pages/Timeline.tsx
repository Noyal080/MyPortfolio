import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

const TimelineItem = ({
  item,
  index,
  isActive,
  onClick,
}: {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  onClick: (id: string) => void;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Date */}
      <div
        className={`flex-1 flex items-center ${
          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
        } px-4 py-2`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-gray-600 font-medium"
        >
          {item.date}
        </motion.div>
      </div>

      {/* Icon */}
      <div className="flex justify-center items-center w-12 h-12 mx-auto rounded-full z-10 relative">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={
            inView
              ? {
                  scale: [1, 1.1, 1],
                  transition: { delay: index * 0.2, duration: 0.5 },
                }
              : {}
          }
          onClick={() => onClick(item.id)}
          className={`w-full h-full rounded-full flex items-center justify-center text-white cursor-pointer ${item.color} shadow-lg`}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${
          index % 2 === 0 ? "md:pr-8" : "md:pl-8"
        } px-4 py-2`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 + 0.3 },
                }
              : {}
          }
          className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`absolute top-0 left-0 h-1 ${item.color.replace(
              "bg-",
              "bg-opacity-70 bg-"
            )}`}
          />

          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="text-gray-600 overflow-hidden"
              >
                {item.description}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-3 inline-block px-4 py-2 rounded-md bg-gray-100 text-gray-700 text-sm font-medium cursor-pointer"
                >
                  Learn more →
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll progress through timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  // Animate the timeline line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData: TimelineItem[] = [
    {
      id: "1",
      date: "January 2023",
      title: "Project Kickoff",
      description:
        "Initial planning and team formation for the new project. We established goals, timelines, and assigned roles to team members.",
      icon: "🚀",
      color: "bg-blue-500",
    },
    {
      id: "2",
      date: "March 2023",
      title: "First Prototype",
      description:
        "Completed the first working prototype with basic features. Conducted internal testing and identified key areas for improvement.",
      icon: "🧪",
      color: "bg-green-500",
    },
    {
      id: "3",
      date: "June 2023",
      title: "User Testing",
      description:
        "Conducted extensive user testing with 50+ participants. Gathered valuable feedback that shaped our product direction.",
      icon: "👥",
      color: "bg-yellow-500",
    },
    {
      id: "4",
      date: "September 2023",
      title: "Feature Complete",
      description:
        "Implemented all planned features and improvements based on user feedback. Finalized documentation and prepared for launch.",
      icon: "✅",
      color: "bg-purple-500",
    },
    {
      id: "5",
      date: "December 2023",
      title: "Official Launch",
      description:
        "Successfully launched the product to the public with a marketing campaign. Achieved 10,000 signups in the first week.",
      icon: "🎉",
      color: "bg-red-500",
    },
  ];

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="max-w-4xl w-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Interactive Timeline
          <motion.div
            className="h-1 w-20 bg-blue-500 mx-auto mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.h1>

        <div ref={timelineRef} className="relative h-[150vh] overflow-hidden">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="relative w-full">
              {/* Animated timeline line */}
              <div className="absolute left-6 top-0 h-full w-1 bg-gray-200 md:left-1/2 md:-ml-1 overflow-hidden">
                <motion.div
                  className={`w-full bg-blue-500`}
                  style={{ height: lineHeight }}
                />
              </div>

              {/* Timeline items */}
              <div className="space-y-16">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={activeItem === item.id}
                    onClick={toggleItem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
