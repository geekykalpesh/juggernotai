"use client";

import { motion } from "framer-motion";
import { Zap, Share2, Mic2, Search } from "lucide-react";

const OFFERINGS = [
    {
        title: "Lead Generation Systems",
        description: "We build the entire infrastructure to capture and convert high-intent B2B demand automatically.",
        icon: Zap,
        features: ["HubSpot/Salesforce Setup", "Enrichment & Scoring", "Automated Routing"]
    },
    {
        title: "Content Automation",
        description: "Turn one insight into unlimited assets. We systematize your narrative delivery across all channels.",
        icon: Share2,
        features: ["Video -> Text Repurposing", "LinkedIn & Twitter Systems", "Newsletter Engineering"]
    },
    {
        title: "AI Voice Agents",
        description: "24/7 intelligent qualification. Your sales team only speaks to prospects who are ready to buy.",
        icon: Mic2,
        features: ["Inbound Call Handling", "Outbound Reactivation", "Seamless Handoffs"]
    },
    {
        title: "Intelligent SEO",
        description: "Don't just rank. Dominate search intent with programmatic and editorial SEO assets.",
        icon: Search,
        features: ["Technical Audit", "Programmatic Pages", "Conversion Optimization"]
    }
];

export function WhatWeOffer() {
    return (
        <section className="py-24 bg-[#050608] relative overflow-hidden">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-16 text-center">
                     <h2 className="text-display-2 text-white mb-6">What We Offer</h2>
                     <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
                        A complete suite of distribution infrastructure for modern B2B teams.
                     </p>
                </div>

                {/* The Offerings Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {OFFERINGS.map((offer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/5">
                                    <offer.icon size={24} strokeWidth={1.5} />
                                </div>
                                <span className="text-ui-xs text-white/20 group-hover:text-white/40 transition-colors">0{i + 1}</span>
                            </div>

                            <h3 className="text-heading-2 text-white mb-4">{offer.title}</h3>
                            <p className="text-body text-white/60 mb-8 h-[3rem]">
                                {offer.description}
                            </p>

                            <div className="pt-8 border-t border-white/5">
                                <ul className="space-y-3">
                                    {offer.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3 text-body-sm text-white/40 group-hover:text-white/60 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
