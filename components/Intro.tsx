"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Intro({ onIntroComplete }: { onIntroComplete: () => void }) {
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFinished(true)
            setTimeout(onIntroComplete, 500)
        }, 2000)

        return () => clearTimeout(timer)
    }, [onIntroComplete])

    return (
        <AnimatePresence>
            {!finished && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scale: 0.8, rotate: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 180],
                                borderRadius: ["20%", "50%", "20%"]
                            }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                            className="w-16 h-16 bg-indigo-600 shadow-xl"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-slate-500 font-mono text-sm tracking-widest uppercase"
                        >
                            Initializing Physics
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
