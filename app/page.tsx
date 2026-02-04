"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TargetAudience } from "./components/TargetAudience";
import { ProblemSolution } from "./components/ProblemSolution";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { GTMEngineArchitecture } from "./components/GTMEngineArchitecture";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { WhyThisWorks } from "./components/WhyThisWorks";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-brand-bg selection:bg-brand-pink/30 selection:text-brand-pink">
            <Navbar />
            <main>
                <Hero />
                <TargetAudience />
                <ProblemSolution />

                <GTMEngineArchitecture />

                <WhatWeOffer />
                <WhyThisWorks />

                {/* Final CTA Section */}
                <section className="relative bg-[#000000] py-8 md:py-12 overflow-hidden border-t border-white/5">
                    {/* Subtle Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute inset-0 [background-size:32px_32px] [background-image:radial-gradient(rgba(236,72,153,0.1)_1px,transparent_1px)]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                                    <span className="text-[10px] font-mono text-brand-pink/70 tracking-[0.2em] uppercase">READY_TO_DEPLOY</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                                    <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                                        If Your GTM Feels Fragmented,
                                    </span>
                                    <br />
                                    <span className="text-brand-pink">Systemize It.</span>
                                </h2>
                                <p className="text-sm md:text-base text-white/50 mb-8 max-w-2xl mx-auto">
                                    We'll map your current setup and show you exactly where leverage exists.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button 
                                        variant="primary" 
                                        size="lg" 
                                        className="bg-brand-pink text-black hover:bg-brand-pink/90 shadow-xl shadow-brand-pink/20 hover:scale-105 transition-all"
                                    >
                                        Book a GTM Strategy Call
                                    </Button>
                                </div>
                                <p className="mt-6 text-xs text-white/40 font-mono uppercase tracking-widest">
                                    No pitch. Just architecture.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
