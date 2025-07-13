// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";
// import ConstructionPage from "./components/ConstructionPage";
import HomePage from "@/pages/HomePage";
import Navbar from "@/pages/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "@/pages/ContactSection";
import ProjectSection from "@/pages/Project";
import InfiniteScrollAnimationPage from "@/pages/StackTicker";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-3">
                <motion.h1
                  className="text-4xl font-medium text-white tracking-tight"
                  animate={{
                    scale: [1, 1.03, 1],
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0.3)",
                      "0 0 10px rgba(255,255,255,0.5)",
                      "0 0 0px rgba(255,255,255,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Noyal Nakarmi
                </motion.h1>
                <motion.span
                  className="text-2xl md:text-4xl text-gray-300 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [-10, 0] }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  Portfolio
                </motion.span>
              </div>

              <motion.div
                className="mt-8 mx-auto w-24 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="h-full bg-white/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-y-auto overflow-x-hidden ">
          <Navbar />
          <div className="pt-24">
            <HomePage />
            <ProjectSection />
            <InfiniteScrollAnimationPage />
            <ContactSection />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
