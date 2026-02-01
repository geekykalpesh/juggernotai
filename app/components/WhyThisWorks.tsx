"use client";

import { motion } from "framer-motion";
import { Activity, Repeat, Signal, Network, ArrowRight } from "lucide-react";

export function WhyThisWorks() {
    const reasons = [
        {
            title: "System-Driven",
            contrast: "not campaign-driven",
            desc: "Shift from one-off tactical bursts to a permanent infrastructure that operates 24/7.",
            icon: Activity
        },
        {
            title: "Designed for Compounding",
            contrast: "not spikes",
            desc: "Feedback loops ensure every dollar and hour spent builds permanent distribution equity.",
            icon: Repeat
        },
        {
            title: "Built Around Signal",
            contrast: "not vanity metrics",
            desc: "Optimized for actual revenue intent and qualified meetings, ignoring the noise of simple reach.",
            icon: Signal
        },
        {
            title: "Operational Integration",
            contrast: "sales and marketing as one",
            desc: "Eliminate the gap between demand creation and capture through a unified distribution protocol.",
            icon: Network
        }
    ];

    return (
        <section className="py-12 md:py-14 relative overflow-hidden bg-[#050608]">
            {/* Background elements */}
            <div className="absolute inset-0 noise opacity-[0.02] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">The Methodology</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center leading-[1.1]"
                    >
                        Why This <span className="text-white/40 italic">Works.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 relative overflow-hidden">
                                {/* Vertical Accent */}
                                <div className="absolute top-0 right-0 p-8 text-white/[0.03] group-hover:text-white/[0.08] transition-colors">
                                    <reason.icon size={80} strokeWidth={1} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/40 mb-8 group-hover:text-white transition-all duration-500">
                                        <reason.icon size={20} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-6 flex items-center gap-2">
                                        <ArrowRight size={10} className="text-white/10" />
                                        {reason.contrast}
                                    </p>

                                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Footnote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/[0.03] flex justify-center"
                >
                    <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/10">
                        engineered for operational certainty
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
