"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DiagramBlockProps {
    title: string;
    icon?: LucideIcon;
    color: "brand-pink" | "violet" | "emerald" | "amber" | "red";
    className?: string;
    delay?: number;
}

export function DiagramBlock({ title, icon: Icon, color, className, delay = 0 }: DiagramBlockProps) {
    const colorClasses = {
        "brand-pink": "border-brand-pink/30 text-brand-pink glow-pink",
        violet: "border-violet/30 text-violet glow-violet",
        emerald: "border-emerald/30 text-emerald glow-emerald",
        amber: "border-amber/30 text-amber glow-amber",
        red: "border-red/30 text-red",
    };

    const bgClasses = {
        "brand-pink": "bg-brand-pink/5",
        violet: "bg-violet/5",
        emerald: "bg-emerald/5",
        amber: "bg-amber/5",
        red: "bg-red/5",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className={cn(
                "relative flex flex-col items-center justify-center p-4 rounded-xl border glass min-w-[140px]",
                colorClasses[color],
                bgClasses[color],
                className
            )}
        >
            {Icon && <Icon size={20} className="mb-2 opacity-80" strokeWidth={1.5} />}
            <span className="text-sm font-medium tracking-wide uppercase">{title}</span>
        </motion.div>
    );
}

interface AnimatedArrowProps {
    direction?: "right" | "left" | "down" | "up";
    color?: "brand-pink" | "violet" | "emerald" | "amber";
    className?: string;
    delay?: number;
    length?: number;
}

export function AnimatedArrow({
    direction = "right",
    color = "brand-pink",
    className,
    delay = 0,
    length = 60
}: AnimatedArrowProps) {
    const colorHex = {
        "brand-pink": "#FFFFFF",
        violet: "#D4D4D8",
        emerald: "#A1A1AA",
        amber: "#71717A",
    };


    const isVertical = direction === "up" || direction === "down";

    return (
        <div className={cn("flex items-center justify-center overflow-visible", className)}>
            <svg
                width={isVertical ? 20 : length}
                height={isVertical ? length : 20}
                className="overflow-visible"
            >
                <motion.path
                    d={
                        direction === "right" ? `M 0 10 L ${length} 10` :
                            direction === "left" ? `M ${length} 10 L 0 10` :
                                direction === "down" ? `M 10 0 L 10 ${length}` :
                                    `M 10 ${length} L 10 0`
                    }
                    fill="transparent"
                    stroke={colorHex[color]}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                />
                <motion.circle
                    r="2.5"
                    fill={colorHex[color]}
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay
                    }}
                    style={{
                        offsetPath: direction === "right" ? `path('M 0 10 L ${length} 10')` :
                            direction === "left" ? `path('M ${length} 10 L 0 10')` :
                                direction === "down" ? `path('M 10 0 L 10 ${length}')` :
                                    `path('M 10 ${length} L 10 0')`
                    }}
                />
            </svg>
        </div>
    );
}
