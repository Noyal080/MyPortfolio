import React from "react";
import { motion } from "framer-motion";
import { Download, HardHat, Lightbulb } from "lucide-react";

const ConstructionPage: React.FC = () => {
  const lightbulbVariants = {
    on: { opacity: 1, scale: 1.1 },
    off: { opacity: 0.3, scale: 1 },
  };

  const hardhatVariants = {
    rotate: {
      rotate: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1e40af",
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const handleDownloadCV = () => {
    const cvPath = "/NoyalCV.pdf"; // Place this in /public
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "NoyalCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
          variants={itemVariants}
        >
          Construction in Progress
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          My website is currently under development.
          <br className="hidden md:block" />
          Please check back soon for updates.
        </motion.p>

        {/* Icons container */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-12 mb-12"
          variants={itemVariants}
        >
          {/* Blinking lightbulb */}
          <motion.div
            animate="on"
            variants={lightbulbVariants}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.4, 0, 0.6, 1],
            }}
            className="text-yellow-400"
          >
            <Lightbulb size={48} className="md:w-16 md:h-16" />
          </motion.div>

          {/* Rotating hard hat */}
          <motion.div
            animate="rotate"
            variants={hardhatVariants}
            className="text-orange-400"
          >
            <HardHat size={48} className="md:w-16 md:h-16" />
          </motion.div>
        </motion.div>

        {/* Download CV button */}
        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 mx-auto shadow-lg transition-colors duration-200"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleDownloadCV}
          >
            <Download size={20} />
            <span className="text-lg">Download CV</span>
          </motion.button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-slate-400 text-sm md:text-base"
          variants={itemVariants}
        >
          <p>Expected completion: Coming Soon</p>
          <p className="mt-2">Thank you for your patience!</p>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ConstructionPage;
