"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Users2, Briefcase, LineChart, ShieldCheck, Zap, Globe } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function TargetAudience() {
    return (
        <section className="relative bg-[#000000] py-8 md:py-12 overflow-hidden border-t border-white/5">
            {/* Subtle Dot Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:32px_32px]",
                        "[background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]",
                    )}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Compact Header */}
                <div className="mb-8 md:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-[10px] font-mono text-emerald-500/70 tracking-[0.2em] uppercase">SEGMENT_AUDIT_2024</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl"
                    >
                        <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                            Built for B2B Teams That Know
                        </span>
                        <br />
                        <span className="text-white/40">They Should Be Growing </span>
                        <Cover className="text-white/40">Faster.</Cover>
                    </motion.h2>
                </div>

                {/* Compact 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden mb-12">
                    {[
                        {
                            icon: Users2,
                            label: "B2B SMEs",
                            desc: "10–200 employees scaling operational capacity",
                            badge: { icon: ShieldCheck, text: "Verified", color: "text-emerald-500" },
                            revealColor: [[16, 185, 129], [6, 78, 59]] // Emerald 500 & 900
                        },
                        {
                            icon: Briefcase,
                            label: "Founder & Sales-Led",
                            desc: "Transitioning to systematic distribution",
                            badge: { icon: Zap, text: "System Ready", color: "text-amber-500" },
                            revealColor: [[245, 158, 11], [146, 64, 14]] // Amber 500 & 900
                        },
                        {
                            icon: LineChart,
                            label: "High-ACV Model",
                            desc: "Proven PMF with high-ticket products",
                            badge: { icon: Globe, text: "Global Scale", color: "text-blue-500" },
                            revealColor: [[59, 130, 246], [30, 58, 138]] // Blue 500 & 900
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative h-full"
                        >
                            <CardSpotlight 
                                className="group h-full bg-[#0A0A0A] border-none rounded-none p-6 md:p-8 hover:bg-[#0A0A0A]"
                                radius={200}
                                color="#1a1a1a"
                                revealColor={item.revealColor}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <span className="text-[9px] font-mono text-white/20">0{i + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed mb-4">{item.desc}</p>
                                    <div className="flex items-center gap-2 text-[10px]">
                                        <item.badge.icon size={12} className={item.badge.color} />
                                        <span className="text-white/40">{item.badge.text}</span>
                                    </div>
                                </div>
                            </CardSpotlight>
                        </motion.div>
                    ))}
                </div>

                {/* Compact Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-[#0A0A0A] p-6 md:p-8"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="text-[9px] font-mono text-emerald-500/50 tracking-[0.2em] uppercase">Challenge</div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Non-Compounding Growth</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Marketing feels busy, but growth isn't compounding. We break the plateau with systematic distribution.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#0A0A0A] p-6 md:p-8"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="text-[9px] font-mono text-emerald-500/50 tracking-[0.2em] uppercase">Verticals</div>
                        </div>
                        <div className="space-y-2">
                            {["B2B SaaS", "Agencies & Consultancies", "IT Services & Dev Shops", "Professional Services"].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
                                    <span className="text-sm text-white/50">{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
