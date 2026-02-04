"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";

export function BentoGridSecondDemo() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050608]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/20 block mb-4">Discovery Phase</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Innovation <span className="text-white/40 italic">Framework.</span></h2>
                </div>

                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

// Lead Generation Systems - Animated Flow Diagram
const LeadGenerationAnimation = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden relative group">
        <div className="absolute inset-0 noise opacity-[0.05]" />

        {/* Animated Flow Nodes */}
        <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">
            {/* Sources Node */}
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-white/20 whitespace-nowrap">Sources</span>

                {/* Pulse Effect */}
                <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-white/20"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
            </motion.div>

            {/* Animated Connection Line */}
            <motion.div
                className="flex-1 h-[2px] bg-gradient-to-r from-white/20 via-white/40 to-white/20 relative"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                {/* Flowing Particle */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    animate={{ left: ["-8px", "calc(100% + 8px)"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
            </motion.div>

            {/* Scale Engine Node */}
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-white/20 whitespace-nowrap">Scale Engine</span>
            </motion.div>

            {/* Animated Connection Line */}
            <motion.div
                className="flex-1 h-[2px] bg-gradient-to-r from-white/20 via-white/40 to-white/20 relative"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                {/* Flowing Particle */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    animate={{ left: ["-8px", "calc(100% + 8px)"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />
            </motion.div>

            {/* Revenue Node */}
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.2)" }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </motion.div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-white/20 whitespace-nowrap">Revenue</span>
            </motion.div>
        </div>

        {/* Glow Effect on Hover */}
        <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
        />
    </div>
);

// Content Automation - Orbital System
const ContentAutomationAnimation = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden relative group">
        <div className="absolute inset-0 noise opacity-[0.05]" />

        <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Hub */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <motion.div
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </motion.div>

                {/* Pulse Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    animate={{ scale: [1, 1.8, 1.8], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
            </motion.div>

            {/* Orbiting Nodes */}
            {[0, 1, 2, 3].map((index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        width: "120px",
                        height: "120px",
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                    }}
                >
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                        whileHover={{ scale: 1.3, backgroundColor: "rgba(255,255,255,0.1)" }}
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5,
                        }}
                    >
                        {index === 0 && <span className="text-white/40 text-xs">📱</span>}
                        {index === 1 && <span className="text-white/40 text-xs">💡</span>}
                        {index === 2 && <span className="text-white/40 text-xs">🎯</span>}
                        {index === 3 && <span className="text-white/40 text-xs">👤</span>}
                    </motion.div>
                </motion.div>
            ))}

            {/* Orbit Path */}
            <motion.div
                className="absolute w-[120px] h-[120px] rounded-full border border-dashed border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
        </div>
    </div>
);

// Scale Engine - Lightning Energy
const ScaleEngineAnimation = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden relative group">
        <div className="absolute inset-0 noise opacity-[0.05]" />

        <div className="absolute inset-0 flex items-center justify-center">
            {/* Lightning Icon */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.3)" }}
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(255,255,255,0.1)",
                            "0 0 40px rgba(255,255,255,0.2)",
                            "0 0 20px rgba(255,255,255,0.1)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </motion.div>

                {/* Energy Rings */}
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 rounded-lg border-2 border-white/20"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.5, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.6,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </motion.div>

            {/* Energy Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/60"
                    style={{
                        left: "50%",
                        top: "50%",
                    }}
                    animate={{
                        x: [0, Math.cos((i * Math.PI * 2) / 8) * 60],
                        y: [0, Math.sin((i * Math.PI * 2) / 8) * 60],
                        opacity: [1, 0],
                        scale: [1, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    </div>
);

// Revenue - Growth Arrow
const RevenueAnimation = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden relative group">
        <div className="absolute inset-0 noise opacity-[0.05]" />

        <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Arrow */}
            <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.svg
                        className="w-7 h-7 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </motion.svg>
                </motion.div>

                {/* Trailing Effect */}
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 rounded-xl border border-white/10"
                        animate={{
                            y: [0, 10, 10],
                            opacity: [0.3, 0, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </motion.div>

            {/* Rising Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                {[0, 1, 2, 3, 4].map((index) => (
                    <motion.div
                        key={index}
                        className="w-1 bg-white/20 rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(index + 1) * 8}px` }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            type: "spring",
                        }}
                    />
                ))}
            </div>
        </div>
    </div>
);

// Visibility Pulse - Animated Bar Chart
const VisibilityPulseAnimation = () => {
    const bars = [
        { height: 40, delay: 0 },
        { height: 60, delay: 0.1 },
        { height: 35, delay: 0.2 },
        { height: 75, delay: 0.3 },
        { height: 50, delay: 0.4 },
        { height: 85, delay: 0.5 },
        { height: 45, delay: 0.6 },
        { height: 70, delay: 0.7 },
    ];

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 noise opacity-[0.05]" />

            <div className="absolute inset-0 flex items-end justify-center gap-2 px-12 pb-12">
                {bars.map((bar, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        {/* Bar */}
                        <motion.div
                            className="w-full bg-gradient-to-t from-white/30 to-white/10 rounded-t-sm relative overflow-hidden"
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.height}%` }}
                            whileHover={{ height: `${Math.min(bar.height + 10, 100)}%` }}
                            transition={{
                                duration: 0.8,
                                delay: bar.delay,
                                type: "spring",
                                bounce: 0.3,
                            }}
                        >
                            {/* Shimmer Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                                animate={{
                                    y: ["-100%", "100%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: bar.delay + 1,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Pulse at Top */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-[2px] bg-white/60"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: bar.delay,
                                }}
                            />
                        </motion.div>

                        {/* Base Indicator */}
                        <motion.div
                            className="w-full h-[2px] bg-white/10 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: bar.delay }}
                        />
                    </div>
                ))}
            </div>

            {/* Visibility Pulse Label */}
            <motion.div
                className="absolute top-4 right-4 flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <motion.div
                    className="w-2 h-2 rounded-full bg-white/60"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
                <span className="text-[8px] uppercase tracking-wider text-white/40">Visibility Pulse</span>
            </motion.div>
        </div>
    );
};

const items = [
    {
        title: "Lead Generation Systems",
        description: "End-to-end infrastructure built to capture and convert high-intent B2B demand.",
        header: <LeadGenerationAnimation />,
        className: "md:col-span-2",
        icon: <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
    },
    {
        title: "Content Automation",
        description: "Systematized narrative delivery across all channels.",
        header: <ContentAutomationAnimation />,
        className: "md:col-span-1",
        icon: <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>,
    },
    {
        title: "Scale Engine",
        description: "Amplification infrastructure for exponential growth.",
        header: <ScaleEngineAnimation />,
        className: "md:col-span-1",
        icon: <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
    },
    {
        title: "Visibility Pulse",
        description: "Real-time performance metrics and growth indicators.",
        header: <VisibilityPulseAnimation />,
        className: "md:col-span-2",
        icon: <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>,
    },
];
