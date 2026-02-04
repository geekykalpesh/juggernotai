"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useRef, MouseEvent } from "react";
import { DashedGridBackground } from "./DashedGridBackground";
import { Button } from "@/components/ui/button";

// --- PREMIUM ANIMATION CONSTANTS ---
const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { 
            duration: 1.2, 
            ease: [0.22, 1, 0.36, 1] as const 
        }
    }
};

const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    
    // Parallax & Fade effects for refined scrolling
    const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
    const uiY = useTransform(scrollY, [0, 400], [0, 100]);

    // Magnetic Button Logic
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        x.set((clientX - (left + width / 2)) * 0.15);
        y.set((clientY - (top + height / 2)) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-brand-bg px-6 text-center perspective-1000">
            
            {/* --- PREMIUM DASHED GRID BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                <DashedGridBackground />
            </div>

            <motion.div 
                style={{ opacity: heroOpacity, scale: heroScale, y: uiY }}
                initial="hidden"
                animate="visible"
                variants={STAGGER_CONTAINER}
                className="relative z-10 max-w-[1200px] w-full flex flex-col items-center gap-10 md:gap-14"
            >
                {/* --- HEADLINE AREA --- */}
                <div className="space-y-8 max-w-5xl flex flex-col items-center">
                    {/* Badge */}
                    <motion.div 
                        variants={FADE_UP_VARIANTS}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
                    >
                        <motion.span 
                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }} 
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                        />
                        <span className="text-label-sm text-text-secondary tracking-widest">The GTM Infrastructure</span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1 
                        variants={FADE_UP_VARIANTS}
                        className="text-display-1 text-text-primary tracking-tight leading-[1.05]"
                    >
                        Build the Ultimate <br className="hidden md:block"/>
                        <span className="bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent inline-block">
                             Distribution System.
                        </span>
                    </motion.h1>
                </div>

                {/* --- VALUE PROPOSITION (De-cluttered) --- */}
                <motion.div 
                     variants={FADE_UP_VARIANTS}
                     className="grid md:grid-cols-2 gap-8 md:gap-20 text-left max-w-4xl border-t border-brand-border/40 pt-8 mt-4 relative"
                >
                    {/* Subtle divider gradient */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div>
                        <h3 className="text-heading-3 text-text-primary mb-3 flex items-center gap-2">
                            <span className="w-1 h-3 bg-red-500/80 rounded-full" />
                            The Gap
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed opacity-80">
                            Go-to-market is hard, slow, and expensive — especially when marketing doesn’t compound. Scattered efforts lead to unpredictable results.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-heading-3 text-text-primary mb-3 flex items-center gap-2">
                             <span className="w-1 h-3 bg-emerald-500/80 rounded-full" />
                            The Engine
                        </h3>
                        <p className="text-body text-text-secondary leading-relaxed opacity-80">
                            We turn manual work into a <span className="text-text-primary font-medium border-b border-dashed border-white/20">systematic engine</span>. From no real pipeline to predictable inbound demand.
                        </p>
                    </div>
                </motion.div>

                {/* --- CTA ACTION AREA --- */}
                <motion.div 
                    variants={FADE_UP_VARIANTS}
                    className="flex flex-col sm:flex-row items-center gap-6 mt-6 perspective-500"
                >
                    {/* Magnetic Button Wrapper */}
                    <motion.button 
                        ref={ref}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ x: mouseXSpring, y: mouseYSpring }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-between gap-6 pl-8 pr-2 py-2 bg-brand-pink rounded-full text-brand-bg cursor-pointer shadow-[0_0_30px_-10px_rgba(236,72,153,0.4)] overflow-hidden"
                    >
                        {/* Shimmer Effect */}
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ repeat: Infinity, duration: 2, repeatDelay: 3, ease: "linear" }}
                        />
                        
                        <span className="text-base font-bold tracking-tight relative z-10">Book a Strategy Call</span>
                        <div className="w-10 h-10 rounded-full bg-brand-bg text-brand-pink flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                             <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 cubic-bezier(0.25, 1, 0.5, 1)" />
                        </div>
                    </motion.button>
                    
                    <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-sm font-medium text-text-secondary hover:text-white transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                             <PlayCircle size={18} className="text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        See how it works
                    </motion.button>
                </motion.div>

            </motion.div>
        </section>
    );
}
