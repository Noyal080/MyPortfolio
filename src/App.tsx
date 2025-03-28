import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }} // Slower fade-in
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.8, ease: "easeOut" }} // Slower animation
          >
            Hello am I a
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.8,
              duration: 2.5,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }} // Much slower spring animation
          >
            DEVELOPER Now????
          </motion.span>
        </h1>
      </motion.div>
    </div>
  );
}

export default App;
