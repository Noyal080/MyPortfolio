import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RollingText3D from "@/components/RollingText";

const HomePage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-sm font-medium text-[#999] dark:text-[#666] uppercase tracking-widest mb-6">
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-8"
            >
              <RollingText3D />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base md:text-lg text-[#666] dark:text-[#999] max-w-md leading-relaxed mb-10"
            >
              I craft digital experiences with clean code and thoughtful design.
              Currently focused on building accessible, performant web
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <button className="group px-6 py-2.5 bg-[#111] dark:bg-[#FAFAFA] text-white dark:text-[#111] text-sm font-medium rounded-full hover:bg-[#2563EB] dark:hover:bg-[#333] transition-colors flex items-center gap-2">
                  View Work
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-6 py-2.5 border border-[#DDD] dark:border-[#333] text-[#111] dark:text-[#FAFAFA] text-sm font-medium rounded-full hover:border-[#111] dark:hover:border-[#FAFAFA] transition-colors">
                  Contact
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 dark:from-[#2563EB]/10 dark:to-[#7C3AED]/10" />
              <div className="absolute inset-4 rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] overflow-hidden">
                <img
                  src="/Me.JPG"
                  alt="Noyal Nakarmi"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.classList.add(
                        "flex",
                        "items-center",
                        "justify-center",
                      );
                      parent.innerHTML =
                        '<div class="text-6xl font-bold text-[#DDD] dark:text-[#333]">NN</div>';
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/projects">
            <motion.div
              className="cursor-pointer text-[#999] dark:text-[#555] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
