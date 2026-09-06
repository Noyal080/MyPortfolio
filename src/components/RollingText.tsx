import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const RollingText3D = () => {
  const words = ["Developer", "Designer", "Creator"];
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      animationRef.current = window.setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % words.length);
        animate();
      }, 2500);
    };

    animate();

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isAnimating, words.length]);

  const handleHover = () => {
    setIsAnimating(false);
    if (animationRef.current) clearTimeout(animationRef.current);
  };

  const handleLeave = () => {
    setIsAnimating(true);
  };

  return (
    <div
      className="flex flex-col items-start gap-1"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#111] dark:text-[#FAFAFA] text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight"
      >
        Hi,
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="text-[#111] dark:text-[#FAFAFA] text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight"
      >
        I'm Noyal
      </motion.div>

      <div className="relative h-16 sm:h-20 md:h-24 w-full overflow-hidden">
        {words.map((word, index) => {
          const position = (index - activeIndex + words.length) % words.length;
          let transform = "";
          let opacity = 0;
          let zIndex = 0;
          let scale = 1;

          switch (position) {
            case 0:
              transform = "translateY(0)";
              opacity = 1;
              zIndex = 30;
              scale = 1;
              break;
            case 1:
              transform = "translateY(120%)";
              opacity = 0;
              zIndex = 20;
              scale = 0.95;
              break;
            case 2:
              transform = "translateY(-120%)";
              opacity = 0;
              zIndex = 10;
              scale = 0.95;
              break;
          }

          return (
            <div
              key={index}
              className="absolute inset-0 flex items-center text-3xl sm:text-4xl md:text-6xl font-medium text-[#666] dark:text-[#888]"
              style={{
                transform: `${transform} scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
                transformOrigin: "center center",
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RollingText3D;
