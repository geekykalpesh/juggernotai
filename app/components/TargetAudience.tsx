"use client";

import { motion } from "framer-motion";
import { Check, Briefcase, Code2, LineChart, Users2, Rocket, Building2 } from "lucide-react";

const DESIGNED_FOR = [
    { text: "B2B SMEs with 10–200 employees", icon: Users2 },
    { text: "Founder-led or sales-led teams", icon: Briefcase },
    { text: "Selling high-ACV products/services", icon: LineChart },
    { text: "Marketing is busy, but growth isn't compounding", icon: Rocket },
];

const TYPICAL_CUSTOMERS = [
    { text: "B2B SaaS", icon: Code2 },
    { text: "Agencies & Consultancies", icon: Briefcase },
    { text: "IT Services & Dev Shops", icon: Code2 },
    { text: "High-ticket Professional Services", icon: Building2 },
];

export function TargetAudience() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#000000] px-6 py-24 md:py-0 overflow-hidden">
             
            {/* Subtle Divider Line from previous section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />

            <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* --- LEFT: HEADLINE --- */}
                <div className="flex flex-col gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-display-2 text-white mb-6">
                            Built for Teams <br />
                            <span className="text-white/40">Ready to Scale.</span>
                        </h2>
                        <p className="text-body-lg text-white/50 max-w-md">
                            We work best with B2B teams that know they should be growing faster, but are stuck in manual processes.
                        </p>
                    </motion.div>

                    {/* Decorative "Spec" Lines */}
                    <div className="w-full h-px bg-white/10" />
                    <div className="flex gap-12 text-ui-xs text-white/30">
                        <span>Series A+</span>
                        <span>Bootstrapped</span>
                        <span>High-Growth</span>
                    </div>
                </div>

                {/* --- RIGHT: DATA GRIDS --- */}
                <div className="grid gap-8">
                    
                    {/* Card 1: Criteria */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <h3 className="text-heading-3 text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Designed For
                        </h3>
                        <div className="grid gap-4">
                            {DESIGNED_FOR.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 text-white/70 group-hover:text-white/90 transition-colors">
                                    <Check size={18} className="text-emerald-500 mt-1 shrink-0" />
                                    <span className="text-body">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: Industries (Horizontal Layout) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative p-8 rounded-3xl border border-white/5 bg-transparent"
                    >
                        <h3 className="text-label text-white/40 mb-6">
                            Typical Customers
                        </h3>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {TYPICAL_CUSTOMERS.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    <span className="text-body-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
