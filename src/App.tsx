import { useEffect, useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/hooks/useTheme";
import Navbar from "@/pages/Navbar";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/Project";
import ExperiencePage from "@/pages/Timeline";
import ContactPage from "@/pages/ContactSection";

/* ------------------------------------------------------------------ */
/*  Loading Screen Component with Theme Support                        */
/* ------------------------------------------------------------------ */
const LoadingScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3100);
    return () => clearTimeout(timer);
  }, []);

  const isDark = theme === "dark";

  return (
    <AnimatePresence mode="wait">
      {!loaded && (
        <motion.div
          key="loader"
          className={`w-screen h-screen flex items-center justify-center fixed inset-0 z-50 ${
            isDark
              ? "bg-gradient-to-br from-gray-900 to-gray-800"
              : "bg-gradient-to-br from-gray-900 to-gray-800"
          }`}
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
  );
};

/* ------------------------------------------------------------------ */
/*  App Root                                                          */
/* ------------------------------------------------------------------ */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen />}
        </AnimatePresence>

        {!isLoading && (
          <BrowserRouter>
            <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#111] dark:text-[#FAFAFA] transition-colors duration-300">
              <Navbar />
              <motion.main
                key={window.location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </motion.main>

              {/* Footer */}
              <footer className="py-8 text-center text-sm text-[#999] dark:text-[#555]">
                <p>© {new Date().getFullYear()} Noyal Nakarmi</p>
              </footer>
            </div>
          </BrowserRouter>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
