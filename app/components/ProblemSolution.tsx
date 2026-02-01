"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, X, Check, AlertCircle, TrendingUp } from "lucide-react";

interface Problem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    diagram: {
        before: { label: string; status: "error" }[];
        after: { label: string; status: "success" }[];
    };
}

const problems: Problem[] = [
    {
        id: 1,
        title: "Websites that don't convert",
        description: "Beautiful design, zero conversions. Visitors leave without taking action.",
        icon: <AlertCircle className="w-5 h-5" />,
        diagram: {
            before: [
                { label: "Generic messaging", status: "error" as const },
                { label: "No clear CTA", status: "error" as const },
                { label: "Slow load times", status: "error" as const },
            ],
            after: [
                { label: "Conversion-optimized copy", status: "success" as const },
                { label: "Strategic CTAs", status: "success" as const },
                { label: "Performance optimized", status: "success" as const },
            ],
        },
    },
    {
        id: 2,
        title: "Content that doesn't drive demand",
        description: "Publishing consistently but generating zero qualified leads.",
        icon: <AlertCircle className="w-5 h-5" />,
        diagram: {
            before: [
                { label: "Random topics", status: "error" as const },
                { label: "No distribution plan", status: "error" as const },
                { label: "Vanity metrics", status: "error" as const },
            ],
            after: [
                { label: "Intent-driven content", status: "success" as const },
                { label: "Multi-channel distribution", status: "success" as const },
                { label: "Lead generation focus", status: "success" as const },
            ],
        },
    },
    {
        id: 3,
        title: "Social presence without conversations",
        description: "Followers don't equal customers. Engagement doesn't equal revenue.",
        icon: <AlertCircle className="w-5 h-5" />,
        diagram: {
            before: [
                { label: "Broadcasting only", status: "error" as const },
                { label: "No engagement strategy", status: "error" as const },
                { label: "Disconnected from sales", status: "error" as const },
            ],
            after: [
                { label: "Conversation-first approach", status: "success" as const },
                { label: "Community building", status: "success" as const },
                { label: "Social → Pipeline flow", status: "success" as const },
            ],
        },
    },
    {
        id: 4,
        title: "Leads without qualification",
        description: "Your CRM is full of contacts that will never buy.",
        icon: <AlertCircle className="w-5 h-5" />,
        diagram: {
            before: [
                { label: "All leads treated equal", status: "error" as const },
                { label: "Manual qualification", status: "error" as const },
                { label: "Sales wastes time", status: "error" as const },
            ],
            after: [
                { label: "AI-powered scoring", status: "success" as const },
                { label: "Automated qualification", status: "success" as const },
                { label: "Sales talks to buyers only", status: "success" as const },
            ],
        },
    },
    {
        id: 5,
        title: "Sales teams filtering instead of closing",
        description: "Your closers are doing discovery calls with tire-kickers.",
        icon: <AlertCircle className="w-5 h-5" />,
        diagram: {
            before: [
                { label: "Unqualified demos", status: "error" as const },
                { label: "Low close rates", status: "error" as const },
                { label: "Wasted capacity", status: "error" as const },
            ],
            after: [
                { label: "Pre-qualified pipeline", status: "success" as const },
                { label: "High-intent prospects", status: "success" as const },
                { label: "Optimized close rates", status: "success" as const },
            ],
        },
    },
];

const WorkflowDiagram = ({ problem, isActive }: { problem: Problem; isActive: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 50 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32 h-fit"
        >
            <div className="glass-strong rounded-2xl p-8 border border-white/10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                        {problem.icon}
                    </div>
                    <div>
                        <span className="text-label-sm text-white/40">Problem #{problem.id}</span>
                        <h4 className="text-heading-3 text-white mt-1">{problem.title}</h4>
                    </div>
                </div>

                {/* Before → After Flow */}
                <div className="space-y-8">
                    {/* Before State */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <X className="w-4 h-4 text-red-400" />
                            <span className="text-ui-sm text-white/60 font-bold uppercase tracking-wider">Before</span>
                        </div>
                        <div className="space-y-3">
                            {problem.diagram.before.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20"
                                >
                                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                    <span className="text-body-sm text-white/70">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow Transition */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex items-center justify-center"
                    >
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span className="text-ui-xs text-white/60">Our Solution</span>
                            <ArrowRight className="w-4 h-4 text-white/40" />
                        </div>
                    </motion.div>

                    {/* After State */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-ui-sm text-white/60 font-bold uppercase tracking-wider">After</span>
                        </div>
                        <div className="space-y-3">
                            {problem.diagram.after.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
                                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
                                >
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                    <span className="text-body-sm text-white/90 font-medium">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Impact Metric */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="mt-8 pt-6 border-t border-white/5"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-caption text-white/40">Expected Impact</span>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-32 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: isActive ? "85%" : 0 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                                />
                            </div>
                            <span className="text-ui-sm text-emerald-400 font-bold">+85%</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export function ProblemSolution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeProblem, setActiveProblem] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const scrollProgress = -rect.top / (rect.height - window.innerHeight);

            // Determine which problem is active based on scroll position
            const problemIndex = Math.min(
                Math.max(Math.floor(scrollProgress * problems.length), 0),
                problems.length - 1
            );

            setActiveProblem(problemIndex + 1);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-20 bg-brand-bg relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 noise opacity-[0.02]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full" />

            <div className="max-w-section container-padding relative z-10">
                {/* Section Header - Redesigned */}
                <div className="mb-16 text-center relative">
                    {/* Background Accent */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-white/[0.03] to-transparent blur-[100px] -z-10" />

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                        <span className="text-label-sm text-red-400/90">Critical Gap Identified</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        <h2 className="text-display-2 text-white mb-4">
                            The Real Problem Isn't
                        </h2>
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <span className="text-display-2 text-white/30 line-through decoration-red-500/50">Marketing</span>
                            <span className="text-display-2 text-white/20">—</span>
                            <span className="text-display-2 relative">
                                <span className="absolute -inset-2 bg-white/10 blur-xl" />
                                <span className="relative text-gradient-white font-playfair italic">Distribution</span>
                            </span>
                        </div>
                    </motion.div>

                    {/* Subheadline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <p className="text-body-lg text-white/70 mb-2">
                            Most companies don't lack effort.
                        </p>
                        <p className="text-heading-2 text-white font-bold">
                            They lack a <span className="font-playfair italic">system</span>.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
                    >
                        {[
                            { value: "73%", label: "Have no GTM system" },
                            { value: "5x", label: "Wasted marketing spend" },
                            { value: "60%", label: "Leads never qualified" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                                    <div className="text-heading-1 text-white font-bold mb-2">{stat.value}</div>
                                    <div className="text-caption text-white/50">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Intro Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02]"
                    >
                        <AlertCircle size={16} className="text-white/40" />
                        <span className="text-ui text-white/60 font-medium">What we see repeatedly</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-ui-xs text-white/40">5 Critical Gaps</span>
                    </motion.div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Problems List */}
                    <div className="space-y-10">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`group cursor-pointer transition-all duration-500 ${activeProblem === problem.id ? "opacity-100" : "opacity-40 hover:opacity-70"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Number Badge */}
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center font-bold transition-all duration-500 ${activeProblem === problem.id
                                        ? "bg-white/10 border-white/20 text-white"
                                        : "bg-white/5 border-white/10 text-white/40"
                                        }`}>
                                        {problem.id}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <h3 className={`text-heading-2 mb-2 transition-colors duration-500 ${activeProblem === problem.id ? "text-white" : "text-white/60"
                                            }`}>
                                            {problem.title}
                                        </h3>
                                        <p className="text-body-sm text-white/50">
                                            {problem.description}
                                        </p>

                                        {/* Active Indicator */}
                                        {activeProblem === problem.id && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                className="h-[2px] bg-gradient-to-r from-white/40 to-transparent mt-4 rounded-full"
                                            />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Bottom Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="pt-12 border-t border-white/5"
                        >
                            <div className="flex flex-wrap gap-4 text-ui-xs text-white/30">
                                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                                    Disconnected Efforts
                                </span>
                                <span className="text-white/20">•</span>
                                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                                    Leaky Funnels
                                </span>
                                <span className="text-white/20">•</span>
                                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                                    Strategic Friction
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Sticky Workflow Diagrams */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {problems.map((problem) => (
                                <div
                                    key={problem.id}
                                    className={`absolute inset-0 transition-opacity duration-500 ${activeProblem === problem.id ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <WorkflowDiagram problem={problem} isActive={activeProblem === problem.id} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
