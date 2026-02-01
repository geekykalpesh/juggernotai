"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DashedGridBackground() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black">
            {/* 1. Base Grid Layer */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.15]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid-pattern"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Horizontal Line */}
                        <path
                            d="M 60 0 L 0 0 0 60"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                            className="animate-dash-flow"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* 2. Animated Diagonal Overlay (The "Flow" Effect) */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.1]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="grid-flow-pattern"
                        width="60"
                        height="60"
                        patternUnits="userSpaceOnUse"
                    >
                         <path
                            d="M 60 0 L 0 0 0 60"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                        >
                            <animate 
                                attributeName="stroke-dashoffset" 
                                from="0" 
                                to="8" 
                                dur="20s" 
                                repeatCount="indefinite" 
                            />
                        </path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-flow-pattern)" />
            </svg>

            {/* 3. Random Intersection Circles (Premium Detail) */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1, 0.5] }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                        style={{
                            top: `${Math.floor(Math.random() * 10) * 10}%`,
                            left: `${Math.floor(Math.random() * 10) * 10}%`,
                        }}
                        className="absolute w-[60px] h-[60px] border border-white/20 rounded-full border-dashed opacity-20"
                    />
                ))}
            </div>
            
            {/* 4. Vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />
        </div>
    );
}
