import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NNLogo } from "@/assets/NNLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const cvPath = "/NoyalCV.pdf"; // Place this in /public
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "NoyalCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { title: "Home", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
    { title: "CV", onClick: handleDownloadCV },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"
          }`}
        initial={{
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
        }}
        animate={{
          backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
          backgroundColor: scrolled
            ? "rgba(15, 23, 42, 0.65)"
            : "rgba(15, 23, 42, 0.5)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <NNLogo />
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                onClick={item.onClick}
                className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu with Glass Effect */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed top-16 left-0 w-full z-40 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-gray-900 bg-opacity-80 backdrop-blur-lg border-t border-gray-800"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    onClick={() => {
                      if (item.onClick) item.onClick();
                      setMobileMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
