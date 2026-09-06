import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type TimelineItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
};

const timelineData: TimelineItem[] = [
  {
    period: "09/2024 — Present",
    role: "Frontend Engineer",
    company: "Zeta Labs",
    location: "Kuleswor, Kathmandu",
    description:
      "Building scalable web applications and complex management systems. Partnering with cross-functional teams to deliver high-quality products.",
    highlights: [
      "Architected complex mono-platform web application using React, TypeScript, Tailwind CSS, and Shadcn UI",
      "Built company public portfolio with Next.js and integrated SMTP mail service",
      "Implemented code splitting and lazy loading to reduce initial bundle size",
      "Integrated payment gateways (Stripe, eSewa) for bookings, subscriptions, and memberships",
      "Developed Clinic Management System for end-to-end patient flow",
      "Built Pharmacy Management System for medicine inventory and stock tracking",
      "Mentored junior developers through code reviews and best practices",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Next.js",
      "Stripe",
      "eSewa",
    ],
  },
  {
    period: "04/2023 — 10/2024",
    role: "Frontend Developer",
    company: "Corpola Tech",
    location: "Sankhamul, Lalitpur",
    description:
      "Designed and implemented web and mobile applications. Published open-source NPM packages and improved team development workflows.",
    highlights: [
      "Designed and implemented Learning Management System (LMS) using React and Context API",
      "Built e-commerce platform with admin dashboard using React, Tailwind CSS, and Redux",
      "Authored and published custom NPM package for reusable e-commerce layout components",
      "Developed cross-platform mobile application with responsive design across all device sizes",
    ],
    tech: [
      "React",
      "Semantic UI",
      "Context API",
      "Tailwind CSS",
      "Redux",
      "React Native",
    ],
  },
  {
    period: "2020 — 2024",
    role: "BSc. Computer Information Technology",
    company: "Webster University Nepal",
    location: "Kathmandu, Nepal",
    description:
      "Studied computer science fundamentals including software engineering, databases, web development, and project management.",
    highlights: [
      "Graduated with focus on web technologies and software engineering",
      "Multiple academic projects in full-stack development",
      "Active participation in tech clubs and open source community",
    ],
    tech: [
      "CS Fundamentals",
      "Software Engineering",
      "Java",
      "Agile",
      "Database Systems",
    ],
  },
];

const ExperiencePage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-[#999] dark:text-[#666] uppercase tracking-widest mb-3">
            Career Path
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111] dark:text-[#FAFAFA] tracking-tight mb-4">
            Work Experience
          </h1>
          <p className="text-base md:text-lg text-[#666] dark:text-[#888] max-w-2xl">
            My professional journey in software development and design.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E5E5] dark:bg-[#222] md:-translate-x-px" />

          <div className="space-y-6">
            {timelineData.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6 md:gap-12`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-[#2563EB] dark:bg-[#60A5FA] -translate-x-1 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Empty space for alternating */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`md:w-1/2 pl-6 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}
                  >
                    <motion.div
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-[#222] rounded-xl p-6 cursor-pointer hover:border-[#2563EB]/30 dark:hover:border-[#60A5FA]/30 transition-colors"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="text-xs font-mono text-[#999] dark:text-[#666] mb-1">
                            {item.period}
                          </p>
                          <h3 className="text-lg font-semibold text-[#111] dark:text-[#FAFAFA]">
                            {item.role}
                          </h3>
                          <p className="text-sm text-[#2563EB] dark:text-[#60A5FA] font-medium">
                            {item.company}
                          </p>
                          <p className="text-xs text-[#999] dark:text-[#666] mt-0.5">
                            {item.location}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-[#999] dark:text-[#666]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#999] dark:text-[#666]" />
                          )}
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-[#F0F0F0] dark:border-[#222]">
                              <p className="text-sm text-[#666] dark:text-[#999] leading-relaxed mb-4">
                                {item.description}
                              </p>

                              <div className="mb-4">
                                <p className="text-xs font-medium text-[#999] dark:text-[#666] uppercase tracking-wider mb-2">
                                  Key Contributions
                                </p>
                                <ul className="space-y-2">
                                  {item.highlights.map((highlight, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm text-[#666] dark:text-[#999]"
                                    >
                                      <span className="text-[#2563EB] dark:text-[#60A5FA] mt-1 flex-shrink-0">
                                        •
                                      </span>
                                      <span>{highlight}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p className="text-xs font-medium text-[#999] dark:text-[#666] uppercase tracking-wider mb-2">
                                  Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {item.tech.map((t, i) => (
                                    <span
                                      key={i}
                                      className="text-xs px-2.5 py-1 rounded-md bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#666] dark:text-[#999]"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
