"use client";

import { motion } from "framer-motion";
import { DiagramBlock } from "./SystemDiagram";
import { Layers, Target, TrendingUp } from "lucide-react";

export function Flywheel() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6">Built to Compound</h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        JuggernotAI doesn't just process leads; it builds a flywheel where every interaction
                        trains the system for the next cycle.
                    </p>
                </div>

                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Central Flywheel Text */}
                    <div className="z-10 text-center glass p-8 rounded-full border-brand-pink/20 w-48 h-48 flex items-center justify-center">
                        <p className="text-xs font-bold leading-tight">
                            EACH CLOSED DEAL<br />
                            <span className="text-brand-pink">FUELS THE NEXT</span><br />
                            CYCLE
                        </p>
                    </div>

                    {/* Rotating Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-[400px] h-[400px] border border-dashed border-brand-border rounded-full opacity-20" />
                        <div className="w-[550px] h-[550px] border border-dashed border-brand-border rounded-full opacity-10" />
                    </motion.div>

                    {/* Three Main Parts */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="absolute transform -translate-y-[240px]"
                        >
                            <DiagramBlock title="Content" icon={Layers} color="violet" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="absolute transform translate-x-[240px] translate-y-[120px]"
                        >
                            <DiagramBlock title="Outbound" icon={Target} color="brand-pink" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="absolute transform -translate-x-[240px] translate-y-[120px]"
                        >
                            <DiagramBlock title="ABM Ads" icon={TrendingUp} color="emerald" />
                        </motion.div>
                    </div>

                    {/* Connection Arrows */}
                    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#FFFFFF" />
                            </marker>
                        </defs>
                        {/* Visualizing the flow with lines would be complex here, 
                let's use animated paths that curve between blocks */}
                    </svg>
                </div>
            </div>
        </section>
    );
}
