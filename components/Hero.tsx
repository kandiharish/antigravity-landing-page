"use client"

import { motion } from "framer-motion"
import { Rocket } from "lucide-react"
import { TextReveal } from "./TextReveal"
import { Orb } from "./Orb"
import { ParallaxLayer } from "./ParallaxLayer"

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 bg-gradient-to-b from-orange-50 via-white to-blue-50">

            {/* Background: Playful Bubbles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <ParallaxLayer speed={0.2} className="absolute top-[-10%] left-[-5%]">
                    <Orb size={600} color="bg-yellow-200" blur={80} duration={15} />
                </ParallaxLayer>

                <ParallaxLayer speed={0.4} className="absolute top-[20%] right-[-10%]">
                    <Orb size={500} color="bg-pink-300" blur={60} duration={18} delay={1} />
                </ParallaxLayer>

                <ParallaxLayer speed={0.1} className="absolute bottom-[-20%] left-[20%]">
                    <Orb size={700} color="bg-blue-300" blur={100} duration={20} delay={2} />
                </ParallaxLayer>
            </div>

            <div className="z-10 relative flex flex-col items-center max-w-5xl mx-auto text-center perspective-1000">
                <motion.div
                    initial={{ opacity: 0, y: 10, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center px-6 py-2 rounded-full border-2 border-indigo-100 bg-white text-sm font-bold tracking-wide uppercase text-indigo-500 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transform hover:scale-105 transition-transform cursor-cell">
                        Gravity disabled <Rocket className="w-4 h-4 mx-2" /> Code at escape velocity
                    </span>
                </motion.div>

                <h1 className="sr-only">Antigravity</h1>

                <div className="flex flex-row items-baseline justify-center gap-0.5 mb-4 md:mb-8">
                    <div className="relative z-20">
                        <TextReveal
                            text="Anti"
                            className="text-6xl md:text-[9rem] font-black tracking-tighter text-slate-900 drop-shadow-lg"
                            delay={0.1}
                            duration={0.8}
                        />
                    </div>

                    <motion.div
                        className="relative z-10"
                        animate={{
                            y: [-20, 10, -20],
                            rotate: [-4, 4, -4],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Glow Effect behind Gravity */}
                        <div className="absolute inset-0 blur-3xl bg-indigo-400/30 scale-150 animate-pulse" />

                        <span className="block text-6xl md:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 pb-4 filter drop-shadow-2xl">
                            Gravity
                        </span>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
                        className="group px-8 py-4 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:scale-105 cursor-default"
                    >
                        <TextReveal
                            text="Gravity slows things down."
                            variant="char"
                            delay={1}
                            duration={0.8}
                            direction={-1}
                            className="text-xl md:text-2xl text-slate-600 font-medium gap-x-[0.5px] leading-none"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 100 }}
                        className="group px-8 py-4 rounded-full bg-slate-900 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 cursor-default relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <TextReveal
                            text="Your IDE shouldn’t."
                            variant="char"
                            delay={2.2}
                            duration={0.8}
                            direction={1}
                            className="relative z-10 text-xl md:text-2xl font-bold gap-x-[0.5px] leading-none"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
