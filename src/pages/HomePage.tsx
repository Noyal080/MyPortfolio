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
      className="relative bg-gradient-to-br min-h-[80vh] from-gray-900 to-gray-800 flex flex-col p-6 overflow-x-hidden"
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
