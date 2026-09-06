import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { NNLogo } from "@/assets/NNLogo";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Work", path: "/projects" },
  { title: "About", path: "/experience" },
  { title: "Contact", path: "/contact" },
];

const handleDownloadCV = () => {
  const cvPath = "/Noyal_FullStack_CV.pdf";
  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "Noyal_Nakarmi_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-[#FAFAFA]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#E5E5E5]/50 dark:border-[#222]/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NNLogo />
                <span className="text-base font-semibold text-[#111] dark:text-[#FAFAFA] tracking-tight hidden sm:block">
                  Noyal Nakarmi
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`relative text-sm font-medium transition-colors pb-1 ${
                      isActive(item.path)
                        ? "text-[#111] dark:text-[#FAFAFA]"
                        : "text-[#666] dark:text-[#888] hover:text-[#111] dark:hover:text-[#FAFAFA]"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.title}
                    {/* Underline indicator for active state */}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2563EB] dark:bg-[#60A5FA]"
                        layoutId="activeNav"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}

              {/* Download CV Button */}
              <motion.button
                onClick={handleDownloadCV}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-[#2563EB] hover:bg-[#1D4ED8] dark:bg-[#60A5FA] dark:text-[#111] dark:hover:bg-[#93C5FD] transition-colors flex items-center gap-1.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>CV</span>
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "light" ? (
                      <Moon className="w-4 h-4 text-[#666] dark:text-[#888]" />
                    ) : (
                      <Sun className="w-4 h-4 text-[#666] dark:text-[#888]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Download CV */}
              <motion.button
                onClick={handleDownloadCV}
                className="p-2 rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Download CV"
              >
                <Download className="w-4 h-4 text-[#666] dark:text-[#888]" />
              </motion.button>

              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "light" ? (
                      <Moon className="w-4 h-4 text-[#666] dark:text-[#888]" />
                    ) : (
                      <Sun className="w-4 h-4 text-[#666] dark:text-[#888]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A] transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileMenuOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? (
                      <X className="w-5 h-5 text-[#111] dark:text-[#FAFAFA]" />
                    ) : (
                      <Menu className="w-5 h-5 text-[#111] dark:text-[#FAFAFA]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 z-40 bg-[#FAFAFA]/98 dark:bg-[#0A0A0A]/98 backdrop-blur-lg border-b border-[#E5E5E5]/50 dark:border-[#222]/50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.div
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#111] dark:text-[#FAFAFA]"
                        : "text-[#666] dark:text-[#888] hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A]"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.title}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
