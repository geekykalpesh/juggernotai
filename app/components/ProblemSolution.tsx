"use client";

import { motion } from "framer-motion";
import { AlertCircle, Activity, Layers, Terminal, Database, ShieldAlert } from "lucide-react";

export function ProblemSolution() {
    return (
        <section className="relative bg-[#000000] py-8 md:py-12 overflow-hidden border-t border-white/5">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 [background-size:32px_32px] [background-image:radial-gradient(rgba(255,100,100,0.1)_1px,transparent_1px)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Compact Header */}
                <div className="mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
                    >
                        <AlertCircle size={12} className="text-red-500" />
                        <span className="text-[10px] font-mono text-red-500/70 tracking-[0.2em] uppercase">SYS_DIAGNOSTIC: FAULT_IN_GTM_LAYER</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl"
                    >
                        <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                            The Real Problem Isn't{" "}
                            <span className="line-through decoration-red-500/40 text-white/20">Marketing</span>.
                        </span>
                        <br />
                        <span className="text-white/40">It's Distribution.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/50 mt-6 max-w-3xl"
                    >
                        Most companies don't lack effort.{" "}
                        <span className="text-white/70 italic font-mono underline decoration-white/10 underline-offset-4">They lack a system.</span>
                    </motion.p>
                </div>

                {/* Compact 4-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden mb-8">
                    {[
                        {
                            icon: Activity,
                            code: "01_LEAK",
                            title: "Websites that don't convert",
                            desc: "High-traffic landing pages that fail to capture intent or drive meaningful pipeline actions."
                        },
                        {
                            icon: Layers,
                            code: "02_DIST",
                            title: "Content that doesn't drive demand",
                            desc: "Consistency without conversion. Publishing volumes that don't create buyer urgency."
                        },
                        {
                            icon: Terminal,
                            code: "03_STTL",
                            title: "Social presence without conversations",
                            desc: "Vanity metrics that don't translate into high-value relationships or sales opportunities."
                        },
                        {
                            icon: Database,
                            code: "04_QLOG",
                            title: "Leads without qualification",
                            desc: "Clogged CRM systems filled with low-intent contacts that waste expensive sales resources."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-[#0A0A0A] p-6 md:p-8 group hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden cursor-pointer border border-transparent hover:border-red-500/10"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <item.icon size={60} strokeWidth={0.5} className="text-red-500" />
                            </div>
                            <div className="flex items-start justify-between mb-6 relative z-10">
                                <div className="p-1.5 rounded-lg bg-red-500/5 border border-red-500/20 group-hover:bg-red-500/10 transition-colors duration-300">
                                    <item.icon size={16} className="text-red-500" />
                                </div>
                                <span className="text-[9px] font-mono text-white/10 group-hover:text-white/30 transition-colors">{item.code}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 relative z-10 group-hover:text-red-100 transition-colors duration-300">{item.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed relative z-10 group-hover:text-white/60 transition-colors duration-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Compact Special Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#0A0A0A] border border-white/5 rounded-lg p-6 md:p-10 relative overflow-hidden group"
                >
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ShieldAlert size={120} strokeWidth={0.5} className="text-red-500" />
                    </div>
                    <div className="max-w-3xl relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-red-500/5 border border-red-500/20">
                                <ShieldAlert size={20} className="text-red-500" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">Sales teams filtering instead of closing</h3>
                        </div>
                        <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6">
                            Your best closers spending{" "}
                            <span className="text-red-500/70 font-semibold group-hover:text-red-500 transition-colors">70% of their time acting as filters</span>
                            {" "}for unqualified leads instead of generating revenue.
                        </p>
                        <div className="flex items-center gap-6 border-t border-white/5 pt-6">
                            <div className="flex flex-col">
                                <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest mb-1">Wasted Capacity</span>
                                <span className="text-base font-semibold text-red-500/60 group-hover:text-red-500 transition-colors">High Risk</span>
                            </div>
                            <div className="w-px h-8 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest mb-1">Segment Impact</span>
                                <span className="text-base font-semibold text-white/40">Critical Fault</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
