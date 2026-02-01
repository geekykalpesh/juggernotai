"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Network, Webhook, Activity, BarChart3, ChevronRight, Zap } from "lucide-react";

const STAGES = [
    {
        id: "01",
        title: "Demand Creation",
        icon: Network,
        desc: "Automated content & narrative assets tailored for your ICP.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: "02",
        title: "Demand Capture",
        icon: Webhook,
        desc: "Conversion-optimized pages & AI-readable architecture.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        id: "03",
        title: "Qualification",
        icon: Activity,
        desc: "AI voice agents & chat logic to filter tire-kickers.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        id: "04",
        title: "Sales Enablement",
        icon: BarChart3,
        desc: "High-intent routing directly to your closers.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    }
];

export function GTMEngineArchitecture() {
    return (
        <section className="py-20 bg-[#050608] relative overflow-hidden border-t border-white/5">
            
            {/* Background Details */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                
                {/* --- HEADER (Compact) --- */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <Zap size={14} className="text-white/40" />
                        <span className="text-label-sm text-white/40">Infrastructure Topology</span>
                    </motion.div>
                    
                    <h2 className="text-display-3 text-white mb-4">
                        The GTM Platform
                    </h2>
                    <p className="text-body text-white/50 max-w-xl mx-auto">
                        A unified distribution system where every component feeds the next.
                    </p>
                </div>

                {/* --- PIPELINE GRID (Redesigned for Compactness) --- */}
                <div className="relative">
                    
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-10 right-10 h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 z-0" />

                    <div className="grid md:grid-cols-4 gap-6 relative z-10">
                        {STAGES.map((stage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                {/* Connector Dot */}
                                <div className={`hidden md:flex absolute top-[2.5rem] -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#050608] border border-white/20 z-10 items-center justify-center`}>
                                   <div className={`w-1 h-1 rounded-full ${stage.color.replace('text-', 'bg-')}`} />
                                </div>

                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                                    
                                    {/* Icon Box */}
                                    <div className={`w-12 h-12 rounded-xl ${stage.bg} ${stage.border} border flex items-center justify-center ${stage.color} mb-5 group-hover:scale-110 transition-transform`}>
                                        <stage.icon size={20} strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <span className="text-ui-xs text-white/20">0{i + 1}</span>
                                            <h3 className="text-ui text-white">{stage.title}</h3>
                                        </div>
                                        <p className="text-caption text-white/50">
                                            {stage.desc}
                                        </p>
                                    </div>

                                    {/* Mobile Connector Arrow */}
                                    {i < STAGES.length - 1 && (
                                        <div className="md:hidden mt-4 text-white/10">
                                            <ChevronRight size={16} className="rotate-90" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- FOOTER NOTE --- */}
                <div className="mt-12 text-center">
                     <p className="text-sm text-white/30 font-mono">
                        Status: <span className="text-emerald-500">Active Infrastructure</span>
                     </p>
                </div>

            </div>
        </section>
    );
}
