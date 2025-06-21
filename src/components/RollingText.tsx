import { useEffect, useState, useRef } from 'react';

const RollingText3D = () => {
    const words = ["Noyal", "Developer", "Normal Person"];
    const [activeIndex, setActiveIndex] = useState(0);
    const animationRef = useRef<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (!isAnimating) return;

        animationRef.current = window.setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => {
            if (animationRef.current) clearTimeout(animationRef.current);
        };
    }, [activeIndex, isAnimating, words.length]);

    const handleHover = () => setIsAnimating(false);
    const handleLeave = () => setIsAnimating(true);

    return (
        <div
            className="flex justify-center items-center  perspective-1000"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <div className="relative w-64  text-center transform-style-3d">
                {words.map((word, index) => {
                    const position = (index - activeIndex + words.length) % words.length;
                    let transform = '';
                    let opacity = 0;
                    let zIndex = 0;

                    switch (position) {
                        case 0: // Front
                            transform = 'translateZ(0) scale(1)';
                            opacity = 1;
                            zIndex = 30;
                            break;
                        case 1: // Top (next)
                            transform = 'rotateX(90deg) translateZ(100px)';
                            opacity = 0.8;
                            zIndex = 20;
                            break;
                        case 2: // Back
                            transform = 'rotateX(-90deg) translateZ(100px)';
                            opacity = 0.8;
                            zIndex = 10;
                            break;
                    }

                    return (
                        <div
                            key={index}
                            className={`
                absolute inset-0 flex items-center justify-center
                font-bold text-3xl transition-all duration-700

                text-white rounded-lg
              `}
                            style={{
                                transform,
                                opacity,
                                zIndex,
                                transformOrigin: 'center center',
                                backfaceVisibility: 'hidden',
                                willChange: 'transform, opacity'
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