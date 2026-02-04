"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
    Network, Webhook, Activity, BarChart3, Zap, 
    Target, Cpu, GitMerge, ChevronRight, MessageSquare, 
    ArrowRight, Share2, Layers, Repeat 
} from "lucide-react";

import FlowDiagram from "./FlowDiagram";

const STAGES = [
    {
        title: "Demand Creation",
        desc: "We design and operate a unified distribution system where every component feeds the next.",
        color: "text-emerald-500",
        bgGlow: "bg-emerald-500/5",
        items: [
            "Content automation",
            "Educational reels, banners, and narrative assets",
            "SEO and AI-discoverable content"
        ],
        type: "foundation"
    },
    {
        title: "Demand Capture",
        desc: "Turning interest into measurable intent through high-performance conversion infrastructure.",
        color: "text-blue-500",
        bgGlow: "bg-blue-500/5",
        items: [
            "Conversion-optimized landing pages",
            "AI-readable content architecture",
            "Conversational interfaces"
        ],
        type: "launch"
    },
    {
        title: "Demand Qualification",
        desc: "Filtering high-value opportunities with automated pre-sales logic and conversational agents.",
        color: "text-brand-pink",
        bgGlow: "bg-brand-pink/5",
        items: [
            "Conversational chatbots",
            "AI voice agents for pre-sales",
            "Structured qualification logic"
        ],
        type: "amplify"
    },
    {
        title: "Sales Enablement",
        desc: "Ensuring your sales team only spends time on high-intent prospects with clean, enriched data.",
        color: "text-white",
        bgGlow: "bg-white/5",
        items: [
            "Clean CRM enrichment",
            "Lead routing and prioritization",
            "Sales talks only to high-intent prospects"
        ],
        type: "mastery"
    }
];

export function GTMEngineArchitecture() {
    return (
        <section className="relative bg-[#000000] overflow-visible">
            {/* Header Section (Not Sticky) */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="text-[10px] font-mono text-white/70 tracking-[0.2em] uppercase">Infrastructure Architecture</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-display-3 md:text-display-2 text-text-primary mb-6"
                >
                    The <span className="text-white/40 italic font-serif">GTM Platform.</span>
                </motion.h2>
                <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                    How Everything Works Together. This is not a collection of services—it's installed go-to-market infrastructure.
                </p>
            </div>

            {/* Sticky Stacking Cards Container */}
            <div className="relative">
                {STAGES.map((step, i) => (
                    <StickyCard key={i} step={step} index={i} total={STAGES.length} />
                ))}
            </div>
        </section>
    );
}

function StickyCard({ step, index, total }: { step: any, index: number, total: number }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Subtly scale and fade the card as it gets covered
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.8]);

    return (
        <div 
            ref={containerRef}
            className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-0"
            style={{ zIndex: index }}
        >
            <motion.div 
                style={{ scale, opacity }}
                className="w-full max-w-7xl h-[85vh] md:h-[70vh] bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden flex flex-col md:grid md:grid-cols-2 shadow-[0_-20px_100px_rgba(0,0,0,0.5)]"
            >
                {/* --- LEFT SIDE: CONTENT --- */}
                <div className="p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative shrink-0">
                    <div className={`absolute top-0 left-0 w-full h-full ${step.bgGlow} blur-[100px] pointer-events-none`} />
                    
                    <div className="relative z-10">
                        <div className={`text-[10px] font-mono ${step.color} uppercase tracking-[0.3em] mb-4 md:mb-6`}>
                            PHASE 0{index + 1}
                        </div>
                        <h3 className="text-2xl md:text-display-3 text-text-primary mb-4 md:mb-6 leading-tight">
                            {step.title}
                        </h3>
                        <p className="text-sm md:text-body text-text-secondary mb-6 md:mb-10 leading-relaxed max-w-md">
                            {step.desc}
                        </p>
                        
                        <div className="space-y-3 md:space-y-4">
                            {step.items.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className={`w-1 h-1 rounded-full ${step.color.replace('text-', 'bg-')}`} />
                                    <span className="text-[10px] md:text-ui-xs text-text-tertiary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: VISUAL FLOW --- */}
                <div className="bg-[#050505] p-4 md:p-10 flex-1 min-h-[280px] md:min-h-0 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 noise opacity-[0.03]" />
                    <FlowDiagram type={step.type} color={step.color} />
                </div>
            </motion.div>
        </div>
    );
}
