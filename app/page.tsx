"use client"

import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Footer } from "@/components/Footer"
import { TextReveal } from "@/components/TextReveal"
import { ParallaxLayer } from "@/components/ParallaxLayer"
import { Orb } from "@/components/Orb"
import { Navbar } from "@/components/Navbar"
import { GridBackground } from "@/components/GridBackground"
import { TypingCode } from "@/components/TypingCode"
import { motion } from "framer-motion"

export default function Home() {
    return (
        <main className="min-h-screen bg-orange-50/50 text-slate-800 overflow-hidden relative selection:bg-purple-200">
            <GridBackground />
            <Navbar />
            <Hero />

            {/* Section 1: The "Mistake" - Light Blue Theme */}
            <Section className="z-10 relative py-32 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1 flex justify-center">
                        <TypingCode />
                    </div>

                    <div className="order-1 md:order-2">
                        <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wide mb-6">DevLog #342</span>
                        <TextReveal
                            text="It's not a bug. It's a feature."
                            className="text-4xl md:text-6xl font-black leading-tight mb-6 text-slate-900"
                            duration={0.8}
                        />
                        <TextReveal
                            text="We tried to implement sticky footers, but the glue wasn't strong enough. Now the whole site just kind of drifts around. Management says it's 'innovative'."
                            className="text-xl text-slate-500 font-medium leading-relaxed mb-8"
                            delay={0.2}
                            duration={0.8}
                            stagger={0.01}
                        />
                        <div className="p-4 bg-slate-900 rounded-xl text-green-400 font-mono text-sm shadow-xl transform rotate-1 hover:rotate-0 transition-transform cursor-code">
                            <p><span className="text-purple-400">const</span> gravity = <span className="text-yellow-400">undefined</span>;</p>
                            <p>user.float(<span className="text-blue-400">true</span>);</p>
                            <p className="text-slate-500">// TODO: fix this later</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 2: Features - Fun Cards */}
            <Section className="z-10 relative py-32 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <TextReveal
                            text="Serious tech. Playful physics."
                            className="text-4xl md:text-5xl font-black mb-6 text-slate-900"
                        />
                        <p className="text-xl text-slate-600">Built with real engineering discipline—so everything else can feel effortlessly light.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { emoji: "🚀", title: "Gravity-Aware Layouts", desc: "We calculated the mass of every component. Turns out, lighter UIs move faster.", bg: "bg-orange-100", border: "border-orange-200" },
                            { emoji: "🧠", title: "Intelligent Motion", desc: "Animations that know when to move—and when to politely stay out of the way.", bg: "bg-purple-100", border: "border-purple-200" },
                            { emoji: "🌈", title: "Color with Purpose", desc: "Every gradient exists for a reason. Mostly joy. Sometimes clarity.", bg: "bg-green-100", border: "border-green-200" },
                            { emoji: "🪐", title: "Zero-Resistance UX", desc: "Less drag. Fewer interruptions. Your ideas stay in orbit.", bg: "bg-blue-100", border: "border-blue-200" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, rotate: [-1, 1, 0] }}
                                className={`p-6 rounded-3xl border-2 ${item.bg} ${item.border} shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
                            >
                                <div className="text-4xl mb-4">{item.emoji}</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
                                <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Micro Humor */}
                    <ParallaxLayer speed={0.1} className="absolute left-[5%] top-[20%] opacity-60 pointer-events-none hidden lg:block">
                        <span className="text-slate-400 font-mono text-xs rotate-[-6deg] block">"Physics may vary"</span>
                    </ParallaxLayer>
                    <ParallaxLayer speed={0.15} className="absolute right-[10%] bottom-[30%] opacity-60 pointer-events-none hidden lg:block">
                        <span className="text-slate-400 font-mono text-xs rotate-[12deg] block">"Momentum optimized"</span>
                    </ParallaxLayer>
                </div>


            </Section>

            {/* Section 2.5: Video Showcase */}
            <Section className="z-10 relative py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-4">Gravity Defying Demos</h2>
                        <p className="text-slate-600 text-lg">See the code float in real-time.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Video 1 */}
                        <div className="relative group">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <video
                                    src="/videos/video_1.mp4"
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay pointer-events-none" />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-bold text-slate-800">Zero-G Environment</h3>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="relative group">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <video
                                    src="/videos/video_2.mp4"
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none" />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-bold text-slate-800">Particle Acceleration</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 3: Call to Action */}
            <Section className="z-10 relative py-32 bg-slate-900 text-white overflow-hidden rounded-t-[3rem] -mt-12">
                <div className="absolute inset-0 z-0">
                    <ParallaxLayer speed={0.2} className="absolute right-[-10%] top-[-20%]">
                        <Orb size={600} color="bg-purple-500" blur={100} duration={10} />
                    </ParallaxLayer>
                    <ParallaxLayer speed={0.3} className="absolute left-[-10%] bottom-[-20%]">
                        <Orb size={500} color="bg-blue-500" blur={80} duration={12} />
                    </ParallaxLayer>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-8">Ready to leave Earth?</h2>
                    <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto">
                        Warning: Prolonged exposure may cause extreme relaxation and a desire to refactor your codebase.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors shadow-lg hover:scale-105 active:scale-95 duration-200">
                            Get Started
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-white rounded-full font-bold text-lg hover:bg-purple-500/20 transition-colors">
                            Read the Docs (Jk, no docs)
                        </button>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    )
}
