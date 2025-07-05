import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const RollingText3D = () => {
  const words = ["Noyal Nakarmi", "a React Developer", "a Normal Person"];
  const [activeIndex, setActiveIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const animate = () => {
      animationRef.current = window.setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % words.length);
        animate();
      }, 3000);
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
      className="flex flex-col items-start gap-2 perspective-1000 w-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-[4px_4px_0px_rgba(0,255,200,0.5)]"
      >
        Hi,
      </motion.div>

      {/* Animated I'm */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        className="text-white text-6xl font-bold leading-tight drop-shadow-[4px_4px_0px_rgba(0,255,200,0.5)] w-full break-words"
      >
        I'm
      </motion.div>

      <div className="relative h-32 w-full transform-style-3d">
        {words.map((word, index) => {
          const position = (index - activeIndex + words.length) % words.length;
          let transform = "";
          let opacity = 0;
          let zIndex = 0;
          let gradient = "";
          let scale = 1;

          switch (position) {
            case 0:
              transform = "translateZ(0px) rotateX(0deg)";
              opacity = 1;
              zIndex = 30;
              gradient = "from-purple-500 via-pink-500 to-red-500";
              scale = 1;
              break;
            case 1:
              transform = "translateZ(-30px) rotateX(90deg)";
              opacity = 0.7;
              zIndex = 20;
              gradient = "from-purple-400 via-pink-400 to-red-400";
              scale = 0.9;
              break;
            case 2:
              transform = "translateZ(-30px) rotateX(-90deg)";
              opacity = 0.7;
              zIndex = 10;
              gradient = "from-purple-300 via-pink-300 to-red-300";
              scale = 0.9;
              break;
          }

          return (
            <div
              key={index}
              className={`
          absolute inset-0 flex items-center justify-start
          font-bold text-6xl md:text-7xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          bg-gradient-to-r ${gradient} bg-clip-text text-transparent
          will-change-transform
        `}
              style={{
                transform: `${transform} scale(${scale})`,
                opacity,
                zIndex,
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
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
