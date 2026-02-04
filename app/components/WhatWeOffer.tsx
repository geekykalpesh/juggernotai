"use client";

import { motion } from "framer-motion";
import { Zap, Share2, Mic2, Search, ArrowUpRight } from "lucide-react";

const OFFERINGS = [
    {
        title: "Lead Generation Systems",
        description: "Complete infrastructure to capture and convert high-intent B2B demand automatically.",
        icon: Zap,
        code: "SYS_GEN",
        features: ["HubSpot/Salesforce Setup", "Enrichment & Scoring", "Automated Routing"]
    },
    {
        title: "Content Automation",
        description: "Turn one insight into unlimited assets. Systematize narrative delivery across channels.",
        icon: Share2,
        code: "SYS_CNT",
        features: ["Video → Text Repurposing", "LinkedIn & Twitter Systems", "Newsletter Engineering"]
    },
    {
        title: "AI Voice Agents",
        description: "24/7 intelligent qualification. Sales team only speaks to ready-to-buy prospects.",
        icon: Mic2,
        code: "SYS_VOX",
        features: ["Inbound Call Handling", "Outbound Reactivation", "Seamless Handoffs"]
    },
    {
        title: "Intelligent SEO",
        description: "Dominate search intent with programmatic and editorial SEO assets.",
        icon: Search,
        code: "SYS_SEO",
        features: ["Technical Audit", "Programmatic Pages", "Conversion Optimization"]
    }
];

export function WhatWeOffer() {
    return (
        <section className="relative bg-[#000000] py-8 md:py-12 overflow-hidden border-t border-white/5">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 [background-size:32px_32px] [background-image:radial-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)]" />
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
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        <span className="text-[10px] font-mono text-emerald-500/70 tracking-[0.2em] uppercase">SERVICE_CATALOG: INFRASTRUCTURE_SUITE</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl"
                    >
                        <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                            What We Offer.
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-white/50 mt-4 max-w-2xl uppercase tracking-wider"
                    >
                        A complete suite of distribution infrastructure for modern B2B teams.
                    </motion.p>
                </div>

                {/* Compact 4-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                    {OFFERINGS.map((offer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-[#0A0A0A] p-6 md:p-8 group hover:bg-white/[0.02] transition-all duration-300 relative cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-colors">
                                    <offer.icon size={18} className="text-white group-hover:text-emerald-500 transition-colors" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-mono text-white/10 group-hover:text-white/30 transition-colors">{offer.code}</span>
                                    <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-emerald-500/10">
                                        <ArrowUpRight size={12} className="text-emerald-500" />
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-white mb-2">{offer.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed mb-6">{offer.description}</p>

                            <div className="space-y-2">
                                {offer.features.map((feat, j) => (
                                    <div key={j} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
                                        <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Hover Indicator */}
                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                                <span className="text-[9px] font-mono text-emerald-500/0 group-hover:text-emerald-500 transition-all duration-300 translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                                    View Service →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
