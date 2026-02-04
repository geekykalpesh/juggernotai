"use client";

import { motion } from "framer-motion";
import { Activity, Repeat, Signal, Network } from "lucide-react";

const REASONS = [
    {
        title: "System-Driven",
        contrast: "NOT_CAMPAIGN_DRIVEN",
        desc: "Shift from one-off tactical bursts to permanent infrastructure that operates 24/7.",
        icon: Activity,
        code: "STRAT_01"
    },
    {
        title: "Compounding",
        contrast: "NOT_PERIODIC_SPIKES",
        desc: "Feedback loops ensure every dollar spent builds permanent distribution equity.",
        icon: Repeat,
        code: "STRAT_02"
    },
    {
        title: "Signal-Centric",
        contrast: "NOT_VANITY_METADATA",
        desc: "Optimized for actual revenue intent and qualified meetings, ignoring the noise.",
        icon: Signal,
        code: "STRAT_03"
    },
    {
        title: "Operational Sync",
        contrast: "UNIFIED_SALES_MKTG",
        desc: "Eliminate the gap between demand creation and capture through unified protocol.",
        icon: Network,
        code: "STRAT_04"
    }
];

export function WhyThisWorks() {
    return (
        <section className="relative bg-[#000000] py-8 md:py-12 overflow-hidden border-t border-white/5">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 [background-size:32px_32px] [background-image:radial-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Compact Header */}
                <div className="mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <span className="text-[10px] font-mono text-blue-500/70 tracking-[0.2em] uppercase">METHODOLOGY: COMP_LOGIC_V4.0</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl"
                    >
                        <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                            Why This Works.
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-white/50 mt-4 max-w-2xl uppercase tracking-wider"
                    >
                        Engineered for operational certainty. A methodology built on distribution parity.
                    </motion.p>
                </div>

                {/* Compact 4-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-[#0A0A0A] p-6 md:p-8 group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden flex flex-col"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <reason.icon size={80} strokeWidth={0.5} className="text-white" />
                            </div>

                            <div className="relative z-10 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                        <reason.icon size={16} className="text-white group-hover:text-blue-500 transition-colors" />
                                    </div>
                                    <span className="text-[9px] text-white/20 font-mono">{reason.code}</span>
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-px w-3 bg-white/10" />
                                    <span className="text-[8px] font-mono text-white/30 group-hover:text-blue-500/60 transition-colors tracking-wider">{reason.contrast}</span>
                                </div>

                                <p className="text-sm text-white/50 leading-relaxed flex-1">{reason.desc}</p>

                                <div className="pt-4 mt-4 border-t border-white/5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[8px] font-mono text-white/10 group-hover:text-white/30 transition-colors">VERIFIED</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(dot => (
                                                <div key={dot} className="w-1 h-1 rounded-full bg-white/5 group-hover:bg-blue-500/30 transition-colors" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
