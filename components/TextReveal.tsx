"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, Variant, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
    variant?: "word" | "char" | "line"
    duration?: number
    stagger?: number
    direction?: 1 | -1
}

export function TextReveal({
    text,
    className = "",
    delay = 0,
    variant = "word",
    duration = 1.2,
    stagger = 0.08,
    direction = 1
}: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" })
    const controls = useAnimation()
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const words = variant === "char" ? text.split("") : text.split(" ")

    // Weightless easing curve: starts slow, accelerates gently, floats to stop
    const weightlessEase = [0.16, 1, 0.3, 1]

    const container: Record<string, Variant> = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: shouldReduceMotion ? { duration: 0.5 } : {
                staggerChildren: stagger,
                delayChildren: delay + (0.1 * i),
                staggerDirection: direction
            },
        }),
    }

    const child: Record<string, Variant> = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration,
                ease: weightlessEase,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
            transition: {
                duration: duration,
                ease: weightlessEase,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className={cn("flex flex-wrap gap-x-[0.25em] gap-y-1", className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="inline-block whitespace-nowrap will-change-transform">
                    {word === " " ? "\u00A0" : word}
                </motion.span>
            ))}
        </motion.div>
    )
}
