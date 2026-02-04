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
        <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center bg-brand-bg px-6 py-24 md:py-32 text-center overflow-hidden">
            
            {/* Subtle Gradient Backlight - Slightly muted red for 'problem' vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-5xl relative z-10 flex flex-col items-center gap-16 md:gap-24">
                
                {/* HEADLINE BLOCK */}
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                         <h2 className="text-display-1 text-text-primary mb-6">
                            The Real Problem <br />
                            <span className="text-text-secondary opacity-50">Isn’t Marketing.</span>
                        </h2>
                        <p className="text-heading-1 text-red-500/90 font-medium tracking-wide">
                            It’s Distribution.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="w-px h-24 bg-gradient-to-b from-brand-border to-transparent mx-auto"
                    />

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-body-lg text-text-secondary max-w-xl mx-auto leading-relaxed"
                    >
                        Most companies don’t lack effort. <br />
                        <span className="text-text-primary font-semibold border-b border-brand-pink/30 pb-1">They lack a system.</span>
                    </motion.p>
                </div>

                {/* THE "WHAT WE SEE" LIST */}
                <div className="grid gap-4 w-full max-w-2xl text-left">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-label-sm text-text-tertiary mb-6 text-center uppercase tracking-[0.2em]"
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
                            className="group flex items-center gap-6 p-6 rounded-lg border border-brand-border/40 bg-brand-surface/30 hover:bg-brand-surface/60 transition-all duration-300 hover:scale-[1.01] hover:border-red-500/20 hover:shadow-lg hover:shadow-red-900/5 cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                                <XCircle className="w-5 h-5 text-red-500/70 group-hover:text-red-500 transition-colors" />
                            </div>
                            <span className="text-body text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
