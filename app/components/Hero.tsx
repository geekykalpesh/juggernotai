"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useRef } from "react";
import { DashedGridBackground } from "./DashedGridBackground";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    
    // Parallax & Fade effects for refined scrolling
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.98]);
    const uiY = useTransform(scrollY, [0, 300], [0, 50]);

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-[#000000] px-6 text-center">
            
            {/* --- PREMIUM DASHED GRID BACKGROUND --- */}
            <DashedGridBackground />

            <motion.div 
                style={{ opacity: heroOpacity, scale: heroScale, y: uiY }}
                className="relative z-10 max-w-[1200px] w-full flex flex-col items-center gap-10 md:gap-14"
            >
                {/* --- HEADLINE AREA --- */}
                <div className="space-y-6 max-w-5xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                        <span className="text-label-sm text-white/70">The GTM Infrastructure</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-display-1 text-white"
                    >
                        Build the Ultimate <br className="hidden md:block"/>
                        <span className="text-white/40">Distribution System.</span>
                    </motion.h1>
                </div>

                {/* --- VALUE PROPOSITION (De-cluttered) --- */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-20 text-left max-w-4xl border-t border-white/10 pt-8 mt-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h3 className="text-heading-3 text-white mb-3">The Gap</h3>
                        <p className="text-body text-white/50">
                            Go-to-market is hard, slow, and expensive — especially when marketing doesn’t compound. Scattered efforts lead to unpredictable results.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-heading-3 text-white mb-3">The Engine</h3>
                        <p className="text-body text-white/50">
                            We turn manual work into a <span className="text-white">systematic engine</span>. From no real pipeline to predictable inbound demand, automated qualification, and faster sales.
                        </p>
                    </motion.div>
                </div>

                {/* --- CTA ACTION AREA --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6 mt-6"
                >
                    <button className="group relative flex items-center justify-between gap-6 pl-8 pr-2 py-2 bg-white rounded-full text-black hover:bg-gray-100 transition-colors pointer-events-auto cursor-pointer">
                        <span className="text-base font-bold tracking-tight">Book a Strategy Call</span>
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                            <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </button>
                    
                    <button className="text-sm font-medium text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
                        <PlayCircle size={16} className="group-hover:text-white transition-colors" />
                        See how it works
                    </button>
                </motion.div>

            </motion.div>
        </section>
    );
}
