import { motion } from "framer-motion";
import RollingText3D from "@/components/RollingText";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HomePage = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br min-h-[80vh] from-gray-900 to-gray-800 flex flex-col p-6 "
    >
      {/* Main content */}
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col  md:flex-1 gap-6"
          variants={fadeInLeft}
        >
          <motion.div variants={fadeInUp}>
            <RollingText3D />
          </motion.div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 text-4xl cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight * 0.8, // Scrolls 80% of viewport height
                  behavior: "smooth",
                });
              }}
              whileTap={{ scale: 0.9 }} // Add a slight press effect
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
