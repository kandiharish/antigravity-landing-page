"use client"

import { motion } from "framer-motion"

export function GridBackground() {
    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#f8fafc]">
            {/* Base Gradient - Soft Sky */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 opacity-80" />

            {/* Drifting Blobs */}
            {[
                { color: "bg-blue-300", size: "w-[500px] h-[500px]", initial: { x: -100, y: -100 }, animate: { x: [0, 50, 0], y: [0, -40, 0] }, duration: 20 },
                { color: "bg-purple-300", size: "w-[600px] h-[600px]", initial: { x: "100%", y: 0 }, animate: { x: ["0%", "-10%", "0%"], y: [0, 50, 0] }, duration: 25 },
                { color: "bg-green-200", size: "w-[400px] h-[400px]", initial: { x: 200, y: "100%" }, animate: { x: [0, -30, 0], y: [0, -60, 0] }, duration: 18 },
                { color: "bg-rose-200", size: "w-[300px] h-[300px]", initial: { x: "50%", y: "50%" }, animate: { scale: [1, 1.2, 1], rotate: [0, 45, 0] }, duration: 30 },
                { color: "bg-yellow-200", size: "w-[200px] h-[200px]", initial: { x: "20%", y: "80%" }, animate: { y: [0, -100, 0] }, duration: 15 },
            ].map((blob, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full mix-blend-multiply filter blur-[80px] opacity-40 ${blob.color} ${blob.size}`}
                    style={{ left: blob.initial.x, top: blob.initial.y }}
                    animate={blob.animate}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Subtle Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    )
}
