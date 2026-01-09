"use client"

import { useScroll, useTransform, motion, useSpring, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxLayerProps {
    children: React.ReactNode
    offset?: number
    className?: string
    speed?: number
}

export function ParallaxLayer({ children, offset = 50, className = "", speed = 1 }: ParallaxLayerProps) {
    const ref = useRef(null)
    const shouldReduceMotion = useReducedMotion()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Smooth out the scroll value
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const y = useTransform(smoothProgress, [0, 1], [offset * speed, -offset * speed])

    if (shouldReduceMotion) {
        return <div className={cn(className)}>{children}</div>
    }

    return (
        <motion.div ref={ref} style={{ y, willChange: "transform" }} className={cn(className)}>
            {children}
        </motion.div>
    )
}
