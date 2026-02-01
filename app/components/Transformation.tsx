"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { XCircle } from "lucide-react";

export function Transformation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const items = [
        "Websites that don’t convert",
        "Content that doesn’t drive demand",
        "Social presence without conversations",
        "Leads without qualification",
        "Sales teams filtering instead of closing"
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center bg-[#050608] px-6 text-center overflow-hidden">
            
            {/* Subtle Gradient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl relative z-10 flex flex-col items-center gap-16">
                
                {/* HEADLINE BLOCK */}
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                         <h2 className="text-display-1 text-white mb-6">
                            The Real Problem <br />
                            <span className="text-white/30">Isn’t Marketing.</span>
                        </h2>
                        <p className="text-heading-1 text-white/80">
                            It’s Distribution.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto"
                    />

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-body-lg text-white/50 max-w-xl mx-auto"
                    >
                        Most companies don’t lack effort. <br />
                        <span className="text-white">They lack a system.</span>
                    </motion.p>
                </div>

                {/* THE "WHAT WE SEE" LIST */}
                <div className="grid gap-4 w-full max-w-2xl text-left">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-label text-white/20 mb-4 text-center"
                    >
                        What we see repeatedly
                    </motion.div>
                    
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                        >
                            <XCircle className="w-6 h-6 text-red-500/50 group-hover:text-red-500 transition-colors shrink-0" />
                            <span className="text-body-lg text-white/60 group-hover:text-white transition-colors">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
