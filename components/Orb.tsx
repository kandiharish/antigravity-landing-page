"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface OrbProps {
    size?: number
    className?: string
    color?: string
    blur?: number
    delay?: number
    duration?: number
}

export function Orb({
    size = 300,
    className = "",
    color = "bg-gradient-to-tr from-white/10 to-transparent",
    blur = 60,
    delay = 0,
    duration = 15
}: OrbProps) {
    const shouldReduceMotion = useReducedMotion()

    if (shouldReduceMotion) {
        return (
            <div
                className={cn("absolute rounded-full opacity-60", color, className)}
                style={{
                    width: size,
                    height: size,
                    filter: `blur(${blur}px)`,
                }}
            />
        )
    }

    return (
        <motion.div
            className={cn("absolute rounded-full mix-blend-multiply pointer-events-none", color, className)}
            style={{
                width: size,
                height: size,
                filter: `blur(${blur}px)`,
            }}
            animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
        />
    )
}
