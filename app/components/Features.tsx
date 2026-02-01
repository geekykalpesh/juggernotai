"use client";

import { motion } from "framer-motion";
import { DiagramBlock, AnimatedArrow } from "./SystemDiagram";
import { Search, MousePointer2, Layers, Target, Database, Share2, PhoneCall, TrendingUp, MessageSquare, Zap, ChevronRight, BarChart3 } from "lucide-react";

export function Features() {
    return (
        <section className="py-32 bg-brand-bg relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-brand-pink font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Engine Architecture</span>
                    <h2 className="text-4xl md:text-6xl mb-8">The GTM Platform</h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        We design and operate a unified distribution system where every component feeds the next.
                        This is installed go-to-market infrastructure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Demand Creation */}
                    <div className="p-8 border border-brand-border glass rounded-[2rem] flex flex-col justify-between hover:border-violet/30 transition-all group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-6 text-violet">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Demand Creation</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Content automation & distribution",
                                    "Educational reels, banners, and narratives",
                                    "SEO and AI-discoverable architecture"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                                        <ChevronRight size={14} className="text-violet" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-brand-surface/50 border border-brand-border rounded-xl">
                            <div className="flex items-center justify-between gap-2 overflow-hidden">
                                <DiagramBlock title="Content" icon={Layers} color="violet" className="min-w-0 flex-1" />
                                <AnimatedArrow direction="right" color="violet" length={30} />
                                <DiagramBlock title="Narrative" icon={Share2} color="violet" className="min-w-0 flex-1" />
                            </div>
                        </div>
                    </div>

                    {/* Demand Capture */}
                    <div className="p-8 border border-brand-border glass rounded-[2rem] flex flex-col justify-between hover:border-brand-pink/30 transition-all group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-6 text-brand-pink">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Demand Capture</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Conversion-optimized landing pages",
                                    "AI-readable content architecture",
                                    "Conversational capture interfaces"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                                        <ChevronRight size={14} className="text-brand-pink" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-brand-surface/50 border border-brand-border rounded-xl">
                            <div className="flex items-center justify-between gap-2 overflow-hidden">
                                <DiagramBlock title="Landing" icon={MousePointer2} color="brand-pink" className="min-w-0 flex-1" />
                                <AnimatedArrow direction="right" color="brand-pink" length={30} />
                                <DiagramBlock title="Capture" icon={Search} color="brand-pink" className="min-w-0 flex-1" />
                            </div>
                        </div>
                    </div>

                    {/* Demand Qualification */}
                    <div className="p-8 border border-brand-border glass rounded-[2rem] flex flex-col justify-between hover:border-amber/30 transition-all group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center mb-6 text-amber">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Demand Qualification</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Conversational AI chatbots",
                                    "AI voice agents for pre-sales",
                                    "Structured qualification logic"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                                        <ChevronRight size={14} className="text-amber" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-brand-surface/50 border border-brand-border rounded-xl">
                            <div className="flex items-center justify-between gap-2 overflow-hidden">
                                <DiagramBlock title="Chat" icon={MessageSquare} color="amber" className="min-w-0 flex-1" />
                                <AnimatedArrow direction="right" color="amber" length={30} />
                                <DiagramBlock title="Voice" icon={PhoneCall} color="amber" className="min-w-0 flex-1" />
                            </div>
                        </div>
                    </div>

                    {/* Sales Enablement */}
                    <div className="p-8 border border-brand-border glass rounded-[2rem] flex flex-col justify-between hover:border-emerald/30 transition-all group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-6 text-emerald">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Sales Enablement</h3>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Clean CRM enrichment & sync",
                                    "Lead routing and prioritization",
                                    "High-intent prospect handoff"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                                        <ChevronRight size={14} className="text-emerald" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 bg-brand-surface/50 border border-brand-border rounded-xl">
                            <div className="flex items-center justify-between gap-2 overflow-hidden">
                                <DiagramBlock title="CRM" icon={Database} color="emerald" className="min-w-0 flex-1" />
                                <AnimatedArrow direction="right" color="emerald" length={30} />
                                <DiagramBlock title="Sales" icon={TrendingUp} color="emerald" className="min-w-0 flex-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

