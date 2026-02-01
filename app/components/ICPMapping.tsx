"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Layers, Users, Zap, Target } from "lucide-react";

export function ICPMapping() {
    const categories = [
        {
            title: "Strategic Design",
            subtitle: "Who We Build For",
            items: [
                "B2B SMEs with 10–200 employees",
                "Founder-led or sales-led teams",
                "Companies already selling high-ACV products or services",
                "Teams feeling marketing is busy, but growth isn’t compounding"
            ]
        },
        {
            title: "Ecosystem Mastery",
            subtitle: "Typical Customer Profiles",
            items: [
                "B2B SaaS",
                "Agencies and consultancies",
                "IT services and developer shops",
                "High-ticket professional services"
            ]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#050608]">
            {/* Background elements for depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Sticky Sidebar / Heading */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 block mb-6">
                                Precision Alignment
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-8">
                                Built for B2B Teams <br />
                                <span className="text-white/30 italic">Growing Faster.</span>
                            </h2>
                            <p className="text-lg text-white/40 leading-relaxed max-w-sm mb-12">
                                We specialize in distribution architecture for companies that have found market fit but lack system leverage.
                            </p>

                            <div className="flex border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
                                <div className="p-4 border-r border-white/5 flex flex-col items-center">
                                    <span className="text-lg font-bold text-white">100%</span>
                                    <span className="text-[8px] uppercase tracking-widest text-white/20">B2B Focus</span>
                                </div>
                                <div className="p-4 flex flex-col items-center flex-grow">
                                    <span className="text-lg font-bold text-white">Systemic</span>
                                    <span className="text-[8px] uppercase tracking-widest text-white/20">Methodology</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Dynamic Content Grid */}
                    <div className="lg:col-span-1" /> {/* Spacer */}

                    <div className="lg:col-span-6 space-y-16">
                        {categories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-[2px] w-8 bg-white/10" />
                                    <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">{category.subtitle}</h3>
                                </div>

                                <div className="grid gap-4">
                                    {category.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="group relative flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-5 relative z-10">
                                                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-white group-hover:scale-125 transition-all duration-500" />
                                                <p className="text-lg font-medium text-white/70 group-hover:text-white transition-colors">
                                                    {item}
                                                </p>
                                            </div>
                                            <ArrowRight size={16} className="text-white/0 group-hover:text-white/40 transition-all -translate-x-4 group-hover:translate-x-0" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
